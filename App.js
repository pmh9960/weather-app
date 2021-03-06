//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

import React from 'react';
import { Alert } from "react-native"
import * as Location from "expo-location"
import axios from "axios";

import Weather from "./Weather";
import Loading from "./Loading";

const API_KEY = "6efbc4b9684c2010422d5555958a893c";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp: data.main.temp, conditions: data.weather[0].main });
  }
  getLocation = async () => {
    try {
      Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad")
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, conditions } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} conditions={conditions} />;
  }
}
