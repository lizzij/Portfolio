type Props = {
  header: string
}

const SectionHeader = ({header}: Props) => {
  return (
    <div className="mt-32 mb-10 md:mb-16">
      <div className="grid grid-cols-1 divide-y-2 divide-black ml-5">
        <div></div>
        <div>
          <div className="relative -m-px">
            <div className="absolute -m-px">
              <button className="flex-none bg-white text-black font-bold md:text-2xl py-0 px-2 -ml-5 border-2 border-black rounded-full focus:outline-none">
                {header}
              </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
