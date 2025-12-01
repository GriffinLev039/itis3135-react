import "./default.css";

function Header({setCurrentPage}) {
  return (
    <>
      <h1>Griffin Leventhal | Grateful Lizard | ITIS 3135</h1>
      <nav>
        <a href="#" onClick={(event)=> {
            event.preventDefault();
            setCurrentPage("Home");
        }}>Home</a>
        <a href="#" onClick={(event)=> {
            event.preventDefault();
            setCurrentPage("Introduction");
        }}>Introduction</a>
        <a href="#" onClick={(event)=> {
            event.preventDefault();
            setCurrentPage("Contract");
        }}>Contract</a>
         <a href="#" onClick={(event)=> {
            event.preventDefault();
            setCurrentPage("Introductions");
        }}>Introductions</a>
      </nav>
    </>
  );
}

export default Header;
