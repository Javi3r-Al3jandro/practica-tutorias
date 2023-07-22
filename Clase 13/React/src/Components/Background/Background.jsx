/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../Button/button'

const Background = ({children}) => {
    return (
        <div style={{backgroundColor: "black", padding: "10px"}}>
            {children} 
            <Button/>
        </div>
        )
    }

export default Background

