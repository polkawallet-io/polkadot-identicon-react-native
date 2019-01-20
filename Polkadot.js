"use strict";
import { View } from 'react-native';
import {Svg, Circle} from 'react-native-svg';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _keyring = require("@polkadot/keyring");

var _asU8a = _interopRequireDefault(require("@polkadot/util-crypto/blake2/blake2b/asU8a"));

// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// Copyright 2018 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx
//
// Here we have done the following to convert the component -
//   - Converted the code to TypeScript
//   - Removed the oo7 dependencies (since not initialised properly, it makes calls to wrong endpoints)
//   - Remove encoding functionality, these are catered for in the base
//   - Remove copy functionality (this is catered from in the base components)
//   - Split calculations into relevant functions
//   - Move constants to file-level
//   - Overall it is now just a static component, expecting an address as an input value
const s = 64;
const c = s / 2;
const z = s / 64 * 5;
const zero = (0, _asU8a.default)(new Uint8Array(32));
const schema = {
  target: {
    freq: 1,
    colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1]
  },
  cube: {
    freq: 20,
    colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5]
  },
  quazar: {
    freq: 16,
    colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0]
  },
  flower: {
    freq: 32,
    colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3]
  },
  cyclic: {
    freq: 32,
    colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6]
  },
  vmirror: {
    freq: 128,
    colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10]
  },
  hmirror: {
    freq: 128,
    colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11]
  }
};

class Identicon extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          style = _this$props.style,
          value = _this$props.value;
    const xy = this.getCircleXY();
    const colors = this.getColors();
    return _react.default.createElement(View, {
      className: `container ${className}`,
      style: style
    }, _react.default.createElement(Svg, {
      id: value,
      name: value,
      width: size,
      height: size,
      viewBox: "0 0 64 64"
    }, this.renderCircle(s / 2, s / 2, s / 2, '#eee', -1), xy.map((_ref, index) => {
      let _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return this.renderCircle(x, y, z, colors[index], index);
    })));
  }

  renderCircle(cx, cy, r, fill, key) {
    return _react.default.createElement(Circle, {
      key: key,
      cx: cx,
      cy: cy,
      r: r,
      fill: fill
    });
  }

  getCircleXY() {
    const _this$getRotation = this.getRotation(),
          r = _this$getRotation.r,
          ro2 = _this$getRotation.ro2,
          r3o4 = _this$getRotation.r3o4,
          ro4 = _this$getRotation.ro4,
          rroot3o2 = _this$getRotation.rroot3o2,
          rroot3o4 = _this$getRotation.rroot3o4;

    return [[c, c - r], [c, c - ro2], [c - rroot3o4, c - r3o4], [c - rroot3o2, c - ro2], [c - rroot3o4, c - ro4], [c - rroot3o2, c], [c - rroot3o2, c + ro2], [c - rroot3o4, c + ro4], [c - rroot3o4, c + r3o4], [c, c + r], [c, c + ro2], [c + rroot3o4, c + r3o4], [c + rroot3o2, c + ro2], [c + rroot3o4, c + ro4], [c + rroot3o2, c], [c + rroot3o2, c - ro2], [c + rroot3o4, c - ro4], [c + rroot3o4, c - r3o4], [c, c]];
  }

  getRotation() {
    const _this$props$sixPoint = this.props.sixPoint,
          sixPoint = _this$props$sixPoint === void 0 ? false : _this$props$sixPoint;
    const r = sixPoint ? s / 2 / 8 * 5 : s / 2 / 4 * 3;
    const rroot3o2 = r * Math.sqrt(3) / 2;
    const ro2 = r / 2;
    const rroot3o4 = r * Math.sqrt(3) / 4;
    const ro4 = r / 4;
    const r3o4 = r * 3 / 4;
    return {
      r,
      ro2,
      r3o4,
      ro4,
      rroot3o2,
      rroot3o4
    };
  }

  getColors() {
    const value = this.props.value;
    const total = Object.keys(schema).map(k => schema[k].freq).reduce((a, b) => a + b);
    const id = Array.from((0, _asU8a.default)((0, _keyring.decodeAddress)(value))).map((x, i) => (x + 256 - zero[i]) % 256);
    const d = Math.floor((id[30] + id[31] * 256) % total);
    const rot = id[28] % 6 * 3;
    const sat = Math.floor(id[29] * 70 / 256 + 26) % 80 + 30;
    const scheme = this.findScheme(d);
    const palette = Array.from(id).map((x, i) => {
      const b = (x + i % 28 * 58) % 256;

      if (b === 0) {
        return '#444';
      } else if (b === 255) {
        return 'transparent';
      }

      const h = Math.floor(b % 64 * 360 / 64);
      const l = [53, 15, 35, 75][Math.floor(b / 64)];
      return `hsl(${h}, ${sat}%, ${l}%)`;
    });
    return scheme.colors.map((_, i) => palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]);
  }

  findScheme(d) {
    let cum = 0;
    const ks = Object.keys(schema);

    for (let i in ks) {
      cum += schema[ks[i]].freq;

      if (d < cum) {
        return schema[ks[i]];
      }
    }

    throw new Error('Unable to find schema');
  }

}

exports.default = Identicon;