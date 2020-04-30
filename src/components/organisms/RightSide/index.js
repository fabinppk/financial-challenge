import React from 'react';
import { useSelector } from 'react-redux';
import style from '_organisms/RightSide/index.module.scss';
import relaxing from '_images/relaxing.png';

const RightSide = () => {
    const { financial } = useSelector((state) => ({
        ...state,
    }));

    return (
        <div className={style.blockRight}>
            <img className={style.relaxing} src={relaxing} alt="relaxing" />
            <p>after {financial.period} months you would have</p>
            <p className={style.amount}>
                R$ {parseFloat(financial.gross - financial.tax).toFixed(2)}
            </p>
            <p>(gross amount R$ {parseFloat(financial.gross).toFixed(2)})</p>
            <p className={style.ps}>
                {`This estimate does not constitute a guarantee of future earnings. It
            is only an estimate based on today's interbank Deposit rate for the
            entire period that your deposit would remain in your NuConta
            account, and considering no withdrawals.`}
            </p>
        </div>
    );
};

export default RightSide;
