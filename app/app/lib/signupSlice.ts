import { createSlice } from '@reduxjs/toolkit'
// Define a type for the slice state
export interface UserState {
  email: string
  firstName: string
  lastName: string
  birthDay: number | null
  birthMonth: number | null
  birthYear: number | null
  password: string
  profilePicture: string
}

// Define the initial state using that type
const initialState: UserState = {
  email: '',
  firstName: '',
  lastName: '',
  birthDay: null,
  birthMonth: null,
  birthYear: null,
  password: '',
  profilePicture: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.birthDay = action.payload.birthDay
      state.birthMonth = action.payload.birthMonth
      state.birthYear = action.payload.birthYear
      state.password = action.payload.password
      state.profilePicture = action.payload.profilePicture
    },
    getUserData: (state) => {
      return state
    }
  }
})

export const { setUserData, getUserData } = userSlice.actions

export const userReducer = userSlice.reducer;