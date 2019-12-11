import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '_redux/actions';
import Slider, { Handle } from 'rc-slider';

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} />;
};

const CustomSlider = () => {
    const { financial } = useSelector(state => ({
        ...state
    }));

    const dispatch = useDispatch();

    const setMonth = value => {
        dispatch(actions.setMonth(value));
    };

    return (
        <Slider
            railStyle={{
                backgroundColor: '#bdbdbd',
                borderRadius: 10,
                height: 2
            }}
            trackStyle={{ background: '#9057bf', height: 2 }}
            handleStyle={{
                borderColor: '#9057bf',
                height: 15,
                width: 15,
                marginLeft: -10,
                marginTop: -7,
                backgroundColor: '#9057bf'
            }}
            onChange={value => {
                setMonth(value);
            }}
            value={financial.period}
            step={2}
            min={0}
            max={60}
            defaultValue={3}
            handle={handle}
        />
    );
};

export default CustomSlider;
