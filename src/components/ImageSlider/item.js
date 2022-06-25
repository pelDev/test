import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width - 40;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 120,
    borderRadius: 8,
  },
});

const ImageSlideItem = ({item, index}) => {
  return (
    <View style={styles.container} key={'slide-item-' + index}>
      <Image source={item} style={styles.image} />
    </View>
  );
};

export default ImageSlideItem;
