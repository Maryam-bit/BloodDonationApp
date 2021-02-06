import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, } from 'react-native'




// ----------------------------------------------  signup screen    --------------------------------------------------

export default function Signup(props) {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>


                    <Image source={require('../../images/llogo.png')} style={{ width: 100, height: 100, resizeMode: "contain", marginTop: -40 }} />


                    <View style={styles.header}>
                        <Text style={styles.headerText}>Register</Text>
                    </View>


                    <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#212121" onChangeText={(e) => setFullName(e)} value={fullName} />
                    <TextInput keyboardType="email-address" style={styles.input} placeholderTextColor="#212121" placeholder="Email" onChangeText={(e) => setEmail(e)} value={email}/>
                    <TextInput secureTextEntry={true} style={styles.input} placeholderTextColor="#212121" placeholder="Password" onChangeText={(e) => setPassword(e)} value={password} />


                    <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={() => props.navigation.navigate("BloodInfo", {
                        email: email,
                        fullName: fullName,
                        password: password,
                    })}>
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>


                    <View style={styles.regText}>
                        <Text style={styles.orText}>Already registered?</Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("Signin")}>
                            <Text style={styles.orText}> SignIn</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </>
    )
}




// ----------------------------------------------  stylesheet    --------------------------------------------------

const styles = StyleSheet.create({


    container: {
        marginTop: -60,
        flex: 1,
        justifyContent: "center",
    },


    header: {
        alignItems: "center",
        padding: 20,
    },


    headerText: {
        color: "#242424",
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 3,
    },


    body: {
        alignItems: "center",
        marginTop: 30
    },


    input: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
        paddingLeft: 20,
        marginBottom: 28,
        borderRadius: 90,
    },


    btn: {
        backgroundColor: "#f3607b",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 9,
        paddingBottom: 9,
        borderRadius: 90,
        width: "60%",
        alignItems: "center",
    },


    btnText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
    },


    orText: {
        marginTop: 15,
        color: "grey"
    },


    regText: {
        flexDirection: "row"
    },


})