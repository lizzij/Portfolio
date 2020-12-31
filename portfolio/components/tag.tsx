type Props = {
  dark?: boolean,
  tag?: boolean,
  text: string
}

const Tag = ({dark = false, text}: Props) => {
  return (
    dark ?
    <button className="bg-transparent hover:bg-white text-white hover:text-black 
      text-sm py-0 px-2 ml-2 border border-white hover:border-black rounded-full focus:outline-none">
      {text}
    </button> 
    :
    <button className="bg-white hover:bg-black text-black hover:text-white 
      text-sm py-0 px-2 ml-2 border border-black rounded-full focus:outline-none">
      {text}
    </button>
  )
}

export default Tag