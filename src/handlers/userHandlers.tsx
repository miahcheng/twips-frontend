import React from "react";
import top1000games from "../mockData/top1000games.json"
import jsonata from "jsonata";
const base = "https://api.twipsbits.me";
const user = "/user/";
const myuser = "/user/id";
const sessions = "/sessions";
const mySession = "/sessions/mine";
export function NewUserHandler(email, password, passwordconf, username) {
    const newUser = {
        "Email": email,
        "Password": password,
        "PasswordConf": passwordconf,
        "Username": username,
    };
    let status = 0;
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
            console.log(response.text())
            if (response.status === 400) {
                window.alert("Error creating new user");
            }
        }
        console.log(response);
        window.alert("User signed up! Please log in");
        console.log(response.status)
        console.log(response.text)
        return response
    }).then(response => {
        status = response.status
        return response.text()
    }).then(async (data) => {
        const toSend = JSON.parse(data)
        if (status < 400) {
            await SetUserInfoHandler(toSend.id, username)
        }
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
    ).then(() => GetUserHandler());
}

export async function GetUserHandler() {
    await fetch(base + "/thisuser/me",
        {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token"),
            })
        }
    ).then(response => response.text()).then(data => {
        sessionStorage.setItem('User', data)
        return data
    })
};

export async function GetUserInfoHandler(setUser, username) {
    await fetch(base + "/specificuser/" + username,
        {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token"),
            })
        }
    ).then(response => response.text()).then(data => {
        console.log(data)
        setUser(JSON.parse(data).descrip)
        return data
    })
};


export async function SetUserInfoHandler(id, username) {
    await fetch(base + "/specificuser/me",
        {
            method: "POST",
            body: JSON.stringify({
                "Username": username,
                "UserID": id
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token"),
            })
        }
    ).then(response => {
        console.log(response.text())
        return response.status
    })
};

export async function ChangeUserInfoHandler(descrip, username) {
    await fetch(base + "/specificuser/me",
        {
            method: "PATCH",
            body: JSON.stringify({
                "Username": username,
                "Descrip": descrip
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("token"),
            })
        }
    ).then(response => {
        console.log(response.text())
        return response.status
    })
};

export function SearchCategories(toSearch) {
    const data = top1000games
    const expression = jsonata("data[$contains($lowercase(name), $lowercase('" + toSearch + "'))]")
    const result = expression.evaluate(data);
    return result
}

export async function GetClips(game_id, setData) {
    const params = {
        'game_id': game_id,
        'first': 21,
    }
    await fetch('https://api.twitch.tv/helix/clips?game_id=' + game_id + '&first=20',
        {
            method: "GET",
            headers: new Headers({
                'Authorization': 'Bearer hx9mqz29siythdylwnsx0sa16pcvq2',
                'Client-Id': 'v3otx989wtltdv9141d0jwx6r0271y',
            })
        }
    ).then(response =>
      response.json()).then(data => {
        console.log(data)
        setData(data)
        return data
    })
}