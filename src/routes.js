import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors } from 'styles';

import Home from 'Pages/Home';
import Details from 'Pages/Details';
import Cart from 'Pages/Cart';

const Main = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.primary,
  },
});

const CartMenu = StackNavigator({
  Cart: { screen: Cart },
}, {
  initialRouteName: 'Cart',
  navigationOptions: {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
    },
    headerTintColor: colors.primary,
  },
});

const Routes = TabNavigator({
  Main: { screen: Main },
  CartMenu: { screen: CartMenu },
}, {
  initialRouteName: 'Main',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.light,
    style: {
      backgroundColor: colors.white,
    },
  },
});

export default Routes;
