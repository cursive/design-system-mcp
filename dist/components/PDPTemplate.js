import { j as e } from "../jsx-runtime-11e331e2.mjs";
import { C as o } from "../index-c0afefd0.mjs";
import { Hero as _ } from "./Hero.js";
import { M as h } from "../index-a1ae4fb8.mjs";
import { Supporting as v } from "./Supporting.js";
import { H as u } from "../index-f0f3e66c.mjs";
import { FAQ as N } from "./FAQ.js";
import { Reviews as f } from "./Reviews.js";
import { P as s } from "../PageDivider-75946119.mjs";
import "react";
import "./StarRating.js";
import "./PanelHeader.js";
import "../ChevronDownIcon-3d5fb7df.mjs";
const t = ({ children: r, className: i = "" }) => /* @__PURE__ */ e.jsx("div", { className: `pdp-template__section ${i}`, children: r }), F = ({
  variant: r = "default",
  showCarousel: i = !0,
  showHero: l = !0,
  showMembership: m = !0,
  showSupporting: d = !0,
  showHowItWorks: c = !0,
  showFAQ: n = !0,
  showReviews: x = !0,
  showDividers: p = !0,
  className: j = ""
}) => {
  const a = r === "mcp";
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: `pdp-template ${a ? "pdp-template--mcp" : ""} ${j}`,
      "data-name": "PDP Mobile Template",
      children: [
        i && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container pdp-template__container--full", children: /* @__PURE__ */ e.jsx(o, {}) }) }),
        l && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container", children: /* @__PURE__ */ e.jsx(_, {}) }) }),
        p && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__divider", children: /* @__PURE__ */ e.jsx(s, {}) }) }),
        m && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: `pdp-template__container ${a ? "pdp-template__container--full" : ""}`, children: /* @__PURE__ */ e.jsx("div", { className: `pdp-template__membership ${a ? "pdp-template__membership--mcp" : ""}`, children: /* @__PURE__ */ e.jsx(h, {}) }) }) }),
        p && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__divider", children: /* @__PURE__ */ e.jsx(s, {}) }) }),
        d && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container", children: /* @__PURE__ */ e.jsx(v, {}) }) }),
        p && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__divider", children: /* @__PURE__ */ e.jsx(s, {}) }) }),
        c && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container", children: /* @__PURE__ */ e.jsx(u, {}) }) }),
        p && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__divider", children: /* @__PURE__ */ e.jsx(s, {}) }) }),
        n && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container", children: /* @__PURE__ */ e.jsx(N, {}) }) }),
        p && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__divider", children: /* @__PURE__ */ e.jsx(s, {}) }) }),
        x && /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsx("div", { className: "pdp-template__container", children: /* @__PURE__ */ e.jsx(f, {}) }) })
      ]
    }
  );
};
export {
  F as PDPTemplate
};
