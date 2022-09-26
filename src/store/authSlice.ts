import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//Get user form local storage
type Tuser = string | null

type TinitialState = {
  user?: Tuser | null
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string
}

// const user: Tuser  = JSON.parse(localStorage.getItem('user') || 'user')
const user: Tuser  = localStorage.getItem('user')

const initialState: TinitialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: TinitialState) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: () => {}
})

export const { reset } = authSlice.actions
export default authSlice.reducer