import React,{useContext} from 'react' ;
import {StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'


const EditScreen =({navigation})=>{
  const id=navigation.getParam('id');
  const {state,editBlogPosts} =useContext(BlogContext);
  const blogPost=state.find(blogPost=>blogPost.id===id)

   return <BlogPostForm
    initialValues={{title:blogPost.title,post:blogPost.post}}
    submitPost={(title,post)=>{
      editBlogPosts(id,title,post,()=>navigation.pop());
    }}
   />
}

export default EditScreen;
