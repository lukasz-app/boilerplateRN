import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from '../../global/themes';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: Colors.lightGrey,
  },
  containerActive: {
    backgroundColor: 'green',
    // borderColor: Colors.green,
  },
  label: {
    fontSize: Metrics.normalize(18),
    fontWeight: '600',
    fontFamily: Fonts.type.base,
    color: 'white',
    textAlign: 'center',
  },
  labelActive: {
    color: 'red',
  },
});
