import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Project</Link> 
      <Link to="/Skills">Skills</Link>
            <Link to="/Contact">Contact</Link> */}

      <a href="#Home">Home</a>
<a href="#About">About</a>
<a href="#Projects">Projects</a>
<a href ="#Skills">Skills</a>
<a href="#Contact">Contact</a>
    </nav>
  );
}

export default Navbar;