/// <reference types="react-scripts" />

type TinitialState = {
  auth: any
  user?: Tuser | null
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string |any
}