export interface ILoginPayload {
  email?: string
  password?: string
}

export interface IToken {
  accessToken?: string
  refreshToken?: string
}
