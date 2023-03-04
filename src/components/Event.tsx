import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { EventInterface } from './types';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParams = {
  Events: undefined;
  Tickets: { eventId: string };
}
type NavigationProps = NativeStackNavigationProp<StackParams>;

export default function Event({ event: {name, location, date, id} }: { event: EventInterface }) {
  const navigation = useNavigation<NavigationProps>();
  console.log('events: ', id)
  return (
    <>
    <View style={row}>
      <Pressable style={column} onPress={() => { navigation.navigate('Tickets', {eventId: id})}}>
        <Text>{name}</Text>
      </Pressable>
      <Text style={column}> {location}</Text>
      <Text style={column}> {String(date).slice(0,10)}</Text>
    </View>
    </>
  )
}


const { row, column } = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
    rowGap: 20,
    columnGap: 20
  },
  column: {
    flex: 1,
    // alignContent: 'flex-end'
  }
})