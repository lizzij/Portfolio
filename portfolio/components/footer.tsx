import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="pt-16 flex justify-around text-sm md:text-base">
      <Container>
        Eliza Huang @ 2021
      </Container>
    </footer>
  )
}

export default Footer
