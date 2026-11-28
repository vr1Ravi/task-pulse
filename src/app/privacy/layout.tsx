import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy · TaskPulse',
  description: 'How TaskPulse collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://taskpulse.app/privacy' },
}

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
