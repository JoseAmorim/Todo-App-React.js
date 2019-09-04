import React from 'react';

export default ({ name, small }) => {
    return (
        <header className="page-header">
            <h2>{name} <small>{small}</small></h2>
        </header>
    )
}