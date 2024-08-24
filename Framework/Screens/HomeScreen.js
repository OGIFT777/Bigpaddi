import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { Theme } from '../Components/Theme';
import { Ionicons } from '@expo/vector-icons';
import { AppBotton } from '../Components/AppBotton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Cart } from './Cart';

function Home({navigation}) {
    return (
        <SafeAreaView style={{flex:1,alignContent:'center'}}>
        <View style={{ justifyContent:'space-evenly'}}>
            <Text>HomeScreen</Text>
            <Text>Buy my product</Text>
            <AppBotton onPress={() => navigation.navigate("ProductA")}>Get Started</AppBotton>

        </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({});

const Tab = createBottomTabNavigator();
export function HomeScreen(navigation) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let size;
                    if (route.name === 'Home') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                     else if (route.name==='Cart'){
                        size=focused? 35:23
                        iconName=focused?'cart' : 'cart-outline'
                    }
                    else if (route.name === 'Profile') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'person' : 'person-outline';
                    }
                   

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Theme.colors.primary,
                tabBarInactiveTintColor: Theme.colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name='Home' component={Home} />
                        <Tab.Screen name='Cart' component={Cart} />

            <Tab.Screen name='Profile' component={Profile} />

        </Tab.Navigator>
    )
}