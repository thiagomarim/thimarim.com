import { cn } from '@/lib/utils'

interface TitleSectionProps {
  title: string
  subtitle?: string
  size?: 'sm' | 'md' | 'lg'
  titleClassName?: string
  subtitleClassName?: string
  containerClassName?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeClasses = {
  sm: 'text-xl sm:text-2xl font-semibold',
  md: 'text-2xl sm:text-3xl font-semibold',
  lg: 'text-3xl sm:text-5xl lg:text-6xl font-semibold font-gradient',
}

export default function TitleSection({
  title,
  subtitle,
  size = 'md',
  titleClassName,
  subtitleClassName,
  containerClassName,
  as: Component = 'h1',
}: TitleSectionProps) {
  return (
    <div
      className={cn(
        'mt-8 flex max-w-[1000px] flex-col gap-4 sm:mt-14',
        containerClassName,
      )}
    >
      <Component
        className={cn(sizeClasses[size], 'leading-tight', titleClassName)}
      >
        {title}
      </Component>
      {subtitle && (
        <p className={cn('text-base text-secondary', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
