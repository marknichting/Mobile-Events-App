

export interface EventInterface {
  date: Date;
  name: string; //swapped location with date and it does not seem to matter
  location: string;
  time: Date;
  id: string;
}


export interface TicketInterface {
  section: number;
  row: number;
  seat: number;
  price: string;
  available: boolean;
  id: string;
  eventId: string;
}