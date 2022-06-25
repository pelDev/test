import React, {useState} from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ImageSlideItem, {SLIDER_WIDTH, ITEM_WIDTH} from './item';
import colors from '../../assets/theme/colors';

const ImageSlider = ({images = []}) => {
  const isCarousel = React.useRef(null);

  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={images}
        renderItem={ImageSlideItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />

      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 30,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: colors.orange,
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 6,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
        tappableDots={false}
      />
    </View>
  );
};

export default ImageSlider;
