import React,{useReducer} from 'react' ;

export default (reducer,actions,initState)=>{

const Context = React.createContext();

const Provider =({children})=>{
  const[state,dispatch]=useReducer(reducer,initState);

  const boundActions={};

  for(var key in actions){
    boundActions[key]=actions[key](dispatch)
  }

  return <Context.Provider value={{state,...boundActions}}>
    {children}
  </Context.Provider>

 }

  return {Context ,Provider};
}
