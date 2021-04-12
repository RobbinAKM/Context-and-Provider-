import React,{useReducer} from 'react';
import createDataContext from './createDataContext';
import fetchJson from '../api/fetchJson';

const blogReducer =(state,action)=>{
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
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

const getBlogPosts=dispatch=>{
  return async()=>{
    const response=await fetchJson.get('blogposts');
    dispatch({type:"get_blogpost" ,payload:response.data});
  };
};


const addBlogPosts=dispatch=>{
  return async (title,post,callback)=>{
    //dispatch({type:"add_blogpost" ,payload:{title,post}});
    await fetchJson.post('blogposts',{title,post});
    if(callback){
      callback();
    }
 }
}

const deleteBlogPosts=dispatch=>{
  return async id =>{
     await fetchJson.delete(`blogposts/${id}`)
    dispatch({type:"delete_blogpost" ,payload:id})
 }
}

const editBlogPosts=dispatch=>{
  return async (id,title,post,callback)=>{
    await fetchJson.put(`blogposts/${id}`,{title,post})
    dispatch({type:"edit_blogpost" ,payload:{id,title,post}})
    if(callback){
      callback();
    }
 }
}



export const {Context,Provider}=createDataContext(blogReducer,{addBlogPosts,deleteBlogPosts,editBlogPosts,getBlogPosts},[]);
