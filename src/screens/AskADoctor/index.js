import React from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/Container';
import ImageSlider from '../../components/ImageSlider';
import globalStyles from '../../assets/global';
import style from './style';
import ArrowDownIcon from '../../assets/icons/ic_arrow_down.svg';
import colors from '../../assets/theme/colors';

const images = [
  require(`../../assets/images/image1.jpeg`),
  require(`../../assets/images/image2.jpeg`),
  require(`../../assets/images/image3.jpeg`),
];

function AskADoctorScreen({}) {
  return (
    <Container>
      {/** Slider */}
      <ImageSlider images={images} />

      <View style={[globalStyles.row]}>
        <Text style={[globalStyles.blueText]}>Video/Audio Consultation</Text>

        <View style={{width: 8}} />

        <ArrowDownIcon fill={colors.blue} />
      </View>
    </Container>
  );
}

export default AskADoctorScreen;
