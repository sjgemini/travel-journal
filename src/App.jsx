import React from "react"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import data from "./data.js"

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
          img={item.imageUrl}
          title={item.title}
          location={item.location}
          description={item.description}
          start={item.startDate}
          end={item.endDate}
          map={item.googleMapsUrl}
          />
    )
  })
  return (
    <div className="main">
      <Header />
      {cards}
    </div>
  )
}