// src/components/TaskModule.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const tasks = ['需资料', '寄出', '报价单', '发表格'];

const TaskModule = () => (
  <View style={styles.taskModule}>
    {tasks.map((task, index) => (
      <TouchableOpacity key={index} style={styles.taskItem}>
        <Text style={styles.taskText}>{task}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  taskModule: {
    marginBottom: theme.spacing.large,
  },
  taskItem: {
    backgroundColor: theme.colors.taskBackground,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.small,
    marginBottom: theme.spacing.small,
  },
  taskText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.text,
  },
});

export default TaskModule;
