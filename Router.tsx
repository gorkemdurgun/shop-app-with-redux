import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import color from './constants/color';
import Basket from './src/Basket';

export type RootStackParamList = {
  Shop: undefined;
  Basket: undefined;
};

const Router = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  const {basket} = useSelector((state: any) => state.marketReducer);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Shop"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => <Icon name="bars" size={20} />,
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarShowLabel: false,
            tabBarBadge: basket.length,
            tabBarBadgeStyle: {
              backgroundColor: color.primaryDark,
              fontSize: 12,
              fontWeight: 'bold',
            },
            tabBarIcon: () => <Icon name="shopping-cart" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
