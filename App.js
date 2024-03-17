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

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        //drawerContentContainerStyle: { backgroundColor: '#351401'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerItemStyle: {borderRadius: 40},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
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
    <StatusBar style='light' />
    <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: Platform.OS === 'android' ? true : false,
          headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25'}
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
          />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}
