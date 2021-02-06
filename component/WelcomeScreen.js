import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'






// ----------------------------------------------  welcome screen    --------------------------------------------------

export default function WelcomeScreen(props) {




// ----------------------------------     display welcome screen for 2 sec    ------------------------------------------

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("OnboardScreen1")
        }, 2000);
    }, [])



    return (
        <>
            <View style={styles.container}>
                <Image source={require('../images/welcome.png')}
                    style={{ width: 140, height: 140, resizeMode: "contain", marginTop: -80 }} />
                <Text style={styles.title}>B Hero</Text>
            </View>
        </>
    )
}





// ----------------------------------------------  stylesheet   --------------------------------------------------

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f3607b",
    },

    
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 3,
        marginTop: 10,
    },

})