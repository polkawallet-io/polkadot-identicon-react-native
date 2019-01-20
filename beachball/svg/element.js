"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = element;

var _svg = _interopRequireDefault(require("./svg"));

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function element(size) {
  let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'svg';
  let x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  const elem = (0, _svg.default)(type);
  elem.setAttributeNS('', 'x', `${x}`);
  elem.setAttributeNS('', 'y', `${y}`);
  elem.setAttributeNS('', 'width', `${size}`);
  elem.setAttributeNS('', 'height', `${size}`);
  return elem;
}