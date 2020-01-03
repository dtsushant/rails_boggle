import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Boggle from '../components/Boggle';
import {createStore} from "redux";
import rootReducer from "../components/boggleComponent/boggleReducers";
import {Provider} from "react-redux";


const store = createStore(
    rootReducer
);
ReactDOM.render(
    <Provider store={store}>
        <Boggle />
    </Provider>
    , document.getElementById('root'));










