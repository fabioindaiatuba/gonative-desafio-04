import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  containerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  item: {
    color: colors.whiteTransparent,
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    paddingBottom: metrics.baseMargin,
    borderBottomColor: colors.transparent,
    borderBottomWidth: 8,

  },
  active: {
    color: colors.white,
    paddingBottom: metrics.baseMargin,
    borderBottomColor: colors.white,
    borderBottomWidth: 8,
  },
});

export default styles;
