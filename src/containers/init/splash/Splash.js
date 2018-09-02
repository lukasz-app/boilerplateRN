import React, { Component } from 'react';
import {
  View, Text, InteractionManager,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styles from './styles';
import NavigationStore from '../../../stores/NavigationStore';

@inject('navigationStore')
@observer
class Splash extends Component {
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
    navigate('Home');
  }, 3000);
};


render() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {'This is splash'}
      </Text>
    </View>
  );
}
}

export default Splash;
