import React from 'react';
import { View, StyleSheet } from 'react-native';

const Stack = ({ children }) => {
  return <View style={styles.stack}>{children}</View>;
};

const styles = StyleSheet.create({
  stack: {
    position: 'relative',
  },
});

export default Stack;
