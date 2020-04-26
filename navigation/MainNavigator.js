import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

//import TabBarIcon from '../components/TabBarIcon';
import WallScreen from '../screens/WallScreen';
import RunScreen from '../screens/RunScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Wall';

export default function MainNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <MainTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <MainTab.Screen
        name="Wall"
        component={WallScreen}
        options={{
          title: 'Wall',
          //tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <MainTab.Screen
        name="Run"
        component={RunScreen}
        options={{
          title: 'Run',
          //tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          //tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </MainTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Wall':
      return 'Explore';
    case 'Run':
      return 'Challenge';
    case 'Profile':
      return 'Profile';
  }
}
