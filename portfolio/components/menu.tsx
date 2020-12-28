const Menu = () => {
  return (
    <nav className="flex flex-row p-5">
      <button className="flex-none bg-black text-white font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
        lizzij
      </button>
      <div className="flex-grow"></div>
      <button className="bg-white hover:bg-black text-black hover:text-white font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
        work
      </button>
      <button className="bg-white hover:bg-black text-black hover:text-white font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
        contact
      </button>
    </nav>
  )
}

export default Menu
