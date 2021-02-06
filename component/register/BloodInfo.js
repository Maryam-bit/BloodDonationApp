import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';



// ----------------------------------------------   Blood info     --------------------------------------------------

export default function BloodInfo({ route, navigation }) {
    const [wantTo, setWantTo] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [gender, setGender] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("")
    const [loading, setLoading] = useState(false)
    const { email, fullName, password} = route.params;




// ----------------------------------------------  register user    --------------------------------------------------

    const signup = async function () {
        try {
            const user = await auth().createUserWithEmailAndPassword(email, password)
            firestore().collection("userss").doc(user.user.uid).set({ email, fullName, wantTo, bloodGroup, gender, city, address, contact })
            alert("signed up succcessfully")
            if (email.length > 0 && password.length > 0 && fullName.length > 0) {
                navigation.navigate("Signin")
            }
            else {
                alert("please fill form")
            }
            setWantTo("")
            setBloodGroup("")
            setGender("")
            setCity("")
            setAddress("")
            setContact("")
        }
        catch (e) {
            alert(e)
        }
    }


    return (
        <>
            <View style={styles.container}>
                <ScrollView>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Register</Text>
                    </View>

                    <View style={styles.body}>

                        <Text style={styles.text}>want to</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={wantTo}
                                style={styles.inputPicker}
                                value={wantTo}
                                onValueChange={(itemValue, itemIndex) => setWantTo(itemValue)}
                                onTouchStart={() => setLoading(true)}
                            >
                                <Picker.Item disabled={true} label="Select what you want to be" value="Select what you want to be" />
                                <Picker.Item label="Become a donor" value="Become a Donor" />
                                <Picker.Item label="Request for blood" value="Request for blood" />
                            </Picker>
                        </View>


                        <Text style={styles.text}>Select blood group</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={bloodGroup}
                                value={bloodGroup}
                                style={styles.inputPicker}
                                onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
                            >
                                <Picker.Item enabled={false} label="Select your Blood group" value="Select your blood group" />
                                <Picker.Item label="A+" value="A+" />
                                <Picker.Item label="A-" value="A-" />
                                <Picker.Item label="B+" value="B+" />
                                <Picker.Item label="B-" value="B-" />
                                <Picker.Item label="O+" value="O+" />
                                <Picker.Item label="O-" value="O-" />
                                <Picker.Item label="AB+" value="AB+" />
                                <Picker.Item label="AB-" value="AB-" />
                            </Picker>
                        </View>


                        <Text style={styles.text}>Select Gender</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={gender}
                                value={gender}
                                style={styles.inputPicker}
                                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            >
                                <Picker.Item enabled={false} label="Select your Gender" value="Select your Gender" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </View>


                        <Text style={styles.text}>Contact No</Text>
                        <TextInput style={styles.input} placeholder="Contact No" placeholderTextColor="#212121" onChangeText={(e) => setContact(e)} value={contact} />


                        <Text style={styles.text}>From</Text>
                        <TextInput style={styles.input} placeholder="City" placeholderTextColor="#212121" onChangeText={(e) => setCity(e)} value={city} />


                        <Text style={styles.text}>Address</Text>
                        <TextInput style={styles.TextArea} placeholder="Address" placeholderTextColor="#212121" multiline={true} numberOfLines={4} onChangeText={(e) => setAddress(e)} value={address} />


                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={signup}>
                                <Text style={styles.btnText}>Register</Text>
                            </TouchableOpacity>


                            <View style={styles.regText}>
                                <Text style={styles.orText}>Already registered?</Text>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Signin")}>
                                    <Text style={styles.orText}> SignIn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </>
    )
}




// ----------------------------------------------  stylesheet    --------------------------------------------------

const styles = StyleSheet.create({


    container: {
        marginTop: 30
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
        marginTop: 5,
        marginLeft: 30,
    },


    text: {
        color: "#f3607b",
        fontSize: 16,
        marginTop: 20,
        marginLeft: 5,
        textTransform: "uppercase",
    },


    input: {
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
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
        marginTop: 10,
    },


    TextArea: {
        height: 120,
        justifyContent: "flex-start",
        borderWidth: 1,
        borderColor: "lightgrey",
        width: "90%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        borderRadius: 90,
        textAlignVertical: 'top',
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
        marginTop: 10,
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
        marginTop: 25,
        marginRight: 30,
    },


    btnText: {
        color: "white",
        fontWeight: "bold",
        letterSpacing: 1,
    },


    regText: {
        flexDirection: "row",
        marginRight: 30,
    },


    inputPicker: {
        width: 307,
        height: 40,
        borderWidth: 3,
        borderColor: "red",
    },


    pickerContainer: {
        paddingLeft: 10,
        paddingTop: 4,
        width: 325,
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
        marginTop: 10,
    },


})





