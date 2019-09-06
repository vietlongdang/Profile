import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
            <header className={s.header}>
                <img src="data:image/png;base64,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" alt="" />
                <div className={s.loginBlock}>
                    { props.isAuth ? props.login
                        : <NavLink to='/login'>Login</NavLink> }
                </div>
            </header>
    )
}

export default Header