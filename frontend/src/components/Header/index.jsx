import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Fullstack</h1>
            <nav>
                <Link to={'/home'}>
                    <h2>Home</h2>
                </Link>
                <Link to={'/users'}>
                    <h2>Users</h2>
                </Link>
            </nav>
        </header>
    )
}