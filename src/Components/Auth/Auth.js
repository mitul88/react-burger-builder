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

                </Formik>
            </div>
        )
    }
}


export default Auth;