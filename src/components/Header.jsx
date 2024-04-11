import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
                <h1>Welcome to Pokebuild!</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
        </ul>
        </header>
    )
}

export default Header;