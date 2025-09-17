import { j as e } from "../jsx-runtime-11e331e2.mjs";
import { StarRating as i } from "./StarRating.js";
import { PanelHeader as s } from "./PanelHeader.js";
import "react";
import "../ChevronDownIcon-3d5fb7df.mjs";
const m = ({
  reviews: t = [
    {
      id: "1",
      date: "Feb 25",
      text: "Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.",
      rating: 5
    },
    {
      id: "2",
      date: "Feb 25",
      text: "Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.",
      rating: 5
    },
    {
      id: "3",
      date: "Feb 25",
      text: "Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.",
      rating: 5
    }
  ],
  showImage: r = !0,
  className: d = ""
}) => /* @__PURE__ */ e.jsxs("div", { className: `reviews ${d}`, "data-name": "Reviews", "data-node-id": "5512:24694", children: [
  /* @__PURE__ */ e.jsx(s, { title: "Reviews", className: "reviews__header" }),
  /* @__PURE__ */ e.jsx("div", { className: "reviews__content", "data-name": "Content", "data-node-id": "5503:24546", children: t.map((a) => /* @__PURE__ */ e.jsxs("div", { className: "reviews__review", "data-name": "review", "data-node-id": "5812:46104", children: [
    /* @__PURE__ */ e.jsx("div", { className: "reviews__review-date", "data-node-id": "I5812:46104;6105:53342", children: /* @__PURE__ */ e.jsx("p", { children: a.date }) }),
    /* @__PURE__ */ e.jsx("div", { className: "reviews__review-text", "data-node-id": "I5812:46104;6105:53343", children: /* @__PURE__ */ e.jsx("p", { children: a.text }) }),
    /* @__PURE__ */ e.jsx("div", { className: "reviews__review-rating", "data-name": "star rating", "data-node-id": "I5812:46104;6105:53345", children: /* @__PURE__ */ e.jsx(i, { rating: a.rating, interactive: !1, size: 20 }) })
  ] }, a.id)) })
] });
export {
  m as Reviews
};
