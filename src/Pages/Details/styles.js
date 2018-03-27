import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: metrics.baseRadius,
    justifyContent: 'space-between',
    margin: metrics.basePadding,
  },

  cart: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },

  image: {
    height: 285,
    width: '100%',
    resizeMode: 'contain',
  },

  containerText: {
    paddingVertical: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  right: {
    justifyContent: 'flex-end',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.dark,
  },

  subTitle: {
    fontSize: 12,
    color: colors.light,
  },

  price: {
    fontSize: 18,
    color: colors.secundary,
    fontWeight: 'bold',
  },

  footer: {
    height: 45,
    marginTop: metrics.baseMargin,
  },

  btn: {
    flex: 1,
    backgroundColor: colors.secundary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin,
  },

  btnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
