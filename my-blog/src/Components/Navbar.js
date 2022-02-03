import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return <div >
            <nav>
                <ul>
                    <button>
                    <li>
                        <Link to="/" className='nav-items'>Home</Link>
                    </li>
                    </button>
                   
                   <button>
                   <li>
                        <Link to="/about">About</Link>
                    </li>
                   </button>
                    
                    <button>
                    <li>
                        <Link to="/article" >Article</Link>
                    </li>
                    </button>
                    <button>
                    <li>
                        <Link to="/articles-list">Article List</Link>
                    </li>
                    </button>
                                      
                </ul>
            </nav>
        </div>;
}
