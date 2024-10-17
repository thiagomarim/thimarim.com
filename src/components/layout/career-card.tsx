import { CareerListProps } from '@/data/career'
import { getRelativeTimeString } from '../../../utils/get-relative-time'

interface CareerCardProps {
  career: CareerListProps
}

export default function CareerCard({ career }: CareerCardProps) {
  const relativeTime = getRelativeTimeString(
    new Date(career.startDate),
    'pt-BR',
  ).replace('há ', '')

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-semibold text-primary">
        {career.jobTitle}
      </span>
      <div className="flex items-center gap-2 text-secondary">
        <span>
          <a
            href={career.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-primary/80 hover:transition-colors"
          >
            {career.company}
          </a>
        </span>
        <span> • </span>
        <span>{career.location}</span>
      </div>
      <div className="flex items-center gap-2 text-secondary">
        <span>{career.monthYear}</span>
        <span> - </span>
        <span> {career.endDate} </span>
        <span> • </span>
        <span>{relativeTime}</span>
      </div>
    </div>
  )
}
