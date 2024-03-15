const  axios  = require("axios")

const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk



const initialState = {
    loading: false,
    users: [],
    error : ""
}


// Generates pending , fulfilled and rejected action types
const fetchUsers = createAsyncThunk('users/fetchusers', async () => {
        
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        data = await data.map((each) => each.name)
        return data
    

    //return is important
})

// const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//     return axios.get('https://jsonplaceholder.typicode.com/userss').then(response => response.data.map(user => user.id))
//   })

const userSlice = createSlice({
    
    name: 'users',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true

        })
        builder.addCase(fetchUsers.fulfilled, (state , action) => {
                state.loading = true, 
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

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers