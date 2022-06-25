import React, {useLayoutEffect} from 'react';
import {Text, View, Image, FlatList, Dimensions} from 'react-native';
import Container from '../../components/Container';
import ImageSlider from '../../components/ImageSlider';
import globalStyles from '../../assets/global';
import ArrowDownIcon from '../../assets/icons/ic_arrow_down.svg';
import colors from '../../assets/theme/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Talk from '../../assets/images/talk.svg';
import Pharmacy from '../../assets/images/pharmacy.svg';
import Hospital from '../../assets/images/home.svg';
import Category from './category';

const images = [
  require(`../../assets/images/image1.jpeg`),
  require(`../../assets/images/image2.jpeg`),
  require(`../../assets/images/image3.jpeg`),
];

const categories = [
  {
    label: 'Talk to a Doctor',
    image: <Talk fill="#65CE7C" />,
  },
  {label: 'Hospital', image: <Hospital />},
  {label: 'Pharmacy', image: <Pharmacy />},
];

function AskADoctorScreen({navigation}) {
  const buildNotificationIcon = () => (
    <View style={{paddingHorizontal: 16}}>
      <Image
        source={require('../../assets/images/not.png')}
        style={[globalStyles.iconImage, {height: 20, width: 20}]}
      />
    </View>
  );

  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        headerRight: buildNotificationIcon,
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        },
      });
    }
  }, [navigation]);

  return (
    <Container>
      {/** Slider */}
      <ImageSlider images={images} />

      <View style={[globalStyles.row]}>
        <Text style={[globalStyles.blueText]}>Video/Audio Consultation</Text>

        <View style={{width: 8}} />

        <ArrowDownIcon fill={colors.blue} />
      </View>

      <View style={{height: 16}} />

      <CustomInput
        placeholder={'Select Specialty'}
        icon={
          <Image
            source={require('../../assets/icons/ic_ellips_green.png')}
            style={globalStyles.iconImage}
          />
        }
      />

      <View style={{height: 8}} />

      <CustomInput
        placeholder={'Select Date'}
        icon={
          <Image
            source={require('../../assets/icons/ic_calendar.png')}
            style={globalStyles.iconImage}
          />
        }
      />

      <View style={{height: 16}} />

      <CustomButton label={'Search'} />

      <View style={{height: 32}} />

      <Text style={[globalStyles.blackText, {fontSize: 16}]}>Categories</Text>

      <View style={{height: 16}} />

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.label}
        horizontal
        renderItem={Category}
      />

      <View style={{height: 16}} />
    </Container>
  );
}

export default AskADoctorScreen;
