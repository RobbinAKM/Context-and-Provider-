import React,{useContext} from 'react' ;
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';


const ShowScreen=({navigation})=>{
  const {state} =useContext(BlogContext);
  const blogPost=state.find(blogPost=>blogPost.id===navigation.getParam('id'))
  return<View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.post}</Text>
  </View>
}

ShowScreen.navigationOptions=({navigation})=>{
  return {
     headerRight: () => (
       <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:navigation.getParam('id')})}>
         <AntDesign name="edit" size={24} color="black" />
       </TouchableOpacity>
     ),
   };
}


export default ShowScreen;
