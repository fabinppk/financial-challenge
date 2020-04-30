import React from 'react';
import { NextSeo } from 'next-seo';
import classNames from 'classnames';
import Base from '_templates/Base';
import LeftSide from '_organisms/LeftSide';
import RightSide from '_organisms/RightSide';
import Switch from '_atoms/Switch';
import PropTypes from 'prop-types';

import style from '_pages/index/index.module.scss';

const Index = ({ theme }) => {
    return (
        <Base>
            <NextSeo
                title="Nubank"
                description="Calculator - Nubank"
                openGraph={{
                    title: 'Nubank',
                    description: 'Calculator - Nubank',
                }}
            />
            <div className={classNames('wrapper')}>
                <div className={classNames('wrapperContent')}>
                    <div className={style.container}>
                        <LeftSide />
                        <RightSide />
                    </div>
                </div>
            </div>
            <Switch theme={theme} />
        </Base>
    );
};

Index.getInitialProps = async ({ req }) => {
    if (req.cookies.theme !== 'dark-theme') {
        return { theme: false };
    }
    return { theme: true };
};

Index.propTypes = {
    theme: PropTypes.bool,
};

Index.defaultProps = {
    theme: false,
};

export default Index;
