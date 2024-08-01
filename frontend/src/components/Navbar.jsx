import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const loc = useLocation();
    if (loc.pathname === "/sign-in" || loc.pathname === "/sign-up") return null;
    return (
        <nav className="navigation">
            <h2>
                BookBite
                {loc.pathname === "/seller-home" ? (
                    <span
                        className="material-symbols-outlined"
                        onDoubleClick={() => {
                            window.location.href = "/#/home";
                        }}
                    >
                        sell
                    </span>
                ) : (
                    <span
                        className="material-symbols-outlined"
                        onDoubleClick={() => {
                            window.location.href = "/#/seller-home";
                        }}
                    >
                        home
                    </span>
                )}
            </h2>
            <div>
                <button
                    className="secondary-button"
                    onClick={() => {
                        window.location.href = "/#/sign-in";
                    }}
                >
                    Sign In
                </button>
                <button
                    onClick={() => {
                        window.location.href = "/#/sign-up";
                    }}
                >
                    Sign Up
                </button>
            </div>
        </nav>
    )
}
