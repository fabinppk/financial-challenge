import React from 'react';
import Slider, { Handle } from 'rc-slider';

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} />;
};

const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
        style: {
            color: 'red'
        },
        label: <strong>100°C</strong>
    }
};

const CustomSlider = () => (
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
        onChange={value => console.log('ONCHANGE', value)}
        // onAfterChange={value => console.log('AFTERCHANGE')}
        // marks={marks}
        // step={2}
        min={0}
        max={20}
        defaultValue={3}
        handle={handle}
    />
);

export default CustomSlider;
