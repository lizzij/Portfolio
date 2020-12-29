type Props = {
  dark: boolean,
  text: string
}

const Button = ({dark, text}: Props) => {
  return (
    dark ?
    <button className="flex-none bg-black text-white font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
      {text}
    </button> :
    <button className="bg-white hover:bg-black text-black hover:text-white font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
      {text}
    </button>
  )
}

export default Button