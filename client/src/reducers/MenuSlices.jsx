import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name : 'MenuSlice',
    initialState : false,
    reducers : {
        setToggle : (state, action) => {
            return action.payload
        }
    }
})

export const {setToggle} = MenuSlice.actions

export default MenuSlice.reducer