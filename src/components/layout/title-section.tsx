interface TitleSectionProps {
  title: string
  subtitle?: string
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div className="mt-14 flex flex-col gap-6">
      <h1 className="text-[64px] font-bold leading-[72px]">{title}</h1>
      <p className="text-secondary text-base">{subtitle}</p>
    </div>
  )
}
