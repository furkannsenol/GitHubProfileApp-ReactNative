import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApiServices } from '../services/ApiServices'
import IUser from '../models/UserModel'

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const data = await ApiServices.getUsersService()
    //console.log(data)
    return data
})

interface IState {
    items: IUser[]
    isLoading: boolean
    error: string | null | unknown
}

const initialState: IState = {
    items: [],
    isLoading: false,
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        sortUsersByAZ: (state, action: PayloadAction) => {
            state.items.sort((a, b) => a.login.localeCompare(b.login));
        },
        sortUsersByZA: (state, action: PayloadAction) => {
            state.items.sort((a, b) => b.login.localeCompare(a.login));
        },
        sortUsersById: (state, action: PayloadAction) => {
            state.items.sort((a, b) => a.id - b.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                //state.posts = state.posts.concat(action.payload)
                state.items = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(getUsers.rejected, (state, action) => {//tipine PayloadAction verince patlıyor! BAK
                state.error = action.error.message
                state.isLoading = false
            })
    },

})

export const { sortUsersByAZ, sortUsersById, sortUsersByZA } = usersSlice.actions

export default usersSlice.reducer