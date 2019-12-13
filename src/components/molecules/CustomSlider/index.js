import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '_redux/actions';
import Slider, { Handle } from 'rc-slider';
import '_molecules/CustomSlider/index.css';

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
            trackStyle={{ background: 'var(--color-primary)', height: 2 }}
            handleStyle={{
                borderColor: 'var(--color-primary)',
                height: 15,
                width: 15,
                marginLeft: -5,
                marginTop: -7,
                backgroundColor: 'var(--color-primary)'
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

handle.propTypes = {
    value: PropTypes.number,
    dragging: PropTypes.bool,
    index: PropTypes.number
};

handle.defaultProps = {
    value: undefined,
    dragging: false,
    index: undefined
};

export default CustomSlider;
