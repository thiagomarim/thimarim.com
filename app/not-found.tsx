import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="container mt-[150px] sm:mt-[323px]">
      <div>
        <div className="flex flex-col gap-4">
          <span className="flex text-[#e3e4e6] items-center gap-2 text-sm before:block before:content-[''] before:w-[14px] before:h-2 before:rounded-full before:bg-red-500">
            Ops, ocorreu um erro
          </span>
          <h1 className="text-5xl sm:text-[56px]  leading-none sm:leading-[61px] font-medium">
            404
          </h1>
        </div>
        <p className="text-paragraph max-w-[572px] text-xl mt-3">
          Desculpe, mas a página que você está procurando não existe.
        </p>
        <Link href="/">
          <Button className="mt-6">Voltar para o início</Button>
        </Link>
      </div>
    </section>
  )
}
