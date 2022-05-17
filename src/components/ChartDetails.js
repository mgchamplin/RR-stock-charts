import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import {useParams} from "react-router-dom"
import PortfolioContext from '../PortfolioContext'
import "./ChartDetails.css"


function ChartDetails(){
    const { id } = useParams()
    const context_stock_info = React.useContext(PortfolioContext)
    console.log("ID = " + document.location.href)

    if (id >= context_stock_info.length || isNaN(id))
        return (
            <h1 style={{color:'red'}}>Invalid stock indexing: {id}</h1>
        )
    else
        return(
            <div className="chart-details">
                <h1>Details for {context_stock_info[id].symbol}</h1>
                <img src={`../${context_stock_info[id].image}`}/>
                <h2>{context_stock_info[id].symbol}</h2>
                <h3>{context_stock_info[id].description}</h3>
            </div>
    )
}

export default ChartDetails
