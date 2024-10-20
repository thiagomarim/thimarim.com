export type StackListProps = {
  title: string
  items: {
    name: string
    img: string
    dark?: boolean
  }[]
}

export const StackList: StackListProps[] = [
  {
    title: 'frontend',
    items: [
      {
        name: 'HTML',
        img: '/techs/html.svg',
      },
      {
        name: 'CSS',
        img: '/techs/css.svg',
      },
      {
        name: 'JavaScript',
        img: '/techs/javascript.svg',
      },
      {
        name: 'TypeScript',
        img: '/techs/typescript.svg',
      },
      {
        name: 'React',
        img: '/techs/react.svg',
      },
      {
        name: 'Vite',
        img: '/techs/vite.svg',
      },
      {
        name: 'Next.js',
        img: '/techs/nextjs.svg',
        dark: true,
      },
      {
        name: 'Liquid',
        img: '/techs/liquid.png',
      },
      {
        name: 'Tailwind CSS',
        img: '/techs/tailwindcss.svg',
      },
      {
        name: 'Styled Components',
        img: '/techs/styled-components.svg',
      },
      {
        name: 'React Router',
        img: '/techs/react-router.svg',
      },
    ],
  },
  {
    title: 'design',
    items: [
      {
        name: 'Photoshop',
        img: '/techs/photoshop.svg',
      },
      {
        name: 'Illustrator',
        img: '/techs/illustrator.svg',
      },
      {
        name: 'Figma',
        img: '/techs/figma.svg',
      },
    ],
  },
  {
    title: 'version-control',
    items: [
      {
        name: 'Git',
        img: '/techs/git.svg',
      },
      {
        name: 'Github',
        img: '/techs/github.svg',
        dark: true,
      },
    ],
  },
]
