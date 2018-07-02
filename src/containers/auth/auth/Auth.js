import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject('navigationStore')
@observer
class App extends Component {
static navigationOptions = {
  header: null,
};


render() {
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}} >
      <Text>
        {'Auth'}
        </Text>
    </View>
  );
}
}

export default App;

