import { j as e } from "./jsx-runtime-11e331e2.mjs";
import { PanelHeader as c } from "./components/PanelHeader.js";
const l = ({
  size: a = 24,
  className: d = "",
  color: s = "currentColor"
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    className: `circle-pause-icon ${d}`,
    width: a,
    height: a,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: s,
          strokeWidth: "2",
          fill: "none"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "rect",
        {
          x: "8",
          y: "6",
          width: "2",
          height: "12",
          fill: s
        }
      ),
      /* @__PURE__ */ e.jsx(
        "rect",
        {
          x: "14",
          y: "6",
          width: "2",
          height: "12",
          fill: s
        }
      )
    ]
  }
);
const x = ({
  showImage: a = !0,
  variant: d = "desktop",
  className: s = ""
}) => {
  const t = [
    {
      id: "1",
      description: "Each month we prepare a multi-course meal that reflects what we're excited to share",
      iconName: "preparation"
    },
    {
      id: "2",
      description: "Make any adjustments you need a few days before your pick-up or delivery",
      iconName: "adjustments"
    },
    {
      id: "3",
      description: "Unpack your feast and enjoy the luxury of a chef-made meal in the comfort of your home",
      iconName: "enjoy"
    }
  ], n = /* @__PURE__ */ e.jsx(
    c,
    {
      title: "How it works",
      className: "how-it-works__header",
      showEyebrow: !1,
      showIcon: !1,
      showSub: !1
    }
  ), i = (r, h) => /* @__PURE__ */ e.jsxs("div", { className: "how-it-works__step", "data-name": "step", children: [
    /* @__PURE__ */ e.jsx("div", { className: "how-it-works__step-icon", "data-name": "how it works icons", children: /* @__PURE__ */ e.jsx(l, { size: 40 }) }),
    /* @__PURE__ */ e.jsx("div", { className: "how-it-works__step-content", children: /* @__PURE__ */ e.jsx("div", { className: "how-it-works__step-text", children: /* @__PURE__ */ e.jsx("p", { children: r.description }) }) })
  ] }, r.id), o = (r) => /* @__PURE__ */ e.jsx("div", { className: "how-it-works__divider", children: /* @__PURE__ */ e.jsx("div", { className: "how-it-works__divider-line", style: { "--stroke-0": "rgba(245, 245, 245, 1)" }, children: /* @__PURE__ */ e.jsx("svg", { width: "100%", height: "1", viewBox: "0 0 100 1", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e.jsx("line", { x1: "0", y1: "0.5", x2: "100", y2: "0.5", stroke: "currentColor" }) }) }) }, r);
  return d === "default" ? /* @__PURE__ */ e.jsxs("div", { className: `how-it-works how-it-works--default ${s}`, "data-name": "Property 1=Default", "data-node-id": "6118:34773", children: [
    n,
    /* @__PURE__ */ e.jsxs("div", { className: "how-it-works__content", "data-name": "Content", "data-node-id": "6118:34775", children: [
      i(t[0]),
      o("divider-1"),
      i(t[1]),
      o("divider-2"),
      i(t[2])
    ] })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: `how-it-works how-it-works--desktop ${s}`, "data-name": "Property 1=_Desktop", "data-node-id": "5512:24693", children: [
    n,
    /* @__PURE__ */ e.jsxs("div", { className: "how-it-works__content", "data-name": "Content", "data-node-id": "5503:24590", children: [
      i(t[0]),
      o("divider-1"),
      i(t[1]),
      o("divider-2"),
      i(t[2])
    ] })
  ] });
};
export {
  l as C,
  x as H
};
