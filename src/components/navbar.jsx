
import "./navbar.css"

function Navbar() { // custom components will start with a capital letter and returm something
    return( 
        //in JSX you will use className for CSS 
    <div className="navbar"> 
        <h1>Menu will be here</h1>
    </div>
);
}

export default Navbar; // need to export a component so it can be imported into another JS fileimport Navbar from './navbar';
