import CardCareer from '@/components/layout/career-card'
import TitleSection from '@/components/layout/title-section'
import { CareerListProps } from '@/data/career'

interface CareerProps {
  careerInfo: CareerListProps[]
}

export default function Career({ careerInfo }: CareerProps) {
  return (
    <section>
      <TitleSection title="Carreira" sizes="sm" />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {careerInfo.map((career) => (
          <CardCareer career={career} key={career.jobTitle} />
        ))}
      </div>
    </section>
  )
}
