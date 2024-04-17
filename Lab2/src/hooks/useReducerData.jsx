import { useEffect, useReducer } from "react";

export function useReducerData(url){

    const [rates, dispatch] = useReducer(reducer,{ loading: true,
        data: {},
        error: ''
    });

    useEffect(()=> {
        if(url){
            let ignore = false;
            
        fetch(url)
        .then(response => response.json())
        .then(json => {
            if(!ignore) {
                 dispatch({ type: "success", payload: json });
            } 
        })
        .catch(error => {
            dispatch({ type: "fail", payload: error.message });
        });
        return() => {
            ignore = true;
        }
        }
        
    },[url]);
    return (
        <div className="rates">
            <div>{rates.data}</div>
            <div className="error">{rates.error}</div>
        </div>
    )
}

function reducer(rates, action){
    switch(action.type){
        case 'success': return  { loading: false, data : action.payload, error: ''}
        case 'fail': return {loading: false, data: {}, error: action.payload}
        default: return {...rates, loading: false}
    } 
}