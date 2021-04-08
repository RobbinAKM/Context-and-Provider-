import React,{useContext,useState} from 'react' ;
import {StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen=({navigation})=>{

  const {addBlogPosts}=useContext(BlogContext);

  return(
     <BlogPostForm
       submitPost={(title,post)=>{
      addBlogPosts(title,post,()=>navigation.navigate('Index'))
     }}
    />
  )
}



const styles = StyleSheet.create({

})

export default CreateScreen;
