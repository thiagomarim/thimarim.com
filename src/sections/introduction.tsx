import AnimatedSection from '@/components/common/animated-section'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

import { useTranslations } from 'next-intl'

export default function Introduction() {
  const t = useTranslations('pages.home')

  return (
    <AnimatedSection className="flex max-w-[1000px] flex-col justify-center gap-5">
      <h1 className="text-[32px] font-bold leading-[46px] md:text-[64px] md:leading-[72px]">
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
