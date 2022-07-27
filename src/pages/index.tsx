import type { NextPage } from 'next'
import Container from '../components/container'
import Default from '../layout/default'
import '../firebase/initFirebase'

import "../firebase/initFirebase"

const Home: NextPage = () => {


  return (
    <Default titlePage='Home'>
      <Container>
        <h1 className={'text-2xl underline'}>Sejá bem vindo</h1>
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