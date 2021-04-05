import React,{useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer =(state,action)=>{
  switch (action.type) {
    case "add_blogpost":
      return [...state,{title:`blog post number #${state.length+1}`}];
    default:
      return state;

  }
}

const addBlogPosts=dispatch=>{
  return()=>{
    dispatch({type:"add_blogpost"})
 }
}


export const {Context,Provider}=createDataContext(blogReducer,{addBlogPosts},[]);
