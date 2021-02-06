import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'



// ----------------------------------------------  onboard screen 2    --------------------------------------------------

export default function OnboardScreen2(props) {

    return (
        <>

            <View style={styles.container}>
                <Image source={require('../images/board2.png')} style={{ width: 270, height: 270, resizeMode: "contain", marginTop: -120 }} />
                <Text style={styles.title}>Find blood donors & requests for blood</Text>
            </View>

            <TouchableOpacity style={styles.prevButton} activeOpacity={0.8}  onPress={()=> props.navigation.navigate("OnboardScreen1")}>
                <Text style={styles.nextbuttonText}>Prev</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}  onPress={()=> props.navigation.navigate("OnboardScreen3")}>
                <Text style={styles.nextbuttonText}>Next</Text>
            </TouchableOpacity>

        </>
    )
}




// ----------------------------------------------  stylesheet   --------------------------------------------------

const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    title: {
        color: "#212121",
        fontSize: 18,
        // fontWeight: "bold",
        letterSpacing: 2,
        marginTop: 10,
    },


    nextButton: {
        position: "absolute",
        right: 20,
        bottom: 30,
    },


    prevButton: {
        position: "absolute",
        left: 20,
        bottom: 30,
    },


    nextbuttonText: {
        fontSize: 18,
        color:"#f3607b",
        fontWeight: "bold",
        letterSpacing: 2,
        textDecorationColor:"#f3607b",
        textDecorationLine:"underline",
    },


})