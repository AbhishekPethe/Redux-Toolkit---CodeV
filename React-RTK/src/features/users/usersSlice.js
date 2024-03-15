import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    users: [],
    error : ''
}


export const fetchUsers = createAsyncThunk("users/fetchusers" , async (_ , thunkAPI) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!res.ok) {
            throw new Error("Failed to load users");
          }
            
            let data = await res.json()
            data = data.map((each) => each.name)
            return data
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload,
                state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state , action) => {
            state.loading = false,
                state.users = [],
                state.error = action.payload
        })
    }
    
})
 
export default usersSlice.reducer
