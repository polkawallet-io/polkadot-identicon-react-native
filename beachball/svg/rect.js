"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rect;

var _element = _interopRequireDefault(require("./element"));

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function rect(size) {
  const elem = (0, _element.default)(size, 'rect');
  elem.setAttributeNS('', 'rx', `${size / 16}`);
  elem.setAttributeNS('', 'ry', `${size / 16}`);
  return elem;
}