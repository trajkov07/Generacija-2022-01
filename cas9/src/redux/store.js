import { applyMiddleware, createStore, combineReducers } from "redux";
import { balanceReducer } from "./reducers/balanceReducer";
import { creditReducer } from "./reducers/creditReducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(balanceReducer, applyMiddleware(thunk));
// Vo ponovite applikacii sekogas se odi so configure store
// const store = configureStore({ reducer: balanceReducer });
let reducers = combineReducers({ balanceReducer, creditReducer });
const store = configureStore({ reducer: reducers });

export default store;

// npm install @reduxjs/toolkit

//da kreirate edna slicna aplikacija kako ovaa sto ja vidovte denes
//Kaj sto kje kreirate dve kopcinja ednoto kje bide za incrementacija
//a drugoto kopce kje bide za dekrementacija za vrednost 1.
//Neka vrednosta vo stejtot bide najprvin 0 i preku kopcinjata da se menuva preku dispatch hookot
//a pritoa da imate kreirano dve akcii za increment i decrement
//za koj kje imate i poseben reducer kako sto napraivme vo primerot.

//Potoa da kreirate nova komponenta koja sto kje bide slicna na sallary no kje ima eden input so broj i dve kopcinja od koe ednoto
//kje ja dodava vrednosta vo inputot na stejtot sto go imame vo redux,
//a drugoto kopce isto taka kje go pravime istoto no asinhrono posle 3 sekundi a pritoa
//i vo consola kje ispecat nekoj tekst Ja menuvam vrednosta posle nekoe vreme. Za ova da koristite middleware i redux thunk.
