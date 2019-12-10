import React from 'react';
import classNames from 'classnames';
import CustomSlider from '_molecules/CustomSlider';
import style from '_organisms/LeftSide/index.css';

const LeftSide = () => (
    <div className={style.blockLeft}>
        <p className={style.subtitle}>First deposit</p>
        <span className={style.value}>R$ 1.000</span>
        <div>
            <button type="button" className={classNames(style.button, style.minus)}>
                <span className={style.symbol} />
            </button>
            <button type="button" className={classNames(style.button, style.plus)}>
                <span className={style.symbol} />
            </button>
        </div>
        <p className={style.monthSubTitle}>For</p>
        <p className={style.month}>60 months</p>
        <div className={style.containerSlide}>
            <CustomSlider />
        </div>
    </div>
);

export default LeftSide;
