import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="pt-16 flex justify-around">
      <Container>
        Eliza Huang @ 2021. Built in Next.js + Tailwind CSS.
      </Container>
    </footer>
  )
}

export default Footer
