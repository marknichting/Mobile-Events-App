import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useQueryClient, useQuery } from "react-query";
import axios from 'axios';
import Event from './Event'
import { EventInterface } from '../types';
import { container } from "../Styles";


export default function DisplayEvents():JSX.Element {
  const fetchEvents = async (): Promise<EventInterface[]> => {
    try {
      const res = await axios.get('https://6401070f3779a8626250f63f.mockapi.io/basic/events');
      return res.data;
    }
    catch (err) {
      throw err;
    }
  }
  
  let {data, status, error} = useQuery('events', fetchEvents, {refetchOnWindowFocus: false})
  

  return (
    <View style={container}>
      {data ?
        data.map((event: EventInterface): JSX.Element => {
          return <Event key={event.id} event={event} />
        })
        :
        <Text> No Events to Display</Text>
      }
    </View>
    )
  }
