import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';


@inject('navigationStore')
@observer
class App extends Component {
static navigationOptions = {
  header: null,
};


render() {
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}} >
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Text>
        {'APP'}
      </Text>
    </View>
  );
}
}

export default App;

// App.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//   }).isRequired,
// };

// App.wrappedComponent.propTypes = {
//   authStore: PropTypes.shape().isRequired,
// };
