import { Link } from '@/i18n/routing'
import { Button } from './ui/button'
import { Linkedin, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import TitleSection from './title-section'

export default function LetsConnect() {
  const t = useTranslations('pages.letsConnect')

  return (
    <section>
      <TitleSection
        title={t('title')}
        size="sm"
        subtitle={t('description')}
        subtitleClassName="-mt-1 text-[15px]"
      />
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Button className="text-black">
          <Link href={'/contact'} className="flex items-center gap-2">
            <Mail size={16} />
            {t('buttonText')}
          </Link>
        </Button>
        <Button className="text-black">
          <a
            href={'https://www.linkedin.com/in/thiago-marim/'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin width={16} height={16} />
            {t('linkedinButtonText')}
          </a>
        </Button>
      </div>
    </section>
  )
}
