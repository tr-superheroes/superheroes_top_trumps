import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import App from '../App'; 
import { GameContainer } from './gameContainer';
/*
it('Test start game button',()=>{
    render(<GameContainer/>);
    expect(screen.getByText('Powerstats')).toBeInTheDocument();
})

it('Name not in card on click of play',()=>{
    render(<App/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
})
*/