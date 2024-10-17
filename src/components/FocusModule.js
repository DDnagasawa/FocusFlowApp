// src/components/FocusModule.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const FocusModule = () => (
  <View style={styles.focusModule}>
    <Text style={styles.timerText}>1:02:59</Text>
    <View style={styles.iconContainer}>
      {/* 这里应该使用实际的图标组件 */}
      <Text style={styles.icon}>💻</Text>
      <Text style={styles.icon}>💪</Text>
      <Text style={styles.icon}>🍷</Text>
      <Text style={styles.icon}>📚</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  focusModule: {
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  timerText: {
    fontSize: theme.fontSizes.extraLarge,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    fontSize: theme.fontSizes.large,
  },
});

export default FocusModule;
