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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    border-color: ", ";\n    border-width: ", ";\n    border-style: solid;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background: transparent;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    border-width: ", ";\n    border-style: solid;\n    border-color: ", ";\n    flex: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", ": ", ";\n    background: repeating-linear-gradient(\n      to ", ",\n      transparent,\n      transparent ", ",\n      ", " 0,\n      ", "\n        ", "\n    );\n    height: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: linear-gradient(\n        to bottom,\n        ", ",\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n      background-size: 100% 200%;\n      background-clip: content-box;\n      animation: ", " ", "s linear infinite;\n    "]);

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
      var Wrap = styled(function (_ref) {
        var className = _ref.className,
            children = _ref.children,
            height = _ref.height,
            width = _ref.width,
            padding = _ref.padding;
        return React.createElement("div", {
          className: className,
          children: children,
          style: {
            height: height,
            padding: padding,
            width: width
          }
        });
      })(_templateObject2(), Skeleton.backgroundColor, Skeleton.skeletonColor, Skeleton.backgroundColor, Skeleton.skeletonColor, Skeleton.backgroundColor, _skeletonLoading, Skeleton.duration);
      return React.createElement(Wrap, this.props);
    }
  }]);

  return Skeleton;
}(Component);

_defineProperty(Skeleton, "backgroundColor", "#fff");

_defineProperty(Skeleton, "skeletonColor", "#f3f4f5");

_defineProperty(Skeleton, "duration", 2);

_defineProperty(Skeleton, "Section", styled(function (_ref2) {
  var height = _ref2.height,
      className = _ref2.className,
      padding = _ref2.padding,
      horizontal = _ref2.horizontal,
      block = _ref2.block;
  return React.createElement(Skeleton.Padding, {
    padding: padding,
    maxContent: horizontal,
    block: block
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
  var lineSize = _ref4.lineSize,
      gap = _ref4.gap,
      lines = _ref4.lines;
  return "calc((".concat(convert(lineSize)(0), " + ").concat(convert(gap)(0), ") * ").concat(lines, " - ").concat(convert(gap)(0), ")");
}, function (_ref5) {
  var horizontal = _ref5.horizontal;
  return horizontal ? "right" : "bottom";
}, function (_ref6) {
  var lineSize = _ref6.lineSize;
  return convert(lineSize)();
}, Skeleton.backgroundColor, Skeleton.backgroundColor, function (_ref7) {
  var lineSize = _ref7.lineSize,
      gap = _ref7.gap;
  return "calc(".concat(convert(lineSize)(), " + ").concat(convert(gap)(), ")");
}, function (_ref8) {
  var horizontal = _ref8.horizontal,
      lineSize = _ref8.lineSize;
  return horizontal ? convert(lineSize) : null;
}));

_defineProperty(Skeleton, "Padding", styled.div(_templateObject4(), function (_ref9) {
  var maxContent = _ref9.maxContent;
  return maxContent ? "max-content" : null;
}, function (_ref10) {
  var padding = _ref10.padding;
  return convert(padding)(0);
}, Skeleton.backgroundColor, function (_ref11) {
  var block = _ref11.block;
  return block ? 1 : "none";
}));

_defineProperty(Skeleton, "Gap", styled(function (_ref12) {
  var width = _ref12.width,
      height = _ref12.height,
      className = _ref12.className,
      flex = _ref12.flex;
  return React.createElement("div", {
    className: className,
    style: {
      width: width,
      height: height,
      flex: flex
    }
  });
})(_templateObject5(), Skeleton.backgroundColor));

_defineProperty(Skeleton, "Item", styled(function (_ref13) {
  var height = _ref13.height,
      width = _ref13.width,
      className = _ref13.className;
  return React.createElement("div", {
    className: className,
    style: {
      height: height,
      width: width
    }
  });
})(_templateObject6()));

_defineProperty(Skeleton, "Image", function (_ref14) {
  var height = _ref14.height,
      padding = _ref14.padding;
  return React.createElement(Skeleton.Padding, {
    padding: padding
  }, React.createElement(Skeleton.Item, {
    height: height
  }));
});

_defineProperty(Skeleton, "Avatar", function (_ref15) {
  var width = _ref15.width,
      height = _ref15.height,
      padding = _ref15.padding;
  return React.createElement(Skeleton.Padding, {
    padding: padding,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, React.createElement(Skeleton.Item, {
    height: height,
    width: width
  }), React.createElement(Skeleton.Gap, {
    flex: 1
  }));
});

_defineProperty(Skeleton, "Horizontal", styled(function (_ref16) {
  var children = _ref16.children,
      className = _ref16.className;
  return React.createElement("div", {
    className: className
  }, React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      block: true
    });
  }));
})(_templateObject7(), Skeleton.backgroundColor, function (_ref17) {
  var padding = _ref17.padding;
  return convert(padding)(0);
}));

export default Skeleton;
