import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect, vi} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import { TopCardPC } from './top-card-pc';
const sampleCard = {id: '635', name: 'Steel', image: 'https://www.superherodb.com/pictures2/portraits/10/100/1383.jpg', 
powerstats: {combat: "64",
durability: "90",
intelligence:"81",
power:"64",
speed:"53",
strength:"82"}}

it('Test start game button',()=>{

    const test=vi.fn();
    render(<TopCardPC card={sampleCard} gameRound={5} playTurnPC={test} turn={true} show={true}/>);
    expect( screen.getByText('Steel')).toBeInTheDocument();
});

