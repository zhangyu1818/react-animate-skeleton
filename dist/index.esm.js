import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GapElement = styled.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.backgroundColor;
});

var Gap = function Gap(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      props = _objectWithoutProperties(_ref2, ["width", "height"]);

  return React.createElement(GapElement, Object.assign({}, props, {
    style: {
      width: width,
      height: height
    }
  }));
};

var convert = function convert(value) {
  return function () {
    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return typeof value === "number" ? "".concat(value, "px") : value || defaultValue;
  };
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  border-width: ", ";\n  border-style: solid;\n  border-color: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Padding = styled.div(_templateObject$1(), function (_ref) {
  var padding = _ref.padding;
  return convert(padding)(0);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.backgroundColor;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ItemElement = styled.div(_templateObject$2());

var Item = function Item(_ref) {
  var width = _ref.width,
      height = _ref.height,
      className = _ref.className;
  return React.createElement(ItemElement, {
    className: className,
    style: {
      width: width,
      height: height
    }
  });
};

var Image = function Image(_ref) {
  var padding = _ref.padding,
      restProps = _objectWithoutProperties(_ref, ["padding"]);

  return React.createElement(Padding, {
    padding: padding
  }, React.createElement(Item, Object.assign({}, restProps)));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  ", ": ", ";\n  background: repeating-linear-gradient(\n    to ", ",\n    transparent,\n    transparent ", ",\n    ", " 0,\n    ", "\n      ", "\n  );\n  height: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var SectionElement = styled.div(_templateObject$3(), function (_ref) {
  var horizontal = _ref.horizontal;
  return horizontal ? "width" : "height";
}, function (_ref2) {
  var lineSize = _ref2.lineSize,
      gap = _ref2.gap,
      lines = _ref2.lines;
  return "calc((".concat(convert(lineSize)(), " + ").concat(convert(gap)(), ") * ").concat(lines, " - ").concat(convert(gap)(), ")");
}, function (_ref3) {
  var horizontal = _ref3.horizontal;
  return horizontal ? "right" : "bottom";
}, function (_ref4) {
  var lineSize = _ref4.lineSize;
  return convert(lineSize)();
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.backgroundColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.backgroundColor;
}, function (_ref7) {
  var lineSize = _ref7.lineSize,
      gap = _ref7.gap;
  return "calc(".concat(convert(lineSize)(), " + ").concat(convert(gap)(), ")");
}, function (_ref8) {
  var horizontal = _ref8.horizontal,
      lineSize = _ref8.lineSize;
  return horizontal ? convert(lineSize)() : null;
});

var Section = function Section(props) {
  var padding = props.padding,
      horizontal = props.horizontal,
      resetProps = _objectWithoutProperties(props, ["padding", "horizontal"]);

  return React.createElement(Padding, {
    padding: padding
  }, React.createElement(SectionElement, Object.assign({
    horizontal: horizontal
  }, resetProps)));
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-position: 100% 100%;\n  }\n  to {\n    background-position: 100% -100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  background: linear-gradient(\n    to bottom,\n    ", "\n  );\n  background-size: 200% 200%;\n  background-clip: content-box;\n  animation: ", "\n    ", "s\n    linear infinite;\n  ", ";\n  width: ", ";\n  opacity: 0.45;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var SkeletonElement = styled.div(_templateObject$4(), function (_ref) {
  var _ref$theme = _ref.theme,
      backgroundColor = _ref$theme.backgroundColor,
      skeletonColor = _ref$theme.skeletonColor;
  return "".concat(backgroundColor, ",").concat(skeletonColor, " 30%,").concat(backgroundColor, " 60%");
}, function (_ref2) {
  var loadingKeyFrames = _ref2.loadingKeyFrames;
  return loadingKeyFrames;
}, function (_ref3) {
  var theme = _ref3.theme,
      animationDuration = _ref3.animationDuration;
  return animationDuration || theme.animationDuration;
}, function (_ref4) {
  var animate = _ref4.animate;
  return !animate ? "animation:none;" : "";
}, function (_ref5) {
  var width = _ref5.width;
  return convert(width)("100%");
});
var defaultLoadingKeyFrames = keyframes(_templateObject2());

var Skeleton = function Skeleton(_ref6) {
  var _ref6$loadingKeyFrame = _ref6.loadingKeyFrames,
      loadingKeyFrames = _ref6$loadingKeyFrame === void 0 ? defaultLoadingKeyFrames : _ref6$loadingKeyFrame,
      _ref6$animate = _ref6.animate,
      animate = _ref6$animate === void 0 ? true : _ref6$animate,
      props = _objectWithoutProperties(_ref6, ["loadingKeyFrames", "animate"]);

  return React.createElement(SkeletonElement, Object.assign({
    loadingKeyFrames: loadingKeyFrames,
    animate: animate
  }, props));
};

var defaultSkeletonTheme = {
  backgroundColor: "#fff",
  skeletonColor: "#e4e6f2",
  animationDuration: 2
};

var SkeletonProvider = function SkeletonProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;

  var mergeTheme = _objectSpread2({}, defaultSkeletonTheme, {}, theme);

  return React.createElement(ThemeProvider, {
    theme: mergeTheme
  }, children);
};

export { Gap, Image, Item, Padding, Section, Skeleton, SkeletonProvider };
