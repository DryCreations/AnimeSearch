(function(e) {
  function t(t) {
    for (
      var n, s, o = t[0], c = t[1], d = t[2], u = 0, h = [];
      u < o.length;
      u++
    )
      (s = o[u]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && h.push(r[s][0]),
        (r[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    l && l(t);
    while (h.length) h.shift()();
    return i.push.apply(i, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== r[c] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = s((s.s = a[0]))));
    }
    return e;
  }
  var n = {},
    r = { app: 0 },
    i = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function(e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (s.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var l = c;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function(e, t, a) {
    e.exports = a("56d7");
  },
  "56d7": function(e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-app",
          [
            a(
              "v-content",
              [
                a(
                  "v-container",
                  [
                    a(
                      "v-layout",
                      { attrs: { "align-center": "", "justify-center": "" } },
                      [
                        a(
                          "v-flex",
                          { attrs: { xs12: "", sm10: "", md8: "" } },
                          [
                            a("v-card", [
                              a(
                                "div",
                                { ref: "inputForm" },
                                [
                                  a(
                                    "v-expand-transition",
                                    [
                                      a("v-img", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: e.showImg,
                                            expression: "showImg"
                                          }
                                        ],
                                        ref: "image",
                                        attrs: { src: e.searchImgURL }
                                      })
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-card-text",
                                    [
                                      a(
                                        "v-form",
                                        [
                                          a("v-file-input", {
                                            on: { change: e.fileChange },
                                            model: {
                                              value: e.searchImg,
                                              callback: function(t) {
                                                e.searchImg = t;
                                              },
                                              expression: "searchImg"
                                            }
                                          }),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                disabled: !e.searchImgURL
                                              },
                                              on: { click: e.searchImage }
                                            },
                                            [e._v("Search")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]),
                            e._l(e.searchResults, function(t, n) {
                              return [
                                a(
                                  "v-slide-y-transition",
                                  { key: n },
                                  [
                                    a(
                                      "v-card",
                                      { staticClass: "mt-5" },
                                      [
                                        a(
                                          "v-toolbar",
                                          { attrs: { dark: "" } },
                                          [
                                            a("v-toolbar-title", [
                                              e._v(
                                                e._s(
                                                  t.title_native +
                                                    ": " +
                                                    t.title_english
                                                )
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        a(
                                          "v-card-title",
                                          [
                                            e._v(
                                              " " +
                                                e._s(
                                                  isNaN(t.episode)
                                                    ? t.episode
                                                    : "EP#" + (t.episode || "0")
                                                ) +
                                                " "
                                            ),
                                            a("v-spacer"),
                                            e._v(
                                              " " +
                                                e._s(
                                                  "~" +
                                                    Math.floor(t.at / 60) +
                                                    "min"
                                                ) +
                                                " "
                                            )
                                          ],
                                          1
                                        ),
                                        a(
                                          "v-card-text",
                                          [
                                            a("p", [
                                              e._v(
                                                " " +
                                                  e._s(
                                                    Math.floor(
                                                      100 * t.similarity
                                                    ) + "% Similarity"
                                                  ) +
                                                  " "
                                              )
                                            ]),
                                            a("v-img", {
                                              attrs: {
                                                src:
                                                  "https://trace.moe/thumbnail.php?anilist_id=" +
                                                  t.anilist_id +
                                                  "&file=" +
                                                  encodeURIComponent(
                                                    t.filename
                                                  ) +
                                                  "&t=" +
                                                  t.at +
                                                  "&token=" +
                                                  t.tokenthumb
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        a("v-divider"),
                                        a(
                                          "v-expand-transition",
                                          [
                                            t.show
                                              ? a("v-card-text", [
                                                  a(
                                                    "a",
                                                    {
                                                      attrs: {
                                                        href:
                                                          "https://anilist.co/anime/" +
                                                          t.anilist_id
                                                      }
                                                    },
                                                    [
                                                      e._v(
                                                        " " +
                                                          e._s(
                                                            t.anilist_data.title
                                                              .native +
                                                              ": " +
                                                              t.anilist_data
                                                                .title.english
                                                          ) +
                                                          " "
                                                      )
                                                    ]
                                                  ),
                                                  a("p", [
                                                    e._v(
                                                      " " +
                                                        e._s(
                                                          t.anilist_data
                                                            .startDate.year +
                                                            "-" +
                                                            t.anilist_data
                                                              .startDate.year +
                                                            " " +
                                                            t.anilist_data
                                                              .status
                                                        ) +
                                                        " "
                                                    )
                                                  ]),
                                                  a("p", [
                                                    e._v(
                                                      " " +
                                                        e._s(
                                                          t.anilist_data
                                                            .season +
                                                            " " +
                                                            t.anilist_data
                                                              .seasonYear
                                                        ) +
                                                        " "
                                                    )
                                                  ]),
                                                  a("p", [
                                                    e._v(
                                                      e._s(
                                                        t.anilist_data
                                                          .episodes +
                                                          " episodes"
                                                      )
                                                    )
                                                  ]),
                                                  a("blockquote", [
                                                    e._v(
                                                      " " +
                                                        e._s(
                                                          t.anilist_data
                                                            .description
                                                        ) +
                                                        " "
                                                    )
                                                  ])
                                                ])
                                              : e._e()
                                          ],
                                          1
                                        ),
                                        a("v-divider"),
                                        a(
                                          "v-card-actions",
                                          { staticClass: "justify-center" },
                                          [
                                            a(
                                              "v-btn",
                                              {
                                                attrs: { icon: "" },
                                                on: {
                                                  click: function(e) {
                                                    t.show = !t.show;
                                                  }
                                                }
                                              },
                                              [
                                                a("v-icon", [
                                                  e._v(
                                                    e._s(
                                                      t.show
                                                        ? "mdi-chevron-up"
                                                        : "mdi-chevron-down"
                                                    )
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ];
                            }),
                            a(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.searching,
                                    expression: "searching"
                                  }
                                ],
                                staticClass: "text-center mt-5"
                              },
                              [
                                a("v-progress-circular", {
                                  attrs: { indeterminate: "", color: "primary" }
                                })
                              ],
                              1
                            )
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      i = [],
      s =
        (a("b0c0"),
        a("d3b7"),
        a("159b"),
        {
          name: "App",
          components: {},
          data: function() {
            return {
              searchImg: null,
              searchImgURL: "",
              showImg: !1,
              searchResults: [],
              searching: !1
            };
          },
          methods: {
            fileChange: function() {
              this.searchResults = [];
              var e = new FileReader(),
                t = this;
              (t.showImg = !1),
                (t.searchImgURL = ""),
                e.addEventListener(
                  "load",
                  function() {
                    (t.searchImgURL = e.result),
                      setTimeout(function() {
                        t.showImg = !0;
                      }, 500);
                  },
                  !1
                ),
                this.searchImg &&
                  this.searchImg.name &&
                  e.readAsDataURL(this.searchImg);
            },
            onDrop: function(e) {
              var t = e.target.files || e.dataTransfer.files;
              t.length && ((this.searchImg = t[0]), this.fileChange());
            },
            searchImage: function() {
              this.searching = !0;
              var e = document.createElement("img");
              (e.crossOrigin = "Anonymous"), (e.src = this.searchImgURL);
              var t = this,
                a = document.createElement("canvas");
              (a.width = e.naturalWidth), (a.height = e.naturalHeight);
              var n = a.getContext("2d");
              n.drawImage(e, 0, 0, a.width, a.height),
                fetch("https://trace.moe/api/search", {
                  method: "POST",
                  body: JSON.stringify({
                    image: a.toDataURL("image/jpeg", 0.8)
                  }),
                  headers: { "Content-Type": "application/json" }
                })
                  .then(function(e) {
                    return e.json();
                  })
                  .then(function(e) {
                    e.docs.forEach(function(e) {
                      var a =
                          "\n            query ($id: Int) {\n              Media (id: $id, type: ANIME) {\n                id\n                siteUrl\n                title {\n                  english\n                  native\n                }\n                description\n                season\n                seasonYear\n                startDate {\n                  year\n                  month\n                  day\n                }\n                endDate {\n                  year\n                  month\n                  day\n                }\n                status\n                episodes\n                duration\n              }\n            }\n            ",
                        n = { id: e.anilist_id },
                        r = "https://graphql.anilist.co",
                        i = {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                          },
                          body: JSON.stringify({ query: a, variables: n })
                        };
                      fetch(r, i)
                        .then(function(e) {
                          return e.json();
                        })
                        .then(function(a) {
                          (e.anilist_data = a.data.Media),
                            (e.show = !1),
                            t.searchResults.push(e),
                            (t.searching = !1);
                        });
                    });
                  });
            }
          },
          mounted: function() {
            var e = this,
              t = this.$refs.inputForm,
              a = [
                "drag",
                "dragstart",
                "dragend",
                "dragover",
                "dragenter",
                "dragleave",
                "drop"
              ];
            a.forEach(function(e) {
              document.body.addEventListener(e, function(e) {
                e.preventDefault(), e.stopPropagation();
              });
            }),
              t.addEventListener("drop", function(t) {
                e.onDrop(t);
              });
          }
        }),
      o = s,
      c = a("2877"),
      d = a("6544"),
      l = a.n(d),
      u = a("7496"),
      h = a("8336"),
      p = a("b0af"),
      v = a("99d9"),
      f = a("a523"),
      m = a("a75b"),
      g = a("ce7e"),
      _ = a("0789"),
      y = a("23a7"),
      b = a("0e8f"),
      w = a("4bd4"),
      I = a("132d"),
      x = a("adda"),
      V = a("a722"),
      j = a("490a"),
      C = a("2fa4"),
      O = a("71d9"),
      T = a("2a7f"),
      R = Object(c["a"])(o, r, i, !1, null, null, null),
      S = R.exports;
    l()(R, {
      VApp: u["a"],
      VBtn: h["a"],
      VCard: p["a"],
      VCardActions: v["a"],
      VCardText: v["b"],
      VCardTitle: v["c"],
      VContainer: f["a"],
      VContent: m["a"],
      VDivider: g["a"],
      VExpandTransition: _["a"],
      VFileInput: y["a"],
      VFlex: b["a"],
      VForm: w["a"],
      VIcon: I["a"],
      VImg: x["a"],
      VLayout: V["a"],
      VProgressCircular: j["a"],
      VSlideYTransition: _["e"],
      VSpacer: C["a"],
      VToolbar: O["a"],
      VToolbarTitle: T["a"]
    });
    var L = a("8c4f");
    n["a"].use(L["a"]);
    var P = [],
      k = new L["a"]({ routes: P }),
      E = k,
      D = a("2f62");
    n["a"].use(D["a"]);
    var U = new D["a"].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
      }),
      M = a("f309");
    n["a"].use(M["a"]);
    var A = new M["a"]({});
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: E,
        store: U,
        vuetify: A,
        render: function(e) {
          return e(S);
        }
      }).$mount("#app");
  }
});
//# sourceMappingURL=app.7d42c998.js.map
