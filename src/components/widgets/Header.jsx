import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const linkStyles = {
        'textDecoration':'none',
        'color':'green'
    };
    const options = [
        {name : 'Home', link : '/'},
        {name : 'Merchant', link : '/merchant'},
        {name : 'Categories', link : '/categories'},
    ];

  return (
    <div>
        <div style={{
            'display':'flex',
            'justifyContent':'space-around',
            'alignItems':'center',
            'padding':'14px'
        }}>
            {
                options.map((opt) => {
                    return (
                        <Link to={opt.link} style={linkStyles}>
                            <h2>{opt.name}</h2>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}
