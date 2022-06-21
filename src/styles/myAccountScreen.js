import {StyleSheet} from 'react-native';
import colors from './colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    backgroundColor: colors.grey,
    paddingVertical: 10,
    paddingLeft: 15,
  },
  flexDirection: {
    flexDirection: 'row',
  },
});
export default styles;
