import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'




// ----------------------------------------------  onboard screen 3    --------------------------------------------------

export default function OnboardScreen3(props) {

    return (
        <>
            <View style={styles.container}>
                <Image source={require('../images/board1.png')} style={{ width: 270, height: 270, resizeMode: "contain", marginTop: -120 }} />
                <Text style={styles.title}>Register Your Self</Text>

                <TouchableOpacity style={styles.nextButton} activeOpacity={0.8}   onPress={()=> props.navigation.navigate("Signup")}>
                    <Text style={styles.nextbuttonText}>Get Started</Text>
                </TouchableOpacity>

            </View>
            
            
            <TouchableOpacity style={styles.prevButton} activeOpacity={0.8}  onPress={()=> props.navigation.navigate("OnboardScreen2")}>
                <Text style={styles.prevbuttonText}>Prev</Text>
            </TouchableOpacity>
        </>
    )
}



// ----------------------------------------------  stylesheet    --------------------------------------------------

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
        textAlign:"center",
        justifyContent: 'center',
        alignItems:"center",
        top: 30,
        backgroundColor: "#f3607b",
        borderRadius: 90,
        elevation: 9,
    },


    prevButton: {
        left: 20,
        bottom: 30,
    },


    nextbuttonText: {
        fontSize: 18,
        color:"#f3607b",
        fontWeight: "bold",
        letterSpacing: 2,
        textDecorationColor:"#f3607b",
        color:"white",
        fontSize:15,
        padding:8,
        paddingLeft:20,
        paddingRight:20,
    },


    prevbuttonText: {
        fontSize: 18,
        color:"#f3607b",
        fontWeight: "bold",
        letterSpacing: 2,
        textDecorationColor:"#f3607b",
        textDecorationLine:"underline",
    },


})