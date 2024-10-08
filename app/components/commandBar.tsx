"use client";

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useRef,
} from "react";
import { cn } from "../lib/utils";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRouter } from "next/navigation";

import emailIcon from "@/public/icons/email.json";
import copyLinkIcon from "@/public/icons/copy-link.json";
import homeIcon from "@/public/icons/home.json";
import aboutIcon from "@/public/icons/about.json";
import projectsIcon from "@/public/icons/projects.json";
import figIcon from "@/public/icons/fig.json";

interface CommandBarProps extends HTMLAttributes<HTMLElement> {}

export default function CommandBar({ children }: CommandBarProps) {
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const iconSize = { width: 24, height: 24 };

  const router = useRouter();

  const emailRef = useRef<LottieRefCurrentProps | null>(null);
  const copyLinkRef = useRef<LottieRefCurrentProps | null>(null);
  const homeRef = useRef<LottieRefCurrentProps | null>(null);
  const aboutRef = useRef<LottieRefCurrentProps | null>(null);
  const projectsRef = useRef<LottieRefCurrentProps | null>(null);
  const stackRef = useRef<LottieRefCurrentProps | null>(null);

  const actions = [
    {
      id: "copy",
      name: "Copiar Link",
      shortcut: ["l"],
      keywords: "copy-link",
      section: "Geral",
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
      id: "email",
      name: "Enviar Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "Geral",
      perform: () => router.push("/contact", { scroll: false }),
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
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Ir para",
      perform: () => router.push("/"),
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
      id: "about",
      name: "About",
      shortcut: ["g", "a"],
      keywords: "go-about",
      section: "Ir para",
      perform: () => router.push("/about"),
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
      id: "projects",
      name: "Projects",
      shortcut: ["g", "p"],
      keywords: "go-projects",
      section: "Ir para",
      perform: () => router.push("/projects"),
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
      id: "stack",
      name: "Stack",
      shortcut: ["g", "s"],
      keywords: "go-stack",
      section: "Ir para",
      perform: () => router.push("/stack"),
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
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 pt-[14vh] pr-4 pb-4 box-border bg-black/60 backgdrop-blur-sm">
          <KBarAnimator className="bg-buttonSecondary max-w-[600px] w-full text-title rounded-lg overflow-hidden border-[1px] border-buttonSecondary rounded-t-lg">
            <KBarSearch
              placeholder="Escreva um comando or pesquise…"
              className="py-3 px-4 w-full box-border outline-none m-0 bg-background text-title placeholder:text-paragraph border-b-[1px] border-buttonSecondary"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="py-2 px-4 text-[10px] uppercase bg-background">
            {item}
          </div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

interface IconProps {
  lottieRef: React.RefObject<LottieRefCurrentProps>;
}

interface ActionImpl {
  icon: ReactNode;
  name: string;
  shortcut?: string[];
}

type Ref = React.Ref<HTMLDivElement>;

interface ResultItemProps {
  action: ActionImpl;
  active: boolean;
}

const ResultItem = forwardRef<HTMLDivElement, ResultItemProps>(
  ({ action, active }, ref: Ref) => {
    const isLottieIcon =
      React.isValidElement(action.icon) &&
      "lottieRef" in action.icon.props &&
      action.icon.props.lottieRef?.current;

    if (isLottieIcon) {
      const lottieRef = (action.icon as ReactElement<IconProps>).props
        .lottieRef;
      if (active) {
        lottieRef.current?.play();
      } else {
        lottieRef.current?.stop();
      }
    }
    return (
      <div
        ref={ref}
        className={cn(
          "px-4 py-3 flex items-center justify-between cursor-pointer bg-background text-paragraph",
          active ? "text-title" : ""
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
        <div className="flex gap-2 items-center">
          {action.icon && action.icon}
          <div className="flex flex-col">
            <span>{action.name}</span>
          </div>
        </div>
        {action.shortcut?.length ? (
          <div className="grid grid-flow-col gap-1" aria-hidden>
            {action.shortcut.map((shortcut) => (
              <kbd
                className="bg-buttonSecondary text-paragraph px-2 py-1 uppercase rounded"
                key={shortcut}
              >
                {shortcut}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

ResultItem.displayName = "ResultItem";
