import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { setCookie, getCookie, removeCookie } from '_utils/cookie';
import style from '_atoms/Switch/index.module.scss';

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

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={style.switch}>
            <input
                className={style.input}
                type="checkbox"
                checked={checked}
                onChange={() => setTheme()}
            />
            <span className={classNames(style.slider, style.round)} />
        </label>
    );
};

Switch.propTypes = {
    theme: PropTypes.bool,
};

Switch.defaultProps = {
    theme: false,
};

export default Switch;
