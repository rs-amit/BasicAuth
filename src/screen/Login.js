import React, { useState } from 'react';
import './Login.css';
import image from "../assert/image2.svg";
import { StateHandler } from "../contextProvider/MainProvider";

function Login() {
    const { state,loginUserWithCredential, loginError, setLoginError,email, setEmail,password, setPassword } = StateHandler();
    console.log(state)

    function SubmitHandler(e) {
        e.preventDefault()
        console.log(email && password)
        if (email && password) {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password)) {
                try {
                    loginUserWithCredential(email, password)
                } catch (error) {
                    setLoginError(error.message)
                }
            } else {
                setLoginError("Invalid Credential")
                setTimeout(()=>{
                    setEmail("")
                    setPassword("")
                    setLoginError(null)
                },3000)
            }
        }

    }
    return (
        <div className="login">
            {loginError && <div className="err-msg">{loginError}</div>}
            <div className="login-wrap">
                <div className="login-right">
                    <img
                        src={image}
                        alt=""
                        className="login-img"
                    />
                </div>
                <form className="login-left" onSubmit={SubmitHandler}>
                    <label className="lebal">
                        Email:
                        <input
                            className="email inputData"
                            type="text"
                            placeholder="Enter Email...."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <lebal className="lebal">
                        Password:
                        <input
                            className="password inputData"
                            type="password"
                            placeholder="Enter Password...."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </lebal>
                    <button
                        className="submitbtn"
                        type="submit"
                    >Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
