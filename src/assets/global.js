import {StyleSheet} from 'react-native';
import colors from './theme/colors';

export default StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  blueText: {
    color: colors.blue,
    fontWeight: '500',
    fontSize: 14,
  },

  blackText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 14,
  },

  iconImage: {
    height: 14,
    width: 14,
  },
});
