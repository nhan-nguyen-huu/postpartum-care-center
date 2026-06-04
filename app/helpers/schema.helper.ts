import type { TFunction } from 'i18next'
import { z } from 'zod'
import { eLoginFormKey } from '~/shared/enums'

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[!-~]{6,}$/

export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export const getLoginSchema = (t: TFunction) =>
  z.object({
    [eLoginFormKey.Email]: z
      .string()
      .nonempty({ message: t('inputValidate.informationisRequired') })
      .regex(EMAIL_REGEX, t('inputValidate.informationisRequired')),
    [eLoginFormKey.Password]: z.string().nonempty({ message: t('inputValidate.informationisRequired') })
    // .regex(PASSWORD_REGEX, t('inputValidate.informationisRequired'))
  })

export type LoginFormSchema = z.infer<ReturnType<typeof getLoginSchema>>
