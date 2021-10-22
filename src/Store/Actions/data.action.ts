import {IData} from '../Reducers/data.reducer'

export const updateCurrectData =() =>{
    const data = [
        {id:90,countryName:'Turkey'},
        {id:36,countryName:'Hungary'},
        {id:44,countryName:'Germany'}
    ]

    return(dispatch:any)=>{
        dispatch({type:'CURRENT_DATA_UPDATE',payload:{currentData:data}})
    }
}

export const updateIsLoading = (isLaoding:boolean) =>{
    return(dispatch:any)=>{
        dispatch({type:'CURRENT_NAME_UPDATE',payload:{isLaoding:isLaoding}})
    }
}