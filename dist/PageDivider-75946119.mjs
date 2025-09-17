import { j as e } from "./jsx-runtime-11e331e2.mjs";
const r = ({
  variant: i = "default",
  label: a = "Or pay by card",
  className: d = ""
}) => i === "blank" ? /* @__PURE__ */ e.jsx("div", { className: `page-divider page-divider--blank ${d}` }) : /* @__PURE__ */ e.jsx("div", { className: `page-divider page-divider--${i} ${d}`, children: i === "labelled" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "page-divider__line" }),
  /* @__PURE__ */ e.jsx("div", { className: "page-divider__label", children: a }),
  /* @__PURE__ */ e.jsx("div", { className: "page-divider__line" })
] }) : /* @__PURE__ */ e.jsx("div", { className: "page-divider__line" }) });
export {
  r as P
};
