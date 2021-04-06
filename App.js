import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Provider as BlogProvider} from './src/context/BlogContext';

const navigation = createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen
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
