import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listItems: {
    margin: metrics.baseMargin,
    padding: metrics.baseMargin,
  },
  footer: {
    height: 100,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 14,
    color: colors.cinza,
    fontWeight: 'bold',
  },
  footerTotal: {
    marginTop: metrics.baseMargin,
    fontSize: 24,
    color: colors.secundary,
    fontWeight: 'bold',
  },
});

export default styles;
