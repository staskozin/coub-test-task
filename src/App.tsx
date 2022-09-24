import Container from './component/ui/Container'
import Header from './component/block/Header'
import Promo from './component/block/Promo'
import News from './component/block/News'
import Facts from './component/block/Facts'
import Footer from './component/block/Footer'

function App() {
  return (
    <>
      <Container block='top'>
        <Header />
        <Promo />
      </Container>
      <Container block='news'>
        <News />
      </Container>
      <Container block='facts'>
        <Facts />
      </Container>
      <Container block='footer'>
        <Footer />
      </Container>
    </>
  )
}

export default App
