import { it, expect, vi} from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { RadioButton, RadioButtonProps } from './radio-button';


const mockChange = vi.fn();
const requiredProps1: RadioButtonProps = {
    id: "power",
    onChange: mockChange,
    value: "42"
}


it('renders powerstat radio button Power: 42 from api reposnse data', async () => {
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
    render(<RadioButton {...requiredProps2}/>);
    const buttonLabelName = await screen.findByText(/speed/);
    expect(buttonLabelName).toBeInTheDocument();
    const buttonLabelValue = await screen.findByText(/12/);
    expect(buttonLabelValue).toBeInTheDocument();
});