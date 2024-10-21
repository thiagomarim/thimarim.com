import { EmailTemplate } from '@/components/email/email-template'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Pessoal <onboarding@resend.dev>',
      to: ['thiago.marim2005@gmail.com'], // E-mail onde você receberá as mensagens
      subject: 'Nova mensagem de contato',
      react: EmailTemplate({ name, email, message }),
      replyTo: email,
    })

    if (error) {
      console.error('Erro ao enviar e-mail:', error)
      return NextResponse.json(
        { error: 'Falha ao enviar e-mail' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Erro na rota de API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 },
    )
  }
}
