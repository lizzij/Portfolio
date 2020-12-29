import SectionHeader from '../components/section-header'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>
      <SectionHeader header="contact" />
      <div className="flex flex-col sm:flex-row md:text-xl">
        <div className="flex-1 mr-4 lg:mr-16 mb-5">
          Contact me about your project. I am always interested in new opportunies and collaborations.
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex-1">
              Eliza Zijin Huang<br/>
              elizazijinhuang@gmail.com<br/>
              <div className="mt-2 pd">
                <button className="flex-none bg-black text-white font-bold md:text-2xl py-1 px-10 border-2 border-black rounded-full focus:outline-none">
                  Get in Touch ➔
                </button>
              </div>
            </div>
            <div className="flex-1 -pt-10">
              <SectionHeader header="links" />
              Connect with me on&nbsp;
              <Link href="/">
                <a className="underline font-bold">LinkedIn↗</a>
              </Link>
              &nbsp;and&nbsp;
              <Link href="/">
                <a className="underline font-bold">Github↗</a>
              </Link>
              &nbsp;to see what I'm up to recently.<br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact