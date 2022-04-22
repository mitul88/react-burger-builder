import React, { Component } from "react";
import { Formik } from "formik";


class Auth extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: ""
                        }
                    }

                    onSubmit={
                        (values) => {
                            console.log(values)
                        }
                    }

                    validate={(values)=> {
                        const errors = {}

                        if(!values.email) {
                            errors.email = "Required!"
                        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email="Please type correct email!"
                        }

                        if(!values.password) {
                            errors.password="Password required!!"
                        } else if ( values.password.length < 4 ) {
                            errors.password="Password must be atleast 4 charachters!!"
                        }

                        if(!values.passwordConfirm) {
                            errors.passwordConfirm="Please confirm your password"
                        } else if( values.password !== values.passwordConfirm ) {
                            errors.passwordConfirm="Password does not match with the password confirmation"
                        }
                        return errors;
                    }}
                >
                    {({values, handleChange, handleSubmit, errors})=> {
                        return(
                            <div style={{
                                border: "1px solid grey",
                                padding: "15px",
                                borderRadius: "5px"
                            }}>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    name="email"
                                    placeholder="Your email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <span style={{color:"red"}}>{errors.email}</span>
                                <input 
                                    name="password"
                                    placeholder="Password"
                                    className="form-control my-3"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <span style={{color:"red"}}>{errors.password}</span>
                                <input 
                                    name="passwordConfirm"
                                    placeholder="Confirm password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <span style={{color:"red"}}>{errors.passwordConfirm}</span>
                                <br />
                                <button
                                    type="submit"
                                    className="btn btn-success mt-3"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div> 
                        )
                    }}
                </Formik>
            </div>
        )
    }
}


export default Auth;