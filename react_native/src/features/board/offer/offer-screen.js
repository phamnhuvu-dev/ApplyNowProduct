"use strict";

import React, {Component} from "react";
import {FlatList, Image, Platform, StyleSheet, Text, View} from "react-native";
import SearchBar from "../../../components/search-bar";
import Avatar from "../../../components/avatar";

export default class OfferScreen extends Component {

  _renderItem = (item, index) => {
    return (
      <View style={{flexDirection: "row", marginTop: 16}}>
        <Avatar source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
        <View style={{flex: 1, marginLeft: 8, justifyContent: 'center'}}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text
              numberOfLines={1}
              style={{flex: 1}}>
              Name Name Name Name Name Name Name Name Name Name
            </Text>
            <Text numberOfLines={1}>
              Time
            </Text>
          </View>
          <Text numberOfLines={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum pellentesque lacus eleifend elit luctus blandit.</Text>
        </View>
      </View>
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{paddingHorizontal: 24}}
          data={[{key: "a"}, {key: "b"}]}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

