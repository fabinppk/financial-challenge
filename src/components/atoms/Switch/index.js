import React, { useState } from 'react';
import classNames from 'classnames';
import { setCookie, getCookie, removeCookie } from '_utils/cookie';
import style from '_atoms/Switch/index.css';

const Switch = ({ theme }) => {
    const [checked, toggleChecked] = useState(theme);

    const setTheme = () => {
        if (getCookie('theme') !== 'dark-theme') {
            setCookie('theme', 'dark-theme');
            document.body.setAttribute('theme', 'dark-theme');
            toggleChecked(true);
        } else {
            removeCookie('theme');
            document.body.removeAttribute('theme');
            toggleChecked(false);
        }
    };

    // console.log(theme);

    return (
        <label className={style.switch}>
            <input type="checkbox" checked={checked} onChange={() => setTheme()} />
            <span className={classNames(style.slider, style.round)} />
        </label>
    );
};

export default Switch;
