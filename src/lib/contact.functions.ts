import { createServerFn } from '@tanstack/react-start'
import { submitContactMessage } from './contact.server'

export const submitContact = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }) => submitContactMessage(data))
