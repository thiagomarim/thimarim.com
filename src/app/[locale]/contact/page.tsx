import ContactSection from '@/sections/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Thiago Marim',
  description:
    'Entre em contato com Thiago Marim, desenvolvedor front-end especializado. Disponível para projetos, colaborações e oportunidades profissionais.',
  openGraph: {
    title: 'Contact | Thiago Marim',
    description:
      'Entre em contato com Thiago Marim, desenvolvedor front-end especializado. Disponível para projetos, colaborações e oportunidades profissionais.',
    type: 'website',
    url: 'https://thiagomarim.com/contact',
  },
  keywords: [
    'contato',
    'desenvolvedor front-end',
    'Thiago Marim',
    'freelance',
    'projetos web',
    'colaboração',
    'oportunidades profissionais',
    'front-end',
    'web development',
    'email',
  ],
}

export default function Contact() {
  return <ContactSection />
}
