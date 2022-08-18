import React from "react";
import {Navbar} from "./navbar/Navbar"
import {Footer} from "./footer/Footer"

export function Layout(props){
    return(
        <>
            <Navbar/>
                <div>
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}