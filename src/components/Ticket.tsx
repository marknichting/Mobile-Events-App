import React from "react";
import { View, Text, Pressable } from "react-native";
import { TicketInterface } from "../types";
import { rowStyle, columnStyle } from '../Styles';


export default function Ticket({ticket:{section, row, seat, price, available, id}}: {ticket : TicketInterface}){
  
  return (
    <Pressable style={rowStyle} onPress={()=>{console.log('you clicked me!')}}>
      <Text style={columnStyle}>{section}</Text>
      <Text style={columnStyle}>{price}</Text>
    </Pressable>
  )
}