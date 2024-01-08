import { it, expect, beforeAll, afterAll, afterEach, vi} from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { MOCK_FETCH_URL } from '../types/game.types';
import { RadioButton, RadioButtonProps } from './radio-button';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockChange = vi.fn();
const requiredProps1: RadioButtonProps = {
    id: "power",
    onChange: mockChange,
    value: "42"
}

const server = setupServer();

it('renders powerstat radio button Power: 42 from api reposnse data', async () => {
    server.use(
    http.get(MOCK_FETCH_URL, () => {
        return new HttpResponse(JSON.stringify(requiredProps1), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<RadioButton {...requiredProps1}/>);
    const buttonLabelName = await screen.findByText(/power/);
    expect(buttonLabelName).toBeInTheDocument();
    const buttonLabelValue = await screen.findByText(/42/);
    expect(buttonLabelValue).toBeInTheDocument();
});

const requiredProps2: RadioButtonProps = {
    id: "speed",
    onChange: mockChange,
    value: "12"
}

it('renders powerstat list item speed 12 from api reposnse data', async () => {
    server.use(
    http.get(MOCK_FETCH_URL, () => {
        return new HttpResponse(JSON.stringify(requiredProps2), {
        headers: {
            'Content-Type': 'application/json',
        },
        })
    })
    )
    render(<RadioButton {...requiredProps2}/>);
    const buttonLabelName = await screen.findByText(/speed/);
    expect(buttonLabelName).toBeInTheDocument();
    const buttonLabelValue = await screen.findByText(/12/);
    expect(buttonLabelValue).toBeInTheDocument();
});