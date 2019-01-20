"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = container;

require("core-js/modules/web.dom.iterable");

// Copyright 2016 Dan Finlay
// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function container(diameter) {
  let background = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
  let className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  let _style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  const element = document.createElement('div');
  const style = Object.assign({
    background,
    borderRadius: `${diameter / 2}px`,
    display: 'inline-block',
    height: `${diameter}px`,
    margin: '0px',
    overflow: 'hidden',
    padding: '0px',
    width: `${diameter}px`
  }, _style);
  element.className = className;
  element.style.background = background;
  Object.keys(style).forEach(key => {
    element.style[key] = style[key];
  });
  return element;
}