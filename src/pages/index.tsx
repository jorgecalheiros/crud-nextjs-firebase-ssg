import type { NextPage } from 'next'
import Container from '../components/container'
import Default from '../layout/default'
import '../firebase/initFirebase'
import Link from 'next/link'

const Home: NextPage = () => {
  const tecnologias = [
    {
      title: "Firestore",
      description: "O Cloud Firestore é o mais novo banco de dados do Firebase para o desenvolvimento de apps para dispositivos móveis. Ele se baseia nos resultados do Realtime Database com um novo modelo de dados mais intuitivo",
      url: "https://firebase.google.com/docs/firestore?hl=pt-br"
    },
    {
      title: "Next.Js",
      description: "NextJs é um framework React com foco em produção e eficiência criado e mantido pela equipe Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript,  pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento. Para mais informações clique no botão abaixo.",
      url: "https://nextjs.org/"
    },
    {
      title:"Tailwind Css",
      description: "Assim como Bootstrap, Tailwind também é um framework CSS que oferece a possibilidade de criar layouts usando uma estrura CSS já pronta. Isso permite que você otimize o tempo de criação das classes CSS sem precisar fazer tudo manualmente.",
      url:"https://tailwindcss.com/"
    }
  ]

  return (
    <Default titlePage='Home'>
      <Container>
        <section className="text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trabalho final do professor Olavo</h5>
          <br/>
          <h2 className={'text-2xl mb-5 font-semibold'}>Sobre a aplicação</h2>
          <p className={'mb-10'}>
              É uma aplicação CRUD ( Create, Read, Update e Delete )
              bem simples usando NextJs para gerar páginas estáticas com o SSG
              ( Static Site Generation ) e integrado com o firestore para a consulta
              com o banco de dados.
              <br />
              Para a estilização das páginas estou usando tailwind css que é um framework css e também estou usando typescript para a tipagem dos parametros dos componentes da aplicação.
          </p>

          <h2 className={'text-xl mb-5 font-semibold'}>Tecnologias</h2>
          <div className={'grid grid-cols-2 md:grid-cols-3 gap-4'}>
            {tecnologias.map((item, index) => 
              <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[150px]">{item.description}</p>
                    <a href={item.url ?? "#"} target='blank' className='cursor-pointer'>
                      <div>
                        <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Leia mais 
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                        </span>
                      </div>
                    </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </Container>
    </Default>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {}
  }
}