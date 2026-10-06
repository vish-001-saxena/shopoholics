import {configureStore,createSlice} from '@reduxjs/toolkit';
const auth=createSlice({name:'auth',initialState:{user:null,ready:false},reducers:{setUser:(s,a)=>{s.user=a.payload;s.ready=true},logout:(s)=>{s.user=null;s.ready=true}}});
const cart=createSlice({name:'cart',initialState:{items:[]},reducers:{setCart:(s,a)=>{s.items=a.payload},clearCart:(s)=>{s.items=[]}}});
export const {setUser,logout}=auth.actions; export const {setCart,clearCart}=cart.actions;
export const store=configureStore({reducer:{auth:auth.reducer,cart:cart.reducer}});
