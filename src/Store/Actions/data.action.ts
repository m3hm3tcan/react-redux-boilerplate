import { IData } from '../Reducers/data.reducer'

export const updateCurrentData = (data: Array<IData>) => {
    console.log(data)
    return (dispatch: any) => {
        dispatch({ type: 'CURRENT_DATA_UPDATE', payload: { currentData: data } })
    }
}

export const updateIsLoading = (isLaoding: boolean) => {
    return (dispatch: any) => {
        dispatch({ type: 'ISLOADING_UPDATE', payload: { isLaoding: isLaoding } })
    }
}