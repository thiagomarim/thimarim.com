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
    <div className="mt-14 flex flex-col gap-6">
      <h1
        className={cn(
          '',
          sizes === 'sm' && 'text-2xl font-semibold',
          sizes === 'md' && 'text-3xl font-semibold',
          sizes === 'lg' && 'text-[64px] font-bold leading-[72px]',
        )}
      >
        {title}
      </h1>
      <p className="text-base text-secondary">{subtitle}</p>
    </div>
  )
}
