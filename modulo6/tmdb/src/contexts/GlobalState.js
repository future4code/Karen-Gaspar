import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from 'axios'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([])

    const states = { isLoading, movie }
    const setters = { setIsLoading, setMovie }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;