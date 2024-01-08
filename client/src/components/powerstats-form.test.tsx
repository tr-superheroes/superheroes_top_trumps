import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect, vi} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import { PowerstatsForm } from './powerstats-form';


const response = [{id: '635', name: 'Steel', image: 'https://www.superherodb.com/pictures2/portraits/10/100/1383.jpg', 
powerstats: {combat: "64",
durability: "90",
intelligence:"81",
power:"64",
speed:"53",
strength:"82"}}];
it('Test if powerstats form loads',async()=>{
    const test = vi.fn();
    render(<PowerstatsForm powerstats={response[0].powerstats} onClickFn={test} optionChangeFn={test}/>);
    expect(await screen.getByText(/powerstats/i)).toBeInTheDocument();
})

it('Checks if play button is enabled',async ()=>{
    const test = vi.fn();
    render(<PowerstatsForm powerstats={response[0].powerstats} onClickFn={test} optionChangeFn={test}/>);
        
    const playButton = await screen.getByDisplayValue("Play Card");
    expect(playButton).toBeEnabled();
})

it('Checks if radio button change calls fn',async ()=>{
    const test = vi.fn();
    render(<PowerstatsForm powerstats={response[0].powerstats} onClickFn={test} optionChangeFn={test}/>);
    const radioButton = await screen.getByRole('radio',{name:/power/i});

    fireEvent.click(radioButton);
    expect(test).toBeCalled();
})
it('Checks if play button click calls fn',async ()=>{
    const test = vi.fn();
    render(<PowerstatsForm powerstats={response[0].powerstats} onClickFn={test} optionChangeFn={test}/>);
    const playButton = await screen.getByRole('button');

     fireEvent.click(playButton);

    expect(test).toBeCalled();
})
