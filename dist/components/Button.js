import { j as t } from "../jsx-runtime-11e331e2.mjs";
import { C as b } from "../ChevronDownIcon-3d5fb7df.mjs";
import "react";
const p = ({
  children: s = "Label",
  style: o = "accent",
  state: n = "default",
  showIcon: i = !0,
  icon: d,
  onClick: e,
  className: c = "",
  disabled: l = !1
}) => {
  const a = l || n === "disabled", r = [
    "button",
    `button--${o}`,
    c
  ].filter(Boolean).join(" "), u = () => {
    !a && e && e();
  }, m = i && /* @__PURE__ */ t.jsx("div", { className: "button__icon", "data-node-id": "786:20089", children: d || /* @__PURE__ */ t.jsx(b, { size: 24, color: "currentColor" }) });
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: r,
      onClick: u,
      disabled: a,
      "data-name": `Style=${o}, State=${n}`,
      "data-node-id": "786:20093",
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "button__content", "data-node-id": "786:20083", children: /* @__PURE__ */ t.jsx("p", { children: s }) }),
        m
      ]
    }
  );
};
export {
  p as Button
};
