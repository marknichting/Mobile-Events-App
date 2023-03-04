import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { TicketInterface } from "./types";
import axios from "axios";


export default function DisplayTickets(props: any): JSX.Element {

  //react query to get relevant tickets
  // const { status, data, error } = useQuery('tickets', () => {
  //   axios.get(`https://6401070f3779a8626250f63f.mockapi.io/basic/events/${eventId}/tickets`)
  // })

    console.log(props.route.params)

  return (
    <>
      <View>
        <Text>Section</Text>  
        <Text> Price ($)</Text>  
      </View>
    </>
  )
    //   {data ?
    //     data.map(() => { })
    //     :
    //     <Text>No Tickets to Display</Text>
    // }
}