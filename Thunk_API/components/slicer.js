import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const Fetchdata = createAsyncThunk(
    "get/data",
    async (args,ThunkApi)=>{
        try{   
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await res.json();
            return data;
        }
        catch(error){
            return ThunkApi.rejectWithValue(error.message)
        }
    }
);


const slicer1 = createSlice({
    name : 'slice1',
    initialState : {
        loading : false,
        data : [],
        error : null,
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(Fetchdata.pending, (state) => {
            state.loading = true;
        })
        .addCase(Fetchdata.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(Fetchdata.rejected, (state,action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
    
   }
);

export {Fetchdata};
export default slicer1.reducer;