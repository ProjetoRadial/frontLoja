import React from "react";
import env from "react-dotenv";


export async function LoginComponent (username, password, token){
    const res = await fetch({
        method: 'post',
        url: env.API_URL, 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${username}&password=${password}`
    });
    const result = await res.json();
    return result;
}