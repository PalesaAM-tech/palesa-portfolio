import type { ComponentType } from 'react'
import { template as contactMessage } from './contact-message'

export interface TemplateEntry {
  component: ComponentType<Record<string, unknown>>
  subject: string
  displayName?: string
  previewData?: Record<string, unknown>
  to?: string
}

export const TEMPLATES = {
  'contact-message': contactMessage,
} satisfies Record<string, TemplateEntry>

export type TemplateName = keyof typeof TEMPLATES
