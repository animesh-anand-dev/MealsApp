import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { Button, Platform, Text } from 'react-native';
import MealDetailsSceen from './screens/MealDetailsSceen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#E6E6FA' },
        headerTintColor: 'black',
        //sceneContainerStyle: { backgroundColor: '#3f2f25' },
        // drawerContentContainerStyle: { backgroundColor: '#351401'},
        drawerContentStyle: {backgroundColor: 'white'},
        drawerItemStyle: {borderRadius: 40},
        drawerInactiveTintColor: 'black',
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: '#E6E6FA',
      }}
      initialRouteName='Categories'
    >
      <Drawer.Screen 
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
    <StatusBar style='dark' />
    {/* <FavoritesContextProvider> */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          // headerShown: Platform.OS === 'andrid' ? true : false,
          headerStyle: {backgroundColor: '#E6E6FA'},
            headerTintColor: 'black',
            //contentStyle: { backgroundColor: '#3f2f25'}
        }}>
        <Stack.Screen 
          name='Drawer' 
          component={DrawerNavigator} 
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen 
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
          }}
        /> */}

        <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen}
          // options={ ( {route, navigation} ) => {
          //     const catTitle = route.params.categorytitle;
          //     return {
          //       title: catTitle
          //     }
          // }}  
          />

          <Stack.Screen
            name='MealDetail'
            component={MealDetailsSceen}
            options={{
              title: 'Meal Details'
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavoritesContextProvider> */}
    </>
  );
}
