import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { QueryClientProvider, QueryClient } from 'react-query';
import DisplayEvents from './src/components/DisplayEvents';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <DisplayEvents/> 
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: '#ADD8E6',
  }
});
