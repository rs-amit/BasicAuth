import React, { createContext, useContext, useEffect, useState } from 'react';

const authUser = {
    Email: "admin852@gmail.com",
    Password: "Admin852@"
}

const FakeApiForLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === authUser.Email && password === authUser.Password) {
                resolve({ success: true, status: 200 });
            } else {
                reject({ success: false, status: 401 })
            }
        }, 1000)
    })

}

const StateContext = createContext()

export default function MainProvider({ children }) {

    const [state, setState] = useState(localStorage.getItem('authUser')? JSON.parse(localStorage.getItem('authUser')) : false);
    const [loginError, setLoginError] = useState(null);
    const [email, setEmail] = useState("admin852@gmail.com")
    const [password, setPassword] = useState("Admin852@")

    useEffect(()=>{
        localStorage.setItem("authUser", JSON.stringify(state))
    },[state])


    async function loginUserWithCredential(email, password) {
        try {
            const response = await FakeApiForLogin(email, password)
            if (response.success) {
                setState(true)
            }
        } catch (error) {
            if (!error.success) {
                setLoginError("invalid credential")
                setTimeout(()=>{
                    setLoginError(null)
                    setEmail("")
                    setPassword ("")
                },1000)
            }
        }
    }

    return (
        <StateContext.Provider 
           value={{ setState, state, loginUserWithCredential,
                loginError, setLoginError,
                email, setEmail,
                password, setPassword }}>

            {children}
        </StateContext.Provider>
    )
}

export const StateHandler = () => useContext(StateContext)

