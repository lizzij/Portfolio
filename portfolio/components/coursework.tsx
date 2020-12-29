import SectionHeader from '../components/section-header'

const Coursework = () => {
  return (
    <div>
      <SectionHeader header="coursework" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16">
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>Algorithms &amp; Data</div>
          <div>Object-Oriented Design</div>
          <div>Theory of Computation</div>
          <div>Logic &amp; Computation</div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>Software Development</div>
          <div>Programming Language</div>
          <div>Networks &amp; Distributed System</div>
          <div>Computer Systems</div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 divide-y divide-black">
          <div>Artificial Intelligence (Grad)</div>
          <div>Natural Language Processing</div>
          <div>Robotic Science &amp; Systems</div>
          <div>Data Collection &amp; Analysis</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Coursework