const Navbar  = () => {
    return (  
         <nav className="navbar">
            <h1>Travel Journal</h1>
            <div className="links">
                <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutme">About Me</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/create">Add New Journal</a></li>
                </ul>
            </div>
         </nav>
    );
}
 
export default Navbar;