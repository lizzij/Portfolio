type Props = {
  dark?: boolean,
  tag?: boolean,
  text: string
}

const Button = ({dark = false, tag = false, text}: Props) => {
  const fontSize = tag ? "" : "font-bold md:text-2xl"
  const borderWidth = tag ? "" : "-2"
  const gap = tag ? "2" : "3"
  const color = tag ? "transparent" : (dark ? "black" : "white")
  const contrastColor = dark ? "white" : "black"

  return (
    <button className={`bg-${color} hover:bg-${contrastColor} text-${contrastColor} hover:text-${color} 
    ${fontSize} py-0 px-${gap} ml-${gap} border${borderWidth} border-black rounded-full focus:outline-none`}>
      {text}
    </button>
  )
}

export default Button