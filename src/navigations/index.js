import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './home';

const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
