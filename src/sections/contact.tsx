import ContactForm from '@/components/common/contact-form'
import TitleSection from '@/components/layout/title-section'

export default function ContactSection() {
  return (
    <section>
      <TitleSection
        title="Me mande um email."
        sizes="lg"
        subtitle="Se você gostou do meu portfólio ou deseja saber mais sobre o meu trabalho, sinta-se à vontade para me enviar uma mensagem. Estou sempre aberto a novas oportunidades, parcerias e ideias. Será um prazer conversar com você!"
      />
      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  )
}
