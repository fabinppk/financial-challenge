import React from 'react';
import { NextSeo } from 'next-seo';
import classNames from 'classnames';
import Base from '_templates/Base';
import LeftSide from '_organisms/LeftSide';
import RightSide from '_organisms/RightSide';
import Switch from '_atoms/Switch';

import globalStyle from '_styles/style.css';
import style from './index.css';

const Index = ({ theme }) => {
    return (
        <Base>
            <NextSeo
                title="Nubank"
                description="Calculator - Nubank"
                openGraph={{
                    title: 'Nubank',
                    description: 'Calculator - Nubank'
                }}
            />
            <div className={classNames(globalStyle.wrapper)}>
                <div className={classNames(globalStyle.wrapperContent)}>
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

export default Index;
