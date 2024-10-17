import React from 'react'

export default function Header() {
    return (
        <>
            <div ClassNameName="jumbotron text-center" >
                <h1>My First Bootstrap 4 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <nav ClassName="navbar navbar-expand-sm bg-dark navbar-dark">
                <a ClassName="navbar-brand" href="#">Navbar</a>
                <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul ClassName="navbar-nav">
                        <li ClassName="nav-item">
                            <a ClassName="nav-link" href="#">Link</a>
                        </li>
                        <li ClassName="nav-item">
                            <a ClassName="nav-link" href="#">Link</a>
                        </li>
                        <li ClassName="nav-item">
                            <a ClassName="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
