import React  from "react";
import DisplayTickets, {getTixComponents} from "../components/DisplayTickets";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { TicketInterface } from "../types";
import {noData, someAvailable, noneAvailable} from './mockTicketData'
import { QueryClientProvider, QueryClient } from 'react-query';

//according to the docs -- mocking esm modules can only be done unsafely with a 
//different jest method.  jest.unsafe_mockModule.  but ereone seems to be mocking
// esm modules with the normal jest.mock


//mocking an entire module with jest.mock api
jest.mock('react-query', () => {
  return {
    useQuery: jest.fn(() => {
      return {
        data: undefined,
        error: undefined,
        status: 'pending'
      }
  })}
})

// const queryClient = new QueryClient();
// const useQuery = jest.fn(() => {
//   return {
//     data: someAvailable
// }})

const params = {params: {eventId:'1'}}

it('make sure display event renders',  () => {
  // const component = render(<DisplayTickets route={params} />, {
  //   wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  // })
  // component.debug();
  // const SectionHeader = screen.getByText('Section')
  // expect(SectionHeader).toBeVisible();
  
  
  // const time2 = component.rerender( <QueryClientProvider client={queryClient}>
  //     <DisplayTickets route={params} />
  // </QueryClientProvider>)  
})


// returns correctly if there is an error

// returns correctly if there are no available tickets
describe('return correct components when filtering for tickets', () => {
  it('returns a fallback component when no data is passed', ()=> {
    const result:JSX.Element[]  = getTixComponents(noData);
    const fallback = render(result[0]);
    expect(fallback.getByText('No Tickets to Display')).toBeVisible();
  })

  it('returns a fallback component when no tix are available', ()=> {
    const result:JSX.Element[]  = getTixComponents(noneAvailable);
    const fallback = render(result[0]);
    expect(fallback.getByText('No Tickets to Display')).toBeVisible();
  })

  it('returns available tickets', () => {
    // mock useQuery to get someAvailable data
    // render(<DisplayTickets route={params} />);
    
    //test if useQuery was called
    // test if there are 2 children components 
    
  })


})




