import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Eye, EyeOff, LockIcon, Mail } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { LogoImage } from '~/assets/images'
import ImageCustom from '~/components/customs/image-custom'
import { Button } from '~/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '~/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '~/components/ui/input-group'
import { type LoginFormSchema, formHelper, getLoginSchema } from '~/helpers'
import cookieHelper from '~/helpers/cookie.helper'
import { AuthService } from '~/services'
import { ROUTES } from '~/shared/constants'
import { eLoginFormKey } from '~/shared/enums'
import type { ILoginPayload } from '~/shared/models'
import useGlobalLoaderStore from '~/stores/global-loader'

export default function DemoPage() {
  // Translate
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)
  const { startLoading, stopLoading } = useGlobalLoaderStore()
  const navi = useNavigate()
  // Enum
  // const { getTranslateEnum } = useTransferEnum()
  // Api
  // const { data: dataUserProfile } = useProfileApi()
  // Form
  const formSchema = getLoginSchema(t)
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formHelper.getDefaultValuesLogin(),
    mode: 'all'
  })
  const loginMutation = useMutation({
    mutationFn: (payload?: ILoginPayload) => {
      startLoading()
      return AuthService.Login(payload)
    },
    onSettled: () => {
      stopLoading()
    },
    onSuccess: (res) => {
      const accessToken = res?.data?.accessToken
      const refreshToken = res?.data?.refreshToken
      if (accessToken && refreshToken) {
        cookieHelper.setAccessToken(accessToken)
        cookieHelper.setRefreshToken(refreshToken)
        toast.success('Login successful!')
        navi(ROUTES.MAIN.HOME)
      }
    }
  })
  const onSubmit = (data: LoginFormSchema) => {
    loginMutation.mutate(data)
  }
  return (
    <section className='flex flex-col p-5 w-full gap-7.5 max-w-100 mx-auto h-dvh justify-center items-center'>
      {/* Logo */}
      <ImageCustom src={LogoImage} className='w-34.5 h-15.5 mx-auto' />
      <section className='w-full'>
        {/* Form */}
        <form id='login-form' onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <FieldGroup className='flex flex-col gap-4'>
            <Controller
              name={eLoginFormKey.Email}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='gap-2'>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <InputGroup className='h-10.5 rounded-[14px]'>
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='example@email.com'
                      autoComplete='off'
                    />
                    <InputGroupAddon>
                      <Mail className='size-5 text-[#99A1AF]' />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name={eLoginFormKey.Password}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className='gap-2'>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <InputGroup className='h-10.5 rounded-[14px]'>
                    <InputGroupAddon>
                      <LockIcon className='size-5 text-[#99A1AF]' />
                    </InputGroupAddon>
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder='••••••••'
                      autoComplete='off'
                      type={showPassword ? 'text' : 'password'}
                    />
                    <InputGroupAddon align='inline-end' className='mr-1!'>
                      <button
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className='size-5 text-[#99A1AF]' />
                        ) : (
                          <Eye className='size-5 text-[#99A1AF]' />
                        )}
                      </button>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
          <Field>
            <button className='text-right text-[#155DFC] text-sm leading-5 font-medium cursor-pointer' type='button'>
              Forgot your password?
            </button>
          </Field>
          <Field orientation='horizontal'>
            <Button type='submit' className='w-full h-10.5 rounded-[14px]' disabled={!form.formState.isValid}>
              Login
            </Button>
          </Field>
        </form>
      </section>
    </section>
  )
}
