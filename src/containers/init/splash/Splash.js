import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { white } from 'ansi-colors';
import { styles } from '.';


@inject('navigationStore')
@observer
class App extends Component {
static navigationOptions = {
  header: null,
};
  
componentDidMount = () => {
  setTimeout(() => {
    this.props.navigationStore.navigate('Home')
  },2000)
};



render() {
  return (
    <View style={styles.container} >
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Text style={{color: 'white'}}>
        {'This is splash'}
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
