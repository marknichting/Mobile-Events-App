import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { EventInterface } from '../types';
import { rowStyle, columnStyle } from '../Styles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParams = {
  Events: undefined;
  Tickets: { eventId: string };
}
type NavigationProps = NativeStackNavigationProp<StackParams>;

export default function Event({ event: {name, location, date, id} }: { event: EventInterface }) {
  const navigation = useNavigation<NavigationProps>();
  
  return (
    <>
    <View style={rowStyle}>
      <Pressable style={columnStyle} onPress={() => { navigation.navigate('Tickets', {eventId: id})}}>
        <Text>{name}</Text>
      </Pressable>
      <Text style={columnStyle}> {location}</Text>
      <Text style={columnStyle}> {String(date).slice(0,10)}</Text>
    </View>
    </>
  )
}
