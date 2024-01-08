import '@testing-library/jest-dom';
import '@testing-library/react';

import {setupServer} from 'msw/node';

import {it,expect, beforeAll, afterAll,afterEach} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import { GameContainer } from './gameContainer';
import { GameContext } from './startGame';


const response = [{id: '635', name: 'Steel', image: 'https://www.superherodb.com/pictures2/portraits/10/100/1383.jpg', 
powerstats: {combat: "64",
durability: "90",
intelligence:"81",
power:"64",
speed:"53",
strength:"82"}},
{id: '619', name: 'Spider-Gwen', image: 'https://www.superherodb.com/pictures2/portraits/10/100/10507.jpg', powerstats: {combat: 
"70",durability: "70",intelligence: "75",power: "66",speed: "63",strength: "55"}},
{id: '579', name: 'Scarlet Witch', image: 'https://www.superherodb.com/pictures2/portraits/10/100/444.jpg', powerstats: {combat: 
"80",durability: "70",
intelligence: "100",power:"100",speed:"29",strength: "10"}},
{id: '277', name: 'Gary Bell', image: 'https://www.superherodb.com/pictures2/portraits/10/100/1526.jpg', powerstats: {combat: 
"10",durability: "10",intelligence: "63",
power: "54",speed: "8",strength: "5"}}];
it('Test start game button',async()=>{
    render(
    <GameContext.Provider value={response}>
    <GameContainer/>
    </GameContext.Provider>);
    expect(await screen.getByText(/your turn/i)).toBeInTheDocument();
})

it('Checks if play button is enabled',async ()=>{
    render(
        <GameContext.Provider value={response}>
        <GameContainer/>
        </GameContext.Provider>);
    const playButton = await screen.getByDisplayValue("Play Card");
    //fireEvent.click(playButton);

    expect(playButton).toBeEnabled();
})

it('Checks if play button click shows winner',async ()=>{
    render(
        <GameContext.Provider value={response}>
        <GameContainer/>
        </GameContext.Provider>);
    const playButton = await screen.getByDisplayValue("Play Card");
    const radioButton = await screen.getByRole('radio',{name:/power/i});

    fireEvent.click(radioButton);
    fireEvent.click(playButton);

    expect(screen.getByText(/win this round/i)).toBeEnabled();
})

it('Checks if play button click without radio doesnt play the card',async ()=>{
    render(
        <GameContext.Provider value={response}>
        <GameContainer/>
        </GameContext.Provider>);
    const playButton = await screen.getByDisplayValue("Play Card");
    //const radioButton = await screen.getByRole('radio',{name:/power/i});

    //fireEvent.click(radioButton);
    fireEvent.click(playButton);

    expect(screen.getByText(/your turn/i)).toBeEnabled();
})

it('Checks if Next turn button shows on play of card',async ()=>{
    render(
        <GameContext.Provider value={response}>
        <GameContainer/>
        </GameContext.Provider>);
    const playButton = await screen.getByDisplayValue("Play Card");
    const radioButton = await screen.getByRole('radio',{name:/power/i});

    fireEvent.click(radioButton);
    fireEvent.click(playButton);

    expect(screen.getByRole('button')).toBeEnabled();
})

it('Click of Next turn button shows your turn with next cards',async ()=>{
    render(
        <GameContext.Provider value={response}>
        <GameContainer/>
        </GameContext.Provider>);
    const playButton = await screen.getByDisplayValue("Play Card");
    const radioButton = await screen.getByRole('radio',{name:/power/i});

    fireEvent.click(radioButton);
    fireEvent.click(playButton);

    const nextButton = screen.getByRole('button');
    fireEvent.click(nextButton);
    expect(screen.getByText(/your turn/i)).toBeInTheDocument();
})








