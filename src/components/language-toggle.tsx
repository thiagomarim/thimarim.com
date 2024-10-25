'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { Button } from './ui/button'
import { Link, usePathname } from '@/i18n/routing'
import Image from 'next/image'
import brazilIcon from '../../public/flags/brazil-flag-icon.svg'
import euaIcon from '../../public/flags/united-states-flag-icon.svg'

export default function LanguageToggle() {
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="bg-background hover:bg-terceary hover:transition-colors"
      >
        <Button
          variant={'outline'}
          size={'sm'}
          className="h-[34px] border-border bg-background px-2"
        >
          <Globe size={20} />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem>
          <Link href={pathname} locale="en" className="flex items-center gap-2">
            <Image src={euaIcon} alt="Brazil" width={16} height={16} />
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={pathname}
            locale="pt-BR"
            className="flex items-center gap-2"
          >
            <Image src={brazilIcon} alt="Brazil" width={16} height={16} />
            Português
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
