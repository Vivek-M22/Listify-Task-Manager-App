import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{ id : 1 , text : "hello world"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,

    reducers : {
        addTodo : (state , action ) => {
            const todo = {
                id : nanoid(),
                text : action.payload
                //  text : action.payload.text

            }
            state.todos.push(todo);
        },

        // filter sirf true wali value return krega 
        removeTodo : (state , action ) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo , removeTodo } = todoSlice.actions

export default todoSlice.reducer;


// states -> current state 
// actions -> that value which is passed there
// remove / delete main filter use krete hai
// steps learn

//add todo => how the data is inserted in the store
// remove todo => how the data is access from the store 

