import { Link } from 'react-router-dom';

export const navbar = () => {
    return(
        <nav className="navbar">
        <h1>Book Store</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    )
}

export default navbar