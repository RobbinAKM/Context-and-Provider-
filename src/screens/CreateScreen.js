import React,{useContext,useState} from 'react' ;
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';


const CreateScreen=({navigation})=>{
  const[title,setTitle]=useState('');
  const[post,setPost]=useState('');
  const {addBlogPosts}=useContext(BlogContext);

  return(
    <View>
    <Text style={styles.label}>Create Title</Text>
    <TextInput style={styles.input} value={title} onChangeText={text=>setTitle(text)}/>
    <Text style={styles.label}>Create Post</Text>
    <TextInput style={styles.input} value={post} onChangeText={text=>setPost(text)}/>
    <Button title="Add blog post"
     onPress={
       ()=>addBlogPosts(title,post,
         ()=>{
           navigation.navigate('Index')
         })}
         />
   </View>
 );
}

const styles = StyleSheet.create({
  input:{
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    marginBottom:15,
    padding:5,
    margin:5
  },
  label:{
    fontSize:20,
    marginBottom:10
  }
})

export default CreateScreen;
