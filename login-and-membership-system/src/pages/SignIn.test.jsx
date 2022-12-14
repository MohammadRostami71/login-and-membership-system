import React from 'react'
import {render, screen} from '@testing-library/react'
import SignIn from "./SignIn";
import {Provider} from "react-redux";
import {store} from "./../store/index";
import userEvent from "@testing-library/user-event";

const produceComponent = () =>
    render(
        <Provider store={store()}>
            <SignIn/>
        </Provider>
    );

test('should show a required field error for each empty input field', async () => {
    produceComponent();
    const button = screen.getByRole('button', {name: 'SignIn'});
    userEvent.click(button)
    expect(await screen.findByText('First name is required')).toBeVisible()
    expect(await screen.findByText('Email Address is required')).toBeVisible()
});

test('should show a required field error for incorrect value email input field', async () => {
    produceComponent();
    const button = screen.getByRole('button', {name: 'SignIn'});
    const inputFirstName = screen.getByLabelText('firstName');
    const inputEmail = screen.getByLabelText('email');
    userEvent.type(inputFirstName, {target: {value: 'mohammad'}})
    userEvent.type(inputEmail, {target: {value: 'rostami'}})
    userEvent.click(button)
    expect(await screen.findByText('Email Address is required')).toBeVisible()
});

// test("should submit when pressing enter", () => {
//     const handleSubmit = jest.fn();
//     render(
//         <Provider store={store()}>
//             <SignIn handleSubmit={handleSubmit}/>
//         </Provider>
//     )
//     const inputFirstName = screen.getByLabelText('firstName');
//     const inputEmail = screen.getByLabelText('email');
//
//     userEvent.type(inputFirstName, {target: {value: 'mohammad'}});
//     userEvent.type(inputEmail, {target: {value: 'test@test.com'}});
//
//     expect(handleSubmit).toHaveBeenCalledTimes(1);
//     // expect(handleSubmit).toHaveBeenCalled();
// });


