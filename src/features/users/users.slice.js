import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {id:101, name:"Tiko", gender:"male", salary:150000},
        {id:102, name:"Anna", gender:"female", salary:350000},
        {id:103, name:"Hayk", gender:"male", salary:200000},
        {id:104, name:"Ani", gender:"female", salary:170000},
    ]
}


export const UserSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        salaryUp:function(state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if(person) {
                person.salary += 50000
            }
        },
        salaryDown:function(state, action) {
            const person = state.items.find(user => user.id == action.payload)
            if(person) {
                if(person.salary > 0) {
                    person.salary -= 50000
                }
            }
        },
        deleteUser:function(state, action) {
            const users = state.items.filter(user => user.id != action.payload)
            state.items = users
        },
        swipeUp:function(state,action) {
            const index = state.items.findIndex(user => user.id == action.payload)
            if(index > 0) {
                let swipe = state.items[index]
                state.items[index] = state.items[index - 1]
                state.items[index - 1] = swipe 
            }
        },
        swipeDown:function(state,action) {
            const index = state.items.findIndex(user => user.id == action.payload)
            if(index < state.items.length - 1) {
                let swipe = state.items[index]
                state.items[index] = state.items[index + 1]
                state.items[index + 1] = swipe
            }
        }
    }
})

export const reducer = UserSlice.reducer
export const {salaryUp, salaryDown, deleteUser, swipeUp, swipeDown} = UserSlice.actions

