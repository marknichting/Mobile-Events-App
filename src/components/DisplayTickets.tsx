import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import { TicketInterface } from "../types";
import axios from "axios";
import Ticket from './Ticket'
import { container, columnStyle, rowStyle } from "../Styles";

type DisplayTixProps = {
  route: {params: {eventId : string}}
}

export function getTixComponents(data: TicketInterface[] | undefined):JSX.Element[] {
  if (data) {
    const filtered =  data.filter((ticket: TicketInterface): boolean => ticket.available)
    if (filtered.length > 0 ) {
      return filtered.map((availableTix: TicketInterface):JSX.Element => { return <Ticket key={availableTix.id} ticket={availableTix} /> })
    }
  } 
  return [<Text key={'fallback'}>No Tickets to Display</Text>];
} 
    



export default function DisplayTickets({route: {params: {eventId}}}: DisplayTixProps): JSX.Element {
  const fetchTickets = async (): Promise<TicketInterface[]> => {
    console.log('actually called')
    try {
      const res = await axios.get(`https://6401070f3779a8626250f63f.mockapi.io/basic/events/${eventId}/tickets`)
      return res.data
    }
    catch (err) {
      throw err;
    }
  }

  //react query to get relevant tickets { status, data, error }
  const  {status, data, error} = useQuery('tickets', fetchTickets, {refetchOnWindowFocus: false})

  if (error) {
    return <Text> There was an error in requesting the data</Text>
  }
  
  return (
    <View style={container}>
      <View style={rowStyle}>
        <Text style={styles.columnHeader} testID={'section'}>Section</Text>  
        <Text style={styles.columnHeader}>Price ($)</Text>  
      </View>
      {getTixComponents(data)}
    </View>
  )
}

const styles = StyleSheet.create({
  columnHeader: {
    ...columnStyle,
    fontWeight: 'bold'
  }
})



     