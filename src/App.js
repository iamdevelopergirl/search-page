import React, { useReducer, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/header.js';
import Title from './Components/Title/title.js';
import PropertyListing from './Components/PropertyListings/propertyListing.js';
import Loading from './Components/Loading/loading.js';
const searchPlace = "Berlin";
const PROPERTY_LIST_API = "https://wunderflats-frontend-challenge-api.glitch.me/listings";
const ACTION_TYPES = {
  ERROR_IN_FETCH : "ERROR_IN_FETCH",
  SUCCESS_IN_FETCH : "SUCCESS_IN_FETCH",
  START_FETCH : "START_FETCH",
}
const TITLE_CONTAINER_ERROR_STRINGS = {
    title : "Something went wrong",
    descrption: "Please retry by clicking the button below",
    buttonName: "Try again"
}

const TITLE_CONTAINER_SUCCESS_STRINGS = {
  title : `Homes in ${searchPlace}`,
  descrption: "More than 200 homes found",
  buttonName: "Reload results"
}
/**
* @private
* @function fetchProperty
* @desc fetch function to get the property listing response
*/
async function fetchProperty(){
  let data = null;
  try{
    let response = await fetch(PROPERTY_LIST_API, 
                                { method: 'GET',
                                  headers: { 
                                  'Content-Type': 'application/json',
                                  'Accept': 'application/json'
                                  } 
                                },
                              );
    if(response.status === 200){
      data = await response.json();
    }
  }
  catch(error){
    console.log(`Error while fetching the list ${error}`);
  }
  finally{
    return data;
  }
}

/**
* @public
* @function dispatchActionAfterGetList
* @desc utiltity function to dispatch action based on the fetch property result
*/
export function dispatchActionAfterGetList(dispatch){
  fetchProperty().then(data => {
    let type = "";
    let payload = null;
    if(data  === null){
      type = ACTION_TYPES.ERROR_IN_FETCH;
    }
    else{
      type = ACTION_TYPES.SUCCESS_IN_FETCH;
      payload = data;
    }
    dispatch({
      type,
      payload
    })
  });
}

const initialState = {
  isLoaded: false,
  propertyList: null,
  error: false,
};

/**
* @public
* @function reducer
* @desc reducer function that takes care of changing the state based on action type
*/
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS_IN_FETCH:
      return {
        ...state,
        isLoaded: true,
        propertyList: action.payload,
        error: false,
      };
    case ACTION_TYPES.ERROR_IN_FETCH:
      return {
        ...state,
        isLoaded: true,
        propertyList: null,
        error: true
      };
    default:
      return state;
  }
};

/**
* @public
* @function Router
* @desc Router component that routes main page to either propery list or loading
*/
export function Router() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchActionAfterGetList(dispatch);
    return () => {
    }
  }, [])

  return (
    <div>
      { state.isLoaded ? 
        <div className="main-container">
          <Title 
            titleText={state.error ? TITLE_CONTAINER_ERROR_STRINGS.title : TITLE_CONTAINER_SUCCESS_STRINGS.title} 
            titleDescription={state.error ? TITLE_CONTAINER_ERROR_STRINGS.descrption : TITLE_CONTAINER_SUCCESS_STRINGS.descrption} 
            buttonName={state.error ? TITLE_CONTAINER_ERROR_STRINGS.buttonName : TITLE_CONTAINER_SUCCESS_STRINGS.buttonName}
            dispatch={dispatch}/>
          <PropertyListing propertyList={state.propertyList}/>
        </div> 
        :
        <div className="main-container">
          <Loading searchPlace={searchPlace}/>
        </div>
      }
    </div>
  );
}

/**
* @function App
* @desc App component main component
*/
function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
