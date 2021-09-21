import React from 'react'
import "./Mobile_icons.css"
import SortIcon from '@material-ui/icons/Sort';
import ShoppingCart from '@material-ui/icons/ShoppingCart';


const Mobile_Icons = () => {
    return (
        <div className="Icons">
            <div className="menuIcon">
                <SortIcon style={{color:"red"}}/>
            </div>
            <div className="HeadingBar">
               <h1>Lorem</h1> 
            </div>
            <div className="buyIcons">
                <ShoppingCart style={{color:"red"}}/>
            </div>
        </div>
    )
}

export default Mobile_Icons
