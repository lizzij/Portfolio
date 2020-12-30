import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <div className="text-gray-600 md:pb-1"><time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time></div>
}

export default DateFormatter
