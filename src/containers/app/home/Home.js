import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import styles from "./styles";
import AppStore from "../../../stores/AppStore";
import { Button, Button1 } from "../../../components";
import MainRouter from "../../../navigation/routers/MainRouter";

@inject("navigationStore", "appStore")
@observer
export default class Home extends Component {
  static router = MainRouter;
  static propTypes = {
    navigationStore: PropTypes.shape({
      navigate: PropTypes.func,
      boBack: PropTypes.func
    }),
    appStore: PropTypes.shape({
      add: PropTypes.func,
      initApp: PropTypes.func
    })
  };

  static navigationOptions = {
    title: "Home"
  };

  render() {
    const {
      appStore: { count, add, subtract }
    } = this.props;
    console.log(" home render , count : ", count);
    const items = [];
    for (let index = 0; index < count; index++) {
      items.push(<View style={styles.item} key={`keyForIndex:${index}`} />);
    }

    return (
      <View style={styles.container}>
        <View style={styles.contentContainerWrapper}>
          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={styles.contentContainerNested}>
            {items}
          </ScrollView>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            label="+"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={add}
            active
          />
          <Button
            label="-"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={subtract}
            active
          />
          <View style={styles.buttonPlaceholder} />
        </View>
      </View>
    );
  }
}
