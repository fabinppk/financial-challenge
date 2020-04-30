import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';

import '_styles/style.scss';

const THEMES = {
    dark: styles.dark,
    white: styles.white,
};

const Container = ({ theme, className, children, title }) => (
    <div className={classNames(styles.container, THEMES[theme], className)}>
        {title && (
            <>
                <h5>{title}</h5>
                <hr />
            </>
        )}
        {children}
    </div>
);

Container.propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

Container.defaultProps = {
    theme: undefined,
    className: undefined,
    title: undefined,
};

export default Container;
