import Button from '../components/button'

type Props = {
  header: string
}

const SectionHeader = ({header}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 divide-y-2 divide-black">
        <div></div>
        <div>
          <div className="relative -m-px">
            <div className="absolute -m-px">
              <button className="flex-none bg-white text-black font-bold md:text-2xl py-0 px-2 border-2 border-black rounded-full focus:outline-none">
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
