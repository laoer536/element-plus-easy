import { resolveComponent as s, openBlock as a, createBlock as _, withCtx as l, createTextVNode as p } from "vue";
const u = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, c] of o)
    n[e] = c;
  return n;
}, f = {
  name: "EyButton"
};
function m(t, o, n, e, c, B) {
  const r = s("el-button");
  return a(), _(r, null, {
    default: l(() => [
      p("\u54C8\u54C8\u54C8\u54C8")
    ]),
    _: 1
  });
}
const d = /* @__PURE__ */ u(f, [["render", m]]), i = [d], x = (t) => {
  i.forEach((o) => {
    t.component(o.name, o);
  });
}, h = {
  install: x
};
export {
  d as EyButton,
  h as default,
  x as install
};
//# sourceMappingURL=vite-lib.es.js.map
