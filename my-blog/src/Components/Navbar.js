import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';

export default function Navbar() {
  return <div >
            <nav>
                <ul>
                    <button>
                    <li>
                        <Link to="/" className='nav-items' activeClassName="navbar__link--active" >Home</Link>
                    </li>
                    </button>
                   
                   <button>
                   <li>
                        <Link to="/about" activeClassName="navbar__link--active">About</Link>
                    </li>
                   </button>
                    
                    <button>
                    <li>
                        <Link to="/article" activeClassName="navbar__link--active">Article</Link>
                    </li>
                    </button>
                    <button>
                    <li>
                        <Link to="/articles-list" activeClassName="navbar__link--active">Article List</Link>
                    </li>
                    </button>
                                      
                </ul>
            </nav>
        </div>;
}
