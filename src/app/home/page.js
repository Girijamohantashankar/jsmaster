
"use client";

import TokenValidation from "../TokenValidation"
export default function Home() {



    return (
        <div>
            <TokenValidation redirectTo="/home" />
            <h1>Home Page</h1>
            {/* MONGODB_URI=mongodb+srv://ajitmanthanitsolutions:hiyG5w8QW53SoODb@jsmaster.e17kl.mongodb.net/jsmaster?retryWrites=true&w=majority&appName=jsmaster
JWT_SECRET=jnhusdnjbaiiuheejjkngygyvcsbdsflkmdskfiuhenindisjnbsdub


EMAIL_USER = ajitmanthanitsolutions@gmail.com
EMAIL_PASS =fzgkrwerrfdlyvdj */}
        </div>
    );
}
