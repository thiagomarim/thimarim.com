export type CareerListProps = {
  jobTitle: string
  company: string
  companyUrl: string
  startDate: string
  endDate: string
  monthYear: string
  location: string
}

export const CareerList: CareerListProps[] = [
  {
    jobTitle: 'Desenvolvedor Front-end',
    company: 'Shakers Agencia',
    companyUrl: 'https://shakersagencia.com.br/',
    startDate: '2024-09-09',
    endDate: 'Atual',
    monthYear: 'set 2024',
    location: 'Remoto',
  },
]
