import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider as BlogProvider} from './src/context/BlogContext';

const navigation = createStackNavigator({
  Index:IndexScreen
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'blogs'
  }
});

const Main =createAppContainer(navigation);

export default ()=>{
  return <BlogProvider>
  <Main/>
  </BlogProvider>
}
