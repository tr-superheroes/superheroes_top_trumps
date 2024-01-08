import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect, vi} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import { NextTurn } from './next-turn';

it('Test next turn button',()=>{

    const handleSubmit = vi.fn();
    render(<NextTurn onClickFn={handleSubmit}/>);
    expect( screen.getByRole('button')).toBeInTheDocument();
});
it('Test next turn button click calls function',()=>{

    const handleSubmit=vi.fn();
    render(<NextTurn onClickFn={handleSubmit}/>);
    const btn =screen.getByRole('button');
    fireEvent.click(btn); 
    expect(handleSubmit).toBeCalled();
});