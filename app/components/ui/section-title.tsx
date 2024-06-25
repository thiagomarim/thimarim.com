import { cn } from "@/app/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4">
      <span
        className={cn(
          "flex text-[#e3e4e6] items-center gap-2 text-sm font-medium tracking-[-0.18px] before:block before:content-[''] before:w-[14px] before:h-2 before:rounded-full before:bg-emerald-500",
          subtitle === undefined && "before:w-[0px] before:h-0"
        )}
      >
        {subtitle}
      </span>
      <h2 className="text-4xl font-medium tracking-[-0.47px]">{title}</h2>
    </div>
  );
}
