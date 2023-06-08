import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from 'expo-vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#441812' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#703125ff' },
      drawerContentStyle: { backgroundColor: '#3b110a' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#3b2622ff',
      drawerActiveBackgroundColor: '#c7866d',

    }
    }>
      <Drawer.Screen name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='ios-list' color={color} size={size} />)
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='ios-star' color={color} size={size} />)
        }}
      />
     
    </Drawer.Navigator>
  );
}
export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#441812' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#703125ff' },

          }
          }
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name='MealsDetail' component={MealDetailScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});




