import React,{useContext} from 'react';
import {View,Text,FlatList,Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen=()=>{
  var {state,addBlogPosts} =useContext(Context);
  return <View>
     <Text>Welcome</Text>
     <Button title="Add" onPress={addBlogPosts}/>
     <FlatList
     data={state}
     keyExtractor={blogPost=>blogPost.title}
     renderItem={({item})=>{
       return <Text>{item.title}</Text>
     }}
   />
   </View>

}

export default IndexScreen;
