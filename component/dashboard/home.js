import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image} from "react-native"
import firestore from '@react-native-firebase/firestore';




// ----------------------------------------------     Home     --------------------------------------------------
export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);




// ----------------------------------------------   fetch users     --------------------------------------------------
    const fetchUsers = async () => {
        const db = firestore();
        const getData = await db.collection("userss").get();
        const showAds = [];
        getData.forEach((doc) => {
            showAds.push({ ...doc.data(), userrID: doc.id });
        });
        setData(showAds);
    };




// --------------------------------   filter user(donor or request for blood)  -----------------------------------------
    const Requests = data.filter((u) => u.wantTo == "Request for blood");
    const Donors = data.filter((u) => u.wantTo == "Become a Donor");

    return (
        <>
            <View style={styles.parent}>
                <View style={styles.child}>
                    <Image source={require('../../images/welcome.png')}
                        style={{ width: 120, height: 120, resizeMode: "contain", marginTop: -70 }} />
                    <Text style={styles.heading}>B Hero</Text>
                </View>
            </View>

            <View>
                <View style={{ marginTop: 60 }}></View>
                <View style={styles.cards}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 24, color: "#212121", marginTop: 19, fontWeight: "600" }}>Total Donors</Text>
                        <Text style={{ fontSize: 30, color: "#00b576", fontWeight: "normal", marginTop: 17, marginRight: 10 }}>{Donors.length}</Text>
                    </View>
                </View>

                <View style={styles.cards}>
                    <View style={styles.card}>
                        <Text style={{ fontSize: 24, color: "#212121", marginTop: 19, fontWeight: "600" }}>Total Requests</Text>
                        <Text style={{ fontSize: 30, color: "#f3607b", fontWeight: "normal", marginTop: 17, marginRight: 10 }}>{Requests.length}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}




// ----------------------------------------------- stylesheet   -------------------------------------------------------

const styles = StyleSheet.create({
    heading: {
        fontSize: 32,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    parent: {
        height: '36%',
        width: '100%',
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
    },
    child: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        paddingTop: 50,
        backgroundColor: '#f3607b',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },
    cards: {
        margin: 40,
        marginTop: 1,
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
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-between"
    },
});