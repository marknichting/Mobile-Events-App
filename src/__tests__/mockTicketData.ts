import { TicketInterface } from "../types"



export const someAvailable: TicketInterface[] = [{
"section": 55,
"row": 27,
"seat": 50,
"price": "454.00",
"available": true,
"id": "1",
"eventId": "1"
},
{
"section": 10,
"row": 30,
"seat": 4,
"price": "531.00",
"available": true,
"id": "9",
"eventId": "1"
},
{
"section": 94,
"row": 78,
"seat": 25,
"price": "47.00",
"available": false,
"id": "17",
"eventId": "1"
  }]


export const noData: undefined = undefined;


export const noneAvailable: TicketInterface[] = [{
"section": 55,
"row": 27,
"seat": 50,
"price": "454.00",
"available": false,
"id": "1",
"eventId": "1"
},
{
"section": 10,
"row": 30,
"seat": 4,
"price": "531.00",
"available": false,
"id": "9",
"eventId": "1"
}]