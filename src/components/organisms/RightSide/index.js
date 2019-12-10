import React from 'react';

import style from '_organisms/RightSide/index.css';
import relaxing from '_images/relaxing.png';

const RightSide = () => (
    <div className={style.blockRight}>
        <img className={style.relaxing} src={relaxing} alt="relaxing" />
        <p>after 60 months you would have</p>
        <p className={style.amount}>R$ 1296,15</p>
        <p>(gross amount R$ 1348,41)</p>
        <p className={style.ps}>
            {`This estimate does not constitute a guarantee of future earnings. It
            is only an estimate based on today's interbank Deposit rate for the
            entire period that your deposit would remain in your NuConta
            account, and considering no withdrawals.`}
        </p>
    </div>
);

export default RightSide;
