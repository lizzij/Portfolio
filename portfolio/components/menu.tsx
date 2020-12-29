import Button from './button'

const Menu = () => {
  return (
    <nav className="flex flex-row px-5 py-10">
      <a href="/">
        <Button dark text="lizzij" />
      </a>
      <div className="flex-grow"></div>
        <Button dark={false} text="work" />
        <Button dark={false} text="contact" />
    </nav>
  )
}

export default Menu