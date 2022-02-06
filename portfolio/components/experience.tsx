import SectionHeader from '../components/section-header'

const Experience = () => {
  return (
    <div>
      <SectionHeader header="experiences" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl text-lg pb-1">Software Engineer at Google</div>
          <div className="text-gray-900 pb-1">2021.10 - current</div>
          <div className="text-gray-800">
            I am working as a software engineer in the Google Cloud Platform, Cloud AI and Industry Solutions team.
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl text-lg pb-1">Software Engineer at AWS</div>
          <div className="text-gray-900 pb-1">2021.6 - 2021.10</div>
          <div className="text-gray-800">
            I worked as a software engineer in AWS platform SageMaker team on autoML solutions.
          </div>
        </div>
      </div>
      <SectionHeader header="internships" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16">
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl text-lg pb-1">Software Engineer Coop at Harvard Catalyst</div>
          <div className="text-gray-900 pb-1">2020.6 - 2020.12</div>
          <div className="text-gray-800">
            I worked as a full-stack intern on the data network team.
            I collaborated with a team of developers, product managers and testers
            in an agile method - to add new features, fix bugs and reduce technical debt
            in a software that shares patient information across hospital network.
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl md:rounded-3xl p-4">
          <div className="md:text-xl text-lg pb-1">Software Engineer Coop at Broad Institute</div>
          <div className="text-gray-900 pb-1">2019.6 - 2019.12</div>
          <div className="text-gray-800">
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
