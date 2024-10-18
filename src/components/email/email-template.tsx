import { Body, Container, Head, Hr, Html, Text } from '@react-email/components'
import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>
          Olá, Thiago. Temos uma nova mensagem para você!
        </Text>
        <Text style={paragraph}>Nome: {name},</Text>
        <Text style={paragraph}>Email: {email}</Text>
        <Text style={paragraph}>Mensagem: {message}</Text>
        <Hr style={hr} />
        <Text style={footer}>Thiago Marim - Website Pessoal</Text>
      </Container>
    </Body>
  </Html>
)

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
