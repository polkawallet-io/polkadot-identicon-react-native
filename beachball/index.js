"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = identicon;

var _colors = _interopRequireDefault(require("./colors"));

var _container = _interopRequireDefault(require("./container"));

var _seeder = _interopRequireDefault(require("./seeder"));

var _circle = _interopRequireDefault(require("./shape/circle"));

var _element = _interopRequireDefault(require("./svg/element"));

var _defaults = require("./defaults");

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function identicon(seed) {
  let diameter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
  let className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let style = arguments.length > 3 ? arguments[3] : undefined;
  const seeder = (0, _seeder.default)(seed);
  const colorGen = (0, _colors.default)(seeder);
  const outer = (0, _container.default)(diameter, 'white', className, style);
  const container = (0, _container.default)(diameter, colorGen());
  const svg = (0, _element.default)(diameter);
  outer.appendChild(container);
  container.appendChild(svg);

  for (let count = 0; count < _defaults.SHAPE_COUNT; count++) {
    const fill = colorGen();
    const shape = (0, _circle.default)(seeder, fill, diameter, count);
    svg.appendChild(shape);
  }

  return outer;
}