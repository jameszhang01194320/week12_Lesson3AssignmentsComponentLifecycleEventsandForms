import { NavLink, Link } from 'react-router-dom'

function NavBar(){
    return (
        <>
            <Link to="/">
                <img src="Marvel-Studios-logo.png" alt="marvel logo" height="100" />
            </Link>
            <nav>
                <NavLink to="/characters" activeClassName="active">Characters</NavLink>
                {/* <NavLink to="/comics" activeClassName="active">Comics</NavLink> */}
            </nav>
        </>
    )
}

export default NavBar;