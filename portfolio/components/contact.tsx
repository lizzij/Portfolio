import SectionHeader from '../components/section-header'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id="contact">
      <SectionHeader header="contact" />
      <div className="flex flex-col sm:flex-row md:text-xl">
        <div className="flex-1 mr-4 lg:mr-16 mb-5">
          Reach out to talk about your project. I am always interested in new opportunies and collaborations.
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex-1">
              Eliza Zijin Huang<br/>
              elizazijinhuang@gmail.com<br/>
              <div className="mt-2 pd">
                <a href="https://forms.gle/ybdt9NMpJgYnJKTt8" rel="noopener noreferrer" target="_blank">
                  <button className="flex-none bg-black text-white font-bold md:text-2xl py-1 px-10 border-2 border-black rounded-full focus:outline-none">
                    Get in Touch ➔
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 -pt-10">
              <SectionHeader header="connect" />
              Connect with me on&nbsp;
              <a className="underline font-bold" href="https://www.linkedin.com/in/lizzij/" rel="noopener noreferrer" target="_blank">LinkedIn↗</a>
              &nbsp;and&nbsp;
              <a className="underline font-bold" href="https://github.com/lizzij" rel="noopener noreferrer" target="_blank">Github↗</a>
              &nbsp;to see what I'm up to recently.<br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact