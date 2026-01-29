import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from "../home/Hero";

//Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText('Hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',"images/landing.svg")
    });
    test('renders signup button',()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole('button',{name:/Sign up for free/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn-primary');
    });
});