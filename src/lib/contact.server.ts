import { z } from 'zod'
import { sendTemplateEmail } from './email-templates/send-email'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be under 100 characters'),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be under 2000 characters'),
  // Honeypot — must stay empty; bots fill it in.
  company: z.string().max(0).optional().or(z.literal('')),
})

const OWNER_EMAIL = 'palesa.amy.mokoena@gmail.com'

export async function submitContactMessage(raw: unknown) {
  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    return { ok: false as const, error: first?.message ?? 'Please check your input.' }
  }

  const data = parsed.data

  const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
  const { data: row, error } = await supabaseAdmin
    .from('contact_messages')
    .insert({ name: data.name, email: data.email, message: data.message })
    .select('id')
    .single()

  if (error) {
    console.error('[contact] failed to save message:', error.message)
    return { ok: false as const, error: 'Something went wrong saving your message. Please try again.' }
  }

  const result = await sendTemplateEmail('contact-message', OWNER_EMAIL, {
    templateData: { name: data.name, email: data.email, message: data.message },
    replyTo: data.email,
    idempotencyKey: `contact-message-${row.id}`,
  })

  return { ok: true as const, emailed: result.sent }
}
