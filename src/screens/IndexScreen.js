import React,{useContext,useEffect} from 'react';
import {View,Text,FlatList,Button,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';


const IndexScreen=({navigation})=>{
  var {state,addBlogPosts,deleteBlogPosts,getBlogPosts} =useContext(Context);

  useEffect(()=>{
    getBlogPosts();

    const listener = navigation.addListener('didFocus',()=>{
      getBlogPosts();
    });

    return ()=>{
      listener.remove();
    }
  },[]);

  return <View>
     <FlatList
     data={state}
     keyExtractor={blogPost=>blogPost.id.toString()}
     renderItem={({item})=>{
       return(
         <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
         <View style={styles.row}>
        <Text>{item.title} {item.id}</Text>
        <TouchableOpacity onPress={()=>deleteBlogPosts(item.id)}>
        <Ionicons name="trash-outline" size={24} color="black" />
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
      )
     }}
   />
   </View>

}

IndexScreen.navigationOptions=({navigation})=>{
  return {
     headerRight: () => (
       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
         <Ionicons name="add" size={24} color="black" />
       </TouchableOpacity>
     ),
   };
}

const styles=StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    borderTopWidth:1,
    borderColor:'grey'
  }
});

export default IndexScreen;
