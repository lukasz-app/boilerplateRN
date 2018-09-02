import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styles from './styles';
import NavigationStore from '../../../stores/NavigationStore';

@inject('navigationStore')
@observer
class App extends Component {
  static propTypes = {
    navigationStore: PropTypes.shape(NavigationStore),
  }

static navigationOptions = {
  header: null,
};


componentDidMount = () => {
  const {
    navigationStore: {
      navigate,
    },
  } = this.props;
  setTimeout(() => {
    navigate('Splash');
  }, 3000);
};

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {'APP'}
      </Text>
      <TouchableOpacity
        onPress={() => console.log('presssssed')}
      >
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
}

export default App;
