import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import colors from '../../assets/theme/colors';
import style from './style';

function CustomInput({icon, placeholder}) {
  const [text, setText] = useState('');

  return (
    <View style={style.searchSection}>
      {icon && <View style={style.searchIcon}>{icon}</View>}

      <TextInput
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderColor}
        onChangeText={setText}
        value={text}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

export default CustomInput;
