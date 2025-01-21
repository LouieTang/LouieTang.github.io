import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import metadata from "./context/metadata.json";


function App() {
  return (
    <>
        <Navbar />
        <Body />
        <Footer metadata={metadata} />
    </>
  )
}

export default App
