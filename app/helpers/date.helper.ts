import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import i18n from 'i18next'

dayjs.extend(updateLocale)
dayjs.updateLocale('ko', {
  relativeTime: {
    future: '%s 후',
    past: '%s 전',
    s: '%d초',
    m: '1분',
    mm: '%d분',
    h: '1시간',
    hh: '%d시간',
    d: '1일',
    dd: '%d일',
    M: '1개월',
    MM: '%d개월',
    y: '1년',
    yy: '%d년'
  }
})
dayjs.extend(relativeTime)

export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
export const TIME_FORMAT = 'HH:mm'

export const DATE_FORMAT_DOT = 'YYYY.MM.DD'

export const dateHelper = {
  formatDate: (date?: Date | string | dayjs.Dayjs, formatString: string = DATE_FORMAT, textFallback = '') => {
    if (!date) return textFallback
    return dayjs(date).format(formatString)
  },
  formatFromToDate: (
    fromDate?: Date | string | dayjs.Dayjs,
    toDate?: Date | string | dayjs.Dayjs,
    formatString: string = DATE_FORMAT
  ) => {
    if (!fromDate || !toDate) return ''
    return `${dayjs(fromDate).format(formatString)} ~ ${dayjs(toDate).format(formatString)}`
  },

  formatDateWithTranslation: (
    dateString?: string | Date,
    formatString: string = 'MMMM D, YYYY (ddd)',
    textFallback = ''
  ) => {
    if (!dateString) return textFallback || undefined

    const date = dayjs(dateString)
    if (!date.isValid()) return textFallback || undefined

    // 🔥 force correct locale
    const locale = i18n.language === 'ko' ? 'ko' : 'en'

    return date.locale(locale).format(formatString)
  },

  defaultDateFormat: (dateString?: string) => {
    return dateHelper.formatDateWithTranslation(dateString, 'YYYY년 M월 D일')
  },

  monthFormatter: (overrideLocale?: string) => {
    const locale = overrideLocale || (i18n.language === 'ko' ? 'ko' : 'en-US')
    return new Intl.DateTimeFormat(locale, { month: 'short' })
  },
  formatMonth: (d: Date) => {
    return dateHelper.monthFormatter().format(d)
  },
  formatDateNotification: (date?: Date | string | dayjs.Dayjs, textFallback = '') => {
    if (!date) return textFallback
    const now = dayjs()
    const target = dayjs(date)
    if (now.isSame(target, 'day')) {
      return target.locale(i18n.language).fromNow()
    }
    return target.format(DATE_FORMAT)
  }
}

export const formatDateByLocale = (lang: string) => {
  if (lang === 'ko') return 'YYYY년 M월 D일 (ddd)'
  if (lang === 'en') return 'MMMM D, YYYY (ddd)'
}
