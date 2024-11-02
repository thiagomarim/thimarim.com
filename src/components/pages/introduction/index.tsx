import AnimatedSection from '@/components/animated-section'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

import { useTranslations } from 'next-intl'

export default function Introduction() {
  const t = useTranslations('pages.home')

  return (
    <AnimatedSection className="flex max-w-[720px] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-center text-4xl font-[575] tracking-tight sm:text-6xl">
        {t('introduction.title')}
      </h1>
      <p className="text-base text-secondary">
        {t('introduction.description')}
      </p>
      <div className="flex items-center gap-6">
        <Link href="/about">
          <Button className="w-min text-black">{t('introduction.link')}</Button>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/thiagomarim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 hover:transition-colors"
          >
            <GitHubLogoIcon width={22} height={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-marim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 hover:transition-colors"
          >
            <LinkedInLogoIcon width={22} height={22} />
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
