import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchBar from "../components/search-bar";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <SearchBar></SearchBar>
      </View>
    )
  }
}