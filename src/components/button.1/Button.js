import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, TextInput, Image,
} from 'react-native';
import { observer } from 'mobx-react';
import styles from './styles';


const Button = ({
  label, onPress, style, labelStyle, active,
}) => (
  <TouchableOpacity
    disabled={!active}
    onPress={onPress}
    style={[
      styles.container,
      active && styles.containerActive,
      style,
    ]}
  >
    <Text style={[styles.label, active && styles.labelActive, labelStyle]}>
      {label}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.shape(),
  labelStyle: PropTypes.shape(),
  active: PropTypes.bool,
};


export default observer(Button);
