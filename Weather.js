import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#525252", "#3d72b4"],
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#3f4c6b", "#606c88"],
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#3f4c6b", "#606c88"],
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#8e9eab", "#eef2f3"],
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#274046", "#E6DADA"],
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2BC0E4", "#EAECC6"],
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#1F1C2C", "#928DAB"],
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#274046", "#E6DADA"],
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#304352", "#d7d2cc"],
    },
    Dust: {
        iconName: "skull",
        gradient: ["#f4791f", "#544a7d"],
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#304352", "#d7d2cc"],
    },
    Sand: {
        iconName: "skull",
        gradient: ["#f4791f", "#544a7d"],
    },
    Dust: {
        iconName: "skull",
        gradient: ["#f4791f", "#544a7d"],
    },
    Ash: {
        iconName: "skull",
        gradient: ["#f4791f", "#544a7d"],
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#16222A", "#3A6073"],
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#16222A", "#3A6073"],
    },
}

export default function Weather({ temp, conditions }) {
    return <LinearGradient
        style={styles.container}
        colors={weatherOption["Rain"].gradient}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
                name={weatherOption["Rain"].iconName}
                size={100}
                color="white" />
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={styles.halfContainer}>
        </View>
    </LinearGradient>

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
    }

})
