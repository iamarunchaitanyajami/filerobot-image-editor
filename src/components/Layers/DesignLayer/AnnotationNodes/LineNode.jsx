/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-konva';

/** Internal Dependencies */
import nodesCommonPropTypes from '../nodesCommonPropTypes';

const LineNode = ({
  id,
  name,
  scaleX,
  scaleY,
  rotation,
  annotationEvents = {},
  points,
  lineCap = 'butt',
  stroke= '#000000',
  strokeWidth = 1,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  shadowColor,
  shadowOpacity,
  tension = undefined,
  opacity,
  ...otherProps
}) => {

  const newOtherProps = {
    ...nodesCommonPropTypes.defaults,
    ...otherProps
  }


  return <Line
      id={id}
      name={name}
      rotation={rotation}
      scaleX={scaleX}
      scaleY={scaleY}
      stroke={stroke}
      strokeWidth={strokeWidth}
      shadowOffsetX={shadowOffsetX}
      shadowOffsetY={shadowOffsetY}
      shadowBlur={shadowBlur}
      shadowColor={shadowColor}
      shadowOpacity={shadowOpacity}
      points={points}
      lineCap={lineCap}
      tension={tension}
      hitStrokeWidth={20}
      x={0}
      y={0}
      opacity={opacity}
      {...annotationEvents}
      {...newOtherProps}
  />
};

LineNode.propTypes = {
  ...nodesCommonPropTypes.definitions,
  points: PropTypes.instanceOf(Array).isRequired,
  annotationEvents: PropTypes.instanceOf(Object),
  lineCap: PropTypes.string,
  tension: PropTypes.number,
};

export default LineNode;
