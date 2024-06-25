import { cn } from "@/app/lib/utils";

export function Badge({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "small";
}) {
  return (
    <div className="px-2 py-[2px] rounded-lg bg-[#2F2F2F] flex items-center">
      <span
        className={cn(
          "text-sm text-[#FFFFFF]",
          size === "small" ? "text-xs" : "text-sm"
        )}
      >
        {children}
      </span>
    </div>
  );
}
