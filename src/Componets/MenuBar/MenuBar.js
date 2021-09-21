import React from 'react'
import"./MenuBar.css";

const MenuBar = () => {
    return (
        <div className="menuCard">
            <h1>Lorem Ipsum</h1>
            <div className="menubar">
                <ul>
                    <li> <a> <s style={{color:"red"}}>About</s></a></li>
                    <li> <a>Service</a></li>
                    <li> <a>Cuisine</a></li>
                    <li> <a>Gallery</a></li>
                    <li> <a>Contact</a></li>
                    <li> <a>Book</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar
