import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  border-width: ", ";\n  border-style: solid;\n  border-color: #fff;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ": ", ";\n  background: repeating-linear-gradient(\n    to ", ",\n    transparent,\n    transparent ", ",\n    #fff 0,\n    #fff\n      ", "\n  );\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(to bottom, #fff, #f3f4f5, #fff, #f3f4f5, #fff);\n  background-size: 100% 200%;\n  background-clip: content-box;\n  animation: ", " 2s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-position: 100% 100%;\n  }\n  to {\n    background-position: 100% 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var convert = function convert(value) {
  return function (defaultValue) {
    return typeof value === "number" ? "".concat(value, "px") : value || defaultValue;
  };
};

var _skeletonLoading = keyframes(_templateObject());

var _skeleton = styled(function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "100%" : _ref$height,
      padding = _ref.padding;
  return React.createElement("div", {
    className: className,
    children: children,
    style: {
      height: height,
      padding: padding
    }
  });
})(_templateObject2(), _skeletonLoading);

var _skeletonSection = styled(function (_ref2) {
  var height = _ref2.height,
      className = _ref2.className,
      padding = _ref2.padding,
      horizontal = _ref2.horizontal;
  return React.createElement(Skeleton.Padding, {
    padding: padding,
    maxContent: horizontal
  }, React.createElement("div", {
    className: className,
    style: {
      height: height
    }
  }));
})(_templateObject3(), function (_ref3) {
  var horizontal = _ref3.horizontal;
  return horizontal ? "width" : "height";
}, function (_ref4) {
  var lineHeight = _ref4.lineHeight,
      gap = _ref4.gap,
      lines = _ref4.lines;
  return "calc((".concat(convert(lineHeight)(0), " + ").concat(convert(gap)(0), ") * ").concat(lines, " - ").concat(convert(gap)(0), ")");
}, function (_ref5) {
  var horizontal = _ref5.horizontal;
  return horizontal ? "right" : "bottom";
}, function (_ref6) {
  var lineHeight = _ref6.lineHeight;
  return convert(lineHeight)();
}, function (_ref7) {
  var lineHeight = _ref7.lineHeight,
      gap = _ref7.gap;
  return "calc(".concat(convert(lineHeight)(), " + ").concat(convert(gap)(), ")");
});

var _skeletonGap = styled(function (_ref8) {
  var width = _ref8.width,
      height = _ref8.height,
      className = _ref8.className;
  return React.createElement("div", {
    className: className,
    style: {
      width: width,
      height: height
    }
  });
})(_templateObject4());

var _skeletonItem = styled(function (_ref9) {
  var height = _ref9.height,
      className = _ref9.className;
  return React.createElement("div", {
    className: className,
    style: {
      height: height
    }
  });
})(_templateObject5());

var _skeletonPadding = styled.div(_templateObject6(), function (_ref10) {
  var maxContent = _ref10.maxContent;
  return maxContent ? "max-content" : null;
}, function (_ref11) {
  var padding = _ref11.padding;
  return convert(padding)(0);
});

var Skeleton =
/*#__PURE__*/
function (_Component) {
  _inherits(Skeleton, _Component);

  function Skeleton() {
    _classCallCheck(this, Skeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(Skeleton).apply(this, arguments));
  }

  _createClass(Skeleton, [{
    key: "render",
    value: function render() {
      var Wrap = _skeleton;
      return React.createElement(Wrap, this.props);
    }
  }]);

  return Skeleton;
}(Component);

_defineProperty(Skeleton, "Section", _skeletonSection);

_defineProperty(Skeleton, "Padding", _skeletonPadding);

_defineProperty(Skeleton, "Gap", _skeletonGap);

_defineProperty(Skeleton, "Item", _skeletonItem);

_defineProperty(Skeleton, "Image", function (_ref12) {
  var height = _ref12.height,
      padding = _ref12.padding;
  return React.createElement(Skeleton.Padding, {
    padding: padding
  }, React.createElement(Skeleton.Item, {
    height: height
  }));
});

export default Skeleton;
