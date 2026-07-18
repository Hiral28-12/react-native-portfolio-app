import React from 'react';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const CircularProgress = ({ size = 78, strokeWidth = 3 }) => {
  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = 0;

  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#A855F7" />

          <Stop offset="100%" stopColor="#00E5FF" />
        </LinearGradient>
      </Defs>

      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#232742"
        strokeWidth={strokeWidth}
        fill="none"
      />

      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#grad)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        rotation="-90"
        origin={`${size / 2}, ${size / 2}`}
      />
    </Svg>
  );
};

export default CircularProgress;
