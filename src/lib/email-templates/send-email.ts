import { createElement } from 'react'
import { render } from '@react-email/render'
import { sendLovableEmail, EmailAPIError } from '@lovable.dev/email-js'
import { TEMPLATES, type TemplateName } from './registry'

// Set this to your verified sender domain once email setup is complete
// (e.g. "notify.yourdomain.com"). Sending is skipped until then.
export const SENDER_DOMAIN = ''
export const FROM_EMAIL = `Portfolio <notifications@${SENDER_DOMAIN || 'localhost'}>`

export interface SendTemplateOptions {
  templateData?: Record<string, unknown>
  replyTo?: string
  idempotencyKey?: string
}

export type SendTemplateResult =
  | { sent: true }
  | { sent: false; reason: 'sender_domain_not_configured' | 'recipient_suppressed' | 'send_failed' }

export async function sendTemplateEmail(
  name: TemplateName,
  to: string,
  options: SendTemplateOptions = {},
): Promise<SendTemplateResult> {
  if (!SENDER_DOMAIN) {
    console.warn('[email] SENDER_DOMAIN not configured; skipping send of', name)
    return { sent: false, reason: 'sender_domain_not_configured' }
  }

  const entry = TEMPLATES[name]
  const element = createElement(entry.component, options.templateData ?? {})
  const html = await render(element)
  const text = await render(element, { plainText: true })

  try {
    await sendLovableEmail(
      {
        to,
        from: FROM_EMAIL,
        sender_domain: SENDER_DOMAIN,
        subject: entry.subject,
        html,
        text,
        purpose: 'transactional',
        reply_to: options.replyTo,
        label: name,
        idempotency_key: options.idempotencyKey,
      },
      { apiKey: process.env['LOVABLE_API_KEY']! },
    )
    return { sent: true }
  } catch (error) {
    if (error instanceof EmailAPIError) {
      console.error('[email] send failed:', error.code ?? error.status, error.message)
    } else {
      console.error('[email] send failed:', error)
    }
    return { sent: false, reason: 'send_failed' }
  }
}
