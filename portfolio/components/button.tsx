type Props = {
  dark?: boolean,
  tag?: boolean,
  text: string
}

const Button = ({dark = false, tag = false, text}: Props) => {
  const fontSize = tag ? "text-sm" : "font-bold md:text-2xl"
  const borderWidth = tag ? "" : "-2"
  const gapWidth = tag ? "-2" : "-3"
  const bgColor = tag ? "transparent" : (dark ? "black" : "white")
  const color = dark ? "black" : "white"
  const contrastColor = dark ? "white" : "black"
  const borderColor = (tag && dark) ? "white hover:border-black" : "black"

  return (
    <button className={`bg-${bgColor} hover:bg-${contrastColor} text-${contrastColor} hover:text-${color} 
    ${fontSize} py-0 px${gapWidth} ml${gapWidth} border${borderWidth} border-${borderColor} rounded-full focus:outline-none`}>
      {text}
    </button>
  )
}

export default Button