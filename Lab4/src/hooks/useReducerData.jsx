import { useEffect, useReducer } from "react";

export function useReducerData(url){

    const [rates, dispatch] = useReducer(reducer,{
        data: [],
        error: ''
    });

    useEffect(()=> {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dispatch({ type: "success", payload: data });
        })
        .catch(error => {
            dispatch({ type: "fail", payload: error.message });
        });
    },[]);
    return (
        <div className="rates">
            <div>{rates.data}</div>
            <div className="error">{rates.error}</div>
        </div>
    )
}

function reducer(rates, action){
    switch(action.type){
        case 'success': return  {data : action.payload, error: ''}
        case 'fail': return {data: [], error: action.payload}
        default: return {...rates}
    } 
}