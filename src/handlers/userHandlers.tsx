import React from "react";
const base = "https://api.twipsbits.me";
const user = "/user/";
const myuser = "/user/id";
const sessions = "/sessions";
const mySession = "/sessions/mine";
export function NewUserHandler(email, password, passwordconf, firstname, lastname) {
    const newUser = {
        "Email": email,
        "Password": password,
        "PasswordConf": passwordconf,
        "FirstName": firstname,
        "LastName": lastname
    };
    fetch(base + "/users",
        {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: new Headers(
                { "Content-Type": "application/json", }
            )
        }
    ).then(response => {
        if (response.status >= 400) {
            console.log("error creating new user account");
            console.log(response);
            if (response.status === 400) {
                window.alert("Error creating new user");
            }
        }
        console.log(response);
        window.alert("User signed up! Please log in");
    });
}

export function LoginHandler(email, password, setToken) {
    console.log(base + sessions);
    fetch(base + sessions,
        {
            method: "POST",
            body: JSON.stringify({
                Email: email,
                Password: password
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        }
    ).then((response) => {
        if (response.status >= 400) {
            console.log("error logging in user");
            console.log(response);
            window.alert("Incorrect email or password");
            return;
        } else {
            console.log(response)
            const token = response.headers.get("Authorization");
            console.log(response.headers.get("Authorization"));
            console.log(token)
            setToken(response.headers.get("Authorization"))
        }
    }
    );
}