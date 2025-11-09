import { useState } from 'react'
import './default.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contract from './Contract'
import Introduction from './Introduction'
function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  function renderPage() {
    if (currentPage === "Contract") {
      return <Contract></Contract>;
    } else if (currentPage === "Introduction") {
      return <Introduction></Introduction>;
    } else {
      return <Home></Home>;
    }
  }

  return (
    <>
      <header >
        <Header setCurrentPage={setCurrentPage}>
        </Header>
      </header>
          {renderPage()}
      <footer>
        <Footer>

        </Footer>
      </footer>
    </>
  )
}

export default App
