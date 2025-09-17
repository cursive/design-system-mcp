import { j as e } from "../jsx-runtime-11e331e2.mjs";
import { C as j } from "../ChevronDownIcon-3d5fb7df.mjs";
import "react";
const N = ({
  hierarchy: a = "Default",
  showEyebrow: l = !0,
  showIcon: o = !0,
  showSub: c = !0,
  icon: m,
  title: d = "What you'll get",
  eyebrow: h = "What you'll get",
  subtitle: p = "Sub",
  className: x = ""
}) => {
  const n = `panel-header ${x}`.trim(), t = l && /* @__PURE__ */ e.jsx("div", { className: "panel-header__eyebrow", "data-node-id": "6105:56203", children: /* @__PURE__ */ e.jsx("p", { children: h }) }), r = o && /* @__PURE__ */ e.jsx("div", { className: "panel-header__icon", "data-node-id": "6105:56206", children: m || /* @__PURE__ */ e.jsx(j, { size: 24, color: "var(--color-foreground-primary)" }) }), s = c && /* @__PURE__ */ e.jsx("div", { className: "panel-header__subtitle", "data-node-id": "6105:56207", children: /* @__PURE__ */ e.jsx("p", { children: p }) }), i = `panel-header__title panel-header__title--${a.toLowerCase()}`;
  return a === "Secondary" ? /* @__PURE__ */ e.jsxs("div", { className: n, "data-name": "Hierarchy=Secondary", "data-node-id": "6105:56208", children: [
    t,
    /* @__PURE__ */ e.jsxs("div", { className: "panel-header__title-container", "data-name": "Title", "data-node-id": "6105:56210", children: [
      /* @__PURE__ */ e.jsx("div", { className: i, "data-node-id": "6105:56211", children: /* @__PURE__ */ e.jsx("p", { children: d }) }),
      r
    ] }),
    s
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: n, "data-name": "Hierarchy=Default", "data-node-id": "6105:56202", children: [
    t,
    /* @__PURE__ */ e.jsxs("div", { className: "panel-header__title-container", "data-name": "Title", "data-node-id": "6105:56204", children: [
      /* @__PURE__ */ e.jsx("div", { className: i, "data-node-id": "6105:56205", children: /* @__PURE__ */ e.jsx("p", { children: d }) }),
      r
    ] }),
    s
  ] });
};
export {
  N as PanelHeader
};
