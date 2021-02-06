import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native"
import auth from '@react-native-firebase/auth'



// ----------------------------------------------     Header     --------------------------------------------------
export default function Home({ navigation, searchMethod }) {




// ----------------------------------------------     logout     --------------------------------------------------
    const logOut = async function () {
        try {
            const user = await auth().signOut()
            alert("signout sucecsfully")
            navigation.navigate("Signin")
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <>
            <View>
                <ScrollView>
                    <View style={styles.header}>
                        <TextInput style={styles.input} placeholder="Search Users" placeholderTextColor="#212121" onChangeText={(e) => searchMethod(e)} />
                        <TouchableOpacity activeOpacity={0.9} style={styles.headerBtn} onPress={logOut} >
                            <Text style={styles.headerBtnText}>LogOut</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}





// ----------------------------------------------    stylesheet    --------------------------------------------------
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f3607b',
        flexDirection: "row",
        padding: 27,
    },
    input: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "75%",
        height: 45,
        paddingLeft: 20,
        borderRadius: 90,
        backgroundColor: "#f5f5f5",
        borderColor: "#dbdbdb",
        borderWidth: 1,
        borderBottomColor: "white",
        borderBottomWidth: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.11,
        shadowRadius: 3.84,
        elevation: 15,
        borderRadius: 30,
    },
    headerBtn: {
        borderRadius: 90,
        width: 70,
        height: 45,
        marginLeft: 'auto',
        backgroundColor: "#f5f5f5",
        borderColor: "#dbdbdb",
        borderWidth: 1,
        borderBottomColor: "white",
        borderBottomWidth: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.11,
        shadowRadius: 3.84,
        elevation: 15,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    headerBtnText: {
        fontWeight: '600',
        fontSize: 13.6,
        color: "#212121"
    },

});