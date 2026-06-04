import type { KoreaMoneyFormatType } from '~/shared/types'

export const commonHelper = {
  formatKoreaMoney: (value: number = 0, type: KoreaMoneyFormatType = 'number'): string => {
    const safeValue = !value || isNaN(value as number) ? 0 : (value as number)
    switch (type) {
      case 'currency':
        // ₩1,234,567
        return new Intl.NumberFormat('ko-KR', {
          style: 'currency',
          currency: 'KRW',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(safeValue)

      case 'character':
        // e.g. 1,234,567 (KRW suffix)
        return (
          new Intl.NumberFormat('ko-KR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(safeValue) + '원'
        )

      case 'number':
      default:
        // 1,234,567
        return new Intl.NumberFormat('ko-KR', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(safeValue)
    }
  },

  copyToClipboard: async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  },

  formatPhoneNumberInput: (value?: string) => {
    const raw = value?.replace(/\D/g, '').slice(0, 11)
    const part1 = raw?.slice(0, 3)
    const part2 = raw?.slice(3, 7)
    const part3 = raw?.slice(7, 11)
    let formatted = part1
    if (part2) formatted += '-' + part2
    if (part3) formatted += '-' + part3
    return { raw, formatted }
  },

  formatOtpInput: (value?: string) => {
    const raw = value?.replace(/\D/g, '').slice(0, 6) ?? ''
    const formatted = raw
    return { raw, formatted }
  },

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  },

  urlToFile: async (url: string, fileName: string): Promise<File> => {
    const response = await fetch(url)
    const blob = await response.blob()
    const fileType = blob.type || 'application/pdf'
    return new File([blob], fileName, { type: fileType })
  },
  toCamelCase: (str: string) => {
    return str
      .replace(/_([a-zA-Z])/g, (_, char) => char.toUpperCase())
      .replace(/^([A-Z])/, (m, char) => char.toLowerCase())
  }
}
