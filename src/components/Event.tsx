import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { EventInterface } from './types';


export default function Event({ event: {name, location, date } }: { event: EventInterface }) {
  
  return (
    <View style={row}>
      <Text style={column}> {name}</Text>
      <Text style={column}> {location}</Text>
      <Text style={column}> {String(date).slice(0,10)}</Text>
    </View>
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