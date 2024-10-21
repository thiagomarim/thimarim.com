import { StackList } from '@/data/stack'
import StackSection from '@/sections/stack'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stack | Thiago Marim',
  description:
    'Conheça as tecnologias e ferramentas que Thiago Marim, desenvolvedor front-end especializado, utiliza em seus projetos.',
  openGraph: {
    title: 'Stack | Thiago Marim',
    description:
      'Conheça as tecnologias e ferramentas que Thiago Marim, desenvolvedor front-end especializado, utiliza em seus projetos.',
    type: 'website',
    url: 'https://thiagomarim.com/stack',
  },
  keywords: [
    'stack tecnológica',
    'ferramentas de desenvolvimento',
    'front-end',
    'Thiago Marim',
    'Next.js',
    'React',
    'JavaScript',
    'CSS',
    'HTML',
  ],
}

export default function Stack() {
  return <StackSection stackList={StackList} />
}
