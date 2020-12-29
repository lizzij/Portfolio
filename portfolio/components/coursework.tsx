import SectionHeader from '../components/section-header'

const Coursework = () => {
  return (
    <div>
      <SectionHeader header="coursework" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-16">
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Coursework