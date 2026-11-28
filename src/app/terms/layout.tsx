import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service · TaskPulse',
  description: 'Terms and conditions governing your use of TaskPulse.',
  alternates: { canonical: 'https://taskpulse.app/terms' },
}

export default function TermsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
