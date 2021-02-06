import React, { useState } from 'react'
import Header from "./Header"
import Search from "./Search"
import { View } from "react-native"

export default function MainPage(props) {
    let [search, setSearch] = useState("")
    return (
        <>
            <View>
                <Header searchMethod={setSearch} navigation={props.navigation} />
                <Search searchVal={search} navigation={props.navigation} />
            </View>
        </>
    )
}
