import { format } from 'date-fns'

const date = (rawDate: string | Date) => {
  const date = new Date(rawDate)

  try {
    return format(date, 'PP')
  } catch (error) {
    return 'Invalid date'
  }
}

export default date;

// Vue.filter('date', date )
// {{ workshop.startDate | date(arg1, arg2) }}
