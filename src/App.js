import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import DateModule from './src/components/DateModule';
import TaskModule from './src/components/TaskModule';
import FocusModule from './src/components/FocusModule';
import CalendarModule from './src/components/CalendarModule';
import { theme } from './src/styles/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Date" component={DateModule} />
          <Stack.Screen name="Task" component={TaskModule} />
          <Stack.Screen name="Focus" component={FocusModule} />
          <Stack.Screen name="Calendar" component={CalendarModule} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.content}>
      <DateModule />
      <TaskModule />
      <FocusModule />
      <CalendarModule />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.medium,
  },
});

export default App;
