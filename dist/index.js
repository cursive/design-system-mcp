import { colors as J, spacing as X, typography as Y } from "./tokens.js";
import { j as e } from "./jsx-runtime-11e331e2.mjs";
import { C as g, R as k, a as L } from "./index-a1ae4fb8.mjs";
import { M as se, T as te } from "./index-a1ae4fb8.mjs";
import { C as w } from "./ChevronDownIcon-3d5fb7df.mjs";
import { C as ie, H as ae } from "./index-f0f3e66c.mjs";
import { PanelHeader as oe } from "./components/PanelHeader.js";
import { Button as v } from "./components/Button.js";
import { C as ce, a as de, b as he } from "./index-c0afefd0.mjs";
import { P as ue } from "./PageDivider-75946119.mjs";
import { StarRating as pe } from "./components/StarRating.js";
import { Hero as je } from "./components/Hero.js";
import { FAQ as ve } from "./components/FAQ.js";
import { Reviews as ge } from "./components/Reviews.js";
import { Supporting as Le } from "./components/Supporting.js";
import "react";
const I = ({
  size: t = "1em",
  color: r = "currentColor",
  className: s
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    className: s,
    style: { color: r },
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx(
        "rect",
        {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          stroke: "currentColor",
          strokeWidth: "2",
          fill: "none"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M9 9h6v6H9z",
          fill: "currentColor",
          fillOpacity: "0.3"
        }
      )
    ]
  }
);
const f = {
  // 20px Icons
  search: {
    viewBox: "0 0 14 14",
    path: "M12.9375 14L7.95833 9.02083C7.54167 9.32639 7.08479 9.56597 6.58771 9.73958C6.09062 9.91319 5.5616 10 5.00063 10C3.61132 10 2.43056 9.51389 1.45833 8.54167C0.486111 7.56944 0 6.38889 0 5C0 3.61111 0.486111 2.43056 1.45833 1.45833C2.43056 0.486111 3.61111 0 5 0C6.38889 0 7.56944 0.486111 8.54167 1.45833C9.51389 2.43056 10 3.61132 10 5.00063C10 5.5616 9.91319 6.09062 9.73958 6.58771C9.56597 7.08479 9.32639 7.54167 9.02083 7.95833L14 12.9375L12.9375 14ZM5 8.5C5.97222 8.5 6.79861 8.15972 7.47917 7.47917C8.15972 6.79861 8.5 5.97222 8.5 5C8.5 4.02778 8.15972 3.20139 7.47917 2.52083C6.79861 1.84028 5.97222 1.5 5 1.5C4.02778 1.5 3.20139 1.84028 2.52083 2.52083C1.84028 3.20139 1.5 4.02778 1.5 5C1.5 5.97222 1.84028 6.79861 2.52083 7.47917C3.20139 8.15972 4.02778 8.5 5 8.5Z"
  },
  edit: {
    viewBox: "0 0 14 14",
    path: "M2.5 11.5L11.5 2.5L11.5 11.5L2.5 11.5ZM1 0L14 0L14 13L1 13L1 0ZM3.5 3.5L10.5 3.5L10.5 10.5L3.5 10.5L3.5 3.5Z"
  },
  "local-shipping": {
    viewBox: "0 0 14 14",
    path: "M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10ZM11 10C11.5523 10 12 9.55228 12 9C12 8.44772 11.5523 8 11 8C10.4477 8 10 8.44772 10 9C10 9.55228 10.4477 10 11 10ZM12 6L9 6L9 4L2 4L2 6L0 6L0 2L14 2L14 6L12 6Z"
  },
  storefront: {
    viewBox: "0 0 14 14",
    path: "M2 12L12 12L12 4L2 4L2 12ZM0 2L14 2L14 14L0 14L0 2ZM3 6L11 6L11 10L3 10L3 6Z"
  },
  "credit-card": {
    viewBox: "0 0 14 14",
    path: "M12 2L2 2C0.9 2 0 2.9 0 4L0 10C0 11.1 0.9 12 2 12L12 12C13.1 12 14 11.1 14 10L14 4C14 2.9 13.1 2 12 2ZM12 4L12 6L2 6L2 4L12 4ZM2 10L2 8L12 8L12 10L2 10Z"
  },
  "account-circle": {
    viewBox: "0 0 24 24",
    path: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
  },
  gift: {
    viewBox: "0 0 24 24",
    path: "M20 6H17.83C18.5 5.35 19 4.45 19 3.5C19 1.57 17.43 0 15.5 0C14.12 0 12.9 0.9 12 2.25C11.1 0.9 9.88 0 8.5 0C6.57 0 5 1.57 5 3.5C5 4.45 5.5 5.35 6.17 6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM15.5 2C16.33 2 17 2.67 17 3.5C17 4.33 16.33 5 15.5 5C14.67 5 14 4.33 14 3.5C14 2.67 14.67 2 15.5 2ZM8.5 2C9.33 2 10 2.67 10 3.5C10 4.33 9.33 5 8.5 5C7.67 5 7 4.33 7 3.5C7 2.67 7.67 2 8.5 2ZM20 20H4V8H20V20ZM12 10C10.9 10 10 10.9 10 12V18H14V12C14 10.9 13.1 10 12 10Z"
  },
  // 40px How It Works Icons
  "gift-large": {
    viewBox: "0 0 40 40",
    path: "M30.3333 2H3.66667C2.74619 2 2 2.74619 2 3.66667V7C2 7.92047 2.74619 8.66667 3.66667 8.66667H30.3333C31.2538 8.66667 32 7.92047 32 7V3.66667C32 2.74619 31.2538 2 30.3333 2ZM2 2V23.6667M25.3333 2V13.6667C25.3333 14.5507 24.9821 15.3986 24.357 16.0237C23.7319 16.6488 22.8841 17 22 17H5.33333C4.44928 17 3.60143 16.6488 2.97631 16.0237C2.35119 15.3986 2 14.5507 2 13.6667V2M6.16667 10.3341C5.0616 10.3341 4.00179 9.89508 3.22039 9.11367C2.43899 8.33227 2 7.27246 2 6.1674C2 5.06233 2.43899 4.00252 3.22039 3.22112C4.00179 2.43972 5.0616 2.00073 6.16667 2.00073C7.77448 1.97272 9.35004 2.75283 10.6879 4.23933C12.0257 5.72583 13.0638 7.84974 13.6667 10.3341C14.2695 7.84974 15.3076 5.72583 16.6454 4.23933C17.9833 2.75283 19.5589 1.97272 21.1667 2.00073C22.2717 2.00073 23.3315 2.43972 24.1129 3.22112C24.8943 4.00252 25.3333 5.06233 25.3333 6.1674C25.3333 7.27246 24.8943 8.33227 24.1129 9.11367C23.3315 9.89508 22.2717 10.3341 21.1667 10.3341"
  },
  "wine-large": {
    viewBox: "0 0 40 40",
    path: "M2 2H15.3333M2 2H18.6667M2 2V13.6667M10.3333 23.6667C12.5435 23.6667 14.6631 22.7887 16.2259 21.2259C17.7887 19.6631 18.6667 17.5435 18.6667 15.3333C18.6667 12 17.8333 8.66667 15.3333 2H5.33333C2.83333 8.66667 2 12 2 15.3333C2 17.5435 2.87797 19.6631 4.44078 21.2259C6.00358 22.7887 8.1232 23.6667 10.3333 23.6667Z"
  },
  "car-large": {
    viewBox: "0 0 40 40",
    path: "M30.3333 18.6667H33.6667C34.6667 18.6667 35.3333 18 35.3333 17V12C35.3333 10.5 34.1667 9.16667 32.8333 8.83333C29.8333 8 25.3333 7 25.3333 7C25.3333 7 23.1667 4.66667 21.6667 3.16667C20.8333 2.5 19.8333 2 18.6667 2H7C6 2 5.16667 2.66667 4.66667 3.5L2.33333 8.33333C2.11263 8.97704 2 9.65284 2 10.3333V17C2 18 2.66667 18.6667 3.66667 18.6667H7M5.33333 8.66667C7.17428 8.66667 8.66667 7.17428 8.66667 5.33333C8.66667 3.49238 7.17428 2 5.33333 2C3.49238 2 2 3.49238 2 5.33333C2 7.17428 3.49238 8.66667 5.33333 8.66667ZM2 2H12M5.33333 8.66667C7.17428 8.66667 8.66667 7.17428 8.66667 5.33333C8.66667 3.49238 7.17428 2 5.33333 2C3.49238 2 2 3.49238 2 5.33333C2 7.17428 3.49238 8.66667 5.33333 8.66667Z"
  },
  "chef-hat-large": {
    viewBox: "0 0 40 40",
    path: "M25.3368 32.0068C25.7789 32.0068 26.2028 31.8312 26.5153 31.5186C26.8279 31.206 27.0035 30.7821 27.0035 30.3401V21.4234C27.0035 20.6618 27.5302 20.0168 28.2152 19.6884C29.6335 19.0118 30.7672 17.856 31.4162 16.4249C32.0652 14.9938 32.1879 13.3794 31.7625 11.8667C31.3372 10.354 30.3911 9.0401 29.0913 8.157C27.7915 7.27391 26.2216 6.87833 24.6585 7.04009C24.0148 5.54377 22.9466 4.26892 21.5861 3.37316C20.2256 2.47739 18.6324 2 17.0035 2C15.3746 2 13.7814 2.47739 12.4209 3.37316C11.0604 4.26892 9.99222 5.54377 9.34849 7.04009C7.78613 6.87946 6.21722 7.2756 4.91838 8.15866C3.61954 9.04171 2.67418 10.355 2.24897 11.8669C1.82376 13.3789 1.94601 14.9924 2.59417 16.423C3.24233 17.8536 4.37477 19.0095 5.79183 19.6868C6.47683 20.0168 7.00349 20.6618 7.00349 21.4218V30.3401C7.00349 30.7821 7.17909 31.206 7.49165 31.5186C7.80421 31.8312 8.22813 32.0068 8.67016 32.0068H25.3368ZM2 2H22"
  },
  "house-large": {
    viewBox: "0 0 40 40",
    path: "M12 17V3.66667C12 3.22464 11.8244 2.80072 11.5118 2.48816C11.1993 2.1756 10.7754 2 10.3333 2H3.66667C3.22464 2 2.80072 2.1756 2.48816 2.48816C2.1756 2.80072 2 3.22464 2 3.66667V17M2 15.3325C1.99988 14.8476 2.10556 14.3685 2.30965 13.9287C2.51374 13.4888 2.81133 13.0988 3.18167 12.7858L14.8483 2.78747C15.45 2.27898 16.2123 2 17 2C17.7877 2 18.55 2.27898 19.1517 2.78747L30.8183 12.7858C31.1887 13.0988 31.4863 13.4888 31.6904 13.9287C31.8944 14.3685 32.0001 14.8476 32 15.3325V30.3325C32 31.2165 31.6488 32.0644 31.0237 32.6895C30.3986 33.3146 29.5507 33.6658 28.6667 33.6658H5.33333C4.44928 33.6658 3.60143 33.3146 2.97631 32.6895C2.35119 32.0644 2 31.2165 2 30.3325V15.3325Z"
  }
}, V = ({
  name: t,
  size: r = 20,
  color: s,
  className: o = "",
  decorative: a = !0,
  "aria-label": c
}) => {
  const n = f[t];
  if (!n)
    return console.warn(`Icon "${t}" not found. Available icons: ${Object.keys(f).join(", ")}`), null;
  const d = {
    width: r,
    height: r,
    ...s && { color: s }
  }, l = `icon ${o}`.trim();
  return /* @__PURE__ */ e.jsx("div", { className: l, style: d, children: /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "icon__svg",
      viewBox: n.viewBox,
      "aria-hidden": a,
      "aria-label": a ? void 0 : c,
      role: a ? void 0 : "img",
      children: /* @__PURE__ */ e.jsx("path", { className: "icon__path", d: n.path })
    }
  ) });
};
const W = ({
  size: t = 24,
  className: r = "",
  color: s = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    className: `package-icon ${r}`,
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26L13 2.26C12.696 2.07528 12.3511 1.98193 12 1.98193C11.6489 1.98193 11.304 2.07528 11 2.26L4 6.26C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.74L11 21.74C11.304 21.9247 11.6489 22.0181 12 22.0181C12.3511 22.0181 12.696 21.9247 13 21.74L20 17.74C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M3.27 6.96L12 12.01L20.73 6.96",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12 22.08V12",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
const S = ({
  size: t = 24,
  className: r = "",
  color: s = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    className: `calendar-fold-icon ${r}`,
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx(
        "rect",
        {
          x: "3",
          y: "4",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2",
          stroke: s,
          strokeWidth: "2",
          fill: "none"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "line",
        {
          x1: "16",
          y1: "2",
          x2: "16",
          y2: "6",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "line",
        {
          x1: "8",
          y1: "2",
          x2: "8",
          y2: "6",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "line",
        {
          x1: "3",
          y1: "10",
          x2: "21",
          y2: "10",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M8 14H8.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12 14H12.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M16 14H16.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M8 18H8.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M12 18H12.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M16 18H16.01",
          stroke: s,
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
const P = ({
  label: t = "Label",
  placeholder: r = "Value",
  value: s = "",
  errorMessage: o = "Required",
  disabled: a = !1,
  showLabel: c = !0,
  showIcon: n = !1,
  state: d = "default",
  className: l = "",
  onChange: i,
  onFocus: x,
  onBlur: h
}) => {
  const u = (j) => {
    i && i(j.target.value);
  }, C = () => a ? "textfield--disabled" : `textfield--${d}`, m = () => {
    const j = "textfield__input";
    return a ? `${j} textfield__input--disabled` : `${j} textfield__input--${d}`;
  }, p = () => d === "error" || d === "error-filled" ? d === "error-filled" ? "Explainer" : o : null;
  return /* @__PURE__ */ e.jsxs("div", { className: `textfield ${C()} ${l}`, children: [
    c && /* @__PURE__ */ e.jsx("label", { className: "textfield__label", children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "textfield__input-container", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          className: m(),
          placeholder: r,
          value: s,
          disabled: a,
          onChange: u,
          onFocus: x,
          onBlur: h
        }
      ),
      n && /* @__PURE__ */ e.jsx("div", { className: "textfield__icon" })
    ] }),
    p() && /* @__PURE__ */ e.jsx("div", { className: "textfield__error", children: p() })
  ] });
};
const T = ({
  label: t = "Label",
  placeholder: r = "Select a country",
  value: s = "",
  hint: o = "Hint",
  showLabel: a = !0,
  showHint: c = !0,
  state: n = "default",
  className: d = "",
  onChange: l,
  onFocus: i,
  onBlur: x,
  disabled: h = !1
}) => {
  const u = (p) => {
    l && l(p.target.value);
  }, C = () => h ? "select--disabled" : `select--${n}`, m = () => {
    const p = "select__field";
    return h ? `${p} select__field--disabled` : `${p} select__field--${n}`;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: `select ${C()} ${d}`, children: [
    a && /* @__PURE__ */ e.jsx("label", { className: "select__label", children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "select__field-container", children: [
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          className: m(),
          value: s,
          disabled: h,
          onChange: u,
          onFocus: i,
          onBlur: x,
          children: [
            /* @__PURE__ */ e.jsx("option", { value: "", disabled: !0, children: r }),
            /* @__PURE__ */ e.jsx("option", { value: "us", children: "United States" }),
            /* @__PURE__ */ e.jsx("option", { value: "ca", children: "Canada" }),
            /* @__PURE__ */ e.jsx("option", { value: "uk", children: "United Kingdom" }),
            /* @__PURE__ */ e.jsx("option", { value: "au", children: "Australia" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "select__icon", children: /* @__PURE__ */ e.jsx(w, { size: 24, color: "var(--color-foreground-primary)" }) })
    ] }),
    c && /* @__PURE__ */ e.jsx("div", { className: "select__hint", children: o })
  ] });
};
const N = ({
  label: t = "Label",
  placeholder: r = "Value",
  value: s = "",
  errorMessage: o = "Required",
  showLabel: a = !0,
  showError: c = !1,
  state: n = "default",
  className: d = "",
  onChange: l,
  onFocus: i,
  onBlur: x,
  disabled: h = !1,
  rows: u = 4
}) => {
  const C = (_) => {
    l && l(_.target.value);
  }, m = () => h ? "textarea--disabled" : `textarea--${n}`, p = () => {
    const _ = "textarea__field";
    return h ? `${_} textarea__field--disabled` : `${_} textarea__field--${n}`;
  }, j = () => n === "error" || n === "error-filled" ? n === "error-filled" ? "Explainer" : o : null;
  return /* @__PURE__ */ e.jsxs("div", { className: `textarea ${m()} ${d}`, children: [
    a && /* @__PURE__ */ e.jsx("label", { className: "textarea__label", children: t }),
    /* @__PURE__ */ e.jsx("div", { className: "textarea__field-container", children: /* @__PURE__ */ e.jsx(
      "textarea",
      {
        className: p(),
        placeholder: r,
        value: s,
        disabled: h,
        rows: u,
        onChange: C,
        onFocus: i,
        onBlur: x
      }
    ) }),
    j() && /* @__PURE__ */ e.jsx("div", { className: "textarea__error", children: j() })
  ] });
};
const A = ({
  label: t = "This is a gift",
  checked: r = !1,
  disabled: s = !1,
  state: o = "default",
  className: a = "",
  onChange: c,
  onClick: n
}) => {
  const d = (h) => {
    c && c(h.target.checked);
  }, l = () => {
    n && n();
  }, i = () => s ? "checkbox-line--disabled" : `checkbox-line--${o}`, x = r || o === "active";
  return /* @__PURE__ */ e.jsx("div", { className: `checkbox-line ${i()} ${a}`, children: /* @__PURE__ */ e.jsxs("label", { className: "checkbox-line__label", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "checkbox",
        className: "checkbox-line__input",
        checked: x,
        disabled: s,
        onChange: d,
        onClick: l
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "checkbox-line__checkbox", children: x && /* @__PURE__ */ e.jsx("div", { className: "checkbox-line__check-icon", children: /* @__PURE__ */ e.jsx(g, { size: 11, color: "var(--color-foreground-invert-primary)" }) }) }),
    /* @__PURE__ */ e.jsx("span", { className: "checkbox-line__text", children: t })
  ] }) });
};
const b = ({
  children: t = "No peanuts",
  selected: r = !1,
  disabled: s = !1,
  state: o = "default",
  className: a = "",
  onClick: c,
  onMouseEnter: n,
  onMouseLeave: d
}) => {
  const l = () => s ? "select-item--disabled" : r ? "select-item--selected" : `select-item--${o}`;
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `select-item ${l()} ${a}`,
      onClick: c,
      onMouseEnter: n,
      onMouseLeave: d,
      role: "option",
      "aria-selected": r,
      "aria-disabled": s,
      children: /* @__PURE__ */ e.jsx("span", { className: "select-item__text", children: t })
    }
  );
};
const D = ({
  items: t = ["Item", "Item", "Item", "Litem", "Item"],
  selectedIndex: r = -1,
  disabled: s = !1,
  className: o = "",
  onItemSelect: a,
  onItemHover: c
}) => {
  const n = (l, i) => {
    !s && a && a(l, i);
  }, d = (l, i) => {
    !s && c && c(l, i);
  };
  return /* @__PURE__ */ e.jsx("div", { className: `select-list ${o}`, children: /* @__PURE__ */ e.jsx("div", { className: "select-list__container", children: t.map((l, i) => /* @__PURE__ */ e.jsx(
    b,
    {
      selected: i === r,
      disabled: s,
      state: i === r ? "hover" : "default",
      onClick: () => n(i, l),
      onMouseEnter: () => d(i, l),
      children: l
    },
    i
  )) }) });
};
const R = ({
  title: t = "Title",
  description: r = "Description",
  rightLabel: s = "Label",
  showRightLabel: o = !0,
  showDescription: a = !0,
  showPill: c = !1,
  showIcon: n = !0,
  leftIcon: d,
  state: l = "default",
  disabled: i = !1,
  className: x = "",
  onClick: h
}) => {
  const u = () => {
    !i && h && h();
  }, C = () => i ? "tile--disabled" : `tile--${l}`, m = l === "active";
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: `tile ${C()} ${x}`,
      onClick: u,
      role: h ? "button" : void 0,
      tabIndex: h && !i ? 0 : void 0,
      "aria-pressed": m,
      "aria-disabled": i,
      children: /* @__PURE__ */ e.jsxs("div", { className: "tile__content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "tile__top", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "tile__left", children: [
            n && /* @__PURE__ */ e.jsx("div", { className: "tile__left-icon", children: d || /* @__PURE__ */ e.jsx("svg", { width: "24", height: "24", viewBox: "0 0 22 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
              "path",
              {
                d: "M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z",
                stroke: "var(--color-foreground-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) }) }),
            /* @__PURE__ */ e.jsx("div", { className: "tile__title", children: t })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "tile__right", children: [
            o && /* @__PURE__ */ e.jsx("div", { className: "tile__right-label", children: s }),
            /* @__PURE__ */ e.jsx("div", { className: "tile__right-icon", children: /* @__PURE__ */ e.jsx(
              k,
              {
                size: "regular",
                state: m ? "checked" : "unchecked",
                color: "var(--color-foreground-primary)"
              }
            ) })
          ] })
        ] }),
        a && /* @__PURE__ */ e.jsx("div", { className: "tile__description", children: r })
      ] })
    }
  );
};
const M = ({
  children: t = "Text",
  icon: r,
  disabled: s = !1,
  className: o = "",
  onClick: a
}) => {
  const c = () => {
    !s && a && a();
  }, n = () => /* @__PURE__ */ e.jsx("svg", { width: "20", height: "20", viewBox: "0 0 16 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M14.3333 1L5.16667 10.1667L1 6",
      stroke: "var(--color-foreground-primary)",
      strokeWidth: "1.66667",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `icon-line ${s ? "icon-line--disabled" : ""} ${o}`,
      onClick: c,
      role: a ? "button" : void 0,
      tabIndex: a && !s ? 0 : void 0,
      "aria-disabled": s,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "icon-line__icon", children: r || n() }),
        /* @__PURE__ */ e.jsx("div", { className: "icon-line__content", children: /* @__PURE__ */ e.jsx("span", { className: "icon-line__text", children: t }) })
      ]
    }
  );
};
const E = ({
  children: t = "These can go on as many lines as needed, and can include a header too",
  type: r = "default",
  showLeftIcon: s = !0,
  showRightIcon: o = !0,
  dismissible: a = !0,
  className: c = "",
  onClose: n
}) => {
  const d = () => {
    n && n();
  }, l = () => {
    switch (r) {
      case "success":
        return /* @__PURE__ */ e.jsx("svg", { width: "11", height: "9", viewBox: "0 0 13 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M11.6667 1L4.33333 8.33333L1 5",
            stroke: "var(--color-foreground-invert-primary)",
            strokeWidth: "1.33333",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) });
      case "warning":
        return /* @__PURE__ */ e.jsx("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M7.67863 5.00928V7.67594M7.67863 10.3426H7.6853M14.1653 11.0093L8.832 1.67593C8.71571 1.47073 8.54707 1.30006 8.34328 1.18131C8.13949 1.06256 7.90786 1 7.672 1C7.43614 1 7.2045 1.06256 7.00071 1.18131C6.79693 1.30006 6.62829 1.47073 6.512 1.67593L1.17866 11.0093C1.06112 11.2128 0.999483 11.4439 1 11.6789C1.00052 11.914 1.06318 12.1448 1.18163 12.3478C1.30007 12.5509 1.4701 12.719 1.67446 12.8352C1.87883 12.9513 2.11027 13.0114 2.34533 13.0093H13.012C13.2459 13.009 13.4757 12.9472 13.6782 12.8301C13.8807 12.713 14.0488 12.5447 14.1657 12.342C14.2825 12.1394 14.344 11.9095 14.344 11.6756C14.3439 11.4417 14.2823 11.2119 14.1653 11.0093Z",
            stroke: "var(--color-foreground-invert-primary)",
            strokeWidth: "1.33333",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) });
      case "alert":
        return /* @__PURE__ */ e.jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M9 1L1 9M1 1L9 9",
            stroke: "var(--color-foreground-invert-primary)",
            strokeWidth: "1.33333",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) });
      default:
        return /* @__PURE__ */ e.jsx("svg", { width: "9", height: "15", viewBox: "0 0 9 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M1.66667 14.3333H7M1 6.33333H7.66667M1 6.33333C1 5 1.33333 3.66667 2.33333 1H6.33333C7.33333 3.66667 7.66667 5 7.66667 6.33333M1 6.33333C1 7.21739 1.35119 8.06523 1.97631 8.69036C2.60143 9.31548 3.44928 9.66667 4.33333 9.66667M7.66667 6.33333C7.66667 7.21739 7.31548 8.06523 6.69036 8.69036C6.06523 9.31548 5.21739 9.66667 4.33333 9.66667M4.33333 9.66667V14.3333",
            stroke: "var(--color-foreground-invert-primary)",
            strokeWidth: "1.33333",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) });
    }
  }, i = () => /* @__PURE__ */ e.jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      d: "M9 1L1 9M1 1L9 9",
      stroke: "var(--color-foreground-invert-primary)",
      strokeWidth: "1.33333",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
  return /* @__PURE__ */ e.jsxs("div", { className: `banner banner--${r} ${c}`, children: [
    s && /* @__PURE__ */ e.jsx("div", { className: "banner__left-icon", children: l() }),
    /* @__PURE__ */ e.jsx("div", { className: "banner__content", children: /* @__PURE__ */ e.jsx("div", { className: "banner__text", children: t }) }),
    o && a && /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "banner__close-button",
        onClick: d,
        "aria-label": "Close banner",
        type: "button",
        children: i()
      }
    )
  ] });
};
const F = ({
  backText: t = "Edit order",
  title: r = "Checkout",
  subtitle: s = "Slanted Door Supper Club",
  showBackButton: o = !0,
  className: a = "",
  onBack: c
}) => {
  const n = () => {
    c && c();
  };
  return /* @__PURE__ */ e.jsx("div", { className: `page-header ${a}`, children: /* @__PURE__ */ e.jsxs("div", { className: "page-header__content", children: [
    o && /* @__PURE__ */ e.jsxs("div", { className: "page-header__back", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          className: "page-header__back-button",
          onClick: n,
          "aria-label": "Go back",
          type: "button",
          children: /* @__PURE__ */ e.jsx("svg", { width: "11", height: "10", viewBox: "0 0 6 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
            "path",
            {
              d: "M5 9L1 5L5 1",
              stroke: "var(--color-foreground-primary)",
              strokeWidth: "1.33333",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ) })
        }
      ),
      /* @__PURE__ */ e.jsx("span", { className: "page-header__back-text", children: t })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "page-header__title-section", children: [
      s && /* @__PURE__ */ e.jsx("div", { className: "page-header__subtitle", children: s }),
      /* @__PURE__ */ e.jsx("h1", { className: "page-header__title", children: r })
    ] })
  ] }) });
};
const q = ({
  device: t = "desktop",
  buttonText: r = "Become a member",
  priceText: s = "$123 / month",
  className: o = "",
  onButtonClick: a
}) => {
  const c = () => {
    a && a();
  };
  return /* @__PURE__ */ e.jsx("div", { className: `footer-pdp footer-pdp--${t} ${o}`, children: /* @__PURE__ */ e.jsxs("div", { className: "footer-pdp__content", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        className: "footer-pdp__button",
        onClick: c,
        type: "button",
        children: r
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "footer-pdp__price", children: s })
  ] }) });
};
const O = ({
  question: t = "How",
  answer: r = "Because",
  className: s = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `faq-cell ${s}`, children: [
  /* @__PURE__ */ e.jsx("h3", { className: "faq-cell__question", children: t }),
  /* @__PURE__ */ e.jsx("p", { className: "faq-cell__answer", children: r })
] });
const Q = ({
  title: t = "Optional wine pairing",
  description: r = "Tailored to each month's menu.",
  imageUrl: s,
  options: o = [
    { id: "none", label: "No, thank you", price: "", selected: !0 },
    { id: "red", label: "1 bottle of red", price: "+ $35" },
    { id: "white", label: "1 bottle of white", price: "+ $35" }
  ],
  selectedOptionId: a,
  className: c = "",
  onOptionSelect: n
}) => {
  const d = (i) => {
    n && n(i.id, i);
  }, l = (i) => a ? i.id === a : i.selected || !1;
  return /* @__PURE__ */ e.jsx("div", { className: `add-on ${c}`, children: /* @__PURE__ */ e.jsxs("div", { className: "add-on__content", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "add-on__header", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "add-on__text", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "add-on__title", children: t }),
        /* @__PURE__ */ e.jsx("p", { className: "add-on__description", children: r })
      ] }),
      s && /* @__PURE__ */ e.jsx("div", { className: "add-on__image", children: /* @__PURE__ */ e.jsx(
        "img",
        {
          src: s,
          alt: t,
          className: "add-on__image-content"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "add-on__options", children: o.map((i, x) => /* @__PURE__ */ e.jsx("div", { className: "add-on__option", children: /* @__PURE__ */ e.jsx(
      L,
      {
        label: i.label,
        price: i.price,
        selected: l(i),
        state: l(i) ? "checked" : "unchecked",
        showDivider: x < o.length - 1,
        onClick: () => d(i)
      }
    ) }, i.id)) })
  ] }) });
};
const G = ({
  title: t = "Modal template",
  description: r = "Body copy",
  primaryButtonText: s = "Primary",
  secondaryButtonText: o = "Secondary",
  showTextArea: a = !0,
  textAreaPlaceholder: c = "Text area",
  variant: n = "default",
  isOpen: d = !0,
  inline: l = !1,
  className: i = "",
  onPrimaryClick: x,
  onSecondaryClick: h,
  onClose: u
}) => {
  if (!d)
    return null;
  const C = [
    "dialogue",
    `dialogue--${n}`,
    l ? "dialogue--inline" : "dialogue--overlay",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.jsxs("div", { className: C, children: [
    !l && /* @__PURE__ */ e.jsx("div", { className: "dialogue__overlay", onClick: u }),
    /* @__PURE__ */ e.jsxs("div", { className: "dialogue__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "dialogue__header", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "dialogue__title", children: t }),
        u && !l && /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "dialogue__close-button",
            onClick: u,
            "aria-label": "Close dialogue",
            type: "button",
            children: /* @__PURE__ */ e.jsx("svg", { width: "24", height: "24", viewBox: "0 0 14 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx(
              "path",
              {
                d: "M1 1L7 7L13 1",
                stroke: "var(--color-foreground-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "dialogue__description", children: r }),
      /* @__PURE__ */ e.jsx("div", { className: "dialogue__spacing" }),
      /* @__PURE__ */ e.jsxs("div", { className: "dialogue__form", children: [
        a && /* @__PURE__ */ e.jsx("div", { className: "dialogue__text-area", children: /* @__PURE__ */ e.jsx(
          N,
          {
            placeholder: c,
            rows: 4
          }
        ) }),
        /* @__PURE__ */ e.jsxs("div", { className: "dialogue__buttons", children: [
          /* @__PURE__ */ e.jsx(
            v,
            {
              style: "accent",
              onClick: x,
              className: "dialogue__primary-button",
              children: s
            }
          ),
          o && /* @__PURE__ */ e.jsx(
            v,
            {
              style: "secondary",
              onClick: h,
              className: "dialogue__secondary-button",
              children: o
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const K = ({
  title: t = "title",
  items: r = [
    { id: "1", text: "Text" },
    { id: "2", text: "Text" },
    { id: "3", text: "Text" }
  ],
  className: s = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `lists ${s}`, children: [
  /* @__PURE__ */ e.jsx("h3", { className: "lists__title", children: t }),
  /* @__PURE__ */ e.jsx("div", { className: "lists__items", children: r.map((o) => /* @__PURE__ */ e.jsx("div", { className: "lists__item", children: /* @__PURE__ */ e.jsx(
    M,
    {
      icon: o.icon,
      children: o.text
    }
  ) }, o.id)) })
] });
export {
  Q as AddOn,
  E as Banner,
  v as Button,
  S as CalendarFoldIcon,
  ce as Carousel,
  de as CarouselNav,
  he as CarouselPips,
  g as CheckIcon,
  A as CheckboxLine,
  w as ChevronDownIcon,
  ie as CirclePauseIcon,
  G as Dialogue,
  ve as FAQ,
  O as FAQCell,
  q as FooterPDP,
  je as Hero,
  ae as HowItWorks,
  V as Icon,
  M as IconLine,
  K as Lists,
  se as Membership,
  W as PackageIcon,
  ue as PageDivider,
  F as PageHeader,
  oe as PanelHeader,
  I as PlaceholderIcon,
  k as RadioIcon,
  L as RadioInline,
  ge as Reviews,
  T as Select,
  b as SelectItem,
  D as SelectList,
  pe as StarRating,
  Le as Supporting,
  N as TextArea,
  P as Textfield,
  R as Tile,
  te as TileMultiItem,
  J as colors,
  X as spacing,
  Y as typography
};
