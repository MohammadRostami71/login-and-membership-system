import * as React from 'react';
import {Button, Box} from '@mui/material';
import {useForm} from "react-hook-form";
import {connect, useDispatch} from "react-redux";
import {submitUserData} from "../store/formSlice";
import {useHistory} from "react-router-dom";
import HOC from "../components/layout/HOC";


const SignIn = () => {
    const {register, formState: {errors}, handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            email: ''
        }
    });
    const dispatch = useDispatch();
    let history = useHistory();

    // Submit your data into Redux store
    const onSubmit = data => {
        console.log(data)
        dispatch(submitUserData(data));
        history.replace('/posts');
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>firstName</label>
                <input
                    id='firstName'
                    placeholder='first Name'
                    {...register("firstName", {required: true})}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                <label htmlFor='email'>email</label>
                <input
                    id='email'
                    placeholder='Email'
                    {...register("email", {required: "Email Address is required"})}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
                <button type="submit">SignIn</button>
            </form>
            <Button onClick={() => history.replace('/signup')} variant="outlined" color="error" size="large">SignUp</Button>
        </Box>

    );
};

// Connect your component with redux
connect(({firstName, email}) => ({firstName, email}))(SignIn);

export default HOC(SignIn) ;