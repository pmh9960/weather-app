import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#525252", "#3d72b4"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#3f4c6b", "#606c88"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#3f4c6b", "#606c88"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#274046", "#E6DADA"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#3F2D8E", "#928DAB"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#274046", "#E6DADA"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#304352", "#d7d2cc"],
        title: "Haze",
        subtitle: "Just don't go outside",
    },
    Dust: {
        iconName: "skull",
        gradient: ["#544a7d", "#f4791f"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#304352", "#d7d2cc"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Sand: {
        iconName: "skull",
        gradient: ["#544a7d", "#f4791f"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Dust: {
        iconName: "skull",
        gradient: ["#544a7d", "#f4791f"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Ash: {
        iconName: "skull",
        gradient: ["#544a7d", "#f4791f"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#16222A", "#3A6073"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#16222A", "#3A6073"],
        title: "Default Title I can't make all title.",
        subtitle: "I'm sorry about that...",
    },
}

export default function Weather({ temp, conditions }) {
    return <LinearGradient
        style={styles.container}
        colors={weatherOption[conditions].gradient}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                name={weatherOption[conditions].iconName}
                size={100}
                color="white" />
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
            <Text style={styles.title}>{weatherOption[conditions].title}</Text>
            <Text style={styles.subtitle}>{weatherOption[conditions].subtitle}</Text>
        </View>
    </LinearGradient >

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Clear", "Clouds", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        color: "white",
        fontSize: 42,
    },
    textContainer: {
        width: "100%",
        paddingHorizontal: 50,
        alignItems: "flex-start",
    },
    title: {
        color: "white",
        fontSize: 35,
        fontWeight: "400",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontSize: 25,
        fontWeight: "300",
    }

})
