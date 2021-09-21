import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
             <div className="TopBar">
            <div className="Topbar_heading">
              <h1>What are you <br />having for Lunch?</h1>
            </div>
            <div className="Topbar_phra">
              <p>
                Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC
              </p>
              <div style={{
                borderRight: "30px solid red",
                width: "1px",
                height: "3px"
              }}></div>
            </div>

          </div>
        </div>
    )
}

export default Header
