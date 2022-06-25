import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './style';
import {ScrollView} from 'react-native-virtualized-view';

const Container = ({style, children}) => {
  return (
    <View
      style={[
        styles.wrapper,
        style,
        {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </View>
  );
};

export default Container;
