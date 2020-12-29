import SectionHeader from '../components/section-header'

const Experience = () => {
  return (
    <div>
      <SectionHeader header="experience" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16">
        <div className="bg-gray-200 rounded-2xl md:rounded-3xl p-4">
          <div>1</div>
          <div>Donec vel iaculis neque. Quisque semper sapien in justo convallis, ac consequat risus pellentesque. Vestibulum porttitor mauris eget tempus ullamcorper. Ut varius</div>
        </div>
        <div className="bg-gray-200 rounded-2xl md:rounded-3xl p-4">
          <div>1</div>
          <div>Donec vel iaculis neque. Quisque semper sapien in justo convallis, ac consequat risus pellentesque. Vestibulum porttitor mauris eget tempus ullamcorper. Ut varius</div>
        </div>
      </div>
    </div>
  )
}

export default Experience