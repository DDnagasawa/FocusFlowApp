// src/components/DateModule.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const DateModule = () => (
  <View style={styles.dateModule}>
    <Text style={styles.dateTitle}>13 周五</Text>
    <Text style={styles.dateInfo}>15:00-16:00 3点</Text>
    <Text style={styles.dateInfo}>明天：中秋节（班）</Text>
  </View>
);

const styles = StyleSheet.create({
  dateModule: {
    marginBottom: theme.spacing.large,
  },
  dateTitle: {
    fontSize: theme.fontSizes.extraLarge,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
  },
  dateInfo: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.textSecondary,
  },
});

export default DateModule;
