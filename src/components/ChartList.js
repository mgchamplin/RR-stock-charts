import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import "./ChartList.css"

function ChartList(){

    const navigate = useNavigate(); 

    const stockEntries = [
        {symbol : "NFLX",
         description: "It is Netflix",
         image: "./SampleChart.jpg"},
         {symbol : "CSCO",
         description: "It is Cisco",
         image: "./SampleChart.jpg"},
         {symbol : "GILD",
         description: "It is Gilead",
         image: "./SampleChart.jpg"},
         {symbol : "AMZN",
         description: "It is Amazon",
         image: "./SampleChart.jpg"},
         {symbol : "NVDA",
         description: "It is Nvidia",
         image: "./SampleChart.jpg"},
         {symbol : "MSFT",
         description: "It is Microsoft",
         image: "./SampleChart.jpg"},
         {symbol : "GOOG",
         description: "It is Google",
         image: "./SampleChart.jpg"},
    ]

    const mappedChartList = stockEntries.map((stock,i) => {

        return (
            <Card key={i} className="card-style border border-primary">
                <Card.Img variant="top" src={stock.image}/>
                <Card.Body>
                    <Card.Title>{stock.symbol}</Card.Title>
                    <Card.Text>
                    {stock.description}
                    </Card.Text>
                    <Button variant="primary" 
                        onClick={()=>{navigate("/details"); console.log("I=" + (i+1))}}>Details {i+1}</Button>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div>
            <div style={{flexWrap:"wrap"}}className="d-flex">
                {mappedChartList}
            </div>
        </div>
    )
  }

  export default ChartList

  //                    <Button variant="primary" onClick={console.log("HI")}>Details {i}</Button>
