import React  from "react";
import Event from "../components/Event";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { EventInterface } from "../types";

let event:EventInterface = {
"name": "laparoscope",
"date": new Date(),
"location": "7810 Hudson Pine",
"time": new Date(),
"id": "2"
}


it('test events render properly', ():void => {
  render(<Event key={'asdf'} event={event} />);
  const eventName = screen.getByText(event.name);
  const eventLocation = screen.getByText(event.location);
  const eventDate = screen.getByText(String(event.date).slice(0,10));
  
  expect(eventName).toBeVisible();
  expect(eventLocation).toBeVisible();
  expect(eventDate).toBeVisible();
})

it('can trigger event handler pressing on event name', ():void => {
  render(<Event key={'asdf'} event={event} />);
  fireEvent.press(screen.getByText(event.name));
  // expect(/* mocked function */).toBeCalledTimes(1);
})


// styling is correct?
// all props are given  --> done with static testing (TS)
// pressable works