import { j as e } from "./jsx-runtime-11e331e2.mjs";
import b from "react";
import { PanelHeader as G } from "./components/PanelHeader.js";
const M = ({
  size: l = "regular",
  state: t = "unchecked",
  className: n = "",
  sizeOverride: o,
  color: c
}) => {
  const r = `radio-icon ${l === "small" ? "radio-icon--small" : "radio-icon--regular"} ${n}`.trim(), s = {
    ...o && { width: o, height: o },
    ...c && { color: c }
  };
  return l === "small" && t === "unchecked" ? /* @__PURE__ */ e.jsx("div", { className: r, style: s, "data-node-id": "5357:44645", children: /* @__PURE__ */ e.jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 17 17", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      className: "radio-icon__path",
      d: "M8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65 15 1.66667 12.0167 1.66667 8.33333C1.66667 4.65 4.65 1.66667 8.33333 1.66667C12.0167 1.66667 15 4.65 15 8.33333C15 12.0167 12.0167 15 8.33333 15Z"
    }
  ) }) }) : l === "regular" && t === "checked" ? /* @__PURE__ */ e.jsx("div", { className: r, style: s, "data-node-id": "5357:44642", children: /* @__PURE__ */ e.jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      className: "radio-icon__path",
      clipRule: "evenodd",
      d: "M9.6 19.2C14.9019 19.2 19.2 14.9019 19.2 9.6C19.2 4.29807 14.9019 0 9.6 0C4.29807 0 0 4.29807 0 9.6C0 14.9019 4.29807 19.2 9.6 19.2ZM14.0485 8.04853C14.5172 7.5799 14.5172 6.8201 14.0485 6.35147C13.5799 5.88284 12.8201 5.88284 12.3515 6.35147L8.4 10.3029L6.84853 8.75147C6.3799 8.28284 5.6201 8.28284 5.15147 8.75147C4.68284 9.2201 4.68284 9.9799 5.15147 10.4485L7.55147 12.8485C8.0201 13.3172 8.7799 13.3172 9.24853 12.8485L14.0485 8.04853Z",
      fillRule: "evenodd"
    }
  ) }) }) : l === "small" && t === "checked" ? /* @__PURE__ */ e.jsx("div", { className: r, style: s, "data-node-id": "5357:44643", children: /* @__PURE__ */ e.jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      className: "radio-icon__path",
      clipRule: "evenodd",
      d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
      fillRule: "evenodd"
    }
  ) }) }) : /* @__PURE__ */ e.jsx("div", { className: r, style: s, "data-node-id": "5357:44644", children: /* @__PURE__ */ e.jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ e.jsx(
    "path",
    {
      className: "radio-icon__path",
      d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
    }
  ) }) });
};
const I = ({
  size: l = 24,
  className: t = "",
  color: n = "currentColor"
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    className: `check-icon ${t}`,
    width: l,
    height: l,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    "data-testid": "check-icon",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M20 6L9 17L4 12",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
const J = ({
  label: l = "Breakfast Kit — Chicken",
  price: t = "$40",
  selected: n = !1,
  disabled: o = !1,
  state: c = "unchecked",
  showDivider: m = !0,
  className: r = "",
  onChange: s,
  onClick: h
}) => {
  const p = (k) => {
    s && s(k.target.checked);
  }, _ = () => {
    h && h();
  }, N = () => o ? "radio-inline--disabled" : `radio-inline--${c}`, x = n || c === "checked", j = c === "hover";
  return /* @__PURE__ */ e.jsx("div", { className: `radio-inline ${N()} ${r}`, children: /* @__PURE__ */ e.jsxs("label", { className: "radio-inline__label", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "radio",
        className: "radio-inline__input",
        checked: x,
        disabled: o,
        onChange: p,
        onClick: _
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "radio-inline__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "radio-inline__main", children: [
        /* @__PURE__ */ e.jsx("span", { className: `radio-inline__text ${j ? "radio-inline__text--hover" : ""}`, children: l }),
        /* @__PURE__ */ e.jsxs("div", { className: "radio-inline__right", children: [
          /* @__PURE__ */ e.jsx("span", { className: "radio-inline__price", children: t }),
          /* @__PURE__ */ e.jsx("div", { className: "radio-inline__radio", children: /* @__PURE__ */ e.jsx(
            M,
            {
              size: "regular",
              color: "var(--color-foreground-primary)",
              state: x ? "checked" : "unchecked"
            }
          ) })
        ] })
      ] }),
      m && /* @__PURE__ */ e.jsx("div", { className: "radio-inline__divider" })
    ] })
  ] }) });
};
const K = ({
  options: l = [
    { id: "1", label: "2 bottles", price: "+ $45" },
    { id: "2", label: "4 bottles", price: "+ $90" },
    { id: "3", label: "No, thank you", price: "", selected: !0 }
  ],
  selectedId: t,
  disabled: n = !1,
  className: o = "",
  onOptionSelect: c
}) => {
  const m = (s) => {
    !n && c && c(s.id, s);
  }, r = (s) => t ? s.id === t : s.selected || !1;
  return /* @__PURE__ */ e.jsx("div", { className: `tile-multi-item ${o}`, children: /* @__PURE__ */ e.jsx("div", { className: "tile-multi-item__container", children: l.map((s, h) => /* @__PURE__ */ e.jsx("div", { className: "tile-multi-item__option", children: /* @__PURE__ */ e.jsx(
    J,
    {
      label: s.label,
      price: s.price,
      selected: r(s),
      disabled: n,
      state: r(s) ? "checked" : "unchecked",
      showDivider: h < l.length - 1,
      onClick: () => m(s)
    }
  ) }, s.id)) }) });
};
const Q = ({
  showAddOn: l = !0,
  showWaitlist: t = !0,
  showPlanSelection: n = !0,
  showGifting: o = !0,
  showHowItWorks: c = !0,
  showMemberPerks: m = !0,
  waitlistMessage: r = "Due to high demand this program now has a waitlist",
  nextOrderDate: s = "June 2025",
  className: h = "",
  onMealSizeChange: p,
  onPlanChange: _,
  onWineOptionChange: N,
  onGiftToggle: x
}) => {
  const [j, k] = b.useState("one"), [C, y] = b.useState("monthly"), [S, L] = b.useState("3"), [R, Z] = b.useState(!1), u = ({
    title: i,
    price: a,
    selected: d,
    description: v,
    showPill: A = !1,
    pillText: g,
    onClick: E
  }) => {
    const O = d ? "membership-tile--selected" : "membership-tile--unselected";
    return /* @__PURE__ */ e.jsx("div", { className: `membership-tile ${O}`, onClick: E, children: /* @__PURE__ */ e.jsxs("div", { className: "membership-tile__content", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "membership-tile__header", children: [
        /* @__PURE__ */ e.jsx("div", { className: "membership-tile__left", children: /* @__PURE__ */ e.jsx("div", { className: "membership-tile__title", children: /* @__PURE__ */ e.jsx("p", { children: i }) }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "membership-tile__right", children: [
          a && /* @__PURE__ */ e.jsx("div", { className: "membership-tile__price", children: /* @__PURE__ */ e.jsx("p", { children: a }) }),
          A && g && /* @__PURE__ */ e.jsx("div", { className: "membership-tile__pill", children: /* @__PURE__ */ e.jsx("div", { className: "membership-tile__pill-text", children: /* @__PURE__ */ e.jsx("p", { children: g }) }) }),
          /* @__PURE__ */ e.jsx("div", { className: "membership-tile__radio", children: /* @__PURE__ */ e.jsx(
            M,
            {
              size: "regular",
              state: d ? "checked" : "unchecked"
            }
          ) })
        ] })
      ] }),
      v && /* @__PURE__ */ e.jsx("div", { className: "membership-tile__description", children: /* @__PURE__ */ e.jsx("p", { children: v }) })
    ] }) });
  }, B = ({
    message: i,
    showLink: a = !0,
    linkText: d = "Tell me more",
    onLinkClick: v
  }) => /* @__PURE__ */ e.jsx("div", { className: "membership__waitlist-banner", children: /* @__PURE__ */ e.jsx("div", { className: "membership__waitlist-content", children: /* @__PURE__ */ e.jsxs("div", { className: "membership__waitlist-text", children: [
    /* @__PURE__ */ e.jsx("div", { className: "membership__waitlist-message", children: /* @__PURE__ */ e.jsx("p", { children: i }) }),
    a && /* @__PURE__ */ e.jsx("div", { className: "membership__waitlist-link", onClick: v, children: /* @__PURE__ */ e.jsx("div", { className: "membership__waitlist-link-text", children: /* @__PURE__ */ e.jsx("p", { children: d }) }) })
  ] }) }) }), P = ({ checked: i, onChange: a }) => /* @__PURE__ */ e.jsxs("div", { className: "membership__gifting", onClick: () => a == null ? void 0 : a(!i), children: [
    /* @__PURE__ */ e.jsx("div", { className: "membership__gifting-icon", children: /* @__PURE__ */ e.jsx(I, { size: 20 }) }),
    /* @__PURE__ */ e.jsx("div", { className: "membership__gifting-text", children: /* @__PURE__ */ e.jsx("p", { children: "Gift this membership" }) })
  ] }), f = ({ title: i, items: a }) => /* @__PURE__ */ e.jsxs("div", { className: "membership__info-section", children: [
    /* @__PURE__ */ e.jsx("div", { className: "membership__info-title", children: /* @__PURE__ */ e.jsx("p", { children: i }) }),
    a.map((d) => /* @__PURE__ */ e.jsxs("div", { className: "membership__info-item", children: [
      d.showIcon && /* @__PURE__ */ e.jsx("div", { className: "membership__info-item-icon", children: /* @__PURE__ */ e.jsx(I, { size: 20 }) }),
      /* @__PURE__ */ e.jsx("div", { className: "membership__info-item-content", children: /* @__PURE__ */ e.jsx("div", { className: "membership__info-item-text", children: /* @__PURE__ */ e.jsx("p", { children: d.text }) }) })
    ] }, d.id))
  ] }), D = ({ onWineOptionChange: i }) => {
    const a = [
      { id: "1", label: "2 bottles", price: "+ $45" },
      { id: "2", label: "4 bottles", price: "+ $90" },
      { id: "3", label: "No, thank you", price: "", selected: !0 }
    ];
    return /* @__PURE__ */ e.jsxs("div", { className: "membership__addon-group", children: [
      /* @__PURE__ */ e.jsx("div", { className: "membership__addon-title", children: /* @__PURE__ */ e.jsx("div", { className: "membership__addon-title-text", children: /* @__PURE__ */ e.jsx("p", { children: "Sake pairing add-on" }) }) }),
      /* @__PURE__ */ e.jsx("div", { style: { width: "353px" }, children: /* @__PURE__ */ e.jsx(
        K,
        {
          options: a,
          selectedId: S,
          onOptionSelect: (d) => {
            L(d), i == null || i(d);
          }
        }
      ) })
    ] });
  }, w = (i) => {
    k(i), p == null || p(i);
  }, $ = (i) => {
    y(i), _ == null || _(i);
  }, H = (i) => {
    Z(i), x == null || x(i);
  }, T = [
    { id: "1", text: "Pick-up or delivery", showIcon: !0 },
    { id: "2", text: `Next order ${s}`, showIcon: !0 },
    { id: "3", text: "Pause or cancel any time", showIcon: !0 }
  ], W = [
    { id: "1", text: "Priority reservations", showIcon: !0 },
    { id: "2", text: "Wine selection", showIcon: !0 },
    { id: "3", text: "In-store discounts", showIcon: !0 }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: `membership ${h}`, "data-name": "Membership", "data-node-id": "6105:55910", children: [
    /* @__PURE__ */ e.jsx(
      G,
      {
        title: "Your monthly membership",
        className: "membership__header",
        showEyebrow: !1,
        showIcon: !1,
        showSub: !1
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "membership__content", "data-name": "content", "data-node-id": "6105:55912", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "membership__main-group", "data-name": "Main group", "data-node-id": "6105:55915", children: [
        /* @__PURE__ */ e.jsx(
          u,
          {
            title: "Meal for one",
            price: "$110",
            selected: j === "one",
            onClick: () => w("one")
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            title: "Meal for two",
            price: "$190",
            selected: j === "two",
            onClick: () => w("two")
          }
        )
      ] }),
      l && /* @__PURE__ */ e.jsx(D, { onWineOptionChange: N }),
      t && /* @__PURE__ */ e.jsx(
        B,
        {
          message: r,
          onLinkClick: () => console.log("Tell me more clicked")
        }
      ),
      n && /* @__PURE__ */ e.jsxs("div", { className: "membership__plan-group", "data-name": "Plan group", "data-node-id": "6105:55928", children: [
        /* @__PURE__ */ e.jsx("div", { className: "membership__plan-title", "data-name": "title", "data-node-id": "6105:55929", children: /* @__PURE__ */ e.jsx("div", { className: "membership__plan-title-text", "data-node-id": "6105:55930", children: /* @__PURE__ */ e.jsx("p", { children: "Choose a plan" }) }) }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            title: "Monthly membership",
            selected: C === "monthly",
            description: "Description",
            onClick: () => $("monthly")
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            title: "Annual membership",
            selected: C === "annual",
            description: "12 orders for $112/month",
            showPill: !0,
            pillText: "Save 10%",
            onClick: () => $("annual")
          }
        )
      ] }),
      o && /* @__PURE__ */ e.jsx(
        P,
        {
          checked: R,
          onChange: H
        }
      ),
      c && /* @__PURE__ */ e.jsx(
        f,
        {
          title: "How it works",
          items: T
        }
      ),
      m && /* @__PURE__ */ e.jsx(
        f,
        {
          title: "Member perks",
          items: W
        }
      )
    ] })
  ] });
};
export {
  I as C,
  Q as M,
  M as R,
  K as T,
  J as a
};
