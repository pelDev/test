import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    marginRight: 16,
  },
});

const Category = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 8}}>{item.image}</View>

      <Text
        style={{
          fontWeight: '400',
          color: colors.black,
          fontSize: 10,
          textAlign: 'center',
        }}>
        {item.label}
      </Text>
    </View>
  );
};

export default Category;
