import React, { useState } from 'react';
import { FormInput } from '../../components/form-input/FormInput';
import { CustomButton } from '../../components/custom-button/CustomButton';
import './sign-in.scss';

const SignIn = () => {

    const initialValues = {
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues);

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.prevent.default();
        setValues(initialValues);
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit} >
                <FormInput 
                    name="email" 
                    type="text" 
                    label="email"
                    value={values.email} 
                    handleChange={handleChange}
                    required  
                />

                <FormInput 
                    name="password" 
                    type="password"
                    label="password" 
                    value={values.password} 
                    handleChange={handleChange}
                    required 
                />

                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
}

export default SignIn;