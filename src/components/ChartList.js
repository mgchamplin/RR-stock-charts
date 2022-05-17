import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useNavigate} from "react-router-dom"
import PortfolioContext from '../PortfolioContext'
import "./ChartList.css"

function ChartList(){

    const navigate = useNavigate(); 
    const context_stock_info = React.useContext(PortfolioContext)

    const mappedChartList = context_stock_info.map((stock,i) => {

        return (
            <Card key={i} className="card-style border border-primary">
                {console.log("I = " + i + "STOCK = " + stock.symbol)}
                <Card.Img variant="top" src={stock.image}/>
                <Card.Body>
                    <Card.Title>{stock.symbol}</Card.Title>
                    <Card.Text>
                    {stock.description}
                    </Card.Text>
                    <Button variant="primary" 
                        onClick={()=>{navigate(`/details/${i}`);}}>Details {i}</Button>
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

  //                        onClick={()=>{navigate("/details"); console.log("I=" + (i+1))}}>Details {i+1}</Button>

