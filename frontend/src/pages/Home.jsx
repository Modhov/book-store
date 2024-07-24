import React from 'react'

export default function Home() {
    return (
        <div>
            <h1>BookBite</h1>
            <div>
                <button onClick={() => {
                    window.location.href = '/#/sign-in';
                }}>
                    Sign In
                </button>
                <button onClick={() => {
                    window.location.href = '/#/sign-up';
                }}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}
