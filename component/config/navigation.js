import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from "../register/Signup"
import { StyleSheet, Image } from "react-native"
import MainPage from "../dashboard/MainPage"
import Signin from "../register/Signin"
import Home from "../dashboard/home"
import SpecificDonor from "../dashboard/SpecificDonor"
import MyProfile from "../dashboard/MyProfile"
import WelcomeScreen from "../WelcomeScreen"
import OnboardScreen1 from "../OnboardScreen1"
import OnboardScreen2 from "../OnboardScreen2"
import OnboardScreen3 from "../OnboardScreen3"
import BloodInfo from "../register/BloodInfo"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();





// ----------------------------------------------     Stack Navigation     --------------------------------------------------
function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="OnboardScreen1" component={OnboardScreen1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="OnboardScreen2" component={OnboardScreen2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="OnboardScreen3" component={OnboardScreen3}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="BloodInfo" component={BloodInfo} options={{
                    headerStyle: {
                        backgroundColor: '#f3607b',
                        elevation: 9,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                    },
                }} />
                <Stack.Screen name="Signin" component={Signin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MainPage" component={MainPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MyTabs" component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="SpecificDonor" component={SpecificDonor}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="MyProfile" component={MyProfile}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}





// ----------------------------------------------      Tab navigation      --------------------------------------------------
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#f0f0f0"
            inactiveColor="#ededed"
            barStyle={{ backgroundColor: '#f3607b', paddingBottom: 8 }}>

            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/home.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />

            <Tab.Screen name="MainPage" component={MainPage}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/home.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />

            <Tab.Screen name="MyProfile" component={MyProfile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../images/profile.png')}
                            style={{ width: 20, height: 20, resizeMode: "contain", marginTop: 5 }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    iconStyle: {
        color: "white",
        fontSize: 30,
    }
});

export default AppNavigation;