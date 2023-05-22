import './App.css'
import Header from "./Header"
import Place from "./Place"
import data from "./data.js"

function App() {
  const cards = data.map(place => {
    return (
      <Place key={place.id} place={place} />
    )
  })
  return (
    <div>
      <Header />
      <div className='cards'>
        {cards}
      </div>
    </div>
  )
}

export default App
