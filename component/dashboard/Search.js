import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



// ----------------------------------------------      Search      --------------------------------------------------
export default function Search({ navigation, searchVal }) {
    const [cards, setCards] = useState([]);
    const [MyProfile, setMyProfile] = useState([]);

    useEffect(() => {
        fetchUsersData();
        fetchMyProfile()
    }, []);



//-----------------------------------------------    fetch Users     ------------------------------------------------
    const fetchUsersData = async () => {
        const db = firestore();
        const getData = await db.collection("userss").get();
        const showAds = [];
        getData.forEach((doc) => {
            showAds.push({ ...doc.data(), userrID: doc.id });
        });
        setCards(showAds);
    };


    //-----------------------------------------------   fetch My profile   ------------------------------------------------
    const fetchMyProfile = async () => {
        const db = firestore();
        let myUID = auth()?.currentUser?.uid
        const data = await db.collection("userss").doc(myUID).get()
        setMyProfile(data.data());
    }


//-----------------------------------------------        Filter         ------------------------------------------------
    const filterCards = cards.filter(card => {
        return card.fullName.toLowerCase().includes(searchVal.toLowerCase())
    })

    return (
        <>
            <View>
                <ScrollView>
                    <View style={{ marginTop: 30 }}></View>
                    {filterCards.map((data) => (
                        <View style={styles.cards}>

                            {MyProfile.email != data.email ?
                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("SpecificDonor", {
                                    userIdd: data.userrID
                                })}>

                                    <View style={styles.card}>

                                        {data.gender == "Male" ?
                                            <Image source={require('../../images/maleProfile.jpg')}
                                                style={styles.userImg} />
                                            :
                                            <Image source={require('../../images/femaleProfile.jpg')}
                                                style={styles.userImg} />
                                        }

                                        <View style={styles.textContainer}>
                                            <Text style={{ fontSize: 22.5, color: "#212121", marginTop: 3, fontWeight: "600" }}>{data.fullName}</Text>

                                            
                                            {data.wantTo == "Become a Donor" ?
                                                <Text style={{ fontSize: 19, color: "#00b576", fontWeight: "normal", marginTop: -1 }}>Donor</Text>
                                                :
                                                <Text style={{ fontSize: 19, color: "#f3607b", fontWeight: "normal", marginTop: -1 }}>Want Blood</Text>
                                            }

                                            {(MyProfile.bloodGroup == "A+" && data.bloodGroup == "A+") || MyProfile.bloodGroup == "A+" && data.bloodGroup == "A-" || MyProfile.bloodGroup == "A+" && data.bloodGroup == "O+" || MyProfile.bloodGroup == "A+" && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "A-" && data.bloodGroup == "A-" || MyProfile.bloodGroup == "A-" && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "B+" && data.bloodGroup == "B+" ||MyProfile.bloodGroup == "B+"  && data.bloodGroup == "B-" ||MyProfile.bloodGroup == "B+"  &&  data.bloodGroup == "O+" || MyProfile.bloodGroup == "B+"  && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "B-" && data.bloodGroup == "B-" || MyProfile.bloodGroup == "B-" && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "AB+" && data.bloodGroup == "A+" || MyProfile.bloodGroup == "AB+" && data.bloodGroup == "A-" || MyProfile.bloodGroup == "AB+" && data.bloodGroup == "B+" 
                                            || MyProfile.bloodGroup == "AB+" &&  data.bloodGroup == "B-" || MyProfile.bloodGroup == "AB+" &&  data.bloodGroup == "AB+" ||MyProfile.bloodGroup == "AB+" && data.bloodGroup == "AB-" ||
                                            MyProfile.bloodGroup == "AB+" &&  data.bloodGroup == "O+" || MyProfile.bloodGroup == "AB+" &&data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "AB-" && data.bloodGroup == "A-" || MyProfile.bloodGroup == "AB-" &&  data.bloodGroup == "B-" || MyProfile.bloodGroup == "AB-" && data.bloodGroup == "AB-" || MyProfile.bloodGroup == "AB-" && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            (MyProfile.bloodGroup == "O+" && data.bloodGroup == "O+") || (MyProfile.bloodGroup == "O+" && data.bloodGroup == "O-" )?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            MyProfile.bloodGroup == "O-" && data.bloodGroup == "O-" ?
                                                <Text style={{ fontSize: 16, color: "green", fontWeight: "normal", marginTop: -1 }}>matched</Text>
                                            :
                                            null
                                            }
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                :
                                null
                            }
                        </View>
                    ))}
                    <View style={{ marginTop: 200 }}></View>
                </ScrollView>
            </View>
        </>
    )
}




// ----------------------------------------------      Stylesheet      --------------------------------------------------

const styles = StyleSheet.create({
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 90,
        marginTop: 6,
    },

    card: {
        backgroundColor: "white",
        height: 100,
        padding: 12,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        borderColor: "#f3607b",
        borderLeftWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
        flexDirection: "row",

        margin: 30,
        marginTop: 2,
    },

    textContainer: {
        marginLeft: 20,
        justifyContent: "center",
    },
});