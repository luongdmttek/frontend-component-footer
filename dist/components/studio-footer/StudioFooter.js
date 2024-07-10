function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { intlShape, injectIntl, FormattedMessage } from '@edx/frontend-platform/i18n';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { ActionRow, Button, Container, Hyperlink, Image, TransitionReplace } from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import messages from './messages';
ensureConfig(['LMS_BASE_URL', 'MARKETING_SITE_BASE_URL', 'TERMS_OF_SERVICE_URL', 'PRIVACY_POLICY_URL', 'SUPPORT_EMAIL', 'SITE_NAME', 'STUDIO_BASE_URL', 'ENABLE_ACCESSIBILITY_PAGE'], 'Studio Footer component');
var StudioFooter = function StudioFooter(_ref) {
  var intl = _ref.intl;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useContext = useContext(AppContext),
    config = _useContext.config;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, {
    size: "xl",
    className: "px-4 border-top border-light"
  }, /*#__PURE__*/React.createElement(ActionRow, {
    className: "container-fluid d-flex py-3 m-0 x-small"
  }, /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.LMS_BASE_URL
  }, /*#__PURE__*/React.createElement(Image, {
    width: "200px",
    src: "https://d24mgaater58cv.cloudfront.net/images/hutech-elearning-logo-large.png"
  })), /*#__PURE__*/React.createElement(ActionRow.Spacer, null), /*#__PURE__*/React.createElement(Hyperlink, {
    destination: config.LMS_BASE_URL
  }, "LMS"))));
};
StudioFooter.propTypes = {
  // injected
  intl: intlShape.isRequired
};
export default injectIntl(StudioFooter);
//# sourceMappingURL=StudioFooter.js.map