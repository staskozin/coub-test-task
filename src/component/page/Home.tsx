import Container from '../../component/ui/Container'
import Header from '../../component/block/Header'
import Promo from '../../component/block/Promo'
import News from '../../component/block/News'
import Facts from '../../component/block/Facts'
import Footer from '../../component/block/Footer'

export default function Home() {
  return (
    <>
      <Container block='top'>
        <Header />
        <Promo
          title='TEXT_TEXT_TEXT'
          text='TEXT_TEXT_TEXT_TEXT'
          linkText='TEXT_TEXT_TEXT'
          linkHref='/stub'
        />
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