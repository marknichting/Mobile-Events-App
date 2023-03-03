import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { useQueryClient, useQuery } from "react-query";
import axios from 'axios';
import Event from './Event'
import {EventInterface} from './types'


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
  
  if (data) {
    console.log(data)
  }

  return (
    <>
      <Text style={styles.title}>Events</Text>
      <View style={styles.category}>
        <Text>Event Name</Text>
        <Text >Event Location</Text>
        <Text >Event Date</Text>
      </View>
      {data ?
        data.map((event: EventInterface): JSX.Element => {
          return <Event key={event.id} event={event} />
        })
        :
        <Text> No Events to Display</Text>
      }
    </>
    )
  }
  


const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'white',
    backgroundColor:'#ADD8E6'
  },
  category: {
    backgroundColor: 'yellow',
    // width: '100%',
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
})