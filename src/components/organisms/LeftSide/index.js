import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import actions from '_redux/actions';
import CustomSlider from '_molecules/CustomSlider';
import style from '_organisms/LeftSide/index.css';
import { grossCalculator, taxCalculator } from '_utils/coreCalculator';

const LeftSide = () => {
    const { financial } = useSelector(state => ({
        ...state
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        async function calculate() {
            const gross = await grossCalculator(
                financial.initialAmount,
                financial.interest,
                financial.period
            );
            dispatch(actions.setGross(gross));
        }

        calculate();
    }, [financial.period]);

    useEffect(() => {
        async function calculate() {
            const tax = await taxCalculator(
                financial.initialAmount - financial.gross,
                financial.period
            );
            dispatch(actions.setTax(tax));
        }

        calculate();
    }, [financial.gross, financial.period]);

    return (
        <div className={style.blockLeft}>
            <p className={style.subtitle}>First deposit</p>
            <span className={style.value}>R$ {financial.initialAmount}</span>
            <div>
                <button type="button" className={classNames(style.button, style.minus)}>
                    <span className={style.symbol} />
                </button>
                <button type="button" className={classNames(style.button, style.plus)}>
                    <span className={style.symbol} />
                </button>
            </div>
            <p className={style.monthSubTitle}>For</p>
            <p className={style.month}>{financial.period} months</p>
            <div className={style.containerSlide}>
                <CustomSlider />
            </div>
        </div>
    );
};

export default LeftSide;
