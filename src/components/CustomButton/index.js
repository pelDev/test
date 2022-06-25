import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'none',
  },
});

function CustomButton({
  //   width = '100%',
  label,
  color = colors.primary,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, {backgroundColor: color}]}>
      <Text style={styles.appButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
