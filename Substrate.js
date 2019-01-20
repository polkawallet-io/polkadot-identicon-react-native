"use strict";
import { View } from 'react-native';
import {Svg, Circle} from 'react-native-svg';
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _beachball = _interopRequireDefault(require("./beachball"));

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class Substrate extends _react.default.PureComponent {
  constructor() {
    super(...arguments);

    this.appendIcon = node => {
      const _this$props = this.props,
            size = _this$props.size,
            value = _this$props.value;

      if (node) {
        node.appendChild((0, _beachball.default)(value, size));
      }
    };
  }

  render() {
    const _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style;
    return _react.default.createElement(View, {
      className: `container ${className}`,
      ref: this.appendIcon,
      style: style
    });
  }

}

exports.default = Substrate;