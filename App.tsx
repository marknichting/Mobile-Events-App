import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import DisplayEvents from './src/components/DisplayEvents';
import DisplayTickets from './src/components/DisplayTickets';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const myTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(201, 253, 255)',
    card: 'rgb(1, 25, 130)',
    text: 'rgb(201, 253, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName='Events' screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            }
          }} >
            <Stack.Screen
              name='Events'
              component={DisplayEvents}
            />
            <Stack.Screen
              name='Tickets'
              component={DisplayTickets}
            />
          </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}


