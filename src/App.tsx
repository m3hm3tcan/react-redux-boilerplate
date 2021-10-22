import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsLoading, updateCurrentData } from './Store/Actions/data.action';
import { IData } from './Store/Reducers/data.reducer';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.data.isLoading)
  const currentData = useSelector((state: any) => state.data.currentData)
  //const [conutryList, setCunrtyList] = useState<Array<IData>>([])

  useEffect(() => {
    
    setTimeout(()=>{
      dispatch(updateCurrentData([{ id: 90, countryName: 'Turkey' }]))
      dispatch(updateIsLoading(true));
    },2000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {isLoading &&
          <div><h3> Data is loading...</h3></div>}
        {!isLoading && currentData &&
          <div>{currentData.map((item:IData)=>(
            <p>{`Id: ${item.id}  Name: ${item.countryName}`}</p>
          ))}</div>}  
      </header>
    </div>
  );
}

export default App;
