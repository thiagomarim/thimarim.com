import { CareerListProps } from '@/data/career'
import { getRelativeTimeString } from '../../utils/get-relative-time'
import { getTranslations } from 'next-intl/server'

interface CareerCardProps {
  career: CareerListProps
}

export default async function CareerCard({ career }: CareerCardProps) {
  const relativeTime = getRelativeTimeString(
    new Date(career.startDate),
    `en`,
  ).replace('há ', '')

  const role = (await getTranslations('config.career'))(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `${career.id}.role` as any,
  )

  const location = (await getTranslations('config.career'))(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `${career.id}.location` as any,
  )

  const monthYear = (await getTranslations('config.career'))(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `${career.id}.monthYear` as any,
  )

  const endDate = (await getTranslations('config.career'))(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    `${career.id}.endDate` as any,
  )

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-semibold text-primary">{role}</span>
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
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2 text-secondary">
        <span>{monthYear}</span>
        <span> - </span>
        <span> {endDate} </span>
        <span> • </span>
        <span>{relativeTime}</span>
      </div>
    </div>
  )
}
