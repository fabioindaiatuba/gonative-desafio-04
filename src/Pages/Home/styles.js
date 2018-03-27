import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroud,
    paddingBottom: 60,
  },
  listItems: {
    paddingBottom: metrics.baseMargin,
  },
  columnContainer: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
  loading: {
    marginTop: metrics.basePadding,
  },
});

export default styles;
