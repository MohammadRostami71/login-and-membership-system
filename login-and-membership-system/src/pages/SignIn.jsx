import {useForm} from "react-hook-form";
import {connect, useDispatch} from "react-redux";
import {submitUserData} from "../store/formSlice";
import {useHistory} from "react-router-dom";


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
        dispatch(submitUserData(data));
        history.replace('/posts');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder='first Name'
                {...register("firstName", {required: true})}
                aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

            <input
                placeholder='Email'
                {...register("email", {required: "Email Address is required"})}
                aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
            <input type="submit"/>
        </form>
    );
};

// Connect your component with redux
connect(({firstName, email}) => ({firstName, email}))(SignIn);

export default SignIn;