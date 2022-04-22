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
                >
                    {({values, handleChange, handleSubmit})=> {
                        return(
                            <div>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    name="email"
                                    placeholder="Your email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <input 
                                    name="password"
                                    placeholder="Password"
                                    className="form-control my-3"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <input 
                                    name="passwordConfirm"
                                    placeholder="Confirm password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
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