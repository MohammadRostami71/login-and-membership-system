import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {submitUserData} from "../store/formSlice";
import HOC from "../components/layout/HOC";
import * as React from "react";

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            lastName:'',
            city:'',
            email: ''
        }
    });
    const dispatch = useDispatch();
    let history = useHistory();

    // Submit your data into Redux store
    const onSubmit = data => {
        dispatch(submitUserData(data));
        history.replace('/posts');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='firstName'>firstName</label>
            <input
                id='firstName'
                placeholder='first Name'
                {...register("firstName", {required: true})}
                aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
            <label htmlFor='lastname'>lastname</label>
            <input
                id='lastname'
                placeholder='last Name'
                {...register("firstName", {required: true})}
                aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
            <label htmlFor='city'>city</label>
            <input
                id='city'
                placeholder='city'
                {...register("city", {required: true})}
                aria-invalid={errors.city ? "true" : "false"}
            />
            {errors.city?.type === 'required' && <p role="alert">City name is required</p>}
            <label htmlFor='email'>email</label>
            <input
                id='email'
                placeholder='Email'
                {...register("email", {required: "Email Address is required"})}
                aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
            <input type="submit"/>
        </form>
    );
};

export default HOC(SignUp)  ;