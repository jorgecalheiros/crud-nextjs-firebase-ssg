import Container from "../../components/container";
import Default from "../../layout/default";

export default function Sobre() {
    return (
        <Default titlePage="Sobre">
            <Container>
                <h1 className={'text-2xl underline mb-5'}>Sobre a aplicação</h1>
                <p className={'mb-10'}>
                    É uma aplicação CRUD ( Create, Read, Update e Delete )
                    bem simples usando NextJs para gerar páginas estáticas com o SSG
                    ( Static Site Generation ) e integrado com o firestore para a consulta
                    com o banco de dados.
                    <br />
                    Para a estilização das páginas estou usando tailwind css que é um framework css e também estou usando typescript para a tipagem dos parametros dos componentes da aplicação.
                </p>

                <h2 className={'text-xl underline mb-5'}>Tecnologias</h2>
                <div className={'ml-5'}>
                    <nav>
                        <ul>
                            <li className={'mb-7'}>
                                <h3 className={'underline mb-3'}>Firestore</h3>
                                <p>
                                    O Cloud Firestore é o mais novo banco de dados do Firebase para o desenvolvimento
                                    de apps para dispositivos móveis. Ele se baseia nos resultados do Realtime Database
                                    com um novo modelo de dados mais intuitivo
                                </p>
                            </li>
                            <li className={'mb-7'}>
                                <h3 className={'underline mb-3'}>Next JS</h3>
                                <p>
                                    NextJs é um framework React com foco em produção e eficiência criado e mantido pela equipe <a href="https://vercel.com/" className={'underline'} rel="noreferrer" target="_blank">Vercel</a>, o Nextjs
                                    busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript,  pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplospara acelerar seu desenvolvimento.<br />
                                    Para mais informações clique <a href="https://nextjs.org/" target={'_blank'} rel="noreferrer" className={'underline'}>aqui</a>
                                </p>
                            </li>
                            <li>
                                <h3 className={'underline mb-5'}>Tailwind Css</h3>
                                <p>
                                    Assim como Bootstrap, Tailwind também é um framework CSS que oferece a possibilidade de criar layouts usando uma estrura CSS já pronta. Isso permite que você otimize o tempo de criação das classes CSS sem precisar fazer tudo manualmente.
                                    Para mais informações clique <a href="https://tailwindcss.com/" target={'_blank'} rel="noreferrer" className={'underline'}>aqui</a>
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </Default>
    )
}

export function getStaticProps() {
    return {
        props: {}
    }
}