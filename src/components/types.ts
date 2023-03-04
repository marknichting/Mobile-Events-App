

export interface EventInterface {
  date: Date;
  name: string; //swapped location with date and it does not seem to matter
  location: string;
  time: Date;
  id: string;
}


export interface TicketInterface {
  section: string;
  row: Date;
  seat: string;
  price: Date;
  available: boolean;
  id: string;
  eventId: string;
}