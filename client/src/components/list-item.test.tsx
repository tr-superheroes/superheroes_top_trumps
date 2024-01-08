import { it, expect, beforeAll, afterAll, afterEach} from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { ListItem, ListItemProps } from './list-item';
import { MOCK_FETCH_URL } from '../types/game.types';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const requiredProps1: ListItemProps = {
    value: "power: 42"
}

const server = setupServer();

it('renders powerstat list item power: 42 from api reposnse data', async () => {
    server.use(
    http.get(MOCK_FETCH_URL, () => {
        return new HttpResponse(JSON.stringify({
        value: "power: 42"
        }), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<ListItem {...requiredProps1}/>);
    const itemElement = await screen.findByText(/power: 42/);
    expect(itemElement).toBeInTheDocument();
});

const requiredProps2: ListItemProps = {
    value: "intelligence: 99"
}

it('renders powerstat list item intelligence: 99 from api reposnse data', async () => {
    server.use(
    http.get(MOCK_FETCH_URL, () => {
        return new HttpResponse(JSON.stringify({
        value: "intelligence: 99"
        }), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<ListItem {...requiredProps2}/>);
    const itemElement = await screen.findByText(/intelligence: 99/);
    expect(itemElement).toBeInTheDocument();
});