import { cn } from '@/lib/utils'

interface TitleSectionProps {
  title: string
  subtitle?: string
  sizes: 'sm' | 'md' | 'lg'
}

export default function TitleSection({
  title,
  subtitle,
  sizes,
}: TitleSectionProps) {
  return (
    <div className="mt-8 flex max-w-[1000px] flex-col gap-6 sm:mt-14">
      <h1
        className={cn(
          '',
          sizes === 'sm' && 'text-2xl font-semibold',
          sizes === 'md' && 'text-3xl font-semibold',
          sizes === 'lg' &&
            'text-[32px] font-bold leading-[2rem] sm:text-[64px] sm:leading-[72px]',
        )}
      >
        {title}
      </h1>
      {subtitle && <p className="text-base text-secondary">{subtitle}</p>}
    </div>
  )
}
