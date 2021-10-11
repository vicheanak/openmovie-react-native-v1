import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator, BottomNavigation, BottomNavigationTab } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';


import Movie from '../screens/Movie';
import Serie from '../screens/Serie';
import Detail from '../screens/Detail';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(239, 207, 37)',
    background: 'rgb(41, 41, 41)',
    card: 'rgb(20, 20, 20)',
    text: 'rgb(225, 225, 225)',
    border: 'rgb(70, 70, 70)',
    notification: 'rgb(239, 207, 37)',
  },
};


export default function Navigation({ colorScheme }) {
  const { colors } = useTheme();
  return (
    <NavigationContainer
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();
const MovieStack = createStackNavigator();
const SerieStack = createStackNavigator();

const MovieStackScreen = () => {
  const {colors} = useTheme();
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen 
        name="Movie" 
        options={({navigation}) => ({
        title: 'Movie',
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />
      })}
      component={Movie} />
      <MovieStack.Screen 
        name="Detail" 
        options={({navigation}) => ({
        title: 'Detail',
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
      })}
      component={Detail} />
    </MovieStack.Navigator>
  )
}

const SerieStackScreen = () => {
  const {colors} = useTheme();
  return (
    <SerieStack.Navigator>
      <SerieStack.Screen 
        name="Serie" 
        options={({navigation}) => ({
        title: 'Serie',
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
      })}
      component={Serie} />
      <SerieStack.Screen 
        name="Detail" 
        options={({navigation}) => ({
        title: 'Detail',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />
      })}
      component={Detail} />
    </SerieStack.Navigator>
  )
}

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const BottomTab = createMaterialBottomTabNavigator();
// const BottomTab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: colors.background }}
      screenOptions={{
        tabBarActiveTintColor: '#d2b51c',
        headerShown: false,
      }}
      activeColor={colors.primary}>
      <BottomTab.Screen
        name="Movie"
        component={MovieStackScreen}
        options={({ navigation }) => ({
          tabBarLabel: null,
          title: 'Movie',
          tabBarIcon: ({ color }) => {
            return (<MaterialCommunityIcons style={{marginTop: 10, width: 50, height: 80}} name="movie-filter" color={color} size={30} />);
          }
        })}
      />
      <BottomTab.Screen
        name="Serie"
        component={SerieStackScreen}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons style={{marginTop: 10, width: 50, height: 80}} name="movie-roll" color={color} size={30} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}
