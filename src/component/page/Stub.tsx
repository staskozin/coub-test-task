import Container from '../../component/ui/Container'
import Header from '../../component/block/Header'
import Promo from '../../component/block/Promo'
import Footer from '../../component/block/Footer'

export default function Stub() {
  return (
    <>
      <Container block='top'>
        <Header />
        <Promo
          title='STUB PAGE'
          text='TEXT_TEXT_TEXT_TEXT'
          linkText='BACK TO HOME'
          linkHref='/'
        />
      </Container>
      <Container block='footer'>
        <Footer />
      </Container>
    </>
  )
}