import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import styles from './styles';


@inject('navigationStore')
@observer
export default class Auth extends Component {
static navigationOptions = {
  header: null,
};


render() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {'Auth'}
      </Text>
    </View>
  );
}
}
