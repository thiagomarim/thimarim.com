import { AboutProps } from '@/data/about'
import { getRelativeTimeString } from '@/utils/get-relative-time'

interface CareerProps {
  about: AboutProps[]
}

export default function Career({ about }: CareerProps) {
  const relativeTime = getRelativeTimeString(
    new Date(about.map((item) => item.startDate, 'pt-BR').join('')),
  )

  return (
    <section className="mt-8">
      <h1 className="text-2xl text-title font-semibold">Carreira</h1>
      <div className="grid grid-cols-2">
        {about.map((item) => (
          <div key={item.company} className="flex flex-col gap-2 mt-5">
            <h3 className="text-title">{item.name}</h3>
            <p className="flex items-center gap-2 text-paragraph">
              <a href="" className="underline underline-offset-4 text-title">
                @{item.company}
              </a>
              <span> • </span>
              <span>{item.location}</span>
            </p>
            <p className="text-paragraph">
              <span>{item.date}</span>
              <span> - </span>
              <span>{item.location}</span>
              <span> • </span>
              <span>{relativeTime}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
