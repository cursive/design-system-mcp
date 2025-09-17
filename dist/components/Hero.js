import { j as e } from "../jsx-runtime-11e331e2.mjs";
import { StarRating as c } from "./StarRating.js";
import "react";
const x = ({
  variant: s = "desktop",
  logoSrc: r,
  logoAlt: i = "Logo",
  subtitle: o = "THE SUPPER CLUB",
  description: t = "Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises",
  rating: a = 5,
  reviewCount: n = "Based on 83 reviews",
  className: d = ""
}) => /* @__PURE__ */ e.jsx("div", { className: `hero hero--${s} ${d}`, children: /* @__PURE__ */ e.jsxs("div", { className: "hero__content", children: [
  r && /* @__PURE__ */ e.jsx("div", { className: "hero__logo", children: /* @__PURE__ */ e.jsx("img", { src: r, alt: i }) }),
  /* @__PURE__ */ e.jsx("div", { className: "hero__subtitle", children: o }),
  s === "default" && /* @__PURE__ */ e.jsx("div", { className: "hero__description", children: t }),
  /* @__PURE__ */ e.jsxs("div", { className: "hero__rating", children: [
    /* @__PURE__ */ e.jsx(
      c,
      {
        rating: a,
        interactive: !1,
        size: s === "desktop" ? 16 : 20
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "hero__review-count", children: n })
  ] })
] }) });
export {
  x as Hero,
  x as default
};
