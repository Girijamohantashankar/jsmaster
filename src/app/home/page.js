
"use client";

import TokenValidation from "../TokenValidation"
export default function Home() {



    return (
        <div>
            <TokenValidation redirectTo="/home" />
            <h1>Home Page</h1>
            
        </div>
    );
}
