import React from 'react';
import {ScrollView, View, StatusBar} from 'react-native';
import styles from './style';

const Container = ({style, children}) => {
  return (
    <View
      style={[
        styles.wrapper,
        style,
        {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
      ]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </View>
  );
};

export default Container;
