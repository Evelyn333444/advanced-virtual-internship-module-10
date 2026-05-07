(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[826], {
    3126: function(i, e, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/book/[id]", function() {
            return s(3194)
        }
        ])
    },
    3194: function(i, e, s) {
        "use strict";
        s.r(e),
        s.d(e, {
            default: function() {
                return N
            }
        });
        var n = s(5893)
          , o = s(1163)
          , a = s(7294)
          , r = s(1251)
          , t = s(3247)
          , d = s(9473)
          , l = s(8193)
          , c = s(3750)
          , h = s(3854)
          , u = s(1089);
        let _ = () => (0,
        n.jsxs)("div", {
            className: "inner__book--skeleton",
            children: [(0,
            n.jsxs)("div", {
                className: "inner__book--skeleton-content",
                children: [(0,
                n.jsx)(u.Z, {
                    width: "70%",
                    height: "32px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "40%",
                    height: "32px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "100%",
                    height: "32px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "45%",
                    height: "64px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "50%",
                    height: "32px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "20%",
                    height: "32px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "50%",
                    height: "64px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "80%",
                    height: "180px",
                    marginBottom: "16px"
                }), (0,
                n.jsx)(u.Z, {
                    width: "80%",
                    height: "268px"
                })]
            }), (0,
            n.jsx)("div", {
                className: "inner__book--skeleton-img",
                children: (0,
                n.jsx)(u.Z, {
                    width: "300px",
                    height: "300px",
                    marginBottom: "16px"
                })
            })]
        });
        var x = s(3385)
          , m = s(582)
          , k = s(8173)
          , b = s(9426)
          , v = s(194)
          , j = s(143);
        let p = () => {
            let[i,e] = a.useState()
              , [s,u] = a.useState(!1)
              , [p,N] = a.useState(!0)
              , [g,f] = a.useState(null)
              , [w,y] = a.useState(!0)
              , [S,Z] = a.useState(0)
              , B = (0,
            o.useRouter)()
              , L = (0,
            d.I0)()
              , {id: U} = B.query
              , C = async () => {
                let[i,s] = await (0,
                k.tH)(U);
                if (s) {
                    N(!1);
                    return
                }
                e(i),
                N(!1)
            }
              , E = (0,
            d.v9)(i => i.user)
              , P = async (i, e) => {
                if (!E) {
                    L((0,
                    b.N_)({
                        showAuthModal: !0
                    }));
                    return
                }
                try {
                    u(!s),
                    L((0,
                    x.sc)({
                        notification: !0,
                        message: "Book added to your library successfully.",
                        duration: 15e3,
                        messageStatus: "success"
                    })),
                    await (0,
                    t.pl)((0,
                    t.JU)(r.db, "favorites", E.uid, "favorites", i), e),
                    T(i)
                } catch (i) {
                    console.log(i)
                }
            }
              , R = async i => {
                L((0,
                x.sc)({
                    notification: !0,
                    message: "Book removed from your library successfully.",
                    duration: 15e3,
                    messageStatus: "success"
                }));
                try {
                    u(!s),
                    await (0,
                    t.oe)((0,
                    t.JU)(r.db, "favorites", E.uid, "favorites", i)),
                    T(i)
                } catch (i) {
                    console.log(i)
                }
            }
              , T = async i => {
                if (E)
                    try {
                        let e = await (0,
                        t.QT)((0,
                        t.JU)(r.db, "favorites", E.uid, "favorites", i));
                        u(e.exists())
                    } catch (i) {
                        console.log(i)
                    }
            }
              , X = async () => {
                if (!E) {
                    y(!1);
                    return
                }
                let i = await (0,
                t.PL)((0,
                t.hJ)(r.db, "finished_books", E.uid, "finished_books"));
                f(i.docs.map(i => i.data())),
                y(!1)
            }
              , A = async () => {
                if (!i)
                    return;
                let e = "";
                if (!E) {
                    L((0,
                    b.N_)({
                        showAuthModal: !0
                    }));
                    return
                }
                let s = null == g ? void 0 : g.find(e => e.id === i.id);
                if (i.subscriptionRequired && !E.subscriptionPlan) {
                    e = "The book ".concat(i.title, " is only available for premium users."),
                    L((0,
                    x.sc)({
                        notification: !0,
                        message: e,
                        duration: 15e3,
                        messageStatus: "warning"
                    })),
                    B.push("/choose-plan");
                    return
                }
                e = s ? "You have already finished this book." : "You can read this book.",
                L((0,
                x.sc)({
                    notification: !0,
                    message: e,
                    duration: 15e3,
                    messageStatus: "success"
                })),
                B.push("/player/".concat(i.id))
            }
            ;
            return a.useEffect( () => {
                U && (C(),
                E && (X(),
                T(U)))
            }
            , [U]),
            (0,
            n.jsxs)("div", {
                className: "row",
                children: [(0,
                n.jsx)(j.Z, {
                    audioLink: null == i ? void 0 : i.audioLink,
                    setDuration: Z
                }), (0,
                n.jsx)("div", {
                    className: "container",
                    children: p ? (0,
                    n.jsx)(_, {}) : (0,
                    n.jsxs)("div", {
                        className: "inner__wrapper",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "inner__book",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "inner-book__title",
                                children: [null == i ? void 0 : i.title, " ", ( () => {
                                    if (i && (null == E || !E.subscriptionPlan) && i.subscriptionRequired)
                                        return (0,
                                        n.jsx)(n.Fragment, {
                                            children: "(Premium)"
                                        })
                                }
                                )()]
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__author",
                                children: null == i ? void 0 : i.author
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__sub--title",
                                children: null == i ? void 0 : i.subTitle
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__wrapper",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "inner-book__description--wrapper",
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "inner-book__description",
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "inner-book__icon",
                                            children: (0,
                                            n.jsx)(l.y5j, {})
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "inner-book__overall--rating",
                                            children: [null == i ? void 0 : i.averageRating.toFixed(1), "\xa0"]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "inner-book__total--rating",
                                            children: ["(", null == i ? void 0 : i.totalRating, "\xa0ratings)"]
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "inner-book__description",
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "inner-book__icon",
                                            children: (0,
                                            n.jsx)(l.cjn, {})
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "inner-book__duration",
                                            children: (0,
                                            v.v)(S)
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "inner-book__description",
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "inner-book__icon",
                                            children: (0,
                                            n.jsx)(l.UUX, {})
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "inner-book__type",
                                            children: null == i ? void 0 : i.type
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "inner-book__description",
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "inner-book__icon",
                                            children: (0,
                                            n.jsx)(h.W79, {})
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "inner-book__key--ideas",
                                            children: [null == i ? void 0 : i.keyIdeas, " Key ideas"]
                                        })]
                                    })]
                                })
                            }), (0,
                            n.jsxs)("div", {
                                className: "inner-book__read--btn-wrapper",
                                children: [(0,
                                n.jsxs)("button", {
                                    className: "inner-book__read--btn",
                                    onClick: () => A(),
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "inner-book__read--icon",
                                        children: (0,
                                        n.jsx)(l.zXS, {})
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "inner-book__read--text",
                                        children: "Read"
                                    })]
                                }), (null == i ? void 0 : i.audioLink) && (0,
                                n.jsxs)("button", {
                                    className: "inner-book__read--btn",
                                    onClick: () => A(),
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "inner-book__read--icon",
                                        children: (0,
                                        n.jsx)(l.UUX, {})
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "inner-book__read--text",
                                        children: "Listen"
                                    })]
                                })]
                            }), s ? (0,
                            n.jsxs)("div", {
                                className: "inner-book__bookmark",
                                onClick: () => R(U),
                                children: [(0,
                                n.jsx)("div", {
                                    className: "inner-book__bookmark--icon",
                                    children: (0,
                                    n.jsx)(c.vw0, {})
                                }), (0,
                                n.jsx)("div", {
                                    className: "inner-book__bookmark--text",
                                    children: "Saved in My Library"
                                })]
                            }) : (0,
                            n.jsxs)("div", {
                                className: "inner-book__bookmark",
                                onClick: () => P(U, i),
                                children: [(0,
                                n.jsx)("div", {
                                    className: "inner-book__bookmark--icon",
                                    children: (0,
                                    n.jsx)(c.flH, {})
                                }), (0,
                                n.jsx)("div", {
                                    className: "inner-book__bookmark--text",
                                    children: "Add title to My Library"
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__secondary--title",
                                children: "What's it about?"
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__tags--wrapper",
                                children: null == i ? void 0 : i.tags.map( (i, e) => (0,
                                n.jsx)("div", {
                                    className: "inner-book__tag",
                                    children: i
                                }, e))
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__book--description",
                                children: null == i ? void 0 : i.bookDescription
                            }), (0,
                            n.jsx)("h2", {
                                className: "inner-book__secondary--title",
                                children: "About the author"
                            }), (0,
                            n.jsx)("div", {
                                className: "inner-book__author--description",
                                children: null == i ? void 0 : i.authorDescription
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "inner-book--img-wrapper",
                            children: (0,
                            n.jsx)(m.Z, {
                                image: null == i ? void 0 : i.imageLink,
                                width: "300px",
                                height: "300px"
                            })
                        })]
                    })
                })]
            })
        }
        ;
        var N = p
    }
}, function(i) {
    i.O(0, [556, 774, 888, 179], function() {
        return i(i.s = 3126)
    }),
    _N_E = i.O()
}
]);
