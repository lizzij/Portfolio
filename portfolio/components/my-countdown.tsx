import SectionHeader from './section-header'
import Countdown from 'react-countdown'

type countdown = {
  total: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
  completed: boolean,
}

const CompletedCountdown = () => <div>Hooray, I graduated 🎓!</div>
const renderer = (countdown: countdown) => {
  const { days, hours, minutes, seconds, completed } = countdown
  return (
    completed ?
    <CompletedCountdown /> :
    <span className="flex flex-wrap place-content-between">
      <span>
        <span className="text-2xl">{days}</span>
        &nbsp;Days
      </span>
      <span>
        <span className="text-2xl">{hours}</span>
        &nbsp;Hours
      </span>
      <span>
        <span className="text-2xl">{minutes}</span>
        &nbsp;Minutes
      </span>
      <span>
        <span className="text-2xl">{seconds}</span>
        &nbsp;Seconds
      </span>
    </span>
  )
}

const MyCountdown = () => {
  return (
    <div>
      <SectionHeader header="starts working in" />
      <Countdown date="2021-07-12T09:00:00" renderer={renderer}/>
    </div>
  )
}

export default MyCountdown
