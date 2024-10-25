import TitleSection from '@/components/title-section'
import { useTranslations } from 'next-intl'

export default function AboutMe() {
  const t = useTranslations('pages.about')

  return (
    <section className="items-start">
      <TitleSection title={t('aboutMe.title')} size="lg" />
      <div className="mt-8">
        <div className="flex max-w-[1000px] flex-col gap-8 text-secondary">
          <p>{t('aboutMe.firstParagraph')}</p>
          <p>{t('aboutMe.secondParagraph')}</p>
          <p>{t('aboutMe.thirdParagraph')}</p>
        </div>
      </div>
    </section>
  )
}
