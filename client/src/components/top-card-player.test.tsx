import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect, vi} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import { TopCardPlayer} from './top-card-player';
const sampleCard = {id: '635', name: 'Steel', image: 'https://www.superherodb.com/pictures2/portraits/10/100/1383.jpg', 
powerstats: {combat: "64",
durability: "90",
intelligence:"81",
power:"64",
speed:"53",
strength:"82"}}


it('Test player top card load',()=>{

    const test=vi.fn();
    render(<TopCardPlayer card={sampleCard} gameRound={5} showTime={true} onClickFn={test} optionChangeFn={test}/>);
    expect( screen.getByText('Steel')).toBeInTheDocument();
});

it('Test player top card image',async()=>{

    const handleChange = () =>{}
    render(<TopCardPlayer card={sampleCard} gameRound={5} showTime={true} onClickFn={handleChange} optionChangeFn={handleChange}/>);
    const img = await screen.getByRole('img');
    expect(img).toBeInTheDocument();
});


