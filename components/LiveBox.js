import React from "react";
import {View, Text, StyleSheet} from "react-native";
import LiveEventHeader from "./LiveEventHeader";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthPercentageToDP,
} from "react-native-responsive-screen";

const LiveBox = ({ children, userName, title }) => {
    return (
        <View style={styles.box}>
            <LiveEventHeader/>
            <View>
                <View style={styles.user}>
                    <View style={styles.userCircle}/>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    box: {
        backgroundColor: "gray",
        marginRight: wp(4),
        height: hp(35),
        width: wp(50),
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: hp(1.5),
        borderRadius: 13,
    },
    liveEvent: {
        display: "flex",
        flexDirection: "row",
        padding: wp(2),
    },
    user: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: wp(24.5),
    },
    userName: {
        paddingLeft: wp(1.5),
        fontSize: wp(4),
        color: "white",
    },
    userCircle: {
        backgroundColor: "white",
        height: hp(3),
        width: hp(3),
        borderRadius: 100,
    },
    title: {
        fontSize: wp(5.25),
        paddingTop: wp(1.5),
        color: "white",
    }
})

export default LiveBox