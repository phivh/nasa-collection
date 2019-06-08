import React from 'react'
import {Link} from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/fontawesome-free-solid'
//import '../../scss/components/header.scss'

fontawesome
    .library
    .add(faPlus);

const Header = () => {
    return (
        <header className="header">
            <h1>NASA Collection</h1>
            <Link className="addItem" to={{
                pathname: '/search'
            }}>
                <FontAwesomeIcon icon="plus" size="lg"/>

                <span>Add New Item</span>
            </Link>
        </header>
    )
}

export default Header;