import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen.js';
import InfoScreen from '../screens/InfoScreen.js';
import AgeScreen from '../screens/AgeScreen.js';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }
          else if (route.name === 'Info') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          else if (route.name === 'Age') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Age" component={AgeScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;

<Ionicons name="calculator" size={24} color="black" />