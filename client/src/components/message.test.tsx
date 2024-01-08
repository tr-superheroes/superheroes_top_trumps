import '@testing-library/jest-dom';
import '@testing-library/react';

import {it,expect} from 'vitest'; 
import {render,screen} from '@testing-library/react';
import {MessageContainer} from './message';
it('Message component rendered',async()=>{
    render(<MessageContainer message="test" playerTurn= {true} showWinner={false}/>);
    const element = await screen.getByText('test');
    expect(element).toBeInTheDocument();
});

