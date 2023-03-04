import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import DisplayEvents from './src/components/DisplayEvents';
import DisplayTickets from './src/components/DisplayTickets';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <Stack.Navigator initialRouteName='Events'>
            <Stack.Screen
              name='Events'
              component={DisplayEvents}
            />
            <Stack.Screen
              name='Tickets'
              component={DisplayTickets}
            />
          </Stack.Navigator>
        </View>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: '#ADD8E6',
  }
});
