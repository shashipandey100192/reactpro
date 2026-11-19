import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    employeename:"ravi singh",
    salary:5700
}
export const Myslicer = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.salary = state.salary+5000
        }
    }
});

export const { increment} = Myslicer.actions
export default Myslicer.reducer