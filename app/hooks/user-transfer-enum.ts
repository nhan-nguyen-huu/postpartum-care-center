import { useTranslation } from 'react-i18next'
import { commonHelper } from '~/helpers'

export const useTransferEnum = () => {
  const { t } = useTranslation()
  const getTranslateEnum = <T extends Record<string, string | number>>(
    enumPath: string,
    enumType: T,
    value: string | number = ''
  ): string => {
    const entry = Object.entries(enumType).find(([, val]) => val === value)
    if (!entry) return '-'
    const key = commonHelper.toCamelCase(entry[0])
    return t(`enums.${enumPath}.${key}`)
  }

  return { getTranslateEnum }
}
