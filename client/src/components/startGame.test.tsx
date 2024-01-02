import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {fireEvent, render,screen} from '@testing-library/react';
import App from '../App'; 
it('Test start game button',()=>{
    render(<App/>);
    expect(screen.getByRole('button')).toBeInTheDocument();
})

it('Test button disappears on click',()=>{
    render(<App/>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
})
