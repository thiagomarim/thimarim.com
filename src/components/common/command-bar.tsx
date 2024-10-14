'use client'

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar'
import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useRef,
} from 'react'
import { cn } from '../../lib/utils'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useRouter } from 'next/navigation'

import emailIcon from '@/public/icons/email.json'
import copyLinkIcon from '@/public/icons/copy-link.json'
import homeIcon from '@/public/icons/home.json'
import aboutIcon from '@/public/icons/about.json'
import projectsIcon from '@/public/icons/projects.json'
import figIcon from '@/public/icons/fig.json'

export default function CommandBar({ children }: HTMLAttributes<HTMLElement>) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  const iconSize = { width: 24, height: 24 }

  const router = useRouter()

  const emailRef = useRef<LottieRefCurrentProps | null>(null)
  const copyLinkRef = useRef<LottieRefCurrentProps | null>(null)
  const homeRef = useRef<LottieRefCurrentProps | null>(null)
  const aboutRef = useRef<LottieRefCurrentProps | null>(null)
  const projectsRef = useRef<LottieRefCurrentProps | null>(null)
  const stackRef = useRef<LottieRefCurrentProps | null>(null)

  const actions = [
    {
      id: 'copy',
      name: 'Copiar Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'Geral',
      perform: copyLink,
      icon: (
        <Lottie
          lottieRef={copyLinkRef}
          style={iconSize}
          animationData={copyLinkIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'email',
      name: 'Enviar Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'Geral',
      perform: () => router.push('/contact', { scroll: false }),
      icon: (
        <Lottie
          lottieRef={emailRef}
          style={iconSize}
          animationData={emailIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Navegação',
      perform: () => router.push('/'),
      icon: (
        <Lottie
          lottieRef={homeRef}
          style={iconSize}
          animationData={homeIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Navegação',
      perform: () => router.push('/about'),
      icon: (
        <Lottie
          lottieRef={aboutRef}
          style={iconSize}
          animationData={aboutIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Navegação',
      perform: () => router.push('/projects'),
      icon: (
        <Lottie
          lottieRef={projectsRef}
          style={iconSize}
          animationData={projectsIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
    {
      id: 'stack',
      name: 'Stack',
      shortcut: ['g', 's'],
      keywords: 'go-stack',
      section: 'Navegação',
      perform: () => router.push('/stack'),
      icon: (
        <Lottie
          lottieRef={stackRef}
          style={iconSize}
          animationData={figIcon}
          loop={false}
          autoplay={false}
        />
      ),
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="backgdrop-blur-sm fixed inset-0 box-border flex w-full items-start justify-center bg-black/60 pb-4 pr-4 pt-[14vh]">
          <KBarAnimator className="bg-terceary text-primary border-terceary w-full max-w-[600px] overflow-hidden rounded-lg rounded-t-lg border-[1px]">
            <KBarSearch
              placeholder="Escreva um comando or pesquise…"
              className="text-primary placeholder:text-secondary border-terceary m-0 box-border w-full border-b-[1px] bg-background px-4 py-3 outline-none"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="bg-background px-4 py-2 text-[10px] uppercase">
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

interface IconProps {
  lottieRef: React.RefObject<LottieRefCurrentProps>
}

interface ActionImpl {
  icon: ReactNode
  name: string
  shortcut?: string[]
}

type Ref = React.Ref<HTMLDivElement>

interface ResultItemProps {
  action: ActionImpl
  active: boolean
}

const ResultItem = forwardRef<HTMLDivElement, ResultItemProps>(
  ({ action, active }, ref: Ref) => {
    const isLottieIcon =
      React.isValidElement(action.icon) &&
      'lottieRef' in action.icon.props &&
      action.icon.props.lottieRef?.current

    if (isLottieIcon) {
      const lottieRef = (action.icon as ReactElement<IconProps>).props.lottieRef
      if (active) {
        lottieRef.current?.play()
      } else {
        lottieRef.current?.stop()
      }
    }
    return (
      <div
        ref={ref}
        className={cn(
          'text-paragraph flex cursor-pointer items-center justify-between bg-background px-4 py-3',
          active ? 'text-primary' : '',
        )}
        onMouseEnter={() =>
          isLottieIcon &&
          (
            action.icon as ReactElement<IconProps>
          ).props.lottieRef.current?.play()
        }
        onMouseLeave={() =>
          isLottieIcon &&
          (
            action.icon as ReactElement<IconProps>
          ).props.lottieRef.current?.stop()
        }
      >
        <div className="flex items-center gap-2">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <span>{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="grid grid-flow-col gap-1" aria-hidden>
            {action.shortcut.map((shortcut) => (
              <kbd
                className="bg-terceary text-paragraph rounded px-2 py-1 uppercase"
                key={shortcut}
              >
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  },
)

ResultItem.displayName = 'ResultItem'
