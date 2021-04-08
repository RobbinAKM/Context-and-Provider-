import React,{useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer =(state,action)=>{
  switch (action.type) {
    case "add_blogpost":
      return [...state,{title:action.payload.title,post:action.payload.post,id:Math.floor(Math.random()*9999)}];
    case "delete_blogpost":
        return state.filter((blogPost)=>blogPost.id !== action.payload);
    case "edit_blogpost":
          return state.map(blogPost=>blogPost.id===action.payload.id?action.payload:blogPost);
    default:
      return state;

  }
}

const addBlogPosts=dispatch=>{
  return(title,post,callback)=>{
    dispatch({type:"add_blogpost" ,payload:{title,post}});
    if(callback){
      callback();
    }
 }
}

const deleteBlogPosts=dispatch=>{
  return(id)=>{
    dispatch({type:"delete_blogpost" ,payload:id})
 }
}

const editBlogPosts=dispatch=>{
  return(id,title,post,callback)=>{
    dispatch({type:"edit_blogpost" ,payload:{id,title,post}})
    if(callback){
      callback();
    }
 }
}



export const {Context,Provider}=createDataContext(blogReducer,{addBlogPosts,deleteBlogPosts,editBlogPosts},[{title:"post 1" , post:"sdsdsd"}]);
