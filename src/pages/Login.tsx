import { Navigate } from "@solidjs/router";
import { isSignedIn, setSignedIn } from "../stores/user";
import { createSignal, onMount } from "solid-js";


export default function Login() {

    // const [isSignedIn, setSignedIn] = createSignal(false);

    const [savedCredentials, setSavedCredentials] = createSignal<{username: string, password: string}>({username: "", password: ""})

    async function verifyCredentials(_username: string, _password: string): Promise<boolean> {
        return true
    }

    async function handleLogin(e: any) {
            
        e.preventDefault();

        const username = e.target[1].value;
        const password = e.target[2].value;

        // verify username and password
        if (!await verifyCredentials(username, password)) {
            console.log("Failed to verify credentials");
            return;
        }

        // save username and password locally?
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);

        setSignedIn(true);
    }

    onMount(() => {

        setSavedCredentials({
            username: localStorage.getItem("savedUsername") || "",
            password: localStorage.getItem("savedPassword") || ""
        })  
    })

    

    return (
        <>
            {/* {isSignedIn() && <Navigate href={"/"} />} */}
            <div class="container login-container">

                {/* <div id="hero" class="hero-unit">
                    <div id="hero-text">
                        <h2 style="margin-bottom:0;">PTC Database Manager</h2>
                        <div class="small-text">(subtitle)</div>
                        <p class="vspace20"></p>
                    </div>
                </div> */}

                <div class="row ">

                    <div class="offset4 span3 login-panel" x-data="loginData">

                        <form class="form" onSubmit={handleLogin} style="">
                            <fieldset>

                            {/* <img class="login-logo" src="" />
                            <div class="login-tagline">powered by <span style="color:darkred;"><b>RSE, Inc.</b></span></div>
                            <p class="vspace20"></p> */}

                            <p style="margin-bottom:2px;">Sign in</p>
                            <hr class="thin4"/>
                            <p class="vspace15"></p>

                        <label class="login-label" for="username">Username:</label>
                        <input class="input" type="text" name="username" id="username"
                                    value={savedCredentials().username}
                                    // x-bind:value="user"
                                    style="width:95%;" />
                            <p class="vspace10"></p>
                            
                        <label class="login-label" for="password">Password:</label>
                        <input class="input" type="text" name="password" id="password"
                                    value={savedCredentials().password}
                                    // x-bind:value="password"
                                    style="width:95%;" />
                            <p class="vspace10"></p>

                        <input class="btn btn-primary" type="submit" id="signin" value="Submit" style="width:100%;" />
                            <p class="vspace20"></p>

                            </fieldset>
                        </form>

                        {/* <button @click="toggle">Toggle</button> */}
                        
                    </div>

                </div>
            </div>
        </>
    )
}