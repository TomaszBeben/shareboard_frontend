import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authFetch from "../utils/authFetch"

//Get user form local storage
type Tuser = string | null

type TinitialState = {
  user?: Tuser | null
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string |any
}

const user: Tuser  = localStorage.getItem('user')

const initialState: TinitialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//Register User
export type TuserData = {
  name?: string;
  email: string;
  password: string;
}
export const register = createAsyncThunk(
  'auth/register',
  async (user?: TuserData, thunkAPI?) => {
    try {
      return await authFetch.register(user)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Login User
export const login = createAsyncThunk(
  'auth/login',
  async (user?: TuserData, thunkAPI?) => {
    try {
      return await authFetch.login(user)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//temporary any type
export const logout:any = createAsyncThunk('auth/logout', 
async () => {
  await authFetch.logout()
}
)

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
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer