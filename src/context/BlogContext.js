import React,{useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer =(state,action)=>{
  switch (action.type) {
    case "add_blogpost":
      return [...state,{title:action.payload.title,post:action.payload.post,id:Math.floor(Math.random()*9999)}];
    case "delete_blogpost":
        return state.filter((blogPost)=>blogPost.id !== action.payload);
    default:
      return state;

  }
}

const addBlogPosts=dispatch=>{
  return(title,post,callback)=>{
    dispatch({type:"add_blogpost" ,payload:{title,post}});
    callback();
 }
}

const deleteBlogPosts=dispatch=>{
  return(id)=>{
    dispatch({type:"delete_blogpost" ,payload:id})
 }
}



export const {Context,Provider}=createDataContext(blogReducer,{addBlogPosts,deleteBlogPosts},[]);
