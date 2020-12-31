const Menu = () => {
  return (
    <nav className="flex flex-row p-4 lg:p-16">
      <a href="/" className="-ml-3">
        <button className="bg-black hover:bg-white text-white hover:text-black 
        font-bold md:text-2xl py-0 px-3 ml-3 border-2 border-black rounded-full focus:outline-none">
          lizzij
        </button>
      </a>
      <div className="flex-grow"></div>
        <a href="#work">
          <button className="bg-transparent hover:bg-black text-black hover:text-white 
          font-bold md:text-2xl py-0 px-3 ml-3 border-2 border-black rounded-full focus:outline-none">
            work
          </button>
        </a>
        <a href="#contact">
          <button className="bg-transparent hover:bg-black text-black hover:text-white 
            font-bold md:text-2xl py-0 px-3 ml-3 border-2 border-black rounded-full focus:outline-none">
            contact
          </button>
        </a>
    </nav>
  )
}

export default Menu