import CardCareer from '@/components/pages/about/career-card'
import TitleSection from '@/components/title-section'
import { CareerListProps } from '@/data/career'
import { useTranslations } from 'next-intl'

interface CareerProps {
  careerInfo: CareerListProps[]
}

export default function Career({ careerInfo }: CareerProps) {
  const t = useTranslations('pages.about')

  return (
    <section>
      <TitleSection title={t('career.title')} size="sm" />
      <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {careerInfo.map((career) => (
          <CardCareer career={career} key={career.company} />
        ))}
      </div>
    </section>
  )
}
