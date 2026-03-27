import { formatDistanceToNow, format, isAfter, subDays } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatCommentDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  // If date is not valid it return an empty string
  if (isNaN(dateObj.getTime())) return ''

  const threeDaysAgo = subDays(new Date(), 3)

  if (isAfter(dateObj, threeDaysAgo)) {
    return formatDistanceToNow(dateObj, {
      addSuffix: true,
      locale: es
    })
  }

  return format(dateObj, "d 'de' MMMM, yyyy", { locale: es })
}