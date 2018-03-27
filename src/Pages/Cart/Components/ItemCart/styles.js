import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  image: {
    height: 60,
    width: 60,
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

  price: {
    paddingTop: 10,
    fontSize: 14,
    color: colors.secundary,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantidadeInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: 4,
    height: 30,
    width: 40,
    color: colors.regular,
    borderWidth: 1,
    marginRight: metrics.baseMargin,
    borderColor: colors.light,
    paddingHorizontal: 10,
  },
});

export default styles;
