import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: metrics.basePadding,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 60) / 2,
  },

  image: {
    height: 180,
    width: '80%',
    resizeMode: 'stretch',
  },

  containerText: {
    padding: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.dark,
  },

  subTitle: {
    fontSize: 11,
    color: colors.cinza,
  },

  priceContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  price: {
    paddingTop: 5,
    fontSize: 14,
    color: colors.secundary,
    fontWeight: 'bold',
  },

});

export default styles;
