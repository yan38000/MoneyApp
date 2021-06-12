/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { color } from 'react-native-reanimated';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/HomeScreen';
import { BottomTabParamList, TabHomeParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  {/* BOTTOM BAR */}
  return (
    
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        showLabel : false,
        }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" color={color} size={23}/>,
        }}
      />

<BottomTab.Screen
        name="Statistical"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-pie" color={color} size={21}/>,
        }}
      />

<BottomTab.Screen
        name="Box"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="archive" color={color} size={21}/>,
        }}
      />

<BottomTab.Screen
        name="Setting"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="ellipsis-v" color={color} size={21}/>,
        }}
      />
     
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        
        name="Home"
        component={Home}
        options={{ 
          headerStyle : {
            backgroundColor: ""
          },
          headerTitleStyle : {
              fontSize : 24,
              fontWeight : "600",
              letterSpacing : 1
          } ,    
          headerTitle: 'My Cards',
          headerRightContainerStyle: {
            marginRight :20,
          },
          headerRight : () =>(
            <FontAwesome5 name="user" color="#fff" size={21}/>
            
          ),
        }}

        
      />
    </TabHomeStack.Navigator>
  );
}
