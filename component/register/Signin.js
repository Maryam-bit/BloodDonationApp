import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import auth from '@react-native-firebase/auth'

// ----------------------------------------------  signin screen   --------------------------------------------------

export default function Signin(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



// ----------------------------------------------  signin    --------------------------------------------------
    const signin = async function () {
        try {
            const user = await auth().signInWithEmailAndPassword(email, password)
            alert("signed in succcessfully")
            if (email.length > 0 && password.length > 0) {
                props.navigation.navigate("MyTabs")
            }

            setEmail("")
            setPassword("")
            
        }
        catch (e) {
            alert(e)
        }
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.body}>

                    <Image source={require('../../images/llogo.png')} style={{ width: 110, height: 110, resizeMode: "contain", marginTop: -40 }} />

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Signin</Text>
                    </View>

                    <TextInput keyboardType="email-address" style={styles.input} placeholder="Email" placeholderTextColor="#212121" onChangeText={(e) => setEmail(e)} value={email} />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" placeholderTextColor="#212121" onChangeText={(e) => setPassword(e)} value={password} />

                    <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={signin}>
                        <Text style={styles.btnText}>SignIn</Text>
                    </TouchableOpacity>

                    <View style={styles.regText}>
                        <Text style={styles.orText}>don't have account?</Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={styles.orText}> Signup</Text>
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
        justifyContent: "center",
        flex: 1,
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