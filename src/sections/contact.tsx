import AnimatedSection from '@/components/common/animated-section'
import ContactForm from '@/components/common/contact-form'
import TitleSection from '@/components/layout/title-section'
import { useTranslations } from 'next-intl'

export default function ContactSection() {
  const t = useTranslations('pages.contact')

  return (
    <AnimatedSection>
      <TitleSection title={t('title')} sizes="lg" subtitle={t('description')} />
      <div className="mt-12">
        <ContactForm />
      </div>
    </AnimatedSection>
  )
}
