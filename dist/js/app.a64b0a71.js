(function (e) {
  function t(t) {
    for (
      var n, r, i = t[0], l = t[1], s = t[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (r = i[d]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && u.push(o[r][0]),
        (o[r] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    b && b(t);
    while (u.length) u.shift()();
    return c.push.apply(c, s || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], n = !0, i = 1; i < a.length; i++) {
        var l = a[i];
        0 !== o[l] && (n = !1);
      }
      n && (c.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    o = { app: 0 },
    c = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var b = l;
  c.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "16d9": function (e, t, a) {},
  "2a41": function (e, t, a) {},
  4784: function (e, t, a) {
    "use strict";
    a("16d9");
  },
  "4b76": function (e, t, a) {},
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("7a23");
    Object(n["s"])("data-v-f6626628");
    var o = { class: "blue-grey darken-1" },
      c = { class: "container", style: { "margin-top": "10px" } },
      r = { class: "right-align", id: "menu" },
      i = Object(n["e"])(
        "i",
        {
          class: "small material-icons tooltipped",
          "data-position": "top",
          "data-tooltip": "Inicio",
        },
        "home",
        -1
      ),
      l = Object(n["e"])(
        "i",
        {
          class: "small material-icons tooltipped",
          "data-position": "top",
          "data-tooltip": "Sobre mi",
        },
        "account_circle",
        -1
      ),
      s = Object(n["e"])(
        "i",
        {
          class: "small material-icons tooltipped",
          "data-position": "top",
          "data-tooltip": "Skills",
        },
        "assignment",
        -1
      ),
      b = Object(n["e"])(
        "i",
        {
          class: "small material-icons tooltipped",
          "data-position": "top",
          "data-tooltip": "Trabajos",
        },
        "folder_open",
        -1
      ),
      d = Object(n["e"])(
        "i",
        {
          class: "small material-icons tooltipped",
          "data-position": "top",
          "data-tooltip": "Contacto",
        },
        "email",
        -1
      );
    function u(e, t, a, u, p, f) {
      var j = Object(n["v"])("cabecera"),
        O = Object(n["v"])("router-link"),
        m = Object(n["v"])("router-view");
      return (
        Object(n["p"])(),
        Object(n["d"])("div", o, [
          Object(n["g"])(j),
          Object(n["e"])("div", c, [
            Object(n["e"])("div", r, [
              Object(n["g"])(
                O,
                { to: "/" },
                {
                  default: Object(n["z"])(function () {
                    return [i];
                  }),
                  _: 1,
                }
              ),
              Object(n["g"])(
                O,
                { to: "about" },
                {
                  default: Object(n["z"])(function () {
                    return [l];
                  }),
                  _: 1,
                }
              ),
              Object(n["g"])(
                O,
                { to: "skills" },
                {
                  default: Object(n["z"])(function () {
                    return [s];
                  }),
                  _: 1,
                }
              ),
              Object(n["g"])(
                O,
                { to: "trabajos" },
                {
                  default: Object(n["z"])(function () {
                    return [b];
                  }),
                  _: 1,
                }
              ),
              Object(n["g"])(
                O,
                { to: "contacto" },
                {
                  default: Object(n["z"])(function () {
                    return [d];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(n["g"])(m),
          ]),
        ])
      );
    }
    Object(n["q"])(), Object(n["s"])("data-v-b7d4b4fe");
    var p = { class: "nav-wrapper blue-grey darken-3" },
      f = Object(n["e"])("span", null, "Miguel Berrio", -1);
    function j(e, t, a, o, c, r) {
      var i = Object(n["v"])("router-link");
      return (
        Object(n["p"])(),
        Object(n["d"])("nav", null, [
          Object(n["e"])("div", p, [
            Object(n["g"])(
              i,
              { to: "/", class: "brand-logo center" },
              {
                default: Object(n["z"])(function () {
                  return [f];
                }),
                _: 1,
              }
            ),
          ]),
        ])
      );
    }
    Object(n["q"])();
    var O = {};
    a("bdde");
    (O.render = j), (O.__scopeId = "data-v-b7d4b4fe");
    var m = O,
      v = a("4d5c"),
      g = a.n(v),
      y = {
        name: "App",
        components: { Cabecera: m },
        data: function () {
          return { validador: !1 };
        },
        mounted: function () {
          g.a.AutoInit();
        },
      };
    a("4784");
    (y.render = u), (y.__scopeId = "data-v-f6626628");
    var h = y,
      _ = a("6c02"),
      k = a("9e92"),
      M = a.n(k);
    Object(n["s"])("data-v-6fa57928");
    var w = {
        class: "consola",
        style: { "border-style": "solid", display: "grid" },
      },
      x = Object(n["e"])(
        "div",
        null,
        [
          Object(n["e"])(
            "p",
            { style: { color: "rgb(0, 164, 0)", "margin-bottom": "0px" } },
            [
              Object(n["f"])(" MabMab@Desktop "),
              Object(n["e"])(
                "span",
                { style: { color: "rgb(191, 191, 0)" } },
                "~/Portafolio"
              ),
            ]
          ),
          Object(n["e"])("p", { class: "test" }, [
            Object(n["f"])("$ run portafolio "),
            Object(n["e"])("span", null, " "),
          ]),
          Object(n["e"])("br"),
          Object(n["e"])("br"),
          Object(n["e"])("p", { id: "consola1" }),
          Object(n["e"])("p", { class: "test2" }, [
            Object(n["f"])("$ portafolio --help "),
            Object(n["e"])("span", null, " "),
          ]),
          Object(n["e"])("br"),
          Object(n["e"])("br"),
          Object(n["e"])("p", { id: "consola2" }),
        ],
        -1
      ),
      I = Object(n["e"])("img", { src: M.a, alt: "" }, null, -1),
      S = [x, I];
    function P(e, t, a, o, c, r) {
      return Object(n["p"])(), Object(n["d"])("div", w, S);
    }
    Object(n["q"])();
    var T = {
      mounted: function () {
        var e = document.getElementById("consola1");
        setTimeout(function () {
          e.innerHTML =
            "\n            <p>\n                Hola soy Miguel Berrio &#60MabMab^^&#62, bienvenido a mi portafolio.           \n            </p>\n            <p style='color: rgb(0,164,0); margin-bottom: 0px'>MabMab@Desktop\n                <span style='color: rgb(191,191,0)'>~/Portafolio</span>\n            </p>\n        ";
        }, 2e3);
        var t = document.getElementById("consola2");
        setTimeout(function () {
          t.innerHTML =
            "\n            <p>\n                Usa las opciones del menu ubicado en la parte superior derecha para navegar en este portafolio.           \n            </p>\n            <p>\n                Feedback: Miguel Berrio &#60miguelberrioh@gmail.com&#62\n            </p>\n        ";
        }, 4e3);
      },
    };
    a("eb46");
    (T.render = P), (T.__scopeId = "data-v-6fa57928");
    var z = T;
    Object(n["s"])("data-v-4657b279");
    var q = {
        class: "consola",
        style: { "border-style": "solid", display: "grid" },
      },
      B = Object(n["e"])(
        "div",
        null,
        [
          Object(n["e"])("h3", null, "Contactame"),
          Object(n["e"])("p", { class: "test" }, [
            Object(n["f"])("Numero de contacto x aca :v."),
            Object(n["e"])("span", null, " "),
          ]),
        ],
        -1
      ),
      E = Object(n["e"])(
        "img",
        { class: "imagen", src: M.a, alt: "" },
        null,
        -1
      ),
      H = [B, E];
    function C(e, t, a, o, c, r) {
      return Object(n["p"])(), Object(n["d"])("div", q, H);
    }
    Object(n["q"])();
    var A = {};
    a("6ddd");
    (A.render = C), (A.__scopeId = "data-v-4657b279");
    var D = A;
    function J(e, t) {
      return "Trabajos";
    }
    const L = {};
    L.render = J;
    var N = L;
    function R(e, t) {
      return "Skills";
    }
    const $ = {};
    $.render = R;
    var F = $,
      G = Object(n["f"])(" Estas en un link errado maldito bestia "),
      U = Object(n["f"])("Regresa por aca o te joderas");
    function X(e, t) {
      var a = Object(n["v"])("router-link");
      return (
        Object(n["p"])(),
        Object(n["d"])(
          n["a"],
          null,
          [
            G,
            Object(n["g"])(
              a,
              { to: "/" },
              {
                default: Object(n["z"])(function () {
                  return [U];
                }),
                _: 1,
              }
            ),
          ],
          64
        )
      );
    }
    const K = {};
    K.render = X;
    var Q = K,
      V = a("9f5b"),
      W = a.n(V);
    Object(n["s"])("data-v-1b5cd9f0");
    var Y = {
        class: "consola",
        style: { "border-style": "solid", display: "grid" },
      },
      Z = Object(n["e"])(
        "div",
        null,
        [
          Object(n["e"])("h3", { class: "center-align" }, "Sobre mí"),
          Object(n["e"])("div", { class: "row" }, [
            Object(n["e"])("img", {
              class: "col s10 l3 m4 offset-s1",
              style: { "padding-top": "15px" },
              src: W.a,
              alt: "",
            }),
            Object(n["e"])(
              "p",
              {
                class: "col s10 l9 m8 offset-s1",
                style: { "text-align": "justify" },
              },
              [
                Object(n["f"])(
                  " Hola. Mi nombre es Miguel Berrio, soy estudiante de la carrera de Ingeniería de sistemas. Soy un apasionado por la tecnología y su aplicación en las diferentes áreas de la vida, producto de ello me encuentro constantemente actualizándome y aprendiendo diferentes tecnologías, lo cual ha desarrollado en mi persona una alta capacidad de resiliencia ante cualquier eventualidad. "
                ),
                Object(n["e"])("br"),
                Object(n["e"])("br"),
                Object(n["f"])(
                  ' "El motivo de estar vivos es ser felices" (Reir al ultimo, Norick) '
                ),
              ]
            ),
          ]),
          Object(n["e"])(
            "div",
            { class: "row", style: { "margin-bottom": "0" } },
            [
              Object(n["e"])("p", { class: "center-align redes" }, [
                Object(n["e"])("a", { href: "/" }, "Xvideos"),
                Object(n["e"])(
                  "a",
                  { href: "https://github.com/mabmab159" },
                  "Github"
                ),
                Object(n["e"])(
                  "a",
                  { href: "https://twitter.com/mabmab0159" },
                  "Twitter"
                ),
              ]),
            ]
          ),
        ],
        -1
      ),
      ee = Object(n["e"])(
        "img",
        { class: "imagen", src: M.a, alt: "" },
        null,
        -1
      ),
      te = [Z, ee];
    function ae(e, t) {
      return Object(n["p"])(), Object(n["d"])("div", Y, te);
    }
    Object(n["q"])();
    a("c61e");
    const ne = {};
    (ne.render = ae), (ne.__scopeId = "data-v-1b5cd9f0");
    var oe = ne,
      ce = [
        { path: "/", name: "portada", component: z },
        { path: "/contacto", name: "contacto", component: D },
        { path: "/trabajos", name: "trabajos", component: N },
        { path: "/skills", name: "skills", component: F },
        { path: "/about", name: "about", component: oe },
        { path: "/:pathMatch(.*)", name: "notfound", component: Q },
      ],
      re = Object(_["a"])({ history: Object(_["b"])("/"), routes: ce }),
      ie = re;
    a("8266");
    Object(n["c"])(h).use(ie).mount("#app");
  },
  "5e67": function (e, t, a) {},
  "6ddd": function (e, t, a) {
    "use strict";
    a("b925");
  },
  "9e92": function (e, t, a) {
    e.exports = a.p + "img/chibi.363d0764.png";
  },
  "9f5b": function (e, t, a) {
    e.exports = a.p + "img/foto.dd58596c.jpg";
  },
  b925: function (e, t, a) {},
  bdde: function (e, t, a) {
    "use strict";
    a("4b76");
  },
  c61e: function (e, t, a) {
    "use strict";
    a("5e67");
  },
  eb46: function (e, t, a) {
    "use strict";
    a("2a41");
  },
});
//# sourceMappingURL=app.a64b0a71.js.map
