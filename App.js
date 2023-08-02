import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons"
import Home from './components/Home';
import Translate from './components/Translate';

const Tab = createBottomTabNavigator()


export default function App() {
  return (
    <>

      
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Asosiy' options={{ tabBarIcon(proms) { return <AntDesign name='home'  {...proms} /> } }} component={Home} />
            <Tab.Screen name='Tarjima qilish' options={{ tabBarIcon(proms) { return <AntDesign name='search1'  {...proms} /> } }} component={Translate} />
          </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
