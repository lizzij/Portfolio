import SectionHeader from '../components/section-header'

const Coursework = () => {
  return (
    <div>
      <SectionHeader header="coursework" />
      <div className="flex flex-wrap place-content-between">
        <div className="flex-1 mr-4 lg:mr-16 bg-gray-200">
          <div className="grid grid-cols-1 divide-y divide-black">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
         <div className="flex-1 mr-4 lg:mr-16 bg-gray-200">
          <div className="grid grid-cols-1 divide-y divide-black">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className="flex-1 bg-gray-200">
          <div className="grid grid-cols-1 divide-y divide-black">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursework