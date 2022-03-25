import React, {useState} from 'react'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({})
    const [idMovie, setIdMovie] = useState()
    const [categories, setCategories] = useState([])

    const states = { isLoading, movie, categories, idMovie }
    const setters = { setIsLoading, setMovie, setCategories, setIdMovie }



    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;