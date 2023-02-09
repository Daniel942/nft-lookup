import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgVector = (props) => (
  <Svg width={9} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="m1 1 7 7-7 7"
      stroke="#fff"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default React.memo(SvgVector);
