import moment from 'moment-timezone'

export const getTimeFromTimeZone = (datetime: string) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  return moment.tz(datetime, userTimeZone).format()
}
