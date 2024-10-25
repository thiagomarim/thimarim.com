import AnimatedSection from '@/components/animated-section'
import ContactForm from '@/components/pages/contact/contact-form'
import TitleSection from '@/components/title-section'
import { useTranslations } from 'next-intl'

export default function ContactSection() {
  const t = useTranslations('pages.contact')

  return (
    <AnimatedSection>
      <TitleSection title={t('title')} size="lg" subtitle={t('description')} />
      <div className="mt-12">
        <ContactForm />
      </div>
    </AnimatedSection>
  )
}
