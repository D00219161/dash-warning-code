import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Index from '../screens/Index';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Index}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          textAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help" />,
          textAlign: 'center',
        }}
      />
      <BottomTab.Screen
        name="CreateAccount"
        component={ImageScreen}
        options={{
          title: 'CreateAccount',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-camera" />,
          textAlign: 'center',
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
      case 'Home':
        return 'Dash Warning';
    case 'Login':
      return 'Dash Warning';
      case 'Create Account':
        return 'Dash Warning';
  }
}
