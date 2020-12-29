import SectionHeader from '../components/section-header'

const Experience = () => {
  return (
    <div>
      <SectionHeader header="experience" />
      <div className="flex flex-wrap place-content-between">
        <div className="flex-1 mr-4 lg:mr-16 bg-gray-200">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="flex-1 bg-gray-200">
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  )
}

export default Experience