import { it, expect} from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { ListItem, ListItemProps } from './list-item';


const requiredProps1: ListItemProps = {
    value: "power: 42"
}

it('renders powerstat list item power: 42 from api reposnse data', async () => {
    render(<ListItem {...requiredProps1}/>);
    const itemElement = await screen.findByText(/power: 42/);
    expect(itemElement).toBeInTheDocument();
});

const requiredProps2: ListItemProps = {
    value: "intelligence: 99"
}

it('renders powerstat list item intelligence: 99 from api reposnse data', async () => {
    render(<ListItem {...requiredProps2}/>);
    const itemElement = await screen.findByText(/intelligence: 99/);
    expect(itemElement).toBeInTheDocument();
});