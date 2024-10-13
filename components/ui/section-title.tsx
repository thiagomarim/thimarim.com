import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  titleSize?: 'sm' | 'md' | 'lg'
  subtitle?: string
}

export function SectionTitle({
  title,
  subtitle,
  titleSize,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1
        className={cn(
          'font-bold',
          titleSize === 'sm' && 'text-4xl',
          titleSize === 'md' && 'text-5xl',
          titleSize === 'lg' && 'text-[64px] leading-[4.2rem]',
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-base text-paragraph leading-8">{subtitle}</p>
      )}
    </div>
  )
}
