import React from 'react'
import "./Cards_UI.css"

export const Cards_UI = (props) => {
    return (
        <div>
            <div className="Card_style">
              <div className="Card_img">
              <img src={props.img}/>
              </div>
              <div className="Card_Title">
                  <p><h3>{props.Title}</h3></p>
              </div>
               
            </div>

        </div>
    )
}
