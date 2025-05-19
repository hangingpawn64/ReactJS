import Card from "./components/card"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
<Navbar/>
<div className="cards">
<Card title="Happy KR$NA" description="Card 1 Description"/>
<Card title="Sad KR$NA" description="Card 2 Description"/>
<Card title="Angry KR$NA" description="Card 3 Description"/>
<Card title="Pookie KR$NA" description="Card 4 Description"/>
</div>
<Footer/>
    </>
  )
}

export default App
