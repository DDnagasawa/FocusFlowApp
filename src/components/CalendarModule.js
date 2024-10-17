// src/components/CalendarModule.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const days = ['日', '一', '二', '三', '四', '五', '六'];
const dates = [1, 2, 3, 4, 5, 6, 7];

const CalendarModule = () => (
  <View style={styles.calendarModule}>
    <View style={styles.weekRow}>
      {days.map((day, index) => (
        <Text key={index} style={styles.weekDay}>{day}</Text>
      ))}
    </View>
    <View style={styles.dateRow}>
      {dates.map((date, index) => (
        <View key={index} style={[styles.dateCell, date === 6 && styles.currentDate]}>
          <Text style={[styles.dateText, date === 6 && styles.currentDateText]}>{date}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  calendarModule: {
    marginTop: theme.spacing.large,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.small,
  },
  weekDay: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateCell: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: theme.fontSizes.medium,
  },
  currentDate: {
    backgroundColor: theme.colors.primary,
    borderRadius: 15,
  },
  currentDateText: {
    color: theme.colors.white,
  },
});

export default CalendarModule;
