import { Props as BaseProps } from './types';
import React from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

declare type Props = BaseProps & {
    sixPoint?: boolean;
};
export default class Identicon extends React.PureComponent<Props> {
    render(): JSX.Element;
    private renderCircle;
    private getCircleXY;
    private getRotation;
    private getColors;
    private findScheme;
}
export {};
