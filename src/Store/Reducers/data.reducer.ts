export interface IData {
    id: number,
    countryName:string
}

interface IState {
    currentData: Array<IData>,
    isLoading: boolean,
}

const initState: IState = {
    currentData: [],
    isLoading: true,
}

export default (state: IState = initState, action: any) => {
    switch (action.type) {
        case 'CURRENT_DATA_UPDATE':
            return { ...state, currentData: action.payload.currentData }
        case 'ISLOADING_UPDATE':
            return { ...state, isLoading: action.payload.isLoading }
        default:
            return state
    }
}