import { createSlice } from "@reduxjs/toolkit";
import Transactions from "../assets/components/Transactions";

export const appSlice = createSlice({
  name: "user",
  initialState: {
    balance:0,
    name:'',
    accountnumber:'',
    email:'',
    id:'',
    profileImage:'',
    accountresponse:'',
    transactions:''
  },
  reducers: {
    transfer: (state,action) => {
        state.balance -=action.payload
    },
    addname: (state,action) => {
        state.name =action.payload
    },
    addemail: (state,action) => {
        state.email =action.payload
    },
    addbalance: (state,action) => {
        state.balance =action.payload
    },
    maketransfer: (state,action) => {
        state.balance -=action.payload
    },

     addaccount: (state,action) => {
        state.accountnumber =action.payload
    },
     addid: (state,action) => {
        state.id =action.payload
    },
    addprofileimage: (state,action) => {
        state.profileImage=action.payload
    },
    addaccountresponse:(state,action)=>{
      state.accountresponse=action.payload
    },
     addtransactions:(state,action)=>{
      state.transactions=(action.payload).slice().reverse();
    },
  },
});
export default appSlice.reducer;
export const {transfer,addname,addbalance,addemail,addid,addaccount,addprofileimage,addaccountresponse,addtransactions,maketransfer} = appSlice.actions;
