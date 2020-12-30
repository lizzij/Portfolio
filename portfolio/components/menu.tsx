import Button from './button'

const Menu = () => {
  return (
    <nav className="flex flex-row p-4 lg:p-16">
      <a href="/" className="-ml-3">
        <Button dark text="lizzij" />
      </a>
      <div className="flex-grow"></div>
        <Button text="work" />
        <Button text="contact" />
    </nav>
  )
}

export default Menu