import { Command } from 'lucide-react'
import { useKBar } from 'kbar'

export function CommandButton() {
  const { query } = useKBar()

  return (
    <button
      className="h-[34px] cursor-pointer rounded-lg border border-border px-2 text-primary hover:bg-terceary hover:transition-colors"
      type="button"
      aria-label="Command"
      onClick={query.toggle}
    >
      <kbd className="ri-command-line text-2xl tracking-[32px]">
        <Command size={20} />
      </kbd>
    </button>
  )
}
