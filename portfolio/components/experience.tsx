import SectionHeader from '../components/section-header'

const Experience = () => {
  return (
    <div>
      <SectionHeader header="experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        <div className="bg-faded rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl md:pb-1">Software Engineer Coop at Harvard Catalyst</div>
          <div className="text-gray-600 md:pb-1">2020.6 - 2020.12</div>
          <div className="text-gray-500">
            I worked as a full-stack intern on the data network team. 
            I collaborated with a team of developers, product managers and testers
            in an agile method - to add new features, fix bugs and reduce technical debt
            in a software that shares patient information across hospital network.
          </div>
        </div>
        <div className="bg-faded rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl md:pb-1">Software Engineer Coop at Broad Institute</div>
          <div className="text-gray-600 md:pb-1">2019.6 - 2019.12</div>
          <div className="text-gray-500">
            I worked as a full-stack intern on the tooling team. 
            I developed a web-based analysis tool to search and annotate a particular type of 
            genetic variants that causes rare diseases. 
            During the process, I took design and implementation feedbacks from domain scientists iteratively.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience