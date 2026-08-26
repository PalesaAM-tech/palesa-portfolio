import React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  message?: string
}

const Email = ({ name, email, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New portfolio message from {name ?? 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New message from your portfolio</Heading>
        <Text style={text}>
          Someone reached out through the contact form on your portfolio site.
        </Text>
        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name ?? '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email ?? '—'}</Text>
          <Text style={label}>Message</Text>
          <Text style={value}>{message ?? '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          You can reply directly to this email to respond to {name ?? 'the sender'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email as unknown as TemplateEntry['component'],
  subject: 'New message from your portfolio',
  displayName: 'Contact form message',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hi Palesa, I came across your portfolio and would love to chat about an opportunity.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 25px', maxWidth: '560px' }
const heading = { color: '#1e1b4b', fontSize: '22px', margin: '0 0 8px' }
const text = { color: '#4b5563', fontSize: '14px', lineHeight: '22px' }
const card = {
  backgroundColor: '#eef2ff',
  borderRadius: '12px',
  padding: '16px 20px',
  margin: '16px 0',
}
const label = {
  color: '#4f46e5',
  fontSize: '11px',
  fontWeight: 700 as const,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '12px 0 2px',
}
const value = { color: '#111827', fontSize: '14px', lineHeight: '22px', margin: '0 0 4px', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { color: '#9ca3af', fontSize: '12px', lineHeight: '18px' }
