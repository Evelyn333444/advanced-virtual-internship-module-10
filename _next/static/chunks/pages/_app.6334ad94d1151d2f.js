(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    4444: function(e, t, n) {
        "use strict";
        n.d(t, {
            BH: function() {
                return w
            },
            L: function() {
                return u
            },
            LL: function() {
                return N
            },
            P0: function() {
                return m
            },
            Pz: function() {
                return v
            },
            Sg: function() {
                return b
            },
            ZR: function() {
                return k
            },
            aH: function() {
                return y
            },
            b$: function() {
                return T
            },
            eu: function() {
                return A
            },
            hl: function() {
                return C
            },
            m9: function() {
                return V
            },
            ne: function() {
                return M
            },
            pd: function() {
                return P
            },
            q4: function() {
                return g
            },
            ru: function() {
                return I
            },
            tV: function() {
                return c
            },
            uI: function() {
                return E
            },
            vZ: function() {
                return function e(t, n) {
                    if (t === n)
                        return !0;
                    let r = Object.keys(t)
                      , i = Object.keys(n);
                    for (let s of r) {
                        if (!i.includes(s))
                            return !1;
                        let r = t[s]
                          , a = n[s];
                        if (R(r) && R(a)) {
                            if (!e(r, a))
                                return !1
                        } else if (r !== a)
                            return !1
                    }
                    for (let e of i)
                        if (!r.includes(e))
                            return !1;
                    return !0
                }
            },
            w1: function() {
                return S
            },
            xO: function() {
                return D
            },
            xb: function() {
                return x
            },
            z$: function() {
                return _
            },
            zd: function() {
                return L
            }
        });
        var r = n(3454);
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let i = function(e) {
            let t = []
              , n = 0;
            for (let r = 0; r < e.length; r++) {
                let i = e.charCodeAt(r);
                i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
                t[n++] = 63 & i | 128) : (64512 & i) == 55296 && r + 1 < e.length && (64512 & e.charCodeAt(r + 1)) == 56320 ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)),
                t[n++] = i >> 18 | 240,
                t[n++] = i >> 12 & 63 | 128,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128)
            }
            return t
        }
          , s = function(e) {
            let t = []
              , n = 0
              , r = 0;
            for (; n < e.length; ) {
                let i = e[n++];
                if (i < 128)
                    t[r++] = String.fromCharCode(i);
                else if (i > 191 && i < 224) {
                    let s = e[n++];
                    t[r++] = String.fromCharCode((31 & i) << 6 | 63 & s)
                } else if (i > 239 && i < 365) {
                    let s = e[n++]
                      , a = e[n++]
                      , o = e[n++]
                      , l = ((7 & i) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & o) - 65536;
                    t[r++] = String.fromCharCode(55296 + (l >> 10)),
                    t[r++] = String.fromCharCode(56320 + (1023 & l))
                } else {
                    let s = e[n++]
                      , a = e[n++];
                    t[r++] = String.fromCharCode((15 & i) << 12 | (63 & s) << 6 | 63 & a)
                }
            }
            return t.join("")
        }
          , a = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(e, t) {
                if (!Array.isArray(e))
                    throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
                  , r = [];
                for (let t = 0; t < e.length; t += 3) {
                    let i = e[t]
                      , s = t + 1 < e.length
                      , a = s ? e[t + 1] : 0
                      , o = t + 2 < e.length
                      , l = o ? e[t + 2] : 0
                      , u = i >> 2
                      , c = (3 & i) << 4 | a >> 4
                      , h = (15 & a) << 2 | l >> 6
                      , d = 63 & l;
                    o || (d = 64,
                    s || (h = 64)),
                    r.push(n[u], n[c], n[h], n[d])
                }
                return r.join("")
            },
            encodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(i(e), t)
            },
            decodeString(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : s(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray(e, t) {
                this.init_();
                let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
                  , r = [];
                for (let t = 0; t < e.length; ) {
                    let i = n[e.charAt(t++)]
                      , s = t < e.length
                      , a = s ? n[e.charAt(t)] : 0;
                    ++t;
                    let l = t < e.length
                      , u = l ? n[e.charAt(t)] : 64;
                    ++t;
                    let c = t < e.length
                      , h = c ? n[e.charAt(t)] : 64;
                    if (++t,
                    null == i || null == a || null == u || null == h)
                        throw new o;
                    let d = i << 2 | a >> 4;
                    if (r.push(d),
                    64 !== u) {
                        let e = a << 4 & 240 | u >> 2;
                        if (r.push(e),
                        64 !== h) {
                            let e = u << 6 & 192 | h;
                            r.push(e)
                        }
                    }
                }
                return r
            },
            init_() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                    for (let e = 0; e < this.ENCODED_VALS.length; e++)
                        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                        this.charToByteMap_[this.byteToCharMap_[e]] = e,
                        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                        this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        };
        class o extends Error {
            constructor() {
                super(...arguments),
                this.name = "DecodeBase64StringError"
            }
        }
        let l = function(e) {
            let t = i(e);
            return a.encodeByteArray(t, !0)
        }
          , u = function(e) {
            return l(e).replace(/\./g, "")
        }
          , c = function(e) {
            try {
                return a.decodeString(e, !0)
            } catch (e) {
                console.error("base64Decode failed: ", e)
            }
            return null
        }
          , h = () => /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        (function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== n.g)
                return n.g;
            throw Error("Unable to locate global object.")
        }
        )().__FIREBASE_DEFAULTS__
          , d = () => {
            if (void 0 === r || void 0 === r.env)
                return;
            let e = r.env.__FIREBASE_DEFAULTS__;
            if (e)
                return JSON.parse(e)
        }
          , f = () => {
            let e;
            if ("undefined" == typeof document)
                return;
            try {
                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (e) {
                return
            }
            let t = e && c(e[1]);
            return t && JSON.parse(t)
        }
          , p = () => {
            try {
                return h() || d() || f()
            } catch (e) {
                console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
                return
            }
        }
          , g = e => {
            var t, n;
            return null === (n = null === (t = p()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
        }
          , m = e => {
            let t = g(e);
            if (!t)
                return;
            let n = t.lastIndexOf(":");
            if (n <= 0 || n + 1 === t.length)
                throw Error(`Invalid host ${t} with no separate hostname and port!`);
            let r = parseInt(t.substring(n + 1), 10);
            return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
        }
          , y = () => {
            var e;
            return null === (e = p()) || void 0 === e ? void 0 : e.config
        }
          , v = e => {
            var t;
            return null === (t = p()) || void 0 === t ? void 0 : t[`_${e}`]
        }
        ;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class w {
            constructor() {
                this.reject = () => {}
                ,
                this.resolve = () => {}
                ,
                this.promise = new Promise( (e, t) => {
                    this.resolve = e,
                    this.reject = t
                }
                )
            }
            wrapCallback(e) {
                return (t, n) => {
                    t ? this.reject(t) : this.resolve(n),
                    "function" == typeof e && (this.promise.catch( () => {}
                    ),
                    1 === e.length ? e(t) : e(t, n))
                }
            }
        }
        /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function b(e, t) {
            if (e.uid)
                throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
            let n = t || "demo-project"
              , r = e.iat || 0
              , i = e.sub || e.user_id;
            if (!i)
                throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
            let s = Object.assign({
                iss: `https://securetoken.google.com/${n}`,
                aud: n,
                iat: r,
                exp: r + 3600,
                auth_time: r,
                sub: i,
                user_id: i,
                firebase: {
                    sign_in_provider: "custom",
                    identities: {}
                }
            }, e);
            return [u(JSON.stringify({
                alg: "none",
                type: "JWT"
            })), u(JSON.stringify(s)), ""].join(".")
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function _() {
            return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
        }
        function E() {
            return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())
        }
        function I() {
            let e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
            return "object" == typeof e && void 0 !== e.id
        }
        function T() {
            return "object" == typeof navigator && "ReactNative" === navigator.product
        }
        function S() {
            let e = _();
            return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
        }
        function C() {
            try {
                return "object" == typeof indexedDB
            } catch (e) {
                return !1
            }
        }
        function A() {
            return new Promise( (e, t) => {
                try {
                    let n = !0
                      , r = "validate-browser-context-for-indexeddb-analytics-module"
                      , i = self.indexedDB.open(r);
                    i.onsuccess = () => {
                        i.result.close(),
                        n || self.indexedDB.deleteDatabase(r),
                        e(!0)
                    }
                    ,
                    i.onupgradeneeded = () => {
                        n = !1
                    }
                    ,
                    i.onerror = () => {
                        var e;
                        t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                    }
                } catch (e) {
                    t(e)
                }
            }
            )
        }
        class k extends Error {
            constructor(e, t, n) {
                super(t),
                this.code = e,
                this.customData = n,
                this.name = "FirebaseError",
                Object.setPrototypeOf(this, k.prototype),
                Error.captureStackTrace && Error.captureStackTrace(this, N.prototype.create)
            }
        }
        class N {
            constructor(e, t, n) {
                this.service = e,
                this.serviceName = t,
                this.errors = n
            }
            create(e, ...t) {
                let n = t[0] || {}
                  , r = `${this.service}/${e}`
                  , i = this.errors[e]
                  , s = i ? i.replace(O, (e, t) => {
                    let r = n[t];
                    return null != r ? String(r) : `<${t}?>`
                }
                ) : "Error"
                  , a = `${this.serviceName}: ${s} (${r}).`
                  , o = new k(r,a,n);
                return o
            }
        }
        let O = /\{\$([^}]+)}/g;
        function x(e) {
            for (let t in e)
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        function R(e) {
            return null !== e && "object" == typeof e
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function D(e) {
            let t = [];
            for (let[n,r] of Object.entries(e))
                Array.isArray(r) ? r.forEach(e => {
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                }
                ) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
            return t.length ? "&" + t.join("&") : ""
        }
        function L(e) {
            let t = {}
              , n = e.replace(/^\?/, "").split("&");
            return n.forEach(e => {
                if (e) {
                    let[n,r] = e.split("=");
                    t[decodeURIComponent(n)] = decodeURIComponent(r)
                }
            }
            ),
            t
        }
        function P(e) {
            let t = e.indexOf("?");
            if (!t)
                return "";
            let n = e.indexOf("#", t);
            return e.substring(t, n > 0 ? n : void 0)
        }
        function M(e, t) {
            let n = new j(e,t);
            return n.subscribe.bind(n)
        }
        class j {
            constructor(e, t) {
                this.observers = [],
                this.unsubscribes = [],
                this.observerCount = 0,
                this.task = Promise.resolve(),
                this.finalized = !1,
                this.onNoObservers = t,
                this.task.then( () => {
                    e(this)
                }
                ).catch(e => {
                    this.error(e)
                }
                )
            }
            next(e) {
                this.forEachObserver(t => {
                    t.next(e)
                }
                )
            }
            error(e) {
                this.forEachObserver(t => {
                    t.error(e)
                }
                ),
                this.close(e)
            }
            complete() {
                this.forEachObserver(e => {
                    e.complete()
                }
                ),
                this.close()
            }
            subscribe(e, t, n) {
                let r;
                if (void 0 === e && void 0 === t && void 0 === n)
                    throw Error("Missing Observer.");
                void 0 === (r = !function(e, t) {
                    if ("object" != typeof e || null === e)
                        return !1;
                    for (let n of t)
                        if (n in e && "function" == typeof e[n])
                            return !0;
                    return !1
                }(e, ["next", "error", "complete"]) ? {
                    next: e,
                    error: t,
                    complete: n
                } : e).next && (r.next = U),
                void 0 === r.error && (r.error = U),
                void 0 === r.complete && (r.complete = U);
                let i = this.unsubscribeOne.bind(this, this.observers.length);
                return this.finalized && this.task.then( () => {
                    try {
                        this.finalError ? r.error(this.finalError) : r.complete()
                    } catch (e) {}
                }
                ),
                this.observers.push(r),
                i
            }
            unsubscribeOne(e) {
                void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                this.observerCount -= 1,
                0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
            }
            forEachObserver(e) {
                if (!this.finalized)
                    for (let t = 0; t < this.observers.length; t++)
                        this.sendOne(t, e)
            }
            sendOne(e, t) {
                this.task.then( () => {
                    if (void 0 !== this.observers && void 0 !== this.observers[e])
                        try {
                            t(this.observers[e])
                        } catch (e) {
                            "undefined" != typeof console && console.error && console.error(e)
                        }
                }
                )
            }
            close(e) {
                this.finalized || (this.finalized = !0,
                void 0 !== e && (this.finalError = e),
                this.task.then( () => {
                    this.observers = void 0,
                    this.onNoObservers = void 0
                }
                ))
            }
        }
        function U() {}
        /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function V(e) {
            return e && e._delegate ? e._delegate : e
        }
    },
    6741: function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(e) {
                return "'" + e + "'"
            }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
        }
        function i(e) {
            return !!e && !!e[q]
        }
        function s(e) {
            var t;
            return !!e && (function(e) {
                if (!e || "object" != typeof e)
                    return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t)
                    return !0;
                var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === H
            }(e) || Array.isArray(e) || !!e[B] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[B]) || h(e) || d(e))
        }
        function a(e, t, n) {
            void 0 === n && (n = !1),
            0 === o(e) ? (n ? Object.keys : K)(e).forEach(function(r) {
                n && "symbol" == typeof r || t(r, e[r], e)
            }) : e.forEach(function(n, r) {
                return t(r, n, e)
            })
        }
        function o(e) {
            var t = e[q];
            return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : h(e) ? 2 : d(e) ? 3 : 0
        }
        function l(e, t) {
            return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }
        function u(e, t, n) {
            var r = o(e);
            2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
        }
        function c(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        function h(e) {
            return U && e instanceof Map
        }
        function d(e) {
            return V && e instanceof Set
        }
        function f(e) {
            return e.o || e.t
        }
        function p(e) {
            if (Array.isArray(e))
                return Array.prototype.slice.call(e);
            var t = $(e);
            delete t[q];
            for (var n = K(t), r = 0; r < n.length; r++) {
                var i = n[r]
                  , s = t[i];
                !1 === s.writable && (s.writable = !0,
                s.configurable = !0),
                (s.get || s.set) && (t[i] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: s.enumerable,
                    value: e[i]
                })
            }
            return Object.create(Object.getPrototypeOf(e), t)
        }
        function g(e, t) {
            return void 0 === t && (t = !1),
            y(e) || i(e) || !s(e) || (o(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t && a(e, function(e, t) {
                return g(t, !0)
            }, !0)),
            e
        }
        function m() {
            r(2)
        }
        function y(e) {
            return null == e || "object" != typeof e || Object.isFrozen(e)
        }
        function v(e) {
            var t = G[e];
            return t || r(18, e),
            t
        }
        function w(e, t) {
            t && (v("Patches"),
            e.u = [],
            e.s = [],
            e.v = t)
        }
        function b(e) {
            _(e),
            e.p.forEach(I),
            e.p = null
        }
        function _(e) {
            e === M && (M = e.l)
        }
        function E(e) {
            return M = {
                p: [],
                l: M,
                h: e,
                m: !0,
                _: 0
            }
        }
        function I(e) {
            var t = e[q];
            0 === t.i || 1 === t.i ? t.j() : t.O = !0
        }
        function T(e, t) {
            t._ = t.p.length;
            var n = t.p[0]
              , i = void 0 !== e && e !== n;
            return t.h.g || v("ES5").S(t, e, i),
            i ? (n[q].P && (b(t),
            r(4)),
            s(e) && (e = S(t, e),
            t.l || A(t, e)),
            t.u && v("Patches").M(n[q].t, e, t.u, t.s)) : e = S(t, n, []),
            b(t),
            t.u && t.v(t.u, t.s),
            e !== z ? e : void 0
        }
        function S(e, t, n) {
            if (y(t))
                return t;
            var r = t[q];
            if (!r)
                return a(t, function(i, s) {
                    return C(e, r, t, i, s, n)
                }, !0),
                t;
            if (r.A !== e)
                return t;
            if (!r.P)
                return A(e, r.t, !0),
                r.t;
            if (!r.I) {
                r.I = !0,
                r.A._--;
                var i = 4 === r.i || 5 === r.i ? r.o = p(r.k) : r.o
                  , s = i
                  , o = !1;
                3 === r.i && (s = new Set(i),
                i.clear(),
                o = !0),
                a(s, function(t, s) {
                    return C(e, r, i, t, s, n, o)
                }),
                A(e, i, !1),
                n && e.u && v("Patches").N(r, n, e.u, e.s)
            }
            return r.o
        }
        function C(e, t, n, r, a, o, c) {
            if (i(a)) {
                var h = S(e, a, o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0);
                if (u(n, r, h),
                !i(h))
                    return;
                e.m = !1
            } else
                c && n.add(a);
            if (s(a) && !y(a)) {
                if (!e.h.D && e._ < 1)
                    return;
                S(e, a),
                t && t.A.l || A(e, a)
            }
        }
        function A(e, t, n) {
            void 0 === n && (n = !1),
            !e.l && e.h.D && e.m && g(t, n)
        }
        function k(e, t) {
            var n = e[q];
            return (n ? f(n) : e)[t]
        }
        function N(e, t) {
            if (t in e)
                for (var n = Object.getPrototypeOf(e); n; ) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    if (r)
                        return r;
                    n = Object.getPrototypeOf(n)
                }
        }
        function O(e) {
            e.P || (e.P = !0,
            e.l && O(e.l))
        }
        function x(e) {
            e.o || (e.o = p(e.t))
        }
        function R(e, t, n) {
            var r, i, s, a, o, l, u, c = h(t) ? v("MapSet").F(t, n) : d(t) ? v("MapSet").T(t, n) : e.g ? (s = i = {
                i: (r = Array.isArray(t)) ? 1 : 0,
                A: n ? n.A : M,
                P: !1,
                I: !1,
                R: {},
                l: n,
                t: t,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            a = W,
            r && (s = [i],
            a = Q),
            l = (o = Proxy.revocable(s, a)).revoke,
            u = o.proxy,
            i.k = u,
            i.j = l,
            u) : v("ES5").J(t, n);
            return (n ? n.A : M).p.push(c),
            c
        }
        function D(e, t) {
            switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
            }
            return p(e)
        }
        n.d(t, {
            xC: function() {
                return eT
            },
            oM: function() {
                return eA
            }
        });
        var L, P, M, j = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), U = "undefined" != typeof Map, V = "undefined" != typeof Set, F = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, z = j ? Symbol.for("immer-nothing") : ((P = {})["immer-nothing"] = !0,
        P), B = j ? Symbol.for("immer-draftable") : "__$immer_draftable", q = j ? Symbol.for("immer-state") : "__$immer_state", H = "" + Object.prototype.constructor, K = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : Object.getOwnPropertyNames, $ = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return K(e).forEach(function(n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
            }),
            t
        }
        , G = {}, W = {
            get: function(e, t) {
                if (t === q)
                    return e;
                var n, r, i = f(e);
                if (!l(i, t))
                    return (r = N(i, t)) ? "value"in r ? r.value : null === (n = r.get) || void 0 === n ? void 0 : n.call(e.k) : void 0;
                var a = i[t];
                return e.I || !s(a) ? a : a === k(e.t, t) ? (x(e),
                e.o[t] = R(e.A.h, a, e)) : a
            },
            has: function(e, t) {
                return t in f(e)
            },
            ownKeys: function(e) {
                return Reflect.ownKeys(f(e))
            },
            set: function(e, t, n) {
                var r = N(f(e), t);
                if (null == r ? void 0 : r.set)
                    return r.set.call(e.k, n),
                    !0;
                if (!e.P) {
                    var i = k(f(e), t)
                      , s = null == i ? void 0 : i[q];
                    if (s && s.t === n)
                        return e.o[t] = n,
                        e.R[t] = !1,
                        !0;
                    if (c(n, i) && (void 0 !== n || l(e.t, t)))
                        return !0;
                    x(e),
                    O(e)
                }
                return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n,
                e.R[t] = !0),
                !0
            },
            deleteProperty: function(e, t) {
                return void 0 !== k(e.t, t) || t in e.t ? (e.R[t] = !1,
                x(e),
                O(e)) : delete e.R[t],
                e.o && delete e.o[t],
                !0
            },
            getOwnPropertyDescriptor: function(e, t) {
                var n = f(e)
                  , r = Reflect.getOwnPropertyDescriptor(n, t);
                return r ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: r.enumerable,
                    value: n[t]
                } : r
            },
            defineProperty: function() {
                r(11)
            },
            getPrototypeOf: function(e) {
                return Object.getPrototypeOf(e.t)
            },
            setPrototypeOf: function() {
                r(12)
            }
        }, Q = {};
        a(W, function(e, t) {
            Q[e] = function() {
                return arguments[0] = arguments[0][0],
                t.apply(this, arguments)
            }
        }),
        Q.deleteProperty = function(e, t) {
            return Q.set.call(this, e, t, void 0)
        }
        ,
        Q.set = function(e, t, n) {
            return W.set.call(this, e[0], t, n, e[0])
        }
        ;
        var X = new (function() {
            function e(e) {
                var t = this;
                this.g = F,
                this.D = !0,
                this.produce = function(e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var a, o = n;
                        return n = e,
                        function(e) {
                            var r = this;
                            void 0 === e && (e = o);
                            for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                                s[a - 1] = arguments[a];
                            return t.produce(e, function(e) {
                                var t;
                                return (t = n).call.apply(t, [r, e].concat(s))
                            })
                        }
                    }
                    if ("function" != typeof n && r(6),
                    void 0 !== i && "function" != typeof i && r(7),
                    s(e)) {
                        var l = E(t)
                          , u = R(t, e, void 0)
                          , c = !0;
                        try {
                            a = n(u),
                            c = !1
                        } finally {
                            c ? b(l) : _(l)
                        }
                        return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                            return w(l, i),
                            T(e, l)
                        }, function(e) {
                            throw b(l),
                            e
                        }) : (w(l, i),
                        T(a, l))
                    }
                    if (!e || "object" != typeof e) {
                        if (void 0 === (a = n(e)) && (a = e),
                        a === z && (a = void 0),
                        t.D && g(a, !0),
                        i) {
                            var h = []
                              , d = [];
                            v("Patches").M(e, a, h, d),
                            i(h, d)
                        }
                        return a
                    }
                    r(21, e)
                }
                ,
                this.produceWithPatches = function(e, n) {
                    if ("function" == typeof e)
                        return function(n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
                                i[s - 1] = arguments[s];
                            return t.produceWithPatches(n, function(t) {
                                return e.apply(void 0, [t].concat(i))
                            })
                        }
                        ;
                    var r, i, s = t.produce(e, n, function(e, t) {
                        r = e,
                        i = t
                    });
                    return "undefined" != typeof Promise && s instanceof Promise ? s.then(function(e) {
                        return [e, r, i]
                    }) : [s, r, i]
                }
                ,
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function(e) {
                s(e) || r(8),
                i(e) && (i(t = e) || r(22, t),
                e = function e(t) {
                    if (!s(t))
                        return t;
                    var n, r = t[q], i = o(t);
                    if (r) {
                        if (!r.P && (r.i < 4 || !v("ES5").K(r)))
                            return r.t;
                        r.I = !0,
                        n = D(t, i),
                        r.I = !1
                    } else
                        n = D(t, i);
                    return a(n, function(t, i) {
                        var s;
                        r && (2 === o(s = r.t) ? s.get(t) : s[t]) === i || u(n, t, e(i))
                    }),
                    3 === i ? new Set(n) : n
                }(t));
                var t, n = E(this), l = R(this, e, void 0);
                return l[q].C = !0,
                _(n),
                l
            }
            ,
            t.finishDraft = function(e, t) {
                var n = (e && e[q]).A;
                return w(n, t),
                T(void 0, n)
            }
            ,
            t.setAutoFreeze = function(e) {
                this.D = e
            }
            ,
            t.setUseProxies = function(e) {
                e && !F && r(20),
                this.g = e
            }
            ,
            t.applyPatches = function(e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n, r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var s = v("Patches").$;
                return i(e) ? s(e, t) : this.produce(e, function(e) {
                    return s(e, t)
                })
            }
            ,
            e
        }())
          , J = X.produce;
        function Y(e) {
            return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Z(Object(n), !0).forEach(function(t) {
                    !function(e, t, n) {
                        var r;
                        r = function(e, t) {
                            if ("object" !== Y(e) || null === e)
                                return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, t || "default");
                                if ("object" !== Y(r))
                                    return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(t, "string"),
                        (t = "symbol" === Y(r) ? r : String(r))in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    }(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function et(e) {
            return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
        }
        X.produceWithPatches.bind(X),
        X.setAutoFreeze.bind(X),
        X.setUseProxies.bind(X),
        X.applyPatches.bind(X),
        X.createDraft.bind(X),
        X.finishDraft.bind(X);
        var en = "function" == typeof Symbol && Symbol.observable || "@@observable"
          , er = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , ei = {
            INIT: "@@redux/INIT" + er(),
            REPLACE: "@@redux/REPLACE" + er(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + er()
            }
        };
        function es() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return 0 === t.length ? function(e) {
                return e
            }
            : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            })
        }
        function ea() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments)
                      , r = function() {
                        throw Error(et(15))
                    }
                      , i = {
                        getState: n.getState,
                        dispatch: function() {
                            return r.apply(void 0, arguments)
                        }
                    }
                      , s = t.map(function(e) {
                        return e(i)
                    });
                    return r = es.apply(void 0, s)(n.dispatch),
                    ee(ee({}, n), {}, {
                        dispatch: r
                    })
                }
            }
        }
        function eo(e) {
            return function(t) {
                var n = t.dispatch
                  , r = t.getState;
                return function(t) {
                    return function(i) {
                        return "function" == typeof i ? i(n, r, e) : t(i)
                    }
                }
            }
        }
        var el = eo();
        el.withExtraArgument = eo,
        n(3454);
        var eu = (L = function(e, t) {
            return (L = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            L(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        )
          , ec = function(e, t) {
            var n, r, i, s, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function o(s) {
                return function(o) {
                    return function(s) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, s[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        a.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(s);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, o])
                }
            }
        }
          , eh = function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++,
            i++)
                e[i] = t[n];
            return e
        }
          , ed = Object.defineProperty
          , ef = Object.defineProperties
          , ep = Object.getOwnPropertyDescriptors
          , eg = Object.getOwnPropertySymbols
          , em = Object.prototype.hasOwnProperty
          , ey = Object.prototype.propertyIsEnumerable
          , ev = function(e, t, n) {
            return t in e ? ed(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , ew = function(e, t) {
            for (var n in t || (t = {}))
                em.call(t, n) && ev(e, n, t[n]);
            if (eg)
                for (var r = 0, i = eg(t); r < i.length; r++) {
                    var n = i[r];
                    ey.call(t, n) && ev(e, n, t[n])
                }
            return e
        }
          , eb = function(e, t) {
            return ef(e, ep(t))
        }
          , e_ = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (0 != arguments.length)
                return "object" == typeof arguments[0] ? es : es.apply(null, arguments)
        }
        ;
        "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
        var eE = function(e) {
            function t() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                var i = e.apply(this, n) || this;
                return Object.setPrototypeOf(i, t.prototype),
                i
            }
            return eu(t, e),
            Object.defineProperty(t, Symbol.species, {
                get: function() {
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.concat = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return e.prototype.concat.apply(this, t)
            }
            ,
            t.prototype.prepend = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, eh([void 0], e[0].concat(this)))) : new (t.bind.apply(t, eh([void 0], e.concat(this))))
            }
            ,
            t
        }(Array);
        function eI(e) {
            return s(e) ? J(e, function() {}) : e
        }
        function eT(e) {
            var t, n = function(e) {
                var t, n, r, i;
                return void 0 === (t = e) && (t = {}),
                r = void 0 === (n = t.thunk) || n,
                t.immutableCheck,
                t.serializableCheck,
                i = new eE,
                r && ("boolean" == typeof r ? i.push(el) : i.push(el.withExtraArgument(r.extraArgument))),
                i
            }, r = e || {}, i = r.reducer, s = void 0 === i ? void 0 : i, a = r.middleware, o = void 0 === a ? n() : a, l = r.devTools, u = void 0 === l || l, c = r.preloadedState, h = r.enhancers, d = void 0 === h ? void 0 : h;
            if ("function" == typeof s)
                t = s;
            else if (function(e) {
                if ("object" != typeof e || null === e)
                    return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t)
                    return !0;
                for (var n = t; null !== Object.getPrototypeOf(n); )
                    n = Object.getPrototypeOf(n);
                return t === n
            }(s))
                t = function(e) {
                    for (var t, n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
                        var s = n[i];
                        "function" == typeof e[s] && (r[s] = e[s])
                    }
                    var a = Object.keys(r);
                    try {
                        !function(e) {
                            Object.keys(e).forEach(function(t) {
                                var n = e[t];
                                if (void 0 === n(void 0, {
                                    type: ei.INIT
                                }))
                                    throw Error(et(12));
                                if (void 0 === n(void 0, {
                                    type: ei.PROBE_UNKNOWN_ACTION()
                                }))
                                    throw Error(et(13))
                            })
                        }(r)
                    } catch (e) {
                        t = e
                    }
                    return function(e, n) {
                        if (void 0 === e && (e = {}),
                        t)
                            throw t;
                        for (var i = !1, s = {}, o = 0; o < a.length; o++) {
                            var l = a[o]
                              , u = r[l]
                              , c = e[l]
                              , h = u(c, n);
                            if (void 0 === h)
                                throw n && n.type,
                                Error(et(14));
                            s[l] = h,
                            i = i || h !== c
                        }
                        return (i = i || a.length !== Object.keys(e).length) ? s : e
                    }
                }(s);
            else
                throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
            var f = o;
            "function" == typeof f && (f = f(n));
            var p = ea.apply(void 0, f)
              , g = es;
            u && (g = e_(ew({
                trace: !1
            }, "object" == typeof u && u)));
            var m = [p];
            return Array.isArray(d) ? m = eh([p], d) : "function" == typeof d && (m = d(m)),
            function e(t, n, r) {
                if ("function" == typeof n && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3])
                    throw Error(et(0));
                if ("function" == typeof n && void 0 === r && (r = n,
                n = void 0),
                void 0 !== r) {
                    if ("function" != typeof r)
                        throw Error(et(1));
                    return r(e)(t, n)
                }
                if ("function" != typeof t)
                    throw Error(et(2));
                var i, s = t, a = n, o = [], l = o, u = !1;
                function c() {
                    l === o && (l = o.slice())
                }
                function h() {
                    if (u)
                        throw Error(et(3));
                    return a
                }
                function d(e) {
                    if ("function" != typeof e)
                        throw Error(et(4));
                    if (u)
                        throw Error(et(5));
                    var t = !0;
                    return c(),
                    l.push(e),
                    function() {
                        if (t) {
                            if (u)
                                throw Error(et(6));
                            t = !1,
                            c();
                            var n = l.indexOf(e);
                            l.splice(n, 1),
                            o = null
                        }
                    }
                }
                function f(e) {
                    if (!function(e) {
                        if ("object" != typeof e || null === e)
                            return !1;
                        for (var t = e; null !== Object.getPrototypeOf(t); )
                            t = Object.getPrototypeOf(t);
                        return Object.getPrototypeOf(e) === t
                    }(e))
                        throw Error(et(7));
                    if (void 0 === e.type)
                        throw Error(et(8));
                    if (u)
                        throw Error(et(9));
                    try {
                        u = !0,
                        a = s(a, e)
                    } finally {
                        u = !1
                    }
                    for (var t = o = l, n = 0; n < t.length; n++)
                        (0,
                        t[n])();
                    return e
                }
                return f({
                    type: ei.INIT
                }),
                (i = {
                    dispatch: f,
                    subscribe: d,
                    getState: h,
                    replaceReducer: function(e) {
                        if ("function" != typeof e)
                            throw Error(et(10));
                        s = e,
                        f({
                            type: ei.REPLACE
                        })
                    }
                })[en] = function() {
                    var e;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" != typeof e || null === e)
                                throw Error(et(11));
                            function t() {
                                e.next && e.next(h())
                            }
                            return t(),
                            {
                                unsubscribe: d(t)
                            }
                        }
                    })[en] = function() {
                        return this
                    }
                    ,
                    e
                }
                ,
                i
            }(t, void 0 === c ? void 0 : c, g.apply(void 0, m))
        }
        function eS(e, t) {
            function n() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                if (t) {
                    var i = t.apply(void 0, n);
                    if (!i)
                        throw Error("prepareAction did not return an object");
                    return ew(ew({
                        type: e,
                        payload: i.payload
                    }, "meta"in i && {
                        meta: i.meta
                    }), "error"in i && {
                        error: i.error
                    })
                }
                return {
                    type: e,
                    payload: n[0]
                }
            }
            return n.toString = function() {
                return "" + e
            }
            ,
            n.type = e,
            n.match = function(t) {
                return t.type === e
            }
            ,
            n
        }
        function eC(e) {
            var t, n = {}, r = [], i = {
                addCase: function(e, t) {
                    var r = "string" == typeof e ? e : e.type;
                    if (r in n)
                        throw Error("addCase cannot be called with two reducers for the same action type");
                    return n[r] = t,
                    i
                },
                addMatcher: function(e, t) {
                    return r.push({
                        matcher: e,
                        reducer: t
                    }),
                    i
                },
                addDefaultCase: function(e) {
                    return t = e,
                    i
                }
            };
            return e(i),
            [n, r, t]
        }
        function eA(e) {
            var t, n = e.name;
            if (!n)
                throw Error("`name` is a required option for createSlice");
            var r = "function" == typeof e.initialState ? e.initialState : eI(e.initialState)
              , a = e.reducers || {}
              , o = Object.keys(a)
              , l = {}
              , u = {}
              , c = {};
            function h() {
                var t = "function" == typeof e.extraReducers ? eC(e.extraReducers) : [e.extraReducers]
                  , n = t[0]
                  , a = t[1]
                  , o = void 0 === a ? [] : a
                  , l = t[2]
                  , c = void 0 === l ? void 0 : l
                  , h = ew(ew({}, void 0 === n ? {} : n), u);
                return function(e, t, n, r) {
                    void 0 === n && (n = []);
                    var a, o = "function" == typeof t ? eC(t) : [t, n, void 0], l = o[0], u = o[1], c = o[2];
                    if ("function" == typeof e)
                        a = function() {
                            return eI(e())
                        }
                        ;
                    else {
                        var h = eI(e);
                        a = function() {
                            return h
                        }
                    }
                    function d(e, t) {
                        void 0 === e && (e = a());
                        var n = eh([l[t.type]], u.filter(function(e) {
                            return (0,
                            e.matcher)(t)
                        }).map(function(e) {
                            return e.reducer
                        }));
                        return 0 === n.filter(function(e) {
                            return !!e
                        }).length && (n = [c]),
                        n.reduce(function(e, n) {
                            if (n) {
                                if (i(e)) {
                                    var r = n(e, t);
                                    return void 0 === r ? e : r
                                }
                                if (s(e))
                                    return J(e, function(e) {
                                        return n(e, t)
                                    });
                                var r = n(e, t);
                                if (void 0 === r) {
                                    if (null === e)
                                        return e;
                                    throw Error("A case reducer on a non-draftable value must not return undefined")
                                }
                                return r
                            }
                            return e
                        }, e)
                    }
                    return d.getInitialState = a,
                    d
                }(r, function(e) {
                    for (var t in h)
                        e.addCase(t, h[t]);
                    for (var n = 0; n < o.length; n++) {
                        var r = o[n];
                        e.addMatcher(r.matcher, r.reducer)
                    }
                    c && e.addDefaultCase(c)
                })
            }
            return o.forEach(function(e) {
                var t, r, i = a[e], s = n + "/" + e;
                "reducer"in i ? (t = i.reducer,
                r = i.prepare) : t = i,
                l[e] = t,
                u[s] = t,
                c[e] = r ? eS(s, r) : eS(s)
            }),
            {
                name: n,
                reducer: function(e, n) {
                    return t || (t = h()),
                    t(e, n)
                },
                actions: c,
                caseReducers: l,
                getInitialState: function() {
                    return t || (t = h()),
                    t.getInitialState()
                }
            }
        }
        var ek = function(e) {
            void 0 === e && (e = 21);
            for (var t = "", n = e; n--; )
                t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64 * Math.random() | 0];
            return t
        }
          , eN = ["name", "message", "stack", "code"]
          , eO = function(e, t) {
            this.payload = e,
            this.meta = t
        }
          , ex = function(e, t) {
            this.payload = e,
            this.meta = t
        }
          , eR = function(e) {
            if ("object" == typeof e && null !== e) {
                for (var t = {}, n = 0; n < eN.length; n++) {
                    var r = eN[n];
                    "string" == typeof e[r] && (t[r] = e[r])
                }
                return t
            }
            return {
                message: String(e)
            }
        };
        function eD(e) {
            if (e.meta && e.meta.rejectedWithValue)
                throw e.payload;
            if (e.error)
                throw e.error;
            return e.payload
        }
        !function() {
            function e(e, t, n) {
                var r = eS(e + "/fulfilled", function(e, t, n, r) {
                    return {
                        payload: e,
                        meta: eb(ew({}, r || {}), {
                            arg: n,
                            requestId: t,
                            requestStatus: "fulfilled"
                        })
                    }
                })
                  , i = eS(e + "/pending", function(e, t, n) {
                    return {
                        payload: void 0,
                        meta: eb(ew({}, n || {}), {
                            arg: t,
                            requestId: e,
                            requestStatus: "pending"
                        })
                    }
                })
                  , s = eS(e + "/rejected", function(e, t, r, i, s) {
                    return {
                        payload: i,
                        error: (n && n.serializeError || eR)(e || "Rejected"),
                        meta: eb(ew({}, s || {}), {
                            arg: r,
                            requestId: t,
                            rejectedWithValue: !!i,
                            requestStatus: "rejected",
                            aborted: (null == e ? void 0 : e.name) === "AbortError",
                            condition: (null == e ? void 0 : e.name) === "ConditionError"
                        })
                    }
                })
                  , a = "undefined" != typeof AbortController ? AbortController : function() {
                    function e() {
                        this.signal = {
                            aborted: !1,
                            addEventListener: function() {},
                            dispatchEvent: function() {
                                return !1
                            },
                            onabort: function() {},
                            removeEventListener: function() {},
                            reason: void 0,
                            throwIfAborted: function() {}
                        }
                    }
                    return e.prototype.abort = function() {}
                    ,
                    e
                }();
                return Object.assign(function(e) {
                    return function(o, l, u) {
                        var c, h = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : ek(), d = new a;
                        function f(e) {
                            c = e,
                            d.abort()
                        }
                        var p = function() {
                            var a, p;
                            return a = this,
                            p = function() {
                                var a, p, g, m, y, v;
                                return ec(this, function(w) {
                                    switch (w.label) {
                                    case 0:
                                        var b;
                                        if (w.trys.push([0, 4, , 5]),
                                        !(null !== (b = m = null == (a = null == n ? void 0 : n.condition) ? void 0 : a.call(n, e, {
                                            getState: l,
                                            extra: u
                                        })) && "object" == typeof b && "function" == typeof b.then))
                                            return [3, 2];
                                        return [4, m];
                                    case 1:
                                        m = w.sent(),
                                        w.label = 2;
                                    case 2:
                                        if (!1 === m || d.signal.aborted)
                                            throw {
                                                name: "ConditionError",
                                                message: "Aborted due to condition callback returning false."
                                            };
                                        return y = new Promise(function(e, t) {
                                            return d.signal.addEventListener("abort", function() {
                                                return t({
                                                    name: "AbortError",
                                                    message: c || "Aborted"
                                                })
                                            })
                                        }
                                        ),
                                        o(i(h, e, null == (p = null == n ? void 0 : n.getPendingMeta) ? void 0 : p.call(n, {
                                            requestId: h,
                                            arg: e
                                        }, {
                                            getState: l,
                                            extra: u
                                        }))),
                                        [4, Promise.race([y, Promise.resolve(t(e, {
                                            dispatch: o,
                                            getState: l,
                                            extra: u,
                                            requestId: h,
                                            signal: d.signal,
                                            abort: f,
                                            rejectWithValue: function(e, t) {
                                                return new eO(e,t)
                                            },
                                            fulfillWithValue: function(e, t) {
                                                return new ex(e,t)
                                            }
                                        })).then(function(t) {
                                            if (t instanceof eO)
                                                throw t;
                                            return t instanceof ex ? r(t.payload, h, e, t.meta) : r(t, h, e)
                                        })])];
                                    case 3:
                                        return g = w.sent(),
                                        [3, 5];
                                    case 4:
                                        return g = (v = w.sent())instanceof eO ? s(null, h, e, v.payload, v.meta) : s(v, h, e),
                                        [3, 5];
                                    case 5:
                                        return n && !n.dispatchConditionRejection && s.match(g) && g.meta.condition || o(g),
                                        [2, g]
                                    }
                                })
                            }
                            ,
                            new Promise(function(e, t) {
                                var n = function(e) {
                                    try {
                                        i(p.next(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                  , r = function(e) {
                                    try {
                                        i(p.throw(e))
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                                  , i = function(t) {
                                    return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                                };
                                i((p = p.apply(a, null)).next())
                            }
                            )
                        }();
                        return Object.assign(p, {
                            abort: f,
                            requestId: h,
                            arg: e,
                            unwrap: function() {
                                return p.then(eD)
                            }
                        })
                    }
                }, {
                    pending: i,
                    rejected: s,
                    fulfilled: r,
                    typePrefix: e
                })
            }
            e.withTypes = function() {
                return e
            }
        }();
        var eL = "listenerMiddleware";
        eS(eL + "/add"),
        eS(eL + "/removeAll"),
        eS(eL + "/remove"),
        "function" == typeof queueMicrotask && queueMicrotask.bind("undefined" != typeof window ? window : void 0 !== n.g ? n.g : globalThis),
        "undefined" != typeof window && window.requestAnimationFrame && window.requestAnimationFrame,
        function() {
            function e(e, t) {
                var n = s[e];
                return n ? n.enumerable = t : s[e] = n = {
                    configurable: !0,
                    enumerable: t,
                    get: function() {
                        var t = this[q];
                        return W.get(t, e)
                    },
                    set: function(t) {
                        var n = this[q];
                        W.set(n, e, t)
                    }
                },
                n
            }
            function t(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var i = e[t][q];
                    if (!i.P)
                        switch (i.i) {
                        case 5:
                            r(i) && O(i);
                            break;
                        case 4:
                            n(i) && O(i)
                        }
                }
            }
            function n(e) {
                for (var t = e.t, n = e.k, r = K(n), i = r.length - 1; i >= 0; i--) {
                    var s = r[i];
                    if (s !== q) {
                        var a = t[s];
                        if (void 0 === a && !l(t, s))
                            return !0;
                        var o = n[s]
                          , u = o && o[q];
                        if (u ? u.t !== a : !c(o, a))
                            return !0
                    }
                }
                var h = !!t[q];
                return r.length !== K(t).length + (h ? 0 : 1)
            }
            function r(e) {
                var t = e.k;
                if (t.length !== e.t.length)
                    return !0;
                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                if (n && !n.get)
                    return !0;
                for (var r = 0; r < t.length; r++)
                    if (!t.hasOwnProperty(r))
                        return !0;
                return !1
            }
            var s = {};
            G.ES5 || (G.ES5 = {
                J: function(t, n) {
                    var r = Array.isArray(t)
                      , i = function(t, n) {
                        if (t) {
                            for (var r = Array(n.length), i = 0; i < n.length; i++)
                                Object.defineProperty(r, "" + i, e(i, !0));
                            return r
                        }
                        var s = $(n);
                        delete s[q];
                        for (var a = K(s), o = 0; o < a.length; o++) {
                            var l = a[o];
                            s[l] = e(l, t || !!s[l].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(n), s)
                    }(r, t)
                      , s = {
                        i: r ? 5 : 4,
                        A: n ? n.A : M,
                        P: !1,
                        I: !1,
                        R: {},
                        l: n,
                        t: t,
                        k: i,
                        o: null,
                        O: !1,
                        C: !1
                    };
                    return Object.defineProperty(i, q, {
                        value: s,
                        writable: !0
                    }),
                    i
                },
                S: function(e, n, s) {
                    s ? i(n) && n[q].A === e && t(e.p) : (e.u && function e(t) {
                        if (t && "object" == typeof t) {
                            var n = t[q];
                            if (n) {
                                var i = n.t
                                  , s = n.k
                                  , o = n.R
                                  , u = n.i;
                                if (4 === u)
                                    a(s, function(t) {
                                        t !== q && (void 0 !== i[t] || l(i, t) ? o[t] || e(s[t]) : (o[t] = !0,
                                        O(n)))
                                    }),
                                    a(i, function(e) {
                                        void 0 !== s[e] || l(s, e) || (o[e] = !1,
                                        O(n))
                                    });
                                else if (5 === u) {
                                    if (r(n) && (O(n),
                                    o.length = !0),
                                    s.length < i.length)
                                        for (var c = s.length; c < i.length; c++)
                                            o[c] = !1;
                                    else
                                        for (var h = i.length; h < s.length; h++)
                                            o[h] = !0;
                                    for (var d = Math.min(s.length, i.length), f = 0; f < d; f++)
                                        s.hasOwnProperty(f) || (o[f] = !0),
                                        void 0 === o[f] && e(s[f])
                                }
                            }
                        }
                    }(e.p[0]),
                    t(e.p))
                },
                K: function(e) {
                    return 4 === e.i ? n(e) : r(e)
                }
            })
        }()
    },
    8679: function(e, t, n) {
        "use strict";
        var r = n(1296)
          , i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , s = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , o = {};
        function l(e) {
            return r.isMemo(e) ? a : o[e.$$typeof] || i
        }
        o[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        o[r.Memo] = a;
        var u = Object.defineProperty
          , c = Object.getOwnPropertyNames
          , h = Object.getOwnPropertySymbols
          , d = Object.getOwnPropertyDescriptor
          , f = Object.getPrototypeOf
          , p = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" != typeof n) {
                if (p) {
                    var i = f(n);
                    i && i !== p && e(t, i, r)
                }
                var a = c(n);
                h && (a = a.concat(h(n)));
                for (var o = l(t), g = l(n), m = 0; m < a.length; ++m) {
                    var y = a[m];
                    if (!s[y] && !(r && r[y]) && !(g && g[y]) && !(o && o[y])) {
                        var v = d(n, y);
                        try {
                            u(t, y, v)
                        } catch (e) {}
                    }
                }
            }
            return t
        }
    },
    6103: function(e, t) {
        "use strict";
        /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = "function" == typeof Symbol && Symbol.for
          , r = n ? Symbol.for("react.element") : 60103
          , i = n ? Symbol.for("react.portal") : 60106
          , s = n ? Symbol.for("react.fragment") : 60107
          , a = n ? Symbol.for("react.strict_mode") : 60108
          , o = n ? Symbol.for("react.profiler") : 60114
          , l = n ? Symbol.for("react.provider") : 60109
          , u = n ? Symbol.for("react.context") : 60110
          , c = n ? Symbol.for("react.async_mode") : 60111
          , h = n ? Symbol.for("react.concurrent_mode") : 60111
          , d = n ? Symbol.for("react.forward_ref") : 60112
          , f = n ? Symbol.for("react.suspense") : 60113
          , p = n ? Symbol.for("react.suspense_list") : 60120
          , g = n ? Symbol.for("react.memo") : 60115
          , m = n ? Symbol.for("react.lazy") : 60116
          , y = n ? Symbol.for("react.block") : 60121
          , v = n ? Symbol.for("react.fundamental") : 60117
          , w = n ? Symbol.for("react.responder") : 60118
          , b = n ? Symbol.for("react.scope") : 60119;
        function _(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case r:
                    switch (e = e.type) {
                    case c:
                    case h:
                    case s:
                    case o:
                    case a:
                    case f:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case u:
                        case d:
                        case m:
                        case g:
                        case l:
                            return e;
                        default:
                            return t
                        }
                    }
                case i:
                    return t
                }
            }
        }
        function E(e) {
            return _(e) === h
        }
        t.AsyncMode = c,
        t.ConcurrentMode = h,
        t.ContextConsumer = u,
        t.ContextProvider = l,
        t.Element = r,
        t.ForwardRef = d,
        t.Fragment = s,
        t.Lazy = m,
        t.Memo = g,
        t.Portal = i,
        t.Profiler = o,
        t.StrictMode = a,
        t.Suspense = f,
        t.isAsyncMode = function(e) {
            return E(e) || _(e) === c
        }
        ,
        t.isConcurrentMode = E,
        t.isContextConsumer = function(e) {
            return _(e) === u
        }
        ,
        t.isContextProvider = function(e) {
            return _(e) === l
        }
        ,
        t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r
        }
        ,
        t.isForwardRef = function(e) {
            return _(e) === d
        }
        ,
        t.isFragment = function(e) {
            return _(e) === s
        }
        ,
        t.isLazy = function(e) {
            return _(e) === m
        }
        ,
        t.isMemo = function(e) {
            return _(e) === g
        }
        ,
        t.isPortal = function(e) {
            return _(e) === i
        }
        ,
        t.isProfiler = function(e) {
            return _(e) === o
        }
        ,
        t.isStrictMode = function(e) {
            return _(e) === a
        }
        ,
        t.isSuspense = function(e) {
            return _(e) === f
        }
        ,
        t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === s || e === h || e === o || e === a || e === f || e === p || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === l || e.$$typeof === u || e.$$typeof === d || e.$$typeof === v || e.$$typeof === w || e.$$typeof === b || e.$$typeof === y)
        }
        ,
        t.typeOf = _
    },
    1296: function(e, t, n) {
        "use strict";
        e.exports = n(6103)
    },
    3454: function(e, t, n) {
        "use strict";
        var r, i;
        e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
    },
    6840: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(6320)
        }
        ])
    },
    8630: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/logo.1b1c490b.png",
            height: 114,
            width: 495,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEUHLkQCKT8ELURCYnPPQU+WAAAABHRSTlMsNqHJLDUYggAAAAlwSFlzAAAfXwAAH18BrHLldwAAABhJREFUCJkFwQEBAAAIwyDm+3cWnEpMigcAjgANmOjnRAAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 2
        }
    },
    227: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = function(e, t, n, r) {
            return !1
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9749: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(6495).Z
          , i = n(2648).Z
          , s = n(1598).Z
          , a = n(7273).Z
          , o = s(n(7294))
          , l = i(n(3121))
          , u = n(2675)
          , c = n(139)
          , h = n(8730);
        n(7238);
        var d = i(n(9824));
        let f = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function p(e) {
            return void 0 !== e.default
        }
        function g(e) {
            return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function m(e, t, n, i, s, a, o) {
            if (!e || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            let l = "decode"in e ? e.decode() : Promise.resolve();
            l.catch( () => {}
            ).then( () => {
                if (e.parentNode) {
                    if ("blur" === n && a(!0),
                    null == i ? void 0 : i.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , s = !1;
                        i.current(r({}, t, {
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => s,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                s = !0,
                                t.stopPropagation()
                            }
                        }))
                    }
                    (null == s ? void 0 : s.current) && s.current(e)
                }
            }
            )
        }
        let y = o.forwardRef( (e, t) => {
            var {imgAttributes: n, heightInt: i, widthInt: s, qualityInt: l, className: u, imgStyle: c, blurStyle: h, isLazy: d, fill: f, placeholder: p, loading: g, srcString: y, config: v, unoptimized: w, loader: b, onLoadRef: _, onLoadingCompleteRef: E, setBlurComplete: I, setShowAltText: T, onLoad: S, onError: C} = e
              , A = a(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
            return g = d ? "lazy" : g,
            o.default.createElement(o.default.Fragment, null, o.default.createElement("img", Object.assign({}, A, n, {
                width: s,
                height: i,
                decoding: "async",
                "data-nimg": f ? "fill" : "1",
                className: u,
                loading: g,
                style: r({}, c, h),
                ref: o.useCallback(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (C && (e.src = e.src),
                    e.complete && m(e, y, p, _, E, I, w))
                }
                , [y, p, _, E, I, C, w, t]),
                onLoad: e => {
                    let t = e.currentTarget;
                    m(t, y, p, _, E, I, w)
                }
                ,
                onError: e => {
                    T(!0),
                    "blur" === p && I(!0),
                    C && C(e)
                }
            })))
        }
        )
          , v = o.forwardRef( (e, t) => {
            let n, i;
            var s, {src: m, sizes: v, unoptimized: w=!1, priority: b=!1, loading: _, className: E, quality: I, width: T, height: S, fill: C, style: A, onLoad: k, onLoadingComplete: N, placeholder: O="empty", blurDataURL: x, layout: R, objectFit: D, objectPosition: L, lazyBoundary: P, lazyRoot: M} = e, j = a(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
            let U = o.useContext(h.ImageConfigContext)
              , V = o.useMemo( () => {
                let e = f || U || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , n = e.deviceSizes.sort( (e, t) => e - t);
                return r({}, e, {
                    allSizes: t,
                    deviceSizes: n
                })
            }
            , [U])
              , F = j
              , z = F.loader || d.default;
            delete F.loader;
            let B = "__next_img_default"in z;
            if (B) {
                if ("custom" === V.loader)
                    throw Error('Image with src "'.concat(m, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
            } else {
                let e = z;
                z = t => {
                    let {config: n} = t
                      , r = a(t, ["config"]);
                    return e(r)
                }
            }
            if (R) {
                "fill" === R && (C = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[R];
                e && (A = r({}, A, e));
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[R];
                t && !v && (v = t)
            }
            let q = ""
              , H = g(T)
              , K = g(S);
            if ("object" == typeof (s = m) && (p(s) || void 0 !== s.src)) {
                let e = p(m) ? m.default : m;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                if (n = e.blurWidth,
                i = e.blurHeight,
                x = x || e.blurDataURL,
                q = e.src,
                !C) {
                    if (H || K) {
                        if (H && !K) {
                            let t = H / e.width;
                            K = Math.round(e.height * t)
                        } else if (!H && K) {
                            let t = K / e.height;
                            H = Math.round(e.width * t)
                        }
                    } else
                        H = e.width,
                        K = e.height
                }
            }
            let $ = !b && ("lazy" === _ || void 0 === _);
            ((m = "string" == typeof m ? m : q).startsWith("data:") || m.startsWith("blob:")) && (w = !0,
            $ = !1),
            V.unoptimized && (w = !0),
            B && m.endsWith(".svg") && !V.dangerouslyAllowSVG && (w = !0);
            let[G,W] = o.useState(!1)
              , [Q,X] = o.useState(!1)
              , J = g(I)
              , Y = Object.assign(C ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: D,
                objectPosition: L
            } : {}, Q ? {} : {
                color: "transparent"
            }, A)
              , Z = "blur" === O && x && !G ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({
                    widthInt: H,
                    heightInt: K,
                    blurWidth: n,
                    blurHeight: i,
                    blurDataURL: x
                }), '")')
            } : {}
              , ee = function(e) {
                let {config: t, src: n, unoptimized: r, width: i, quality: s, sizes: a, loader: o} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: i} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: i.filter(t => t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: r,
                            kind: "w"
                        };
                    let s = [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))];
                    return {
                        widths: s,
                        kind: "x"
                    }
                }(t, i, a)
                  , c = l.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: l.map( (e, r) => "".concat(o({
                        config: t,
                        src: n,
                        quality: s,
                        width: e
                    }), " ").concat("w" === u ? e : r + 1).concat(u)).join(", "),
                    src: o({
                        config: t,
                        src: n,
                        quality: s,
                        width: l[c]
                    })
                }
            }({
                config: V,
                src: m,
                unoptimized: w,
                width: H,
                quality: J,
                sizes: v,
                loader: z
            })
              , et = m
              , en = {
                imageSrcSet: ee.srcSet,
                imageSizes: ee.sizes,
                crossOrigin: F.crossOrigin
            }
              , er = o.useRef(k);
            o.useEffect( () => {
                er.current = k
            }
            , [k]);
            let ei = o.useRef(N);
            o.useEffect( () => {
                ei.current = N
            }
            , [N]);
            let es = r({
                isLazy: $,
                imgAttributes: ee,
                heightInt: K,
                widthInt: H,
                qualityInt: J,
                className: E,
                imgStyle: Y,
                blurStyle: Z,
                loading: _,
                config: V,
                fill: C,
                unoptimized: w,
                placeholder: O,
                loader: z,
                srcString: et,
                onLoadRef: er,
                onLoadingCompleteRef: ei,
                setBlurComplete: W,
                setShowAltText: X
            }, F);
            return o.default.createElement(o.default.Fragment, null, o.default.createElement(y, Object.assign({}, es, {
                ref: t
            })), b ? o.default.createElement(l.default, null, o.default.createElement("link", Object.assign({
                key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                rel: "preload",
                as: "image",
                href: ee.srcSet ? void 0 : ee.src
            }, en))) : null)
        }
        );
        t.default = v,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1551: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = n(2648).Z
          , i = n(7273).Z
          , s = r(n(7294))
          , a = n(1003)
          , o = n(7795)
          , l = n(4465)
          , u = n(2692)
          , c = n(8245)
          , h = n(9246)
          , d = n(227)
          , f = n(3468);
        let p = new Set;
        function g(e, t, n, r) {
            if (a.isLocalURL(t)) {
                if (!r.bypassPrefetchedCheck) {
                    let i = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                      , s = t + "%" + n + "%" + i;
                    if (p.has(s))
                        return;
                    p.add(s)
                }
                Promise.resolve(e.prefetch(t, n, r)).catch(e => {}
                )
            }
        }
        function m(e) {
            return "string" == typeof e ? e : o.formatUrl(e)
        }
        let y = s.default.forwardRef(function(e, t) {
            let n, r;
            let {href: o, as: p, children: y, prefetch: v, passHref: w, replace: b, shallow: _, scroll: E, locale: I, onClick: T, onMouseEnter: S, onTouchStart: C, legacyBehavior: A=!1} = e
              , k = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            n = y,
            A && ("string" == typeof n || "number" == typeof n) && (n = s.default.createElement("a", null, n));
            let N = !1 !== v
              , O = s.default.useContext(u.RouterContext)
              , x = s.default.useContext(c.AppRouterContext)
              , R = null != O ? O : x
              , D = !O
              , {href: L, as: P} = s.default.useMemo( () => {
                if (!O) {
                    let e = m(o);
                    return {
                        href: e,
                        as: p ? m(p) : e
                    }
                }
                let[e,t] = a.resolveHref(O, o, !0);
                return {
                    href: e,
                    as: p ? a.resolveHref(O, p) : t || e
                }
            }
            , [O, o, p])
              , M = s.default.useRef(L)
              , j = s.default.useRef(P);
            A && (r = s.default.Children.only(n));
            let U = A ? r && "object" == typeof r && r.ref : t
              , [V,F,z] = h.useIntersection({
                rootMargin: "200px"
            })
              , B = s.default.useCallback(e => {
                (j.current !== P || M.current !== L) && (z(),
                j.current = P,
                M.current = L),
                V(e),
                U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
            }
            , [P, U, L, z, V]);
            s.default.useEffect( () => {
                R && F && N && g(R, L, P, {
                    locale: I
                })
            }
            , [P, L, F, I, N, null == O ? void 0 : O.locale, R]);
            let q = {
                ref: B,
                onClick(e) {
                    A || "function" != typeof T || T(e),
                    A && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    R && !e.defaultPrevented && function(e, t, n, r, i, o, l, u, c, h) {
                        let {nodeName: d} = e.currentTarget
                          , f = "A" === d.toUpperCase();
                        if (f && (function(e) {
                            let {target: t} = e.currentTarget;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !a.isLocalURL(n)))
                            return;
                        e.preventDefault();
                        let p = () => {
                            "beforePopState"in t ? t[i ? "replace" : "push"](n, r, {
                                shallow: o,
                                locale: u,
                                scroll: l
                            }) : t[i ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !h
                            })
                        }
                        ;
                        c ? s.default.startTransition(p) : p()
                    }(e, R, L, P, b, _, E, I, D, N)
                },
                onMouseEnter(e) {
                    A || "function" != typeof S || S(e),
                    A && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    R && (N || !D) && g(R, L, P, {
                        locale: I,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                },
                onTouchStart(e) {
                    A || "function" != typeof C || C(e),
                    A && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    R && (N || !D) && g(R, L, P, {
                        locale: I,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    })
                }
            };
            if (!A || w || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== I ? I : null == O ? void 0 : O.locale
                  , t = (null == O ? void 0 : O.isLocaleDomain) && d.getDomainLocale(P, e, null == O ? void 0 : O.locales, null == O ? void 0 : O.domainLocales);
                q.href = t || f.addBasePath(l.addLocale(P, e, null == O ? void 0 : O.defaultLocale))
            }
            return A ? s.default.cloneElement(r, q) : s.default.createElement("a", Object.assign({}, k, q), n)
        });
        t.default = y,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    9246: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            let {rootRef: t, rootMargin: n, disabled: l} = e
              , u = l || !s
              , [c,h] = r.useState(!1)
              , d = r.useRef(null)
              , f = r.useCallback(e => {
                d.current = e
            }
            , []);
            r.useEffect( () => {
                if (s) {
                    if (u || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName) {
                        let r = function(e, t, n) {
                            let {id: r, observer: i, elements: s} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = o.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = a.get(r)))
                                    return t;
                                let i = new Map
                                  , s = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let t = i.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: s,
                                    elements: i
                                },
                                o.push(n),
                                a.set(n, t),
                                t
                            }(n);
                            return s.set(e, t),
                            i.observe(e),
                            function() {
                                if (s.delete(e),
                                i.unobserve(e),
                                0 === s.size) {
                                    i.disconnect(),
                                    a.delete(r);
                                    let e = o.findIndex(e => e.root === r.root && e.margin === r.margin);
                                    e > -1 && o.splice(e, 1)
                                }
                            }
                        }(e, e => e && h(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!c) {
                    let e = i.requestIdleCallback( () => h(!0));
                    return () => i.cancelIdleCallback(e)
                }
            }
            , [u, n, t, c, d.current]);
            let p = r.useCallback( () => {
                h(!1)
            }
            , []);
            return [f, c, p]
        }
        ;
        var r = n(7294)
          , i = n(4686);
        let s = "function" == typeof IntersectionObserver
          , a = new Map
          , o = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    2675: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getImageBlurSvg = function(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: i, blurDataURL: s} = e
              , a = r || t
              , o = i || n
              , l = s.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
            return a && o ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(o, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && i ? "1" : "20", "'/%3E").concat(l, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s, "'/%3E%3C/svg%3E")
        }
    },
    9824: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: i} = e;
            return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(i || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n.__next_img_default = !0,
        t.default = n
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(5893)
          , i = n(7294);
        let s = e => {
            let {audioLink: t, setDuration: n} = e
              , s = i.useRef({})
              , a = () => {
                if (!s.current)
                    return;
                let e = s.current.duration;
                n(e)
            }
            ;
            return (0,
            r.jsx)("audio", {
                src: t,
                ref: s,
                onLoadedMetadata: a
            })
        }
        ;
        t.Z = s
    },
    582: function(e, t, n) {
        "use strict";
        var r = n(5893)
          , i = n(7294);
        let s = e => {
            let {image: t, width: n, height: s, marginBottom: a} = e
              , [o,l] = i.useState(!1);
            return (0,
            r.jsxs)("figure", {
                className: "book__image--wrapper",
                style: {
                    height: s,
                    width: n,
                    minWidth: n,
                    marginBottom: a
                },
                children: [!o && (0,
                r.jsx)("div", {
                    className: "book__image--skeleton",
                    style: {
                        height: s,
                        width: n,
                        minWidth: n
                    }
                }), (0,
                r.jsx)("img", {
                    onLoad: () => l(!0),
                    className: "book__image",
                    style: o ? {
                        display: "block"
                    } : {
                        display: "none"
                    },
                    src: t,
                    alt: "book"
                })]
            })
        }
        ;
        t.Z = s
    },
    136: function(e, t, n) {
        "use strict";
        var r = n(5893);
        n(7294);
        var i = n(8391);
        let s = e => {
            let {text: t, loading: n, disabled: s, width: a} = e;
            return (0,
            r.jsx)("button", {
                className: "btn",
                disabled: s,
                style: {
                    width: a
                },
                children: n ? (0,
                r.jsx)(i.Z, {}) : (0,
                r.jsx)("span", {
                    children: t
                })
            })
        }
        ;
        t.Z = s
    },
    1089: function(e, t, n) {
        "use strict";
        var r = n(5893);
        n(7294);
        let i = e => {
            let {width: t, height: n, marginBottom: i} = e;
            return (0,
            r.jsx)("div", {
                className: "skeleton",
                style: {
                    width: t,
                    height: n,
                    marginBottom: i
                }
            })
        }
        ;
        t.Z = i
    },
    8391: function(e, t, n) {
        "use strict";
        var r = n(5893);
        n(7294);
        var i = n(3990);
        let s = () => (0,
        r.jsx)("div", {
            className: "spinner__icon--wrapper",
            children: (0,
            r.jsx)(i.IDg, {})
        });
        t.Z = s
    },
    8173: function(e, t, n) {
        "use strict";
        n.d(t, {
            DI: function() {
                return o
            },
            jW: function() {
                return a
            },
            pn: function() {
                return i
            },
            tH: function() {
                return r
            },
            zu: function() {
                return s
            }
        });
        let r = async e => {
            try {
                let t = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBook?id=".concat(e))
                  , n = await t.json();
                return [n, null]
            } catch (e) {
                return [null, e]
            }
        }
          , i = async () => {
            try {
                let e = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBook?status=selected")
                  , t = await e.json();
                return [t, null]
            } catch (e) {
                return [null, e]
            }
        }
          , s = async e => {
            try {
                let t = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=".concat(e))
                  , n = await t.json();
                return [n, null]
            } catch (e) {
                return [null, e]
            }
        }
          , a = async () => {
            try {
                let e = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended")
                  , t = await e.json();
                return [t, null]
            } catch (e) {
                return [null, e]
            }
        }
          , o = async () => {
            try {
                let e = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested")
                  , t = await e.json();
                return [t, null]
            } catch (e) {
                return [null, e]
            }
        }
    },
    1251: function(e, t, n) {
        "use strict";
        n.d(t, {
            db: function() {
                return a
            },
            Z: function() {
                return o
            }
        });
        var r = n(5816);
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        (0,
        r.KN)("firebase", "9.17.2", "app");
        var i = n(3247);
        let s = 0 === (0,
        r.C6)().length ? (0,
        r.ZF)({
            apiKey: "AIzaSyAjwR1Eawwb7iamX54vtNFO-hRxrtLJXX8",
            authDomain: "summaristt.firebaseapp.com",
            projectId: "summaristt",
            storageBucket: "summaristt.appspot.com",
            messagingSenderId: "393799367082",
            appId: "1:393799367082:web:aab50500c0f687f76d13d3"
        }) : (0,
        r.C6)()[0]
          , a = (0,
        i.ad)(s);
        var o = s
    },
    194: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return i
            },
            v: function() {
                return r
            }
        });
        let r = e => {
            if (!e || isNaN(e))
                return "00:00";
            let t = Math.floor(e / 60)
              , n = Math.floor(e % 60);
            return "".concat(t < 10 ? "0".concat(t) : "".concat(t), ":").concat(n < 10 ? "0".concat(n) : "".concat(n))
        }
          , i = e => {
            if (!e || isNaN(e))
                return "0 mins 0 secs";
            let t = Math.floor(e / 60)
              , n = Math.floor(e % 60)
              , r = "".concat(t, " ").concat(1 === t ? "min" : "mins", " ").concat(n, " ").concat(1 === n ? "sec" : "secs");
            return r
        }
    },
    6320: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return ei
            }
        });
        var r = n(5893);
        n(7599);
        var i = n(9473)
          , s = n(6741);
        let a = (0,
        s.oM)({
            name: "user",
            initialState: null,
            reducers: {
                setUser: (e, t) => {
                    if (!t.payload)
                        return null;
                    let {uid: n, email: r, subscriptionPlan: i} = t.payload;
                    return {
                        uid: n,
                        email: r,
                        subscriptionPlan: i
                    }
                }
            }
        })
          , {setUser: o} = a.actions;
        var l = a.reducer;
        let u = (0,
        s.oM)({
            name: "initialAuth",
            initialState: {
                initialAuthCheckLoading: !0
            },
            reducers: {
                setInitialAuthCheckLoading: (e, t) => {
                    let {initialAuthCheckLoading: n} = t.payload;
                    e.initialAuthCheckLoading = n
                }
            }
        })
          , {setInitialAuthCheckLoading: c} = u.actions;
        var h = u.reducer
          , d = n(3385)
          , f = n(9426);
        let p = (0,
        s.xC)({
            reducer: {
                user: l,
                initialAuthCheckLoading: h,
                notification: d.ZP,
                ui: f.ZP
            }
        });
        var g = n(7294)
          , m = n(1251)
          , y = n(6502)
          , v = n(3247);
        let w = (0,
        y.v0)(m.Z);
        async function b(e, t) {
            try {
                let {user: n} = await (0,
                y.Xb)(w, e, t);
                return await (0,
                v.pl)((0,
                v.JU)(m.db, "users", n.uid), {
                    uid: n.uid,
                    email: n.email
                }),
                null
            } catch (e) {
                return e
            }
        }
        async function _(e, t) {
            try {
                return await (0,
                y.e5)(w, e, t),
                null
            } catch (e) {
                return e
            }
        }
        async function E(e) {
            try {
                return await (0,
                y.LS)(w, e),
                null
            } catch (e) {
                return e
            }
        }
        async function I() {
            let e = new y.hJ;
            try {
                let {user: t} = await (0,
                y.rh)(w, e);
                return await (0,
                v.pl)((0,
                v.JU)(m.db, "users", t.uid), {
                    uid: t.uid,
                    email: t.email
                }),
                null
            } catch (e) {
                return e
            }
        }
        async function T(e) {
            try {
                return await (0,
                y.w7)(w),
                e(o(null)),
                null
            } catch (e) {
                return e
            }
        }
        let S = () => {
            let e = (0,
            i.I0)();
            return g.useEffect( () => {
                let t = (0,
                y.Aj)(w, async t => {
                    if (t) {
                        await t.getIdToken(!0);
                        let n = await (0,
                        y.ag)(t)
                          , r = {
                            uid: t.uid,
                            email: t.email,
                            subscriptionPlan: n.claims.stripeRole
                        };
                        e(o(r)),
                        e(c({
                            initialAuthCheckLoading: !1
                        }))
                    } else
                        e(c({
                            initialAuthCheckLoading: !1
                        }))
                }
                );
                return () => {
                    t()
                }
            }
            , [e]),
            (0,
            r.jsx)(r.Fragment, {})
        }
        ;
        var C = n(8630)
          , A = n(5675)
          , k = n.n(A)
          , N = n(1664)
          , O = n.n(N)
          , x = n(8193)
          , R = n(3750)
          , D = n(9352)
          , L = n(8357);
        function P(e) {
            return (0,
            L.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 15 15",
                    fill: "none"
                },
                child: [{
                    tag: "path",
                    attr: {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
                        fill: "currentColor"
                    }
                }]
            })(e)
        }
        function M(e) {
            return (0,
            L.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 15 15",
                    fill: "none"
                },
                child: [{
                    tag: "path",
                    attr: {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
                        fill: "currentColor"
                    }
                }]
            })(e)
        }
        function j(e) {
            return (0,
            L.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "circle",
                    attr: {
                        cx: "12",
                        cy: "12",
                        r: "10"
                    }
                }, {
                    tag: "path",
                    attr: {
                        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                    }
                }, {
                    tag: "line",
                    attr: {
                        x1: "12",
                        y1: "17",
                        x2: "12.01",
                        y2: "17"
                    }
                }]
            })(e)
        }
        function U(e) {
            return (0,
            L.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    }
                }, {
                    tag: "polyline",
                    attr: {
                        points: "16 17 21 12 16 7"
                    }
                }, {
                    tag: "line",
                    attr: {
                        x1: "21",
                        y1: "12",
                        x2: "9",
                        y2: "12"
                    }
                }]
            })(e)
        }
        var V = n(1163);
        let F = () => {
            let[e,t] = g.useState("")
              , n = t => "sidebar__link--line ".concat(e === t ? "active--tab" : "")
              , s = (0,
            i.I0)()
              , a = (0,
            V.useRouter)()
              , o = async () => {
                try {
                    await T(s),
                    s((0,
                    d.sc)({
                        notification: !0,
                        message: "You have logged out succussfully",
                        duration: 1e4,
                        messageStatus: "success"
                    }))
                } catch (e) {
                    console.log(e)
                }
            }
              , l = () => {
                s((0,
                f.N_)({
                    showAuthModal: !0
                }))
            }
              , u = e => {
                s((0,
                f.oL)({
                    fontSize: e
                }))
            }
              , c = (0,
            i.v9)(e => e.user)
              , h = (0,
            i.v9)(e => e.ui)
              , p = "player" === e
              , m = () => {
                s((0,
                f.SN)({
                    sidebarOpened: !1
                }))
            }
            ;
            g.useEffect( () => (t(window.location.pathname.split("/")[1]),
            () => {
                t("")
            }
            ), [a.asPath]);
            let y = e => {
                let t = "sidebar__link--text sidebar__font--size-icon";
                return h.fontSize === e && (t += " sidebar__font--size-icon--active"),
                t
            }
              , v = () => window.innerWidth < 768 ? "calc(100vh - 240px)" : "calc(100vh - 140px)";
            return g.useEffect( () => {
                let e = () => {
                    v()
                }
                ;
                return window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e)
                }
            }
            , []),
            (0,
            r.jsxs)("div", {
                className: "sidebar ".concat(h.sidebarOpened ? "sidebar--opened" : "sidebar--closed"),
                children: [(0,
                r.jsx)("div", {
                    className: "sidebar__logo",
                    children: (0,
                    r.jsx)(k(), {
                        src: C.Z,
                        loading: "lazy",
                        alt: ""
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "sidebar__wrapper",
                    style: p ? {
                        height: v()
                    } : {},
                    children: [(0,
                    r.jsxs)("div", {
                        className: "sidebar__top",
                        children: [(0,
                        r.jsxs)(O(), {
                            href: "/for-you",
                            className: "sidebar__link--wrapper",
                            onClick: m,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("for-you")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(x.iqr, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "For you"
                            })]
                        }), (0,
                        r.jsxs)(O(), {
                            href: "/library",
                            className: "sidebar__link--wrapper",
                            onClick: m,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("library")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(R.flH, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "My Library"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper sidebar__link--not-allowed",
                            children: [(0,
                            r.jsx)("div", {
                                className: n("highlights")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(D.cWi, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Highlights"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper sidebar__link--not-allowed",
                            children: [(0,
                            r.jsx)("div", {
                                className: n("search")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(x.RB5, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Search"
                            })]
                        }), p && (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper sidebar__font--size-wrapper",
                            children: [(0,
                            r.jsx)("div", {
                                className: y(16),
                                onClick: () => u(16),
                                children: (0,
                                r.jsx)(D.hAl, {
                                    className: "sidebar__font--size-icon-small"
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: y(18),
                                onClick: () => u(18),
                                children: (0,
                                r.jsx)(D.hAl, {
                                    className: "sidebar__font--size-icon-medium"
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: y(22),
                                onClick: () => u(22),
                                children: (0,
                                r.jsx)(D.hAl, {
                                    className: "sidebar__font--size-icon-large"
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: y(26),
                                onClick: () => u(26),
                                children: (0,
                                r.jsx)(D.hAl, {
                                    className: "sidebar__font--size-icon-xlarge"
                                })
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "sidebar__bottom",
                        children: [(0,
                        r.jsxs)(O(), {
                            href: "/settings",
                            className: "sidebar__link--wrapper",
                            onClick: m,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("settings")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(P, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Settings"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper sidebar__link--not-allowed",
                            onClick: m,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("help")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(j, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Help & Support"
                            })]
                        }), c && c.uid ? (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper",
                            onClick: o,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(U, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Logout"
                            })]
                        }) : (0,
                        r.jsxs)("div", {
                            className: "sidebar__link--wrapper",
                            onClick: l,
                            children: [(0,
                            r.jsx)("div", {
                                className: n("")
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__icon--wrapper",
                                children: (0,
                                r.jsx)(U, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "sidebar__link--text",
                                children: "Login"
                            })]
                        })]
                    })]
                })]
            })
        }
          , z = () => {
            let e = (0,
            i.I0)()
              , {notification: t, message: n, duration: s, messageStatus: a} = (0,
            i.v9)(e => e.notification);
            return g.useEffect( () => {
                s && setTimeout( () => {
                    e((0,
                    d.sc)({
                        notification: !1,
                        message: "",
                        duration: 0,
                        messageStatus: ""
                    }))
                }
                , s)
            }
            , [t]),
            (0,
            r.jsx)(r.Fragment, {
                children: !1
            })
        }
        ;
        var B = n(136)
          , q = {
            src: "/_next/static/media/google.864494ce.png",
            height: 100,
            width: 100,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXE0qFJChPRBhfRBjr3qQjU1uDbrQjUyp1LpOTnnPDpChPP9vgM/jNEzqkhBhfJBhfQzp1NBh+jqQzWcsirqQzYpplj/twbcuRH1khVBhPY2oHM0qFJEqUzsVy1TnpKYAAAAGnRSTlMAzrXSGa4O99onM8TrxoBqgolM5Ju3WLK9rjCiuJUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZHcEFEoAwEACxrV4NikuR/z+TGRKITsRFiCJunROcb+JXdmw2ZqAcWJ2bZnk2mFrFhjuEqwP8qFTv+QBRYwJiiAhjDgAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
          , H = n(9583);
        function K(e) {
            return (0,
            L.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24",
                    fill: "none"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
                        fill: "currentColor"
                    }
                }]
            })(e)
        }
        var $ = n(8391);
        let G = () => {
            let[e,t] = g.useState("login")
              , [n,s] = g.useState(!1)
              , [a,o] = g.useState(!1)
              , [l,u] = g.useState(!1)
              , [c,h] = g.useState(!1)
              , [d,p] = g.useState(!1)
              , [m,y] = g.useState(null)
              , v = (0,
            i.I0)()
              , w = g.useRef(null)
              , T = g.useRef(null)
              , S = g.useRef(null)
              , C = e => {
                "auth__wrapper" === e && v((0,
                f.N_)({
                    showAuthModal: !1
                }))
            }
              , A = async e => {
                if (e.preventDefault(),
                L() || (s(!0),
                !T.current || !S.current))
                    return;
                let t = T.current.value
                  , n = S.current.value;
                y(null);
                let r = await _(t, n);
                if (r) {
                    y(r.message),
                    s(!1);
                    return
                }
                s(!1),
                v((0,
                f.N_)({
                    showAuthModal: !1
                }))
            }
              , N = async (e, t) => {
                if (L())
                    return;
                u(!0);
                let n = await _(e, t);
                if (n) {
                    y(n.message),
                    u(!1);
                    return
                }
                u(!1),
                v((0,
                f.N_)({
                    showAuthModal: !1
                }))
            }
              , O = async e => {
                if (e.preventDefault(),
                L() || (s(!0),
                !T.current || !S.current))
                    return;
                let t = T.current.value
                  , n = S.current.value;
                y(null);
                let r = await b(t, n);
                if (r) {
                    y(r.message),
                    s(!1);
                    return
                }
                v((0,
                f.N_)({
                    showAuthModal: !1
                })),
                s(!1)
            }
              , x = async () => {
                if (L())
                    return;
                o(!0),
                y(null);
                let e = await I();
                if (e) {
                    y(e.message),
                    o(!1);
                    return
                }
                v((0,
                f.N_)({
                    showAuthModal: !1
                })),
                o(!1)
            }
              , R = async e => {
                if (e.preventDefault(),
                L() || !T.current)
                    return;
                let t = T.current.value;
                h(!0),
                y(null);
                let n = await E(t);
                if (n) {
                    y(n.message),
                    h(!1);
                    return
                }
                p(!0),
                h(!1)
            }
              , D = e => {
                P(),
                s(!1),
                o(!1),
                u(!1),
                h(!1),
                y(null),
                p(!1),
                t(e)
            }
              , L = () => n || a || l
              , P = () => {
                w.current && w.current.reset()
            }
            ;
            return (0,
            r.jsx)("div", {
                className: "auth__wrapper",
                onClick: e => C(e.target.className),
                children: (0,
                r.jsxs)("div", {
                    className: "auth",
                    children: [(0,
                    r.jsx)(r.Fragment, {
                        children: "login" === e ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)("div", {
                                className: "auth__content",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "auth__title",
                                    children: "Log in to Summarist"
                                }), m && (0,
                                r.jsx)("div", {
                                    className: "auth__error",
                                    children: m
                                }), (0,
                                r.jsxs)("button", {
                                    className: "btn guest__btn--wrapper",
                                    onClick: () => N("hanna@gmail.com", "hanna123!"),
                                    children: [(0,
                                    r.jsx)("figure", {
                                        className: "google__icon--mask guest__icon--mask",
                                        children: (0,
                                        r.jsx)(H.Xws, {})
                                    }), l ? (0,
                                    r.jsx)($.Z, {}) : (0,
                                    r.jsx)("div", {
                                        children: "Login as a Guest"
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "auth__separator",
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "auth__separator--text",
                                        children: "or"
                                    })
                                }), (0,
                                r.jsxs)("button", {
                                    className: "btn google__btn--wrapper",
                                    onClick: x,
                                    children: [(0,
                                    r.jsx)("figure", {
                                        className: "google__icon--mask",
                                        children: (0,
                                        r.jsx)(k(), {
                                            src: q,
                                            alt: "google"
                                        })
                                    }), a ? (0,
                                    r.jsx)($.Z, {}) : (0,
                                    r.jsx)("div", {
                                        children: "Login with Google"
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "auth__separator",
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "auth__separator--text",
                                        children: "or"
                                    })
                                }), (0,
                                r.jsxs)("form", {
                                    className: "auth__main--form",
                                    onSubmit: e => A(e),
                                    ref: w,
                                    children: [(0,
                                    r.jsx)("input", {
                                        className: "auth__main--input",
                                        type: "text",
                                        placeholder: "Email Address",
                                        ref: T
                                    }), (0,
                                    r.jsx)("input", {
                                        className: "auth__main--input",
                                        type: "password",
                                        placeholder: "Password",
                                        ref: S
                                    }), (0,
                                    r.jsx)(B.Z, {
                                        text: "Login",
                                        loading: n,
                                        disabled: n
                                    })]
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "auth__forgot--password",
                                onClick: () => D("forgot"),
                                children: "Forgot your password?"
                            }), (0,
                            r.jsx)("button", {
                                className: "auth__switch--btn",
                                onClick: () => D("register"),
                                children: "Don't have an account?"
                            })]
                        }) : "register" === e ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)("div", {
                                className: "auth__content",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "auth__title",
                                    children: "Sign up to Summarist"
                                }), (0,
                                r.jsxs)("button", {
                                    className: "btn google__btn--wrapper",
                                    onClick: x,
                                    children: [(0,
                                    r.jsx)("figure", {
                                        className: "google__icon--mask",
                                        children: (0,
                                        r.jsx)(k(), {
                                            src: q,
                                            alt: "google"
                                        })
                                    }), a ? (0,
                                    r.jsx)($.Z, {}) : (0,
                                    r.jsx)("div", {
                                        children: "Sign up with Google"
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "auth__separator",
                                    children: (0,
                                    r.jsx)("span", {
                                        className: "auth__separator--text",
                                        children: "or"
                                    })
                                }), (0,
                                r.jsxs)("form", {
                                    className: "auth__main--form",
                                    onSubmit: e => O(e),
                                    ref: w,
                                    children: [m && (0,
                                    r.jsx)("div", {
                                        className: "auth__error",
                                        children: m
                                    }), (0,
                                    r.jsx)("input", {
                                        className: "auth__main--input",
                                        type: "text",
                                        placeholder: "Email Address",
                                        ref: T
                                    }), (0,
                                    r.jsx)("input", {
                                        className: "auth__main--input",
                                        type: "password",
                                        placeholder: "Password",
                                        ref: S
                                    }), (0,
                                    r.jsx)(B.Z, {
                                        text: "Sign up",
                                        loading: n,
                                        disabled: n
                                    })]
                                })]
                            }), (0,
                            r.jsx)("button", {
                                className: "auth__switch--btn",
                                onClick: () => D("login"),
                                children: "Already have an account?"
                            })]
                        }) : "forgot" === e ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsxs)("div", {
                                className: "auth__content",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "auth__title",
                                    children: "Reset your password"
                                }), d && (0,
                                r.jsx)("div", {
                                    className: "auth__success",
                                    children: "Your reset email has been sent!"
                                }), (0,
                                r.jsxs)("form", {
                                    className: "auth__main--form",
                                    onSubmit: e => R(e),
                                    ref: w,
                                    children: [m && (0,
                                    r.jsx)("div", {
                                        className: "auth__error",
                                        children: m
                                    }), (0,
                                    r.jsx)("input", {
                                        className: "auth__main--input",
                                        type: "text",
                                        placeholder: "Email address",
                                        ref: T
                                    }), (0,
                                    r.jsx)(B.Z, {
                                        text: "Send reset password link",
                                        loading: c,
                                        disabled: c
                                    })]
                                })]
                            }), (0,
                            r.jsx)("button", {
                                className: "auth__switch--btn",
                                onClick: () => D("login"),
                                children: "Go to login"
                            })]
                        }) : void 0
                    }), (0,
                    r.jsx)("div", {
                        className: "auth__close--btn",
                        onClick: () => v((0,
                        f.N_)({
                            showAuthModal: !1
                        })),
                        children: (0,
                        r.jsx)(K, {})
                    })]
                })
            })
        }
          , W = () => {
            let e = (0,
            i.v9)(e => e.ui);
            return (0,
            r.jsx)(r.Fragment, {
                children: e.showAuthModal && (0,
                r.jsx)(G, {})
            })
        }
          , Q = () => {
            let e = (0,
            i.I0)()
              , t = (0,
            i.v9)(e => e.ui)
              , n = () => {
                e((0,
                f.SN)({
                    sidebarOpened: !1
                }))
            }
            ;
            return (0,
            r.jsx)("div", {
                className: "sidebar__overlay ".concat(t.sidebarOpened ? "" : "sidebar__overlay--hidden"),
                onClick: n
            })
        }
        ;
        var X = n(8173)
          , J = n(1089)
          , Y = n(194)
          , Z = n(7516)
          , ee = n(143)
          , et = n(582);
        let en = e => {
            let {pathLink: t, image: n, title: i, author: s, audioLink: a} = e
              , [o,l] = g.useState(0);
            return (0,
            r.jsxs)(O(), {
                className: "search__book--link",
                href: t,
                children: [(0,
                r.jsx)(ee.Z, {
                    audioLink: a,
                    setDuration: l
                }), (0,
                r.jsx)(et.Z, {
                    image: n,
                    width: "80px",
                    height: "80px"
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("div", {
                        className: "search__book--title",
                        children: i
                    }), (0,
                    r.jsx)("div", {
                        className: "search__book--author",
                        children: s
                    }), (0,
                    r.jsx)("div", {
                        className: "search__book--duration",
                        children: (0,
                        r.jsxs)("div", {
                            className: "recommended__book--details",
                            children: [(0,
                            r.jsx)("div", {
                                className: "recommended__book--details-icon",
                                children: (0,
                                r.jsx)(Z.YFw, {})
                            }), (0,
                            r.jsx)("div", {
                                className: "recommended__book--details-text",
                                children: (0,
                                Y.v)(o)
                            })]
                        })
                    })]
                })]
            })
        }
          , er = () => {
            let[e,t] = g.useState("")
              , [n,s] = g.useState(!1)
              , [a,o] = g.useState([])
              , l = (0,
            i.I0)()
              , u = (0,
            i.v9)(e => e.ui)
              , c = () => {
                l((0,
                f.SN)({
                    sidebarOpened: !u.sidebarOpened
                }))
            }
              , h = () => {
                t("")
            }
              , d = (0,
            V.useRouter)();
            return g.useEffect( () => {
                s(!0);
                let t = setTimeout(async () => {
                    if (!e) {
                        s(!1);
                        return
                    }
                    let[t,n] = await (0,
                    X.zu)(e);
                    if (n) {
                        console.log(n);
                        return
                    }
                    o(t),
                    s(!1)
                }
                , 300);
                return () => clearTimeout(t)
            }
            , [e]),
            g.useEffect( () => () => {
                s(!1),
                t(""),
                o([])
            }
            , [d.asPath]),
            (0,
            r.jsx)("div", {
                className: "search__background",
                children: (0,
                r.jsxs)("div", {
                    className: "search__wrapper",
                    children: [(0,
                    r.jsx)("figure", {
                        children: (0,
                        r.jsx)("img", {
                            src: "logo",
                            alt: ""
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "search__content",
                        children: [(0,
                        r.jsx)("div", {
                            className: "search",
                            children: (0,
                            r.jsxs)("div", {
                                className: "search__input--wrapper",
                                children: [(0,
                                r.jsx)("input", {
                                    className: "search__input",
                                    placeholder: "Search for books",
                                    type: "text",
                                    value: e,
                                    onChange: e => t(e.target.value)
                                }), (0,
                                r.jsx)("div", {
                                    className: "search__icon",
                                    children: e ? (0,
                                    r.jsx)(K, {
                                        className: "search__delete--icon",
                                        onClick: h
                                    }) : (0,
                                    r.jsx)(x.RB5, {})
                                })]
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "sidebar__toggle--btn",
                            onClick: c,
                            children: (0,
                            r.jsx)(M, {})
                        })]
                    }), e ? n ? (0,
                    r.jsxs)("div", {
                        className: "search__books--wrapper",
                        children: [[, , , , ].fill(0).map( (e, t) => (0,
                        r.jsx)(J.Z, {
                            width: "100%",
                            height: "120px",
                            marginBottom: "8px"
                        }, t)), (0,
                        r.jsx)(J.Z, {
                            width: "100%",
                            height: "120px"
                        })]
                    }) : a.length || !e || n ? (0,
                    r.jsx)("div", {
                        className: "search__books--wrapper",
                        children: a.map(e => (0,
                        r.jsx)(en, {
                            pathLink: "/book/".concat(e.id),
                            image: e.imageLink,
                            title: e.title,
                            author: e.author,
                            audioLink: e.audioLink
                        }, e.id))
                    }) : (0,
                    r.jsx)("div", {
                        className: "search__books--wrapper",
                        children: "No books found"
                    }) : (0,
                    r.jsx)(r.Fragment, {})]
                })
            })
        }
        ;
        function ei(e) {
            let {Component: t, pageProps: n} = e
              , [s,a] = g.useState("")
              , o = (0,
            V.useRouter)();
            return g.useEffect( () => {
                a(window.location.pathname)
            }
            , [o.asPath]),
            (0,
            r.jsxs)(i.zt, {
                store: p,
                children: [(0,
                r.jsx)(S, {}), (0,
                r.jsxs)("div", {
                    className: "/" !== s && "/choose-plan" !== s ? "wrapper" : "wrapper wrapper__full",
                    children: ["/" !== s && "/choose-plan" !== s && (0,
                    r.jsx)(er, {}), (0,
                    r.jsx)(Q, {}), "/" !== s && "/choose-plan" !== s && (0,
                    r.jsx)(F, {}), (0,
                    r.jsx)(z, {}), (0,
                    r.jsx)(W, {}), (0,
                    r.jsx)(t, {
                        ...n
                    })]
                })]
            })
        }
    },
    3385: function(e, t, n) {
        "use strict";
        n.d(t, {
            sc: function() {
                return s
            }
        });
        var r = n(6741);
        let i = (0,
        r.oM)({
            name: "notification",
            initialState: {
                notification: !1,
                message: "",
                duration: 0
            },
            reducers: {
                setNotification: (e, t) => {
                    let {notification: n, message: r, duration: i, messageStatus: s} = t.payload;
                    e.notification = n,
                    e.message = r,
                    e.duration = i,
                    e.messageStatus = s
                }
            }
        })
          , {setNotification: s} = i.actions;
        t.ZP = i.reducer
    },
    9426: function(e, t, n) {
        "use strict";
        n.d(t, {
            N_: function() {
                return s
            },
            SN: function() {
                return o
            },
            oL: function() {
                return a
            }
        });
        var r = n(6741);
        let i = (0,
        r.oM)({
            name: "ui",
            initialState: {
                showAuthModal: !1,
                fontSize: 16,
                sidebarOpened: !1
            },
            reducers: {
                setShowAuthModal: (e, t) => {
                    let {showAuthModal: n} = t.payload;
                    e.showAuthModal = n
                }
                ,
                setFontSize: (e, t) => {
                    let {fontSize: n} = t.payload;
                    e.fontSize = n
                }
                ,
                setSidebarOpened: (e, t) => {
                    let {sidebarOpened: n} = t.payload;
                    e.sidebarOpened = n
                }
            }
        })
          , {setShowAuthModal: s, setFontSize: a, setSidebarOpened: o} = i.actions;
        t.ZP = i.reducer
    },
    7599: function() {},
    7663: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, n, r, i = e.exports = {};
                    function s() {
                        throw Error("setTimeout has not been defined")
                    }
                    function a() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function o(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === s || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (n) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : s
                        } catch (e) {
                            t = s
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : a
                        } catch (e) {
                            n = a
                        }
                    }();
                    var l = []
                      , u = !1
                      , c = -1;
                    function h() {
                        u && r && (u = !1,
                        r.length ? l = r.concat(l) : c = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var e = o(h);
                            u = !0;
                            for (var t = l.length; t; ) {
                                for (r = l,
                                l = []; ++c < t; )
                                    r && r[c].run();
                                c = -1,
                                t = l.length
                            }
                            r = null,
                            u = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === a || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function f(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    i.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        l.push(new f(e,t)),
                        1 !== l.length || u || o(d)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = p,
                    i.addListener = p,
                    i.once = p,
                    i.off = p,
                    i.removeListener = p,
                    i.removeAllListeners = p,
                    i.emit = p,
                    i.prependListener = p,
                    i.prependOnceListener = p,
                    i.listeners = function(e) {
                        return []
                    }
                    ,
                    i.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(e) {
                var i = n[e];
                if (void 0 !== i)
                    return i.exports;
                var s = n[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e](s, s.exports, r),
                    a = !1
                } finally {
                    a && delete n[e]
                }
                return s.exports
            }
            r.ab = "//";
            var i = r(229);
            e.exports = i
        }()
    },
    5675: function(e, t, n) {
        e.exports = n(9749)
    },
    1664: function(e, t, n) {
        e.exports = n(1551)
    },
    1163: function(e, t, n) {
        e.exports = n(880)
    },
    8193: function(e, t, n) {
        "use strict";
        n.d(t, {
            CSE: function() {
                return l
            },
            GYJ: function() {
                return s
            },
            RB5: function() {
                return f
            },
            UUX: function() {
                return u
            },
            aRZ: function() {
                return i
            },
            cSu: function() {
                return o
            },
            cjn: function() {
                return c
            },
            iqr: function() {
                return h
            },
            mny: function() {
                return a
            },
            y5j: function() {
                return p
            },
            zXS: function() {
                return d
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"
                    }
                }]
            })(e)
        }
        function s(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z"
                    }
                }]
            })(e)
        }
        function a(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                    }
                }]
            })(e)
        }
        function o(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z"
                    }
                }]
            })(e)
        }
        function l(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"
                    }
                }]
            })(e)
        }
        function u(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"
                    }
                }]
            })(e)
        }
        function c(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                    }
                }, {
                    tag: "path",
                    attr: {
                        d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                    }
                }]
            })(e)
        }
        function h(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                    }
                }]
            })(e)
        }
        function d(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"
                    }
                }]
            })(e)
        }
        function f(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                    }
                }]
            })(e)
        }
        function p(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 1024 1024"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                    }
                }]
            })(e)
        }
    },
    7516: function(e, t, n) {
        "use strict";
        n.d(t, {
            Bzj: function() {
                return i
            },
            YFw: function() {
                return s
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"
                    }
                }]
            })(e)
        }
        function s(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                    }
                }, {
                    tag: "path",
                    attr: {
                        d: "M13 7h-2v6h6v-2h-4z"
                    }
                }]
            })(e)
        }
    },
    3750: function(e, t, n) {
        "use strict";
        n.d(t, {
            IAR: function() {
                return o
            },
            fXH: function() {
                return u
            },
            flH: function() {
                return a
            },
            kRm: function() {
                return l
            },
            mz0: function() {
                return i
            },
            vw0: function() {
                return s
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                    }
                }]
            })(e)
        }
        function s(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
                    }
                }]
            })(e)
        }
        function a(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                    }
                }]
            })(e)
        }
        function o(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        fillRule: "evenodd",
                        d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    }
                }]
            })(e)
        }
        function l(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    }
                }]
            })(e)
        }
        function u(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    fill: "currentColor",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                    }
                }]
            })(e)
        }
    },
    9583: function(e, t, n) {
        "use strict";
        n.d(t, {
            Cq: function() {
                return i
            },
            Xws: function() {
                return s
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 640 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                    }
                }]
            })(e)
        }
        function s(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    }
                }]
            })(e)
        }
    },
    3990: function(e, t, n) {
        "use strict";
        n.d(t, {
            IDg: function() {
                return i
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    version: "1.1",
                    viewBox: "0 0 16 16"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z"
                    }
                }]
            })(e)
        }
    },
    8357: function(e, t, n) {
        "use strict";
        n.d(t, {
            w_: function() {
                return l
            }
        });
        var r = n(7294)
          , i = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , s = r.createContext && r.createContext(i)
          , a = function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        }
          , o = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n
        };
        function l(e) {
            return function(t) {
                return r.createElement(u, a({
                    attr: a({}, e.attr)
                }, t), function e(t) {
                    return t && t.map(function(t, n) {
                        return r.createElement(t.tag, a({
                            key: n
                        }, t.attr), e(t.child))
                    })
                }(e.child))
            }
        }
        function u(e) {
            var t = function(t) {
                var n, i = e.attr, s = e.size, l = e.title, u = o(e, ["attr", "size", "title"]), c = s || t.size || "1em";
                return t.className && (n = t.className),
                e.className && (n = (n ? n + " " : "") + e.className),
                r.createElement("svg", a({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, i, u, {
                    className: n,
                    style: a(a({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: c,
                    width: c,
                    xmlns: "http://www.w3.org/2000/svg"
                }), l && r.createElement("title", null, l), e.children)
            };
            return void 0 !== s ? r.createElement(s.Consumer, null, function(e) {
                return t(e)
            }) : t(i)
        }
    },
    9352: function(e, t, n) {
        "use strict";
        n.d(t, {
            J9I: function() {
                return a
            },
            Rix: function() {
                return o
            },
            cWi: function() {
                return i
            },
            hAl: function() {
                return s
            }
        });
        var r = n(8357);
        function i(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "g",
                    attr: {},
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M17.849 11.808l-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm-2.121-2.121l-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"
                        }
                    }]
                }]
            })(e)
        }
        function s(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "g",
                    attr: {},
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0h24v24H0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                        }
                    }]
                }]
            })(e)
        }
        function a(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "g",
                    attr: {},
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0H24V24H0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M21 3v2c0 9.627-5.373 14-12 14H5.243C5.08 19.912 5 20.907 5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0zm-8 2c-4.418 0-8 3.582-8 8 0 .362.003.711.01 1.046 1.254-1.978 3.091-3.541 5.494-4.914l.992 1.736C8.641 12.5 6.747 14.354 5.776 17H9c6.015 0 9.871-3.973 9.997-11.612-1.372.133-2.647.048-4.22-.188C13.627 5.027 13.401 5 13 5z"
                        }
                    }]
                }]
            })(e)
        }
        function o(e) {
            return (0,
            r.w_)({
                tag: "svg",
                attr: {
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "g",
                    attr: {},
                    child: [{
                        tag: "path",
                        attr: {
                            fill: "none",
                            d: "M0 0H24V24H0z"
                        }
                    }, {
                        tag: "path",
                        attr: {
                            d: "M21 3v2c0 3.866-3.134 7-7 7h-1v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-3c0-3.866 3.134-7 7-7h3zM5.5 2c2.529 0 4.765 1.251 6.124 3.169C10.604 6.51 10 8.185 10 10v1h-.5C5.358 11 2 7.642 2 3.5V2h3.5z"
                        }
                    }]
                }]
            })(e)
        }
    },
    9921: function(e, t) {
        "use strict";
        Symbol.for("react.element"),
        Symbol.for("react.portal"),
        Symbol.for("react.fragment"),
        Symbol.for("react.strict_mode"),
        Symbol.for("react.profiler"),
        Symbol.for("react.provider"),
        Symbol.for("react.context"),
        Symbol.for("react.server_context"),
        Symbol.for("react.forward_ref"),
        Symbol.for("react.suspense"),
        Symbol.for("react.suspense_list"),
        Symbol.for("react.memo"),
        Symbol.for("react.lazy"),
        Symbol.for("react.offscreen"),
        Symbol.for("react.module.reference")
    },
    9864: function(e, t, n) {
        "use strict";
        n(9921)
    },
    9473: function(e, t, n) {
        "use strict";
        n.d(t, {
            zt: function() {
                return v
            },
            I0: function() {
                return _
            },
            v9: function() {
                return p
            }
        });
        var r = n(1688)
          , i = n(2798)
          , s = n(3935);
        let a = function(e) {
            e()
        }
          , o = () => a;
        var l = n(7294);
        let u = (0,
        l.createContext)(null);
        function c() {
            let e = (0,
            l.useContext)(u);
            return e
        }
        let h = () => {
            throw Error("uSES not initialized!")
        }
          , d = h
          , f = (e, t) => e === t
          , p = function(e=u) {
            let t = e === u ? c : () => (0,
            l.useContext)(e);
            return function(e, n=f) {
                let {store: r, subscription: i, getServerState: s} = t()
                  , a = d(i.addNestedSub, r.getState, s || r.getState, e, n);
                return (0,
                l.useDebugValue)(a),
                a
            }
        }();
        n(8679),
        n(9864);
        let g = {
            notify() {},
            get: () => []
        }
          , m = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement)
          , y = m ? l.useLayoutEffect : l.useEffect;
        var v = function({store: e, context: t, children: n, serverState: r}) {
            let i = (0,
            l.useMemo)( () => {
                let t = function(e, t) {
                    let n;
                    let r = g;
                    function i() {
                        a.onStateChange && a.onStateChange()
                    }
                    function s() {
                        n || (n = t ? t.addNestedSub(i) : e.subscribe(i),
                        r = function() {
                            let e = o()
                              , t = null
                              , n = null;
                            return {
                                clear() {
                                    t = null,
                                    n = null
                                },
                                notify() {
                                    e( () => {
                                        let e = t;
                                        for (; e; )
                                            e.callback(),
                                            e = e.next
                                    }
                                    )
                                },
                                get() {
                                    let e = []
                                      , n = t;
                                    for (; n; )
                                        e.push(n),
                                        n = n.next;
                                    return e
                                },
                                subscribe(e) {
                                    let r = !0
                                      , i = n = {
                                        callback: e,
                                        next: null,
                                        prev: n
                                    };
                                    return i.prev ? i.prev.next = i : t = i,
                                    function() {
                                        r && null !== t && (r = !1,
                                        i.next ? i.next.prev = i.prev : n = i.prev,
                                        i.prev ? i.prev.next = i.next : t = i.next)
                                    }
                                }
                            }
                        }())
                    }
                    let a = {
                        addNestedSub: function(e) {
                            return s(),
                            r.subscribe(e)
                        },
                        notifyNestedSubs: function() {
                            r.notify()
                        },
                        handleChangeWrapper: i,
                        isSubscribed: function() {
                            return Boolean(n)
                        },
                        trySubscribe: s,
                        tryUnsubscribe: function() {
                            n && (n(),
                            n = void 0,
                            r.clear(),
                            r = g)
                        },
                        getListeners: () => r
                    };
                    return a
                }(e);
                return {
                    store: e,
                    subscription: t,
                    getServerState: r ? () => r : void 0
                }
            }
            , [e, r])
              , s = (0,
            l.useMemo)( () => e.getState(), [e]);
            return y( () => {
                let {subscription: t} = i;
                return t.onStateChange = t.notifyNestedSubs,
                t.trySubscribe(),
                s !== e.getState() && t.notifyNestedSubs(),
                () => {
                    t.tryUnsubscribe(),
                    t.onStateChange = void 0
                }
            }
            , [i, s]),
            l.createElement((t || u).Provider, {
                value: i
            }, n)
        };
        function w(e=u) {
            let t = e === u ? c : () => (0,
            l.useContext)(e);
            return function() {
                let {store: e} = t();
                return e
            }
        }
        let b = w()
          , _ = function(e=u) {
            let t = e === u ? b : w(e);
            return function() {
                let e = t();
                return e.dispatch
            }
        }();
        d = i.useSyncExternalStoreWithSelector,
        r.useSyncExternalStore,
        a = s.unstable_batchedUpdates
    },
    3250: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var r = n(7294)
          , i = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , s = r.useState
          , a = r.useEffect
          , o = r.useLayoutEffect
          , l = r.useDebugValue;
        function u(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !i(e, n)
            } catch (e) {
                return !0
            }
        }
        var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
            return t()
        }
        : function(e, t) {
            var n = t()
              , r = s({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            })
              , i = r[0].inst
              , c = r[1];
            return o(function() {
                i.value = n,
                i.getSnapshot = t,
                u(i) && c({
                    inst: i
                })
            }, [e, n, t]),
            a(function() {
                return u(i) && c({
                    inst: i
                }),
                e(function() {
                    u(i) && c({
                        inst: i
                    })
                })
            }, [e]),
            l(n),
            n
        }
        ;
        t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c
    },
    6742: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var r = n(7294)
          , i = n(1688)
          , s = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        }
          , a = i.useSyncExternalStore
          , o = r.useRef
          , l = r.useEffect
          , u = r.useMemo
          , c = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
            var h = o(null);
            if (null === h.current) {
                var d = {
                    hasValue: !1,
                    value: null
                };
                h.current = d
            } else
                d = h.current;
            h = u(function() {
                function e(e) {
                    if (!l) {
                        if (l = !0,
                        a = e,
                        e = r(e),
                        void 0 !== i && d.hasValue) {
                            var t = d.value;
                            if (i(t, e))
                                return o = t
                        }
                        return o = e
                    }
                    if (t = o,
                    s(a, e))
                        return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? t : (a = e,
                    o = n)
                }
                var a, o, l = !1, u = void 0 === n ? null : n;
                return [function() {
                    return e(t())
                }
                , null === u ? void 0 : function() {
                    return e(u())
                }
                ]
            }, [t, n, r, i]);
            var f = a(e, h[0], h[1]);
            return l(function() {
                d.hasValue = !0,
                d.value = f
            }, [f]),
            c(f),
            f
        }
    },
    1688: function(e, t, n) {
        "use strict";
        e.exports = n(3250)
    },
    2798: function(e, t, n) {
        "use strict";
        e.exports = n(6742)
    },
    5816: function(e, t, n) {
        "use strict";
        let r, i;
        n.d(t, {
            Jn: function() {
                return L
            },
            qX: function() {
                return x
            },
            Xd: function() {
                return O
            },
            Mq: function() {
                return M
            },
            C6: function() {
                return j
            },
            ZF: function() {
                return P
            },
            KN: function() {
                return U
            }
        });
        var s, a = n(8463), o = n(3333), l = n(4444);
        let u = (e, t) => t.some(t => e instanceof t)
          , c = new WeakMap
          , h = new WeakMap
          , d = new WeakMap
          , f = new WeakMap
          , p = new WeakMap
          , g = {
            get(e, t, n) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return h.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || d.get(e);
                    if ("store" === t)
                        return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                }
                return m(e[t])
            },
            set: (e, t, n) => (e[t] = n,
            !0),
            has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function m(e) {
            var t;
            if (e instanceof IDBRequest)
                return function(e) {
                    let t = new Promise( (t, n) => {
                        let r = () => {
                            e.removeEventListener("success", i),
                            e.removeEventListener("error", s)
                        }
                          , i = () => {
                            t(m(e.result)),
                            r()
                        }
                          , s = () => {
                            n(e.error),
                            r()
                        }
                        ;
                        e.addEventListener("success", i),
                        e.addEventListener("error", s)
                    }
                    );
                    return t.then(t => {
                        t instanceof IDBCursor && c.set(t, e)
                    }
                    ).catch( () => {}
                    ),
                    p.set(t, e),
                    t
                }(e);
            if (f.has(e))
                return f.get(e);
            let n = "function" == typeof (t = e) ? t !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                return t.apply(y(this), e),
                m(c.get(this))
            }
            : function(...e) {
                return m(t.apply(y(this), e))
            }
            : function(e, ...n) {
                let r = t.call(y(this), e, ...n);
                return d.set(r, e.sort ? e.sort() : [e]),
                m(r)
            }
            : (t instanceof IDBTransaction && function(e) {
                if (h.has(e))
                    return;
                let t = new Promise( (t, n) => {
                    let r = () => {
                        e.removeEventListener("complete", i),
                        e.removeEventListener("error", s),
                        e.removeEventListener("abort", s)
                    }
                      , i = () => {
                        t(),
                        r()
                    }
                      , s = () => {
                        n(e.error || new DOMException("AbortError","AbortError")),
                        r()
                    }
                    ;
                    e.addEventListener("complete", i),
                    e.addEventListener("error", s),
                    e.addEventListener("abort", s)
                }
                );
                h.set(e, t)
            }(t),
            u(t, r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(t,g) : t;
            return n !== e && (f.set(e, n),
            p.set(n, e)),
            n
        }
        let y = e => p.get(e)
          , v = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , w = ["put", "add", "delete", "clear"]
          , b = new Map;
        function _(e, t) {
            if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
                return;
            if (b.get(t))
                return b.get(t);
            let n = t.replace(/FromIndex$/, "")
              , r = t !== n
              , i = w.includes(n);
            if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || v.includes(n)))
                return;
            let s = async function(e, ...t) {
                let s = this.transaction(e, i ? "readwrite" : "readonly")
                  , a = s.store;
                return r && (a = a.index(t.shift())),
                (await Promise.all([a[n](...t), i && s.done]))[0]
            };
            return b.set(t, s),
            s
        }
        g = {
            ...s = g,
            get: (e, t, n) => _(e, t) || s.get(e, t, n),
            has: (e, t) => !!_(e, t) || s.has(e, t)
        };
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class E {
            constructor(e) {
                this.container = e
            }
            getPlatformInfoString() {
                let e = this.container.getProviders();
                return e.map(e => {
                    if (!function(e) {
                        let t = e.getComponent();
                        return (null == t ? void 0 : t.type) === "VERSION"
                    }(e))
                        return null;
                    {
                        let t = e.getImmediate();
                        return `${t.library}/${t.version}`
                    }
                }
                ).filter(e => e).join(" ")
            }
        }
        let I = "@firebase/app"
          , T = "0.9.4"
          , S = new o.Yd("@firebase/app")
          , C = "[DEFAULT]"
          , A = {
            [I]: "fire-core",
            "@firebase/app-compat": "fire-core-compat",
            "@firebase/analytics": "fire-analytics",
            "@firebase/analytics-compat": "fire-analytics-compat",
            "@firebase/app-check": "fire-app-check",
            "@firebase/app-check-compat": "fire-app-check-compat",
            "@firebase/auth": "fire-auth",
            "@firebase/auth-compat": "fire-auth-compat",
            "@firebase/database": "fire-rtdb",
            "@firebase/database-compat": "fire-rtdb-compat",
            "@firebase/functions": "fire-fn",
            "@firebase/functions-compat": "fire-fn-compat",
            "@firebase/installations": "fire-iid",
            "@firebase/installations-compat": "fire-iid-compat",
            "@firebase/messaging": "fire-fcm",
            "@firebase/messaging-compat": "fire-fcm-compat",
            "@firebase/performance": "fire-perf",
            "@firebase/performance-compat": "fire-perf-compat",
            "@firebase/remote-config": "fire-rc",
            "@firebase/remote-config-compat": "fire-rc-compat",
            "@firebase/storage": "fire-gcs",
            "@firebase/storage-compat": "fire-gcs-compat",
            "@firebase/firestore": "fire-fst",
            "@firebase/firestore-compat": "fire-fst-compat",
            "fire-js": "fire-js",
            firebase: "fire-js-all"
        }
          , k = new Map
          , N = new Map;
        function O(e) {
            let t = e.name;
            if (N.has(t))
                return S.debug(`There were multiple attempts to register component ${t}.`),
                !1;
            for (let n of (N.set(t, e),
            k.values()))
                !function(e, t) {
                    try {
                        e.container.addComponent(t)
                    } catch (n) {
                        S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                    }
                }(n, e);
            return !0
        }
        function x(e, t) {
            let n = e.container.getProvider("heartbeat").getImmediate({
                optional: !0
            });
            return n && n.triggerHeartbeat(),
            e.container.getProvider(t)
        }
        let R = new l.LL("app","Firebase",{
            "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
            "bad-app-name": "Illegal App name: '{$appName}",
            "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
            "app-deleted": "Firebase App named '{$appName}' already deleted",
            "no-options": "Need to provide options, when not being deployed to hosting via source.",
            "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            "invalid-log-argument": "First argument to `onLog` must be null or a function.",
            "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
            "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
        });
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class D {
            constructor(e, t, n) {
                this._isDeleted = !1,
                this._options = Object.assign({}, e),
                this._config = Object.assign({}, t),
                this._name = t.name,
                this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled,
                this._container = n,
                this.container.addComponent(new a.wA("app", () => this,"PUBLIC"))
            }
            get automaticDataCollectionEnabled() {
                return this.checkDestroyed(),
                this._automaticDataCollectionEnabled
            }
            set automaticDataCollectionEnabled(e) {
                this.checkDestroyed(),
                this._automaticDataCollectionEnabled = e
            }
            get name() {
                return this.checkDestroyed(),
                this._name
            }
            get options() {
                return this.checkDestroyed(),
                this._options
            }
            get config() {
                return this.checkDestroyed(),
                this._config
            }
            get container() {
                return this._container
            }
            get isDeleted() {
                return this._isDeleted
            }
            set isDeleted(e) {
                this._isDeleted = e
            }
            checkDestroyed() {
                if (this.isDeleted)
                    throw R.create("app-deleted", {
                        appName: this._name
                    })
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let L = "9.17.2";
        function P(e, t={}) {
            let n = e;
            if ("object" != typeof t) {
                let e = t;
                t = {
                    name: e
                }
            }
            let r = Object.assign({
                name: C,
                automaticDataCollectionEnabled: !1
            }, t)
              , i = r.name;
            if ("string" != typeof i || !i)
                throw R.create("bad-app-name", {
                    appName: String(i)
                });
            if (n || (n = (0,
            l.aH)()),
            !n)
                throw R.create("no-options");
            let s = k.get(i);
            if (s) {
                if ((0,
                l.vZ)(n, s.options) && (0,
                l.vZ)(r, s.config))
                    return s;
                throw R.create("duplicate-app", {
                    appName: i
                })
            }
            let o = new a.H0(i);
            for (let e of N.values())
                o.addComponent(e);
            let u = new D(n,r,o);
            return k.set(i, u),
            u
        }
        function M(e=C) {
            let t = k.get(e);
            if (!t && e === C)
                return P();
            if (!t)
                throw R.create("no-app", {
                    appName: e
                });
            return t
        }
        function j() {
            return Array.from(k.values())
        }
        function U(e, t, n) {
            var r;
            let i = null !== (r = A[e]) && void 0 !== r ? r : e;
            n && (i += `-${n}`);
            let s = i.match(/\s|\//)
              , o = t.match(/\s|\//);
            if (s || o) {
                let e = [`Unable to register library "${i}" with version "${t}":`];
                s && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
                s && o && e.push("and"),
                o && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
                S.warn(e.join(" "));
                return
            }
            O(new a.wA(`${i}-version`, () => ({
                library: i,
                version: t
            }),"VERSION"))
        }
        let V = "firebase-heartbeat-store"
          , F = null;
        function z() {
            return F || (F = (function(e, t, {blocked: n, upgrade: r, blocking: i, terminated: s}={}) {
                let a = indexedDB.open(e, 1)
                  , o = m(a);
                return r && a.addEventListener("upgradeneeded", e => {
                    r(m(a.result), e.oldVersion, e.newVersion, m(a.transaction))
                }
                ),
                n && a.addEventListener("blocked", () => n()),
                o.then(e => {
                    s && e.addEventListener("close", () => s()),
                    i && e.addEventListener("versionchange", () => i())
                }
                ).catch( () => {}
                ),
                o
            }
            )("firebase-heartbeat-database", 0, {
                upgrade: (e, t) => {
                    0 === t && e.createObjectStore(V)
                }
            }).catch(e => {
                throw R.create("idb-open", {
                    originalErrorMessage: e.message
                })
            }
            )),
            F
        }
        async function B(e) {
            try {
                let t = await z();
                return t.transaction(V).objectStore(V).get(H(e))
            } catch (e) {
                if (e instanceof l.ZR)
                    S.warn(e.message);
                else {
                    let t = R.create("idb-get", {
                        originalErrorMessage: null == e ? void 0 : e.message
                    });
                    S.warn(t.message)
                }
            }
        }
        async function q(e, t) {
            try {
                let n = await z()
                  , r = n.transaction(V, "readwrite")
                  , i = r.objectStore(V);
                return await i.put(t, H(e)),
                r.done
            } catch (e) {
                if (e instanceof l.ZR)
                    S.warn(e.message);
                else {
                    let t = R.create("idb-set", {
                        originalErrorMessage: null == e ? void 0 : e.message
                    });
                    S.warn(t.message)
                }
            }
        }
        function H(e) {
            return `${e.name}!${e.options.appId}`
        }
        class K {
            constructor(e) {
                this.container = e,
                this._heartbeatsCache = null;
                let t = this.container.getProvider("app").getImmediate();
                this._storage = new G(t),
                this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e,
                e))
            }
            async triggerHeartbeat() {
                let e = this.container.getProvider("platform-logger").getImmediate()
                  , t = e.getPlatformInfoString()
                  , n = $();
                return (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise),
                this._heartbeatsCache.lastSentHeartbeatDate === n || this._heartbeatsCache.heartbeats.some(e => e.date === n)) ? void 0 : (this._heartbeatsCache.heartbeats.push({
                    date: n,
                    agent: t
                }),
                this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(e => {
                    let t = new Date(e.date).valueOf()
                      , n = Date.now();
                    return n - t <= 2592e6
                }
                ),
                this._storage.overwrite(this._heartbeatsCache))
            }
            async getHeartbeatsHeader() {
                if (null === this._heartbeatsCache && await this._heartbeatsCachePromise,
                null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length)
                    return "";
                let e = $()
                  , {heartbeatsToSend: t, unsentEntries: n} = function(e, t=1024) {
                    let n = []
                      , r = e.slice();
                    for (let i of e) {
                        let e = n.find(e => e.agent === i.agent);
                        if (e) {
                            if (e.dates.push(i.date),
                            W(n) > t) {
                                e.dates.pop();
                                break
                            }
                        } else if (n.push({
                            agent: i.agent,
                            dates: [i.date]
                        }),
                        W(n) > t) {
                            n.pop();
                            break
                        }
                        r = r.slice(1)
                    }
                    return {
                        heartbeatsToSend: n,
                        unsentEntries: r
                    }
                }(this._heartbeatsCache.heartbeats)
                  , r = (0,
                l.L)(JSON.stringify({
                    version: 2,
                    heartbeats: t
                }));
                return this._heartbeatsCache.lastSentHeartbeatDate = e,
                n.length > 0 ? (this._heartbeatsCache.heartbeats = n,
                await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
                this._storage.overwrite(this._heartbeatsCache)),
                r
            }
        }
        function $() {
            let e = new Date;
            return e.toISOString().substring(0, 10)
        }
        class G {
            constructor(e) {
                this.app = e,
                this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
            }
            async runIndexedDBEnvironmentCheck() {
                return !!(0,
                l.hl)() && (0,
                l.eu)().then( () => !0).catch( () => !1)
            }
            async read() {
                let e = await this._canUseIndexedDBPromise;
                if (!e)
                    return {
                        heartbeats: []
                    };
                {
                    let e = await B(this.app);
                    return e || {
                        heartbeats: []
                    }
                }
            }
            async overwrite(e) {
                var t;
                let n = await this._canUseIndexedDBPromise;
                if (n) {
                    let n = await this.read();
                    return q(this.app, {
                        lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                        heartbeats: e.heartbeats
                    })
                }
            }
            async add(e) {
                var t;
                let n = await this._canUseIndexedDBPromise;
                if (n) {
                    let n = await this.read();
                    return q(this.app, {
                        lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                        heartbeats: [...n.heartbeats, ...e.heartbeats]
                    })
                }
            }
        }
        function W(e) {
            return (0,
            l.L)(JSON.stringify({
                version: 2,
                heartbeats: e
            })).length
        }
        O(new a.wA("platform-logger",e => new E(e),"PRIVATE")),
        O(new a.wA("heartbeat",e => new K(e),"PRIVATE")),
        U(I, T, ""),
        U(I, T, "esm2017"),
        U("fire-js", "")
    },
    8463: function(e, t, n) {
        "use strict";
        n.d(t, {
            H0: function() {
                return o
            },
            wA: function() {
                return i
            }
        });
        var r = n(4444);
        class i {
            constructor(e, t, n) {
                this.name = e,
                this.instanceFactory = t,
                this.type = n,
                this.multipleInstances = !1,
                this.serviceProps = {},
                this.instantiationMode = "LAZY",
                this.onInstanceCreated = null
            }
            setInstantiationMode(e) {
                return this.instantiationMode = e,
                this
            }
            setMultipleInstances(e) {
                return this.multipleInstances = e,
                this
            }
            setServiceProps(e) {
                return this.serviceProps = e,
                this
            }
            setInstanceCreatedCallback(e) {
                return this.onInstanceCreated = e,
                this
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let s = "[DEFAULT]";
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class a {
            constructor(e, t) {
                this.name = e,
                this.container = t,
                this.component = null,
                this.instances = new Map,
                this.instancesDeferred = new Map,
                this.instancesOptions = new Map,
                this.onInitCallbacks = new Map
            }
            get(e) {
                let t = this.normalizeInstanceIdentifier(e);
                if (!this.instancesDeferred.has(t)) {
                    let e = new r.BH;
                    if (this.instancesDeferred.set(t, e),
                    this.isInitialized(t) || this.shouldAutoInitialize())
                        try {
                            let n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                }
                return this.instancesDeferred.get(t).promise
            }
            getImmediate(e) {
                var t;
                let n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier)
                  , r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                if (this.isInitialized(n) || this.shouldAutoInitialize())
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r)
                            return null;
                        throw e
                    }
                else {
                    if (r)
                        return null;
                    throw Error(`Service ${this.name} is not available`)
                }
            }
            getComponent() {
                return this.component
            }
            setComponent(e) {
                if (e.name !== this.name)
                    throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                if (this.component)
                    throw Error(`Component for ${this.name} has already been provided`);
                if (this.component = e,
                this.shouldAutoInitialize()) {
                    if ("EAGER" === e.instantiationMode)
                        try {
                            this.getOrInitializeService({
                                instanceIdentifier: s
                            })
                        } catch (e) {}
                    for (let[e,t] of this.instancesDeferred.entries()) {
                        let n = this.normalizeInstanceIdentifier(e);
                        try {
                            let e = this.getOrInitializeService({
                                instanceIdentifier: n
                            });
                            t.resolve(e)
                        } catch (e) {}
                    }
                }
            }
            clearInstance(e=s) {
                this.instancesDeferred.delete(e),
                this.instancesOptions.delete(e),
                this.instances.delete(e)
            }
            async delete() {
                let e = Array.from(this.instances.values());
                await Promise.all([...e.filter(e => "INTERNAL"in e).map(e => e.INTERNAL.delete()), ...e.filter(e => "_delete"in e).map(e => e._delete())])
            }
            isComponentSet() {
                return null != this.component
            }
            isInitialized(e=s) {
                return this.instances.has(e)
            }
            getOptions(e=s) {
                return this.instancesOptions.get(e) || {}
            }
            initialize(e={}) {
                let {options: t={}} = e
                  , n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                if (this.isInitialized(n))
                    throw Error(`${this.name}(${n}) has already been initialized`);
                if (!this.isComponentSet())
                    throw Error(`Component ${this.name} has not been registered yet`);
                let r = this.getOrInitializeService({
                    instanceIdentifier: n,
                    options: t
                });
                for (let[e,t] of this.instancesDeferred.entries()) {
                    let i = this.normalizeInstanceIdentifier(e);
                    n === i && t.resolve(r)
                }
                return r
            }
            onInit(e, t) {
                var n;
                let r = this.normalizeInstanceIdentifier(t)
                  , i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                i.add(e),
                this.onInitCallbacks.set(r, i);
                let s = this.instances.get(r);
                return s && e(s, r),
                () => {
                    i.delete(e)
                }
            }
            invokeOnInitCallbacks(e, t) {
                let n = this.onInitCallbacks.get(t);
                if (n)
                    for (let r of n)
                        try {
                            r(e, t)
                        } catch (e) {}
            }
            getOrInitializeService({instanceIdentifier: e, options: t={}}) {
                let n = this.instances.get(e);
                if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                    instanceIdentifier: e === s ? void 0 : e,
                    options: t
                }),
                this.instances.set(e, n),
                this.instancesOptions.set(e, t),
                this.invokeOnInitCallbacks(n, e),
                this.component.onInstanceCreated))
                    try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (e) {}
                return n || null
            }
            normalizeInstanceIdentifier(e=s) {
                return this.component ? this.component.multipleInstances ? e : s : e
            }
            shouldAutoInitialize() {
                return !!this.component && "EXPLICIT" !== this.component.instantiationMode
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class o {
            constructor(e) {
                this.name = e,
                this.providers = new Map
            }
            addComponent(e) {
                let t = this.getProvider(e.name);
                if (t.isComponentSet())
                    throw Error(`Component ${e.name} has already been registered with ${this.name}`);
                t.setComponent(e)
            }
            addOrOverwriteComponent(e) {
                let t = this.getProvider(e.name);
                t.isComponentSet() && this.providers.delete(e.name),
                this.addComponent(e)
            }
            getProvider(e) {
                if (this.providers.has(e))
                    return this.providers.get(e);
                let t = new a(e,this);
                return this.providers.set(e, t),
                t
            }
            getProviders() {
                return Array.from(this.providers.values())
            }
        }
    },
    3333: function(e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
            Yd: function() {
                return c
            },
            in: function() {
                return r
            }
        });
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let s = [];
        (i = r || (r = {}))[i.DEBUG = 0] = "DEBUG",
        i[i.VERBOSE = 1] = "VERBOSE",
        i[i.INFO = 2] = "INFO",
        i[i.WARN = 3] = "WARN",
        i[i.ERROR = 4] = "ERROR",
        i[i.SILENT = 5] = "SILENT";
        let a = {
            debug: r.DEBUG,
            verbose: r.VERBOSE,
            info: r.INFO,
            warn: r.WARN,
            error: r.ERROR,
            silent: r.SILENT
        }
          , o = r.INFO
          , l = {
            [r.DEBUG]: "log",
            [r.VERBOSE]: "log",
            [r.INFO]: "info",
            [r.WARN]: "warn",
            [r.ERROR]: "error"
        }
          , u = (e, t, ...n) => {
            if (t < e.logLevel)
                return;
            let r = new Date().toISOString()
              , i = l[t];
            if (i)
                console[i](`[${r}]  ${e.name}:`, ...n);
            else
                throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)
        }
        ;
        class c {
            constructor(e) {
                this.name = e,
                this._logLevel = o,
                this._logHandler = u,
                this._userLogHandler = null,
                s.push(this)
            }
            get logLevel() {
                return this._logLevel
            }
            set logLevel(e) {
                if (!(e in r))
                    throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                this._logLevel = e
            }
            setLogLevel(e) {
                this._logLevel = "string" == typeof e ? a[e] : e
            }
            get logHandler() {
                return this._logHandler
            }
            set logHandler(e) {
                if ("function" != typeof e)
                    throw TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e
            }
            get userLogHandler() {
                return this._userLogHandler
            }
            set userLogHandler(e) {
                this._userLogHandler = e
            }
            debug(...e) {
                this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e),
                this._logHandler(this, r.DEBUG, ...e)
            }
            log(...e) {
                this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e),
                this._logHandler(this, r.VERBOSE, ...e)
            }
            info(...e) {
                this._userLogHandler && this._userLogHandler(this, r.INFO, ...e),
                this._logHandler(this, r.INFO, ...e)
            }
            warn(...e) {
                this._userLogHandler && this._userLogHandler(this, r.WARN, ...e),
                this._logHandler(this, r.WARN, ...e)
            }
            error(...e) {
                this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e),
                this._logHandler(this, r.ERROR, ...e)
            }
        }
    },
    6502: function(e, t, n) {
        "use strict";
        n.d(t, {
            hJ: function() {
                return ej
            },
            Xb: function() {
                return eX
            },
            v0: function() {
                return t0
            },
            ag: function() {
                return U
            },
            Aj: function() {
                return eY
            },
            LS: function() {
                return eQ
            },
            e5: function() {
                return eJ
            },
            rh: function() {
                return tb
            },
            w7: function() {
                return eZ
            }
        });
        var r, i = n(4444), s = n(5816), a = n(3333);
        function o(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                    0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
            return n
        }
        var l = n(8463);
        function u() {
            return {
                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
            }
        }
        let c = new i.LL("auth","Firebase",u())
          , h = new a.Yd("@firebase/auth");
        function d(e, ...t) {
            h.logLevel <= a.in.ERROR && h.error(`Auth (${s.Jn}): ${e}`, ...t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function f(e, ...t) {
            throw m(e, ...t)
        }
        function p(e, ...t) {
            return m(e, ...t)
        }
        function g(e, t, n) {
            let r = Object.assign(Object.assign({}, u()), {
                [t]: n
            })
              , s = new i.LL("auth","Firebase",r);
            return s.create(t, {
                appName: e.name
            })
        }
        function m(e, ...t) {
            if ("string" != typeof e) {
                let n = t[0]
                  , r = [...t.slice(1)];
                return r[0] && (r[0].appName = e.name),
                e._errorFactory.create(n, ...r)
            }
            return c.create(e, ...t)
        }
        function y(e, t, ...n) {
            if (!e)
                throw m(t, ...n)
        }
        function v(e) {
            let t = "INTERNAL ASSERTION FAILED: " + e;
            throw d(t),
            Error(t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let w = new Map;
        function b(e) {
            e instanceof Function || v("Expected a class definition");
            let t = w.get(e);
            return t ? (t instanceof e || v("Instance stored in cache mismatched with class"),
            t) : (t = new e,
            w.set(e, t),
            t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function _() {
            var e;
            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || ""
        }
        function E() {
            var e;
            return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class I {
            constructor(e, t) {
                this.shortDelay = e,
                this.longDelay = t,
                t > e || v("Short delay should be less than long delay!"),
                this.isMobile = (0,
                i.uI)() || (0,
                i.b$)()
            }
            get() {
                return !("undefined" != typeof navigator && navigator && "onLine"in navigator && "boolean" == typeof navigator.onLine && ("http:" === E() || "https:" === E() || (0,
                i.ru)() || "connection"in navigator)) || navigator.onLine ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function T(e, t) {
            e.emulator || v("Emulator should always be set here");
            let {url: n} = e.emulator;
            return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class S {
            static initialize(e, t, n) {
                this.fetchImpl = e,
                t && (this.headersImpl = t),
                n && (this.responseImpl = n)
            }
            static fetch() {
                return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch"in self ? self.fetch : void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
            }
            static headers() {
                return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers"in self ? self.Headers : void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
            }
            static response() {
                return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response"in self ? self.Response : void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let C = {
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_PASSWORD: "wrong-password",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_REQ_TYPE: "internal-error",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            INVALID_CODE: "invalid-verification-code",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_SESSION_INFO: "missing-verification-id",
            SESSION_EXPIRED: "code-expired",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
        }
          , A = new I(3e4,6e4);
        function k(e, t) {
            return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
                tenantId: e.tenantId
            }) : t
        }
        async function N(e, t, n, r, s={}) {
            return O(e, s, async () => {
                let s = {}
                  , a = {};
                r && ("GET" === t ? a = r : s = {
                    body: JSON.stringify(r)
                });
                let o = (0,
                i.xO)(Object.assign({
                    key: e.config.apiKey
                }, a)).slice(1)
                  , l = await e._getAdditionalHeaders();
                return l["Content-Type"] = "application/json",
                e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
                S.fetch()(R(e, e.config.apiHost, n, o), Object.assign({
                    method: t,
                    headers: l,
                    referrerPolicy: "no-referrer"
                }, s))
            }
            )
        }
        async function O(e, t, n) {
            e._canInitEmulator = !1;
            let r = Object.assign(Object.assign({}, C), t);
            try {
                let t = new D(e)
                  , i = await Promise.race([n(), t.promise]);
                t.clearNetworkTimeout();
                let s = await i.json();
                if ("needConfirmation"in s)
                    throw L(e, "account-exists-with-different-credential", s);
                if (i.ok && !("errorMessage"in s))
                    return s;
                {
                    let t = i.ok ? s.errorMessage : s.error.message
                      , [n,a] = t.split(" : ");
                    if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
                        throw L(e, "credential-already-in-use", s);
                    if ("EMAIL_EXISTS" === n)
                        throw L(e, "email-already-in-use", s);
                    if ("USER_DISABLED" === n)
                        throw L(e, "user-disabled", s);
                    let o = r[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
                    if (a)
                        throw g(e, o, a);
                    f(e, o)
                }
            } catch (t) {
                if (t instanceof i.ZR)
                    throw t;
                f(e, "internal-error", {
                    message: String(t)
                })
            }
        }
        async function x(e, t, n, r, i={}) {
            let s = await N(e, t, n, r, i);
            return "mfaPendingCredential"in s && f(e, "multi-factor-auth-required", {
                _serverResponse: s
            }),
            s
        }
        function R(e, t, n, r) {
            let i = `${t}${n}?${r}`;
            return e.config.emulator ? T(e.config, i) : `${e.config.apiScheme}://${i}`
        }
        class D {
            constructor(e) {
                this.auth = e,
                this.timer = null,
                this.promise = new Promise( (e, t) => {
                    this.timer = setTimeout( () => t(p(this.auth, "network-request-failed")), A.get())
                }
                )
            }
            clearNetworkTimeout() {
                clearTimeout(this.timer)
            }
        }
        function L(e, t, n) {
            let r = {
                appName: e.name
            };
            n.email && (r.email = n.email),
            n.phoneNumber && (r.phoneNumber = n.phoneNumber);
            let i = p(e, t, r);
            return i.customData._tokenResponse = n,
            i
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function P(e, t) {
            return N(e, "POST", "/v1/accounts:delete", t)
        }
        async function M(e, t) {
            return N(e, "POST", "/v1/accounts:lookup", t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function j(e) {
            if (e)
                try {
                    let t = new Date(Number(e));
                    if (!isNaN(t.getTime()))
                        return t.toUTCString()
                } catch (e) {}
        }
        async function U(e, t=!1) {
            let n = (0,
            i.m9)(e)
              , r = await n.getIdToken(t)
              , s = F(r);
            y(s && s.exp && s.auth_time && s.iat, n.auth, "internal-error");
            let a = "object" == typeof s.firebase ? s.firebase : void 0
              , o = null == a ? void 0 : a.sign_in_provider;
            return {
                claims: s,
                token: r,
                authTime: j(V(s.auth_time)),
                issuedAtTime: j(V(s.iat)),
                expirationTime: j(V(s.exp)),
                signInProvider: o || null,
                signInSecondFactor: (null == a ? void 0 : a.sign_in_second_factor) || null
            }
        }
        function V(e) {
            return 1e3 * Number(e)
        }
        function F(e) {
            let[t,n,r] = e.split(".");
            if (void 0 === t || void 0 === n || void 0 === r)
                return d("JWT malformed, contained fewer than 3 sections"),
                null;
            try {
                let e = (0,
                i.tV)(n);
                if (!e)
                    return d("Failed to decode base64 JWT payload"),
                    null;
                return JSON.parse(e)
            } catch (e) {
                return d("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()),
                null
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function z(e, t, n=!1) {
            if (n)
                return t;
            try {
                return await t
            } catch (t) {
                throw t instanceof i.ZR && function({code: e}) {
                    return "auth/user-disabled" === e || "auth/user-token-expired" === e
                }(t) && e.auth.currentUser === e && await e.auth.signOut(),
                t
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class B {
            constructor(e) {
                this.user = e,
                this.isRunning = !1,
                this.timerId = null,
                this.errorBackoff = 3e4
            }
            _start() {
                this.isRunning || (this.isRunning = !0,
                this.schedule())
            }
            _stop() {
                this.isRunning && (this.isRunning = !1,
                null !== this.timerId && clearTimeout(this.timerId))
            }
            getInterval(e) {
                var t;
                if (e) {
                    let e = this.errorBackoff;
                    return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4),
                    e
                }
                {
                    this.errorBackoff = 3e4;
                    let e = null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0
                      , n = e - Date.now() - 3e5;
                    return Math.max(0, n)
                }
            }
            schedule(e=!1) {
                if (!this.isRunning)
                    return;
                let t = this.getInterval(e);
                this.timerId = setTimeout(async () => {
                    await this.iteration()
                }
                , t)
            }
            async iteration() {
                try {
                    await this.user.getIdToken(!0)
                } catch (e) {
                    (null == e ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
                    return
                }
                this.schedule()
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class q {
            constructor(e, t) {
                this.createdAt = e,
                this.lastLoginAt = t,
                this._initializeTime()
            }
            _initializeTime() {
                this.lastSignInTime = j(this.lastLoginAt),
                this.creationTime = j(this.createdAt)
            }
            _copy(e) {
                this.createdAt = e.createdAt,
                this.lastLoginAt = e.lastLoginAt,
                this._initializeTime()
            }
            toJSON() {
                return {
                    createdAt: this.createdAt,
                    lastLoginAt: this.lastLoginAt
                }
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function H(e) {
            var t;
            let n = e.auth
              , r = await e.getIdToken()
              , i = await z(e, M(n, {
                idToken: r
            }));
            y(null == i ? void 0 : i.users.length, n, "internal-error");
            let s = i.users[0];
            e._notifyReloadListener(s);
            let a = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? s.providerUserInfo.map(e => {
                var {providerId: t} = e
                  , n = o(e, ["providerId"]);
                return {
                    providerId: t,
                    uid: n.rawId || "",
                    displayName: n.displayName || null,
                    email: n.email || null,
                    phoneNumber: n.phoneNumber || null,
                    photoURL: n.photoUrl || null
                }
            }
            ) : []
              , l = function(e, t) {
                let n = e.filter(e => !t.some(t => t.providerId === e.providerId));
                return [...n, ...t]
            }(e.providerData, a)
              , u = e.isAnonymous
              , c = !(e.email && s.passwordHash) && !(null == l ? void 0 : l.length)
              , h = {
                uid: s.localId,
                displayName: s.displayName || null,
                photoURL: s.photoUrl || null,
                email: s.email || null,
                emailVerified: s.emailVerified || !1,
                phoneNumber: s.phoneNumber || null,
                tenantId: s.tenantId || null,
                providerData: l,
                metadata: new q(s.createdAt,s.lastLoginAt),
                isAnonymous: !!u && c
            };
            Object.assign(e, h)
        }
        async function K(e) {
            let t = (0,
            i.m9)(e);
            await H(t),
            await t.auth._persistUserIfCurrent(t),
            t.auth._notifyListenersIfCurrent(t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function $(e, t) {
            let n = await O(e, {}, async () => {
                let n = (0,
                i.xO)({
                    grant_type: "refresh_token",
                    refresh_token: t
                }).slice(1)
                  , {tokenApiHost: r, apiKey: s} = e.config
                  , a = R(e, r, "/v1/token", `key=${s}`)
                  , o = await e._getAdditionalHeaders();
                return o["Content-Type"] = "application/x-www-form-urlencoded",
                S.fetch()(a, {
                    method: "POST",
                    headers: o,
                    body: n
                })
            }
            );
            return {
                accessToken: n.access_token,
                expiresIn: n.expires_in,
                refreshToken: n.refresh_token
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class G {
            constructor() {
                this.refreshToken = null,
                this.accessToken = null,
                this.expirationTime = null
            }
            get isExpired() {
                return !this.expirationTime || Date.now() > this.expirationTime - 3e4
            }
            updateFromServerResponse(e) {
                y(e.idToken, "internal-error"),
                y(void 0 !== e.idToken, "internal-error"),
                y(void 0 !== e.refreshToken, "internal-error");
                let t = "expiresIn"in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : function(e) {
                    let t = F(e);
                    return y(t, "internal-error"),
                    y(void 0 !== t.exp, "internal-error"),
                    y(void 0 !== t.iat, "internal-error"),
                    Number(t.exp) - Number(t.iat)
                }(e.idToken);
                this.updateTokensAndExpiration(e.idToken, e.refreshToken, t)
            }
            async getToken(e, t=!1) {
                return (y(!this.accessToken || this.refreshToken, e, "user-token-expired"),
                t || !this.accessToken || this.isExpired) ? this.refreshToken ? (await this.refresh(e, this.refreshToken),
                this.accessToken) : null : this.accessToken
            }
            clearRefreshToken() {
                this.refreshToken = null
            }
            async refresh(e, t) {
                let {accessToken: n, refreshToken: r, expiresIn: i} = await $(e, t);
                this.updateTokensAndExpiration(n, r, Number(i))
            }
            updateTokensAndExpiration(e, t, n) {
                this.refreshToken = t || null,
                this.accessToken = e || null,
                this.expirationTime = Date.now() + 1e3 * n
            }
            static fromJSON(e, t) {
                let {refreshToken: n, accessToken: r, expirationTime: i} = t
                  , s = new G;
                return n && (y("string" == typeof n, "internal-error", {
                    appName: e
                }),
                s.refreshToken = n),
                r && (y("string" == typeof r, "internal-error", {
                    appName: e
                }),
                s.accessToken = r),
                i && (y("number" == typeof i, "internal-error", {
                    appName: e
                }),
                s.expirationTime = i),
                s
            }
            toJSON() {
                return {
                    refreshToken: this.refreshToken,
                    accessToken: this.accessToken,
                    expirationTime: this.expirationTime
                }
            }
            _assign(e) {
                this.accessToken = e.accessToken,
                this.refreshToken = e.refreshToken,
                this.expirationTime = e.expirationTime
            }
            _clone() {
                return Object.assign(new G, this.toJSON())
            }
            _performRefresh() {
                return v("not implemented")
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function W(e, t) {
            y("string" == typeof e || void 0 === e, "internal-error", {
                appName: t
            })
        }
        class Q {
            constructor(e) {
                var {uid: t, auth: n, stsTokenManager: r} = e
                  , i = o(e, ["uid", "auth", "stsTokenManager"]);
                this.providerId = "firebase",
                this.proactiveRefresh = new B(this),
                this.reloadUserInfo = null,
                this.reloadListener = null,
                this.uid = t,
                this.auth = n,
                this.stsTokenManager = r,
                this.accessToken = r.accessToken,
                this.displayName = i.displayName || null,
                this.email = i.email || null,
                this.emailVerified = i.emailVerified || !1,
                this.phoneNumber = i.phoneNumber || null,
                this.photoURL = i.photoURL || null,
                this.isAnonymous = i.isAnonymous || !1,
                this.tenantId = i.tenantId || null,
                this.providerData = i.providerData ? [...i.providerData] : [],
                this.metadata = new q(i.createdAt || void 0,i.lastLoginAt || void 0)
            }
            async getIdToken(e) {
                let t = await z(this, this.stsTokenManager.getToken(this.auth, e));
                return y(t, this.auth, "internal-error"),
                this.accessToken !== t && (this.accessToken = t,
                await this.auth._persistUserIfCurrent(this),
                this.auth._notifyListenersIfCurrent(this)),
                t
            }
            getIdTokenResult(e) {
                return U(this, e)
            }
            reload() {
                return K(this)
            }
            _assign(e) {
                this !== e && (y(this.uid === e.uid, this.auth, "internal-error"),
                this.displayName = e.displayName,
                this.photoURL = e.photoURL,
                this.email = e.email,
                this.emailVerified = e.emailVerified,
                this.phoneNumber = e.phoneNumber,
                this.isAnonymous = e.isAnonymous,
                this.tenantId = e.tenantId,
                this.providerData = e.providerData.map(e => Object.assign({}, e)),
                this.metadata._copy(e.metadata),
                this.stsTokenManager._assign(e.stsTokenManager))
            }
            _clone(e) {
                return new Q(Object.assign(Object.assign({}, this), {
                    auth: e,
                    stsTokenManager: this.stsTokenManager._clone()
                }))
            }
            _onReload(e) {
                y(!this.reloadListener, this.auth, "internal-error"),
                this.reloadListener = e,
                this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
                this.reloadUserInfo = null)
            }
            _notifyReloadListener(e) {
                this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e
            }
            _startProactiveRefresh() {
                this.proactiveRefresh._start()
            }
            _stopProactiveRefresh() {
                this.proactiveRefresh._stop()
            }
            async _updateTokensIfNecessary(e, t=!1) {
                let n = !1;
                e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e),
                n = !0),
                t && await H(this),
                await this.auth._persistUserIfCurrent(this),
                n && this.auth._notifyListenersIfCurrent(this)
            }
            async delete() {
                let e = await this.getIdToken();
                return await z(this, P(this.auth, {
                    idToken: e
                })),
                this.stsTokenManager.clearRefreshToken(),
                this.auth.signOut()
            }
            toJSON() {
                return Object.assign(Object.assign({
                    uid: this.uid,
                    email: this.email || void 0,
                    emailVerified: this.emailVerified,
                    displayName: this.displayName || void 0,
                    isAnonymous: this.isAnonymous,
                    photoURL: this.photoURL || void 0,
                    phoneNumber: this.phoneNumber || void 0,
                    tenantId: this.tenantId || void 0,
                    providerData: this.providerData.map(e => Object.assign({}, e)),
                    stsTokenManager: this.stsTokenManager.toJSON(),
                    _redirectEventId: this._redirectEventId
                }, this.metadata.toJSON()), {
                    apiKey: this.auth.config.apiKey,
                    appName: this.auth.name
                })
            }
            get refreshToken() {
                return this.stsTokenManager.refreshToken || ""
            }
            static _fromJSON(e, t) {
                var n, r, i, s, a, o, l, u;
                let c = null !== (n = t.displayName) && void 0 !== n ? n : void 0
                  , h = null !== (r = t.email) && void 0 !== r ? r : void 0
                  , d = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0
                  , f = null !== (s = t.photoURL) && void 0 !== s ? s : void 0
                  , p = null !== (a = t.tenantId) && void 0 !== a ? a : void 0
                  , g = null !== (o = t._redirectEventId) && void 0 !== o ? o : void 0
                  , m = null !== (l = t.createdAt) && void 0 !== l ? l : void 0
                  , v = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0
                  , {uid: w, emailVerified: b, isAnonymous: _, providerData: E, stsTokenManager: I} = t;
                y(w && I, e, "internal-error");
                let T = G.fromJSON(this.name, I);
                y("string" == typeof w, e, "internal-error"),
                W(c, e.name),
                W(h, e.name),
                y("boolean" == typeof b, e, "internal-error"),
                y("boolean" == typeof _, e, "internal-error"),
                W(d, e.name),
                W(f, e.name),
                W(p, e.name),
                W(g, e.name),
                W(m, e.name),
                W(v, e.name);
                let S = new Q({
                    uid: w,
                    auth: e,
                    email: h,
                    emailVerified: b,
                    displayName: c,
                    isAnonymous: _,
                    photoURL: f,
                    phoneNumber: d,
                    tenantId: p,
                    stsTokenManager: T,
                    createdAt: m,
                    lastLoginAt: v
                });
                return E && Array.isArray(E) && (S.providerData = E.map(e => Object.assign({}, e))),
                g && (S._redirectEventId = g),
                S
            }
            static async _fromIdTokenResponse(e, t, n=!1) {
                let r = new G;
                r.updateFromServerResponse(t);
                let i = new Q({
                    uid: t.localId,
                    auth: e,
                    stsTokenManager: r,
                    isAnonymous: n
                });
                return await H(i),
                i
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class X {
            constructor() {
                this.type = "NONE",
                this.storage = {}
            }
            async _isAvailable() {
                return !0
            }
            async _set(e, t) {
                this.storage[e] = t
            }
            async _get(e) {
                let t = this.storage[e];
                return void 0 === t ? null : t
            }
            async _remove(e) {
                delete this.storage[e]
            }
            _addListener(e, t) {}
            _removeListener(e, t) {}
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function J(e, t, n) {
            return `firebase:${e}:${t}:${n}`
        }
        X.type = "NONE";
        class Y {
            constructor(e, t, n) {
                this.persistence = e,
                this.auth = t,
                this.userKey = n;
                let {config: r, name: i} = this.auth;
                this.fullUserKey = J(this.userKey, r.apiKey, i),
                this.fullPersistenceKey = J("persistence", r.apiKey, i),
                this.boundEventHandler = t._onStorageEvent.bind(t),
                this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
            }
            setCurrentUser(e) {
                return this.persistence._set(this.fullUserKey, e.toJSON())
            }
            async getCurrentUser() {
                let e = await this.persistence._get(this.fullUserKey);
                return e ? Q._fromJSON(this.auth, e) : null
            }
            removeCurrentUser() {
                return this.persistence._remove(this.fullUserKey)
            }
            savePersistenceForRedirect() {
                return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
            }
            async setPersistence(e) {
                if (this.persistence === e)
                    return;
                let t = await this.getCurrentUser();
                if (await this.removeCurrentUser(),
                this.persistence = e,
                t)
                    return this.setCurrentUser(t)
            }
            delete() {
                this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
            }
            static async create(e, t, n="authUser") {
                if (!t.length)
                    return new Y(b(X),e,n);
                let r = (await Promise.all(t.map(async e => {
                    if (await e._isAvailable())
                        return e
                }
                ))).filter(e => e)
                  , i = r[0] || b(X)
                  , s = J(n, e.config.apiKey, e.name)
                  , a = null;
                for (let n of t)
                    try {
                        let t = await n._get(s);
                        if (t) {
                            let r = Q._fromJSON(e, t);
                            n !== i && (a = r),
                            i = n;
                            break
                        }
                    } catch (e) {}
                let o = r.filter(e => e._shouldAllowMigration);
                return i._shouldAllowMigration && o.length && (i = o[0],
                a && await i._set(s, a.toJSON()),
                await Promise.all(t.map(async e => {
                    if (e !== i)
                        try {
                            await e._remove(s)
                        } catch (e) {}
                }
                ))),
                new Y(i,e,n)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function Z(e) {
            let t = e.toLowerCase();
            if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
                return "Opera";
            if (er(t))
                return "IEMobile";
            if (t.includes("msie") || t.includes("trident/"))
                return "IE";
            {
                if (t.includes("edge/"))
                    return "Edge";
                if (ee(t))
                    return "Firefox";
                if (t.includes("silk/"))
                    return "Silk";
                if (es(t))
                    return "Blackberry";
                if (ea(t))
                    return "Webos";
                if (et(t))
                    return "Safari";
                if ((t.includes("chrome/") || en(t)) && !t.includes("edge/"))
                    return "Chrome";
                if (ei(t))
                    return "Android";
                let n = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
                if ((null == n ? void 0 : n.length) === 2)
                    return n[1]
            }
            return "Other"
        }
        function ee(e=(0,
        i.z$)()) {
            return /firefox\//i.test(e)
        }
        function et(e=(0,
        i.z$)()) {
            let t = e.toLowerCase();
            return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
        }
        function en(e=(0,
        i.z$)()) {
            return /crios\//i.test(e)
        }
        function er(e=(0,
        i.z$)()) {
            return /iemobile/i.test(e)
        }
        function ei(e=(0,
        i.z$)()) {
            return /android/i.test(e)
        }
        function es(e=(0,
        i.z$)()) {
            return /blackberry/i.test(e)
        }
        function ea(e=(0,
        i.z$)()) {
            return /webos/i.test(e)
        }
        function eo(e=(0,
        i.z$)()) {
            return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
        }
        function el(e=(0,
        i.z$)()) {
            return eo(e) || ei(e) || ea(e) || es(e) || /windows phone/i.test(e) || er(e)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function eu(e, t=[]) {
            let n;
            switch (e) {
            case "Browser":
                n = Z((0,
                i.z$)());
                break;
            case "Worker":
                n = `${Z((0,
                i.z$)())}-${e}`;
                break;
            default:
                n = e
            }
            let r = t.length ? t.join(",") : "FirebaseCore-web";
            return `${n}/JsCore/${s.Jn}/${r}`
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ec {
            constructor(e) {
                this.auth = e,
                this.queue = []
            }
            pushCallback(e, t) {
                let n = t => new Promise( (n, r) => {
                    try {
                        let r = e(t);
                        n(r)
                    } catch (e) {
                        r(e)
                    }
                }
                );
                n.onAbort = t,
                this.queue.push(n);
                let r = this.queue.length - 1;
                return () => {
                    this.queue[r] = () => Promise.resolve()
                }
            }
            async runMiddleware(e) {
                if (this.auth.currentUser === e)
                    return;
                let t = [];
                try {
                    for (let n of this.queue)
                        await n(e),
                        n.onAbort && t.push(n.onAbort)
                } catch (e) {
                    for (let e of (t.reverse(),
                    t))
                        try {
                            e()
                        } catch (e) {}
                    throw this.auth._errorFactory.create("login-blocked", {
                        originalMessage: null == e ? void 0 : e.message
                    })
                }
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eh {
            constructor(e, t, n) {
                this.app = e,
                this.heartbeatServiceProvider = t,
                this.config = n,
                this.currentUser = null,
                this.emulatorConfig = null,
                this.operations = Promise.resolve(),
                this.authStateSubscription = new ef(this),
                this.idTokenSubscription = new ef(this),
                this.beforeStateQueue = new ec(this),
                this.redirectUser = null,
                this.isProactiveRefreshEnabled = !1,
                this._canInitEmulator = !0,
                this._isInitialized = !1,
                this._deleted = !1,
                this._initializationPromise = null,
                this._popupRedirectResolver = null,
                this._errorFactory = c,
                this.lastNotifiedUid = void 0,
                this.languageCode = null,
                this.tenantId = null,
                this.settings = {
                    appVerificationDisabledForTesting: !1
                },
                this.frameworks = [],
                this.name = e.name,
                this.clientVersion = n.sdkClientVersion
            }
            _initializeWithPersistence(e, t) {
                return t && (this._popupRedirectResolver = b(t)),
                this._initializationPromise = this.queue(async () => {
                    var n, r;
                    if (!this._deleted && (this.persistenceManager = await Y.create(this, e),
                    !this._deleted)) {
                        if (null === (n = this._popupRedirectResolver) || void 0 === n ? void 0 : n._shouldInitProactively)
                            try {
                                await this._popupRedirectResolver._initialize(this)
                            } catch (e) {}
                        await this.initializeCurrentUser(t),
                        this.lastNotifiedUid = (null === (r = this.currentUser) || void 0 === r ? void 0 : r.uid) || null,
                        this._deleted || (this._isInitialized = !0)
                    }
                }
                ),
                this._initializationPromise
            }
            async _onStorageEvent() {
                if (this._deleted)
                    return;
                let e = await this.assertedPersistence.getCurrentUser();
                if (this.currentUser || e) {
                    if (this.currentUser && e && this.currentUser.uid === e.uid) {
                        this._currentUser._assign(e),
                        await this.currentUser.getIdToken();
                        return
                    }
                    await this._updateCurrentUser(e, !0)
                }
            }
            async initializeCurrentUser(e) {
                var t;
                let n = await this.assertedPersistence.getCurrentUser()
                  , r = n
                  , i = !1;
                if (e && this.config.authDomain) {
                    await this.getOrInitRedirectPersistenceManager();
                    let n = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId
                      , s = null == r ? void 0 : r._redirectEventId
                      , a = await this.tryRedirectSignIn(e);
                    (!n || n === s) && (null == a ? void 0 : a.user) && (r = a.user,
                    i = !0)
                }
                if (!r)
                    return this.directlySetCurrentUser(null);
                if (!r._redirectEventId) {
                    if (i)
                        try {
                            await this.beforeStateQueue.runMiddleware(r)
                        } catch (e) {
                            r = n,
                            this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e))
                        }
                    return r ? this.reloadAndSetCurrentUserOrClear(r) : this.directlySetCurrentUser(null)
                }
                return (y(this._popupRedirectResolver, this, "argument-error"),
                await this.getOrInitRedirectPersistenceManager(),
                this.redirectUser && this.redirectUser._redirectEventId === r._redirectEventId) ? this.directlySetCurrentUser(r) : this.reloadAndSetCurrentUserOrClear(r)
            }
            async tryRedirectSignIn(e) {
                let t = null;
                try {
                    t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0)
                } catch (e) {
                    await this._setRedirectUser(null)
                }
                return t
            }
            async reloadAndSetCurrentUserOrClear(e) {
                try {
                    await H(e)
                } catch (e) {
                    if ((null == e ? void 0 : e.code) !== "auth/network-request-failed")
                        return this.directlySetCurrentUser(null)
                }
                return this.directlySetCurrentUser(e)
            }
            useDeviceLanguage() {
                this.languageCode = function() {
                    if ("undefined" == typeof navigator)
                        return null;
                    let e = navigator;
                    return e.languages && e.languages[0] || e.language || null
                }()
            }
            async _delete() {
                this._deleted = !0
            }
            async updateCurrentUser(e) {
                let t = e ? (0,
                i.m9)(e) : null;
                return t && y(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
                this._updateCurrentUser(t && t._clone(this))
            }
            async _updateCurrentUser(e, t=!1) {
                if (!this._deleted)
                    return e && y(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
                    t || await this.beforeStateQueue.runMiddleware(e),
                    this.queue(async () => {
                        await this.directlySetCurrentUser(e),
                        this.notifyAuthListeners()
                    }
                    )
            }
            async signOut() {
                return await this.beforeStateQueue.runMiddleware(null),
                (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
                this._updateCurrentUser(null, !0)
            }
            setPersistence(e) {
                return this.queue(async () => {
                    await this.assertedPersistence.setPersistence(b(e))
                }
                )
            }
            _getPersistence() {
                return this.assertedPersistence.persistence.type
            }
            _updateErrorMap(e) {
                this._errorFactory = new i.LL("auth","Firebase",e())
            }
            onAuthStateChanged(e, t, n) {
                return this.registerStateListener(this.authStateSubscription, e, t, n)
            }
            beforeAuthStateChanged(e, t) {
                return this.beforeStateQueue.pushCallback(e, t)
            }
            onIdTokenChanged(e, t, n) {
                return this.registerStateListener(this.idTokenSubscription, e, t, n)
            }
            toJSON() {
                var e;
                return {
                    apiKey: this.config.apiKey,
                    authDomain: this.config.authDomain,
                    appName: this.name,
                    currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
                }
            }
            async _setRedirectUser(e, t) {
                let n = await this.getOrInitRedirectPersistenceManager(t);
                return null === e ? n.removeCurrentUser() : n.setCurrentUser(e)
            }
            async getOrInitRedirectPersistenceManager(e) {
                if (!this.redirectPersistenceManager) {
                    let t = e && b(e) || this._popupRedirectResolver;
                    y(t, this, "argument-error"),
                    this.redirectPersistenceManager = await Y.create(this, [b(t._redirectPersistence)], "redirectUser"),
                    this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
                }
                return this.redirectPersistenceManager
            }
            async _redirectUserForId(e) {
                var t, n;
                return (this._isInitialized && await this.queue(async () => {}
                ),
                (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e) ? this._currentUser : (null === (n = this.redirectUser) || void 0 === n ? void 0 : n._redirectEventId) === e ? this.redirectUser : null
            }
            async _persistUserIfCurrent(e) {
                if (e === this.currentUser)
                    return this.queue(async () => this.directlySetCurrentUser(e))
            }
            _notifyListenersIfCurrent(e) {
                e === this.currentUser && this.notifyAuthListeners()
            }
            _key() {
                return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
            }
            _startProactiveRefresh() {
                this.isProactiveRefreshEnabled = !0,
                this.currentUser && this._currentUser._startProactiveRefresh()
            }
            _stopProactiveRefresh() {
                this.isProactiveRefreshEnabled = !1,
                this.currentUser && this._currentUser._stopProactiveRefresh()
            }
            get _currentUser() {
                return this.currentUser
            }
            notifyAuthListeners() {
                var e, t;
                if (!this._isInitialized)
                    return;
                this.idTokenSubscription.next(this.currentUser);
                let n = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
                this.lastNotifiedUid !== n && (this.lastNotifiedUid = n,
                this.authStateSubscription.next(this.currentUser))
            }
            registerStateListener(e, t, n, r) {
                if (this._deleted)
                    return () => {}
                    ;
                let i = "function" == typeof t ? t : t.next.bind(t)
                  , s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                return (y(s, this, "internal-error"),
                s.then( () => i(this.currentUser)),
                "function" == typeof t) ? e.addObserver(t, n, r) : e.addObserver(t)
            }
            async directlySetCurrentUser(e) {
                this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
                e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
                this.currentUser = e,
                e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser()
            }
            queue(e) {
                return this.operations = this.operations.then(e, e),
                this.operations
            }
            get assertedPersistence() {
                return y(this.persistenceManager, this, "internal-error"),
                this.persistenceManager
            }
            _logFramework(e) {
                !e || this.frameworks.includes(e) || (this.frameworks.push(e),
                this.frameworks.sort(),
                this.clientVersion = eu(this.config.clientPlatform, this._getFrameworks()))
            }
            _getFrameworks() {
                return this.frameworks
            }
            async _getAdditionalHeaders() {
                var e;
                let t = {
                    "X-Client-Version": this.clientVersion
                };
                this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
                let n = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                    optional: !0
                })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
                return n && (t["X-Firebase-Client"] = n),
                t
            }
        }
        function ed(e) {
            return (0,
            i.m9)(e)
        }
        class ef {
            constructor(e) {
                this.auth = e,
                this.observer = null,
                this.addObserver = (0,
                i.ne)(e => this.observer = e)
            }
            get next() {
                return y(this.observer, this.auth, "internal-error"),
                this.observer.next.bind(this.observer)
            }
        }
        function ep(e) {
            let t = e.indexOf(":");
            return t < 0 ? "" : e.substr(0, t + 1)
        }
        function eg(e) {
            if (!e)
                return null;
            let t = Number(e);
            return isNaN(t) ? null : t
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class em {
            constructor(e, t) {
                this.providerId = e,
                this.signInMethod = t
            }
            toJSON() {
                return v("not implemented")
            }
            _getIdTokenResponse(e) {
                return v("not implemented")
            }
            _linkToIdToken(e, t) {
                return v("not implemented")
            }
            _getReauthenticationResolver(e) {
                return v("not implemented")
            }
        }
        async function ey(e, t) {
            return N(e, "POST", "/v1/accounts:update", t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function ev(e, t) {
            return x(e, "POST", "/v1/accounts:signInWithPassword", k(e, t))
        }
        async function ew(e, t) {
            return N(e, "POST", "/v1/accounts:sendOobCode", k(e, t))
        }
        async function eb(e, t) {
            return ew(e, t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function e_(e, t) {
            return x(e, "POST", "/v1/accounts:signInWithEmailLink", k(e, t))
        }
        async function eE(e, t) {
            return x(e, "POST", "/v1/accounts:signInWithEmailLink", k(e, t))
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eI extends em {
            constructor(e, t, n, r=null) {
                super("password", n),
                this._email = e,
                this._password = t,
                this._tenantId = r
            }
            static _fromEmailAndPassword(e, t) {
                return new eI(e,t,"password")
            }
            static _fromEmailAndCode(e, t, n=null) {
                return new eI(e,t,"emailLink",n)
            }
            toJSON() {
                return {
                    email: this._email,
                    password: this._password,
                    signInMethod: this.signInMethod,
                    tenantId: this._tenantId
                }
            }
            static fromJSON(e) {
                let t = "string" == typeof e ? JSON.parse(e) : e;
                if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                    if ("password" === t.signInMethod)
                        return this._fromEmailAndPassword(t.email, t.password);
                    if ("emailLink" === t.signInMethod)
                        return this._fromEmailAndCode(t.email, t.password, t.tenantId)
                }
                return null
            }
            async _getIdTokenResponse(e) {
                switch (this.signInMethod) {
                case "password":
                    return ev(e, {
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password
                    });
                case "emailLink":
                    return e_(e, {
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    f(e, "internal-error")
                }
            }
            async _linkToIdToken(e, t) {
                switch (this.signInMethod) {
                case "password":
                    return ey(e, {
                        idToken: t,
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password
                    });
                case "emailLink":
                    return eE(e, {
                        idToken: t,
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    f(e, "internal-error")
                }
            }
            _getReauthenticationResolver(e) {
                return this._getIdTokenResponse(e)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function eT(e, t) {
            return x(e, "POST", "/v1/accounts:signInWithIdp", k(e, t))
        }
        class eS extends em {
            constructor() {
                super(...arguments),
                this.pendingToken = null
            }
            static _fromParams(e) {
                let t = new eS(e.providerId,e.signInMethod);
                return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken),
                e.accessToken && (t.accessToken = e.accessToken),
                e.nonce && !e.pendingToken && (t.nonce = e.nonce),
                e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken,
                t.secret = e.oauthTokenSecret) : f("argument-error"),
                t
            }
            toJSON() {
                return {
                    idToken: this.idToken,
                    accessToken: this.accessToken,
                    secret: this.secret,
                    nonce: this.nonce,
                    pendingToken: this.pendingToken,
                    providerId: this.providerId,
                    signInMethod: this.signInMethod
                }
            }
            static fromJSON(e) {
                let t = "string" == typeof e ? JSON.parse(e) : e
                  , {providerId: n, signInMethod: r} = t
                  , i = o(t, ["providerId", "signInMethod"]);
                if (!n || !r)
                    return null;
                let s = new eS(n,r);
                return s.idToken = i.idToken || void 0,
                s.accessToken = i.accessToken || void 0,
                s.secret = i.secret,
                s.nonce = i.nonce,
                s.pendingToken = i.pendingToken || null,
                s
            }
            _getIdTokenResponse(e) {
                let t = this.buildRequest();
                return eT(e, t)
            }
            _linkToIdToken(e, t) {
                let n = this.buildRequest();
                return n.idToken = t,
                eT(e, n)
            }
            _getReauthenticationResolver(e) {
                let t = this.buildRequest();
                return t.autoCreate = !1,
                eT(e, t)
            }
            buildRequest() {
                let e = {
                    requestUri: "http://localhost",
                    returnSecureToken: !0
                };
                if (this.pendingToken)
                    e.pendingToken = this.pendingToken;
                else {
                    let t = {};
                    this.idToken && (t.id_token = this.idToken),
                    this.accessToken && (t.access_token = this.accessToken),
                    this.secret && (t.oauth_token_secret = this.secret),
                    t.providerId = this.providerId,
                    this.nonce && !this.pendingToken && (t.nonce = this.nonce),
                    e.postBody = (0,
                    i.xO)(t)
                }
                return e
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function eC(e, t) {
            return N(e, "POST", "/v1/accounts:sendVerificationCode", k(e, t))
        }
        async function eA(e, t) {
            return x(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, t))
        }
        async function ek(e, t) {
            let n = await x(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, t));
            if (n.temporaryProof)
                throw L(e, "account-exists-with-different-credential", n);
            return n
        }
        let eN = {
            USER_NOT_FOUND: "user-not-found"
        };
        async function eO(e, t) {
            let n = Object.assign(Object.assign({}, t), {
                operation: "REAUTH"
            });
            return x(e, "POST", "/v1/accounts:signInWithPhoneNumber", k(e, n), eN)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ex extends em {
            constructor(e) {
                super("phone", "phone"),
                this.params = e
            }
            static _fromVerification(e, t) {
                return new ex({
                    verificationId: e,
                    verificationCode: t
                })
            }
            static _fromTokenResponse(e, t) {
                return new ex({
                    phoneNumber: e,
                    temporaryProof: t
                })
            }
            _getIdTokenResponse(e) {
                return eA(e, this._makeVerificationRequest())
            }
            _linkToIdToken(e, t) {
                return ek(e, Object.assign({
                    idToken: t
                }, this._makeVerificationRequest()))
            }
            _getReauthenticationResolver(e) {
                return eO(e, this._makeVerificationRequest())
            }
            _makeVerificationRequest() {
                let {temporaryProof: e, phoneNumber: t, verificationId: n, verificationCode: r} = this.params;
                return e && t ? {
                    temporaryProof: e,
                    phoneNumber: t
                } : {
                    sessionInfo: n,
                    code: r
                }
            }
            toJSON() {
                let e = {
                    providerId: this.providerId
                };
                return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
                this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof),
                this.params.verificationCode && (e.verificationCode = this.params.verificationCode),
                this.params.verificationId && (e.verificationId = this.params.verificationId),
                e
            }
            static fromJSON(e) {
                "string" == typeof e && (e = JSON.parse(e));
                let {verificationId: t, verificationCode: n, phoneNumber: r, temporaryProof: i} = e;
                return n || t || r || i ? new ex({
                    verificationId: t,
                    verificationCode: n,
                    phoneNumber: r,
                    temporaryProof: i
                }) : null
            }
        }
        class eR {
            constructor(e) {
                var t, n, r, s, a, o;
                let l = (0,
                i.zd)((0,
                i.pd)(e))
                  , u = null !== (t = l.apiKey) && void 0 !== t ? t : null
                  , c = null !== (n = l.oobCode) && void 0 !== n ? n : null
                  , h = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                function(e) {
                    switch (e) {
                    case "recoverEmail":
                        return "RECOVER_EMAIL";
                    case "resetPassword":
                        return "PASSWORD_RESET";
                    case "signIn":
                        return "EMAIL_SIGNIN";
                    case "verifyEmail":
                        return "VERIFY_EMAIL";
                    case "verifyAndChangeEmail":
                        return "VERIFY_AND_CHANGE_EMAIL";
                    case "revertSecondFactorAddition":
                        return "REVERT_SECOND_FACTOR_ADDITION";
                    default:
                        return null
                    }
                }(null !== (r = l.mode) && void 0 !== r ? r : null);
                y(u && c && h, "argument-error"),
                this.apiKey = u,
                this.operation = h,
                this.code = c,
                this.continueUrl = null !== (s = l.continueUrl) && void 0 !== s ? s : null,
                this.languageCode = null !== (a = l.languageCode) && void 0 !== a ? a : null,
                this.tenantId = null !== (o = l.tenantId) && void 0 !== o ? o : null
            }
            static parseLink(e) {
                let t = function(e) {
                    let t = (0,
                    i.zd)((0,
                    i.pd)(e)).link
                      , n = t ? (0,
                    i.zd)((0,
                    i.pd)(t)).deep_link_id : null
                      , r = (0,
                    i.zd)((0,
                    i.pd)(e)).deep_link_id
                      , s = r ? (0,
                    i.zd)((0,
                    i.pd)(r)).link : null;
                    return s || r || n || t || e
                }(e);
                try {
                    return new eR(t)
                } catch (e) {
                    return null
                }
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eD {
            constructor() {
                this.providerId = eD.PROVIDER_ID
            }
            static credential(e, t) {
                return eI._fromEmailAndPassword(e, t)
            }
            static credentialWithLink(e, t) {
                let n = eR.parseLink(t);
                return y(n, "argument-error"),
                eI._fromEmailAndCode(e, n.code, n.tenantId)
            }
        }
        eD.PROVIDER_ID = "password",
        eD.EMAIL_PASSWORD_SIGN_IN_METHOD = "password",
        eD.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eL {
            constructor(e) {
                this.providerId = e,
                this.defaultLanguageCode = null,
                this.customParameters = {}
            }
            setDefaultLanguage(e) {
                this.defaultLanguageCode = e
            }
            setCustomParameters(e) {
                return this.customParameters = e,
                this
            }
            getCustomParameters() {
                return this.customParameters
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eP extends eL {
            constructor() {
                super(...arguments),
                this.scopes = []
            }
            addScope(e) {
                return this.scopes.includes(e) || this.scopes.push(e),
                this
            }
            getScopes() {
                return [...this.scopes]
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eM extends eP {
            constructor() {
                super("facebook.com")
            }
            static credential(e) {
                return eS._fromParams({
                    providerId: eM.PROVIDER_ID,
                    signInMethod: eM.FACEBOOK_SIGN_IN_METHOD,
                    accessToken: e
                })
            }
            static credentialFromResult(e) {
                return eM.credentialFromTaggedObject(e)
            }
            static credentialFromError(e) {
                return eM.credentialFromTaggedObject(e.customData || {})
            }
            static credentialFromTaggedObject({_tokenResponse: e}) {
                if (!e || !("oauthAccessToken"in e) || !e.oauthAccessToken)
                    return null;
                try {
                    return eM.credential(e.oauthAccessToken)
                } catch (e) {
                    return null
                }
            }
        }
        eM.FACEBOOK_SIGN_IN_METHOD = "facebook.com",
        eM.PROVIDER_ID = "facebook.com";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ej extends eP {
            constructor() {
                super("google.com"),
                this.addScope("profile")
            }
            static credential(e, t) {
                return eS._fromParams({
                    providerId: ej.PROVIDER_ID,
                    signInMethod: ej.GOOGLE_SIGN_IN_METHOD,
                    idToken: e,
                    accessToken: t
                })
            }
            static credentialFromResult(e) {
                return ej.credentialFromTaggedObject(e)
            }
            static credentialFromError(e) {
                return ej.credentialFromTaggedObject(e.customData || {})
            }
            static credentialFromTaggedObject({_tokenResponse: e}) {
                if (!e)
                    return null;
                let {oauthIdToken: t, oauthAccessToken: n} = e;
                if (!t && !n)
                    return null;
                try {
                    return ej.credential(t, n)
                } catch (e) {
                    return null
                }
            }
        }
        ej.GOOGLE_SIGN_IN_METHOD = "google.com",
        ej.PROVIDER_ID = "google.com";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eU extends eP {
            constructor() {
                super("github.com")
            }
            static credential(e) {
                return eS._fromParams({
                    providerId: eU.PROVIDER_ID,
                    signInMethod: eU.GITHUB_SIGN_IN_METHOD,
                    accessToken: e
                })
            }
            static credentialFromResult(e) {
                return eU.credentialFromTaggedObject(e)
            }
            static credentialFromError(e) {
                return eU.credentialFromTaggedObject(e.customData || {})
            }
            static credentialFromTaggedObject({_tokenResponse: e}) {
                if (!e || !("oauthAccessToken"in e) || !e.oauthAccessToken)
                    return null;
                try {
                    return eU.credential(e.oauthAccessToken)
                } catch (e) {
                    return null
                }
            }
        }
        eU.GITHUB_SIGN_IN_METHOD = "github.com",
        eU.PROVIDER_ID = "github.com";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eV extends eP {
            constructor() {
                super("twitter.com")
            }
            static credential(e, t) {
                return eS._fromParams({
                    providerId: eV.PROVIDER_ID,
                    signInMethod: eV.TWITTER_SIGN_IN_METHOD,
                    oauthToken: e,
                    oauthTokenSecret: t
                })
            }
            static credentialFromResult(e) {
                return eV.credentialFromTaggedObject(e)
            }
            static credentialFromError(e) {
                return eV.credentialFromTaggedObject(e.customData || {})
            }
            static credentialFromTaggedObject({_tokenResponse: e}) {
                if (!e)
                    return null;
                let {oauthAccessToken: t, oauthTokenSecret: n} = e;
                if (!t || !n)
                    return null;
                try {
                    return eV.credential(t, n)
                } catch (e) {
                    return null
                }
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function eF(e, t) {
            return x(e, "POST", "/v1/accounts:signUp", k(e, t))
        }
        eV.TWITTER_SIGN_IN_METHOD = "twitter.com",
        eV.PROVIDER_ID = "twitter.com";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ez {
            constructor(e) {
                this.user = e.user,
                this.providerId = e.providerId,
                this._tokenResponse = e._tokenResponse,
                this.operationType = e.operationType
            }
            static async _fromIdTokenResponse(e, t, n, r=!1) {
                let i = await Q._fromIdTokenResponse(e, n, r)
                  , s = eB(n)
                  , a = new ez({
                    user: i,
                    providerId: s,
                    _tokenResponse: n,
                    operationType: t
                });
                return a
            }
            static async _forOperation(e, t, n) {
                await e._updateTokensIfNecessary(n, !0);
                let r = eB(n);
                return new ez({
                    user: e,
                    providerId: r,
                    _tokenResponse: n,
                    operationType: t
                })
            }
        }
        function eB(e) {
            return e.providerId ? e.providerId : "phoneNumber"in e ? "phone" : null
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class eq extends i.ZR {
            constructor(e, t, n, r) {
                var i;
                super(t.code, t.message),
                this.operationType = n,
                this.user = r,
                Object.setPrototypeOf(this, eq.prototype),
                this.customData = {
                    appName: e.name,
                    tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
                    _serverResponse: t.customData._serverResponse,
                    operationType: n
                }
            }
            static _fromErrorAndOperation(e, t, n, r) {
                return new eq(e,t,n,r)
            }
        }
        function eH(e, t, n, r) {
            let i = "reauthenticate" === t ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e);
            return i.catch(n => {
                if ("auth/multi-factor-auth-required" === n.code)
                    throw eq._fromErrorAndOperation(e, n, t, r);
                throw n
            }
            )
        }
        async function eK(e, t, n=!1) {
            let r = await z(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
            return ez._forOperation(e, "link", r)
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function e$(e, t, n=!1) {
            let {auth: r} = e
              , i = "reauthenticate";
            try {
                let s = await z(e, eH(r, i, t, e), n);
                y(s.idToken, r, "internal-error");
                let a = F(s.idToken);
                y(a, r, "internal-error");
                let {sub: o} = a;
                return y(e.uid === o, r, "user-mismatch"),
                ez._forOperation(e, i, s)
            } catch (e) {
                throw (null == e ? void 0 : e.code) === "auth/user-not-found" && f(r, "user-mismatch"),
                e
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function eG(e, t, n=!1) {
            let r = "signIn"
              , i = await eH(e, r, t)
              , s = await ez._fromIdTokenResponse(e, r, i);
            return n || await e._updateCurrentUser(s.user),
            s
        }
        async function eW(e, t) {
            return eG(ed(e), t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function eQ(e, t, n) {
            let r = (0,
            i.m9)(e)
              , s = {
                requestType: "PASSWORD_RESET",
                email: t
            };
            if (n) {
                var a, o;
                a = s,
                y((null === (o = n.url) || void 0 === o ? void 0 : o.length) > 0, r, "invalid-continue-uri"),
                y(void 0 === n.dynamicLinkDomain || n.dynamicLinkDomain.length > 0, r, "invalid-dynamic-link-domain"),
                a.continueUrl = n.url,
                a.dynamicLinkDomain = n.dynamicLinkDomain,
                a.canHandleCodeInApp = n.handleCodeInApp,
                n.iOS && (y(n.iOS.bundleId.length > 0, r, "missing-ios-bundle-id"),
                a.iOSBundleId = n.iOS.bundleId),
                n.android && (y(n.android.packageName.length > 0, r, "missing-android-pkg-name"),
                a.androidInstallApp = n.android.installApp,
                a.androidMinimumVersionCode = n.android.minimumVersion,
                a.androidPackageName = n.android.packageName)
            }
            await eb(r, s)
        }
        async function eX(e, t, n) {
            let r = ed(e)
              , i = await eF(r, {
                returnSecureToken: !0,
                email: t,
                password: n
            })
              , s = await ez._fromIdTokenResponse(r, "signIn", i);
            return await r._updateCurrentUser(s.user),
            s
        }
        function eJ(e, t, n) {
            return eW((0,
            i.m9)(e), eD.credential(t, n))
        }
        function eY(e, t, n, r) {
            return (0,
            i.m9)(e).onAuthStateChanged(t, n, r)
        }
        function eZ(e) {
            return (0,
            i.m9)(e).signOut()
        }
        new WeakMap;
        let e0 = "__sak";
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class e1 {
            constructor(e, t) {
                this.storageRetriever = e,
                this.type = t
            }
            _isAvailable() {
                try {
                    if (!this.storage)
                        return Promise.resolve(!1);
                    return this.storage.setItem(e0, "1"),
                    this.storage.removeItem(e0),
                    Promise.resolve(!0)
                } catch (e) {
                    return Promise.resolve(!1)
                }
            }
            _set(e, t) {
                return this.storage.setItem(e, JSON.stringify(t)),
                Promise.resolve()
            }
            _get(e) {
                let t = this.storage.getItem(e);
                return Promise.resolve(t ? JSON.parse(t) : null)
            }
            _remove(e) {
                return this.storage.removeItem(e),
                Promise.resolve()
            }
            get storage() {
                return this.storageRetriever()
            }
        }
        class e2 extends e1 {
            constructor() {
                super( () => window.localStorage, "LOCAL"),
                this.boundEventHandler = (e, t) => this.onStorageEvent(e, t),
                this.listeners = {},
                this.localCache = {},
                this.pollTimer = null,
                this.safariLocalStorageNotSynced = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                function() {
                    let e = (0,
                    i.z$)();
                    return et(e) || eo(e)
                }() && function() {
                    try {
                        return !!(window && window !== window.top)
                    } catch (e) {
                        return !1
                    }
                }(),
                this.fallbackToPolling = el(),
                this._shouldAllowMigration = !0
            }
            forAllChangedKeys(e) {
                for (let t of Object.keys(this.listeners)) {
                    let n = this.storage.getItem(t)
                      , r = this.localCache[t];
                    n !== r && e(t, r, n)
                }
            }
            onStorageEvent(e, t=!1) {
                if (!e.key) {
                    this.forAllChangedKeys( (e, t, n) => {
                        this.notifyListeners(e, n)
                    }
                    );
                    return
                }
                let n = e.key;
                if (t ? this.detachListener() : this.stopPolling(),
                this.safariLocalStorageNotSynced) {
                    let r = this.storage.getItem(n);
                    if (e.newValue !== r)
                        null !== e.newValue ? this.storage.setItem(n, e.newValue) : this.storage.removeItem(n);
                    else if (this.localCache[n] === e.newValue && !t)
                        return
                }
                let r = () => {
                    let e = this.storage.getItem(n);
                    (t || this.localCache[n] !== e) && this.notifyListeners(n, e)
                }
                  , s = this.storage.getItem(n);
                (0,
                i.w1)() && 10 === document.documentMode && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(r, 10) : r()
            }
            notifyListeners(e, t) {
                this.localCache[e] = t;
                let n = this.listeners[e];
                if (n)
                    for (let e of Array.from(n))
                        e(t ? JSON.parse(t) : t)
            }
            startPolling() {
                this.stopPolling(),
                this.pollTimer = setInterval( () => {
                    this.forAllChangedKeys( (e, t, n) => {
                        this.onStorageEvent(new StorageEvent("storage",{
                            key: e,
                            oldValue: t,
                            newValue: n
                        }), !0)
                    }
                    )
                }
                , 1e3)
            }
            stopPolling() {
                this.pollTimer && (clearInterval(this.pollTimer),
                this.pollTimer = null)
            }
            attachListener() {
                window.addEventListener("storage", this.boundEventHandler)
            }
            detachListener() {
                window.removeEventListener("storage", this.boundEventHandler)
            }
            _addListener(e, t) {
                0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
                this.listeners[e] || (this.listeners[e] = new Set,
                this.localCache[e] = this.storage.getItem(e)),
                this.listeners[e].add(t)
            }
            _removeListener(e, t) {
                this.listeners[e] && (this.listeners[e].delete(t),
                0 === this.listeners[e].size && delete this.listeners[e]),
                0 === Object.keys(this.listeners).length && (this.detachListener(),
                this.stopPolling())
            }
            async _set(e, t) {
                await super._set(e, t),
                this.localCache[e] = JSON.stringify(t)
            }
            async _get(e) {
                let t = await super._get(e);
                return this.localCache[e] = JSON.stringify(t),
                t
            }
            async _remove(e) {
                await super._remove(e),
                delete this.localCache[e]
            }
        }
        e2.type = "LOCAL";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class e3 extends e1 {
            constructor() {
                super( () => window.sessionStorage, "SESSION")
            }
            _addListener(e, t) {}
            _removeListener(e, t) {}
        }
        e3.type = "SESSION";
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class e4 {
            constructor(e) {
                this.eventTarget = e,
                this.handlersMap = {},
                this.boundEventHandler = this.handleEvent.bind(this)
            }
            static _getInstance(e) {
                let t = this.receivers.find(t => t.isListeningto(e));
                if (t)
                    return t;
                let n = new e4(e);
                return this.receivers.push(n),
                n
            }
            isListeningto(e) {
                return this.eventTarget === e
            }
            async handleEvent(e) {
                let {eventId: t, eventType: n, data: r} = e.data
                  , i = this.handlersMap[n];
                if (!(null == i ? void 0 : i.size))
                    return;
                e.ports[0].postMessage({
                    status: "ack",
                    eventId: t,
                    eventType: n
                });
                let s = Array.from(i).map(async t => t(e.origin, r))
                  , a = await Promise.all(s.map(async e => {
                    try {
                        let t = await e;
                        return {
                            fulfilled: !0,
                            value: t
                        }
                    } catch (e) {
                        return {
                            fulfilled: !1,
                            reason: e
                        }
                    }
                }
                ));
                e.ports[0].postMessage({
                    status: "done",
                    eventId: t,
                    eventType: n,
                    response: a
                })
            }
            _subscribe(e, t) {
                0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler),
                this.handlersMap[e] || (this.handlersMap[e] = new Set),
                this.handlersMap[e].add(t)
            }
            _unsubscribe(e, t) {
                this.handlersMap[e] && t && this.handlersMap[e].delete(t),
                t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e],
                0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function e6(e="", t=10) {
            let n = "";
            for (let e = 0; e < t; e++)
                n += Math.floor(10 * Math.random());
            return e + n
        }
        e4.receivers = [];
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class e5 {
            constructor(e) {
                this.target = e,
                this.handlers = new Set
            }
            removeMessageHandler(e) {
                e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage),
                e.messageChannel.port1.close()),
                this.handlers.delete(e)
            }
            async _send(e, t, n=50) {
                let r, i;
                let s = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                if (!s)
                    throw Error("connection_unavailable");
                return new Promise( (a, o) => {
                    let l = e6("", 20);
                    s.port1.start();
                    let u = setTimeout( () => {
                        o(Error("unsupported_event"))
                    }
                    , n);
                    i = {
                        messageChannel: s,
                        onMessage(e) {
                            if (e.data.eventId === l)
                                switch (e.data.status) {
                                case "ack":
                                    clearTimeout(u),
                                    r = setTimeout( () => {
                                        o(Error("timeout"))
                                    }
                                    , 3e3);
                                    break;
                                case "done":
                                    clearTimeout(r),
                                    a(e.data.response);
                                    break;
                                default:
                                    clearTimeout(u),
                                    clearTimeout(r),
                                    o(Error("invalid_response"))
                                }
                        }
                    },
                    this.handlers.add(i),
                    s.port1.addEventListener("message", i.onMessage),
                    this.target.postMessage({
                        eventType: e,
                        eventId: l,
                        data: t
                    }, [s.port2])
                }
                ).finally( () => {
                    i && this.removeMessageHandler(i)
                }
                )
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function e8() {
            return window
        }
        /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function e7() {
            return void 0 !== e8().WorkerGlobalScope && "function" == typeof e8().importScripts
        }
        async function e9() {
            if (!(null == navigator ? void 0 : navigator.serviceWorker))
                return null;
            try {
                let e = await navigator.serviceWorker.ready;
                return e.active
            } catch (e) {
                return null
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let te = "firebaseLocalStorageDb"
          , tt = "firebaseLocalStorage"
          , tn = "fbase_key";
        class tr {
            constructor(e) {
                this.request = e
            }
            toPromise() {
                return new Promise( (e, t) => {
                    this.request.addEventListener("success", () => {
                        e(this.request.result)
                    }
                    ),
                    this.request.addEventListener("error", () => {
                        t(this.request.error)
                    }
                    )
                }
                )
            }
        }
        function ti(e, t) {
            return e.transaction([tt], t ? "readwrite" : "readonly").objectStore(tt)
        }
        function ts() {
            let e = indexedDB.open(te, 1);
            return new Promise( (t, n) => {
                e.addEventListener("error", () => {
                    n(e.error)
                }
                ),
                e.addEventListener("upgradeneeded", () => {
                    let t = e.result;
                    try {
                        t.createObjectStore(tt, {
                            keyPath: tn
                        })
                    } catch (e) {
                        n(e)
                    }
                }
                ),
                e.addEventListener("success", async () => {
                    let n = e.result;
                    n.objectStoreNames.contains(tt) ? t(n) : (n.close(),
                    await function() {
                        let e = indexedDB.deleteDatabase(te);
                        return new tr(e).toPromise()
                    }(),
                    t(await ts()))
                }
                )
            }
            )
        }
        async function ta(e, t, n) {
            let r = ti(e, !0).put({
                [tn]: t,
                value: n
            });
            return new tr(r).toPromise()
        }
        async function to(e, t) {
            let n = ti(e, !1).get(t)
              , r = await new tr(n).toPromise();
            return void 0 === r ? null : r.value
        }
        function tl(e, t) {
            let n = ti(e, !0).delete(t);
            return new tr(n).toPromise()
        }
        class tu {
            constructor() {
                this.type = "LOCAL",
                this._shouldAllowMigration = !0,
                this.listeners = {},
                this.localCache = {},
                this.pollTimer = null,
                this.pendingWrites = 0,
                this.receiver = null,
                this.sender = null,
                this.serviceWorkerReceiverAvailable = !1,
                this.activeServiceWorker = null,
                this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then( () => {}
                , () => {}
                )
            }
            async _openDb() {
                return this.db || (this.db = await ts()),
                this.db
            }
            async _withRetries(e) {
                let t = 0;
                for (; ; )
                    try {
                        let t = await this._openDb();
                        return await e(t)
                    } catch (e) {
                        if (t++ > 3)
                            throw e;
                        this.db && (this.db.close(),
                        this.db = void 0)
                    }
            }
            async initializeServiceWorkerMessaging() {
                return e7() ? this.initializeReceiver() : this.initializeSender()
            }
            async initializeReceiver() {
                this.receiver = e4._getInstance(e7() ? self : null),
                this.receiver._subscribe("keyChanged", async (e, t) => {
                    let n = await this._poll();
                    return {
                        keyProcessed: n.includes(t.key)
                    }
                }
                ),
                this.receiver._subscribe("ping", async (e, t) => ["keyChanged"])
            }
            async initializeSender() {
                var e, t;
                if (this.activeServiceWorker = await e9(),
                !this.activeServiceWorker)
                    return;
                this.sender = new e5(this.activeServiceWorker);
                let n = await this.sender._send("ping", {}, 800);
                n && (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = n[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
            }
            async notifyServiceWorker(e) {
                var t;
                if (this.sender && this.activeServiceWorker && ((null === (t = null == navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker)
                    try {
                        await this.sender._send("keyChanged", {
                            key: e
                        }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                    } catch (e) {}
            }
            async _isAvailable() {
                try {
                    if (!indexedDB)
                        return !1;
                    let e = await ts();
                    return await ta(e, e0, "1"),
                    await tl(e, e0),
                    !0
                } catch (e) {}
                return !1
            }
            async _withPendingWrite(e) {
                this.pendingWrites++;
                try {
                    await e()
                } finally {
                    this.pendingWrites--
                }
            }
            async _set(e, t) {
                return this._withPendingWrite(async () => (await this._withRetries(n => ta(n, e, t)),
                this.localCache[e] = t,
                this.notifyServiceWorker(e)))
            }
            async _get(e) {
                let t = await this._withRetries(t => to(t, e));
                return this.localCache[e] = t,
                t
            }
            async _remove(e) {
                return this._withPendingWrite(async () => (await this._withRetries(t => tl(t, e)),
                delete this.localCache[e],
                this.notifyServiceWorker(e)))
            }
            async _poll() {
                let e = await this._withRetries(e => {
                    let t = ti(e, !1).getAll();
                    return new tr(t).toPromise()
                }
                );
                if (!e || 0 !== this.pendingWrites)
                    return [];
                let t = []
                  , n = new Set;
                for (let {fbase_key: r, value: i} of e)
                    n.add(r),
                    JSON.stringify(this.localCache[r]) !== JSON.stringify(i) && (this.notifyListeners(r, i),
                    t.push(r));
                for (let e of Object.keys(this.localCache))
                    this.localCache[e] && !n.has(e) && (this.notifyListeners(e, null),
                    t.push(e));
                return t
            }
            notifyListeners(e, t) {
                this.localCache[e] = t;
                let n = this.listeners[e];
                if (n)
                    for (let e of Array.from(n))
                        e(t)
            }
            startPolling() {
                this.stopPolling(),
                this.pollTimer = setInterval(async () => this._poll(), 800)
            }
            stopPolling() {
                this.pollTimer && (clearInterval(this.pollTimer),
                this.pollTimer = null)
            }
            _addListener(e, t) {
                0 === Object.keys(this.listeners).length && this.startPolling(),
                this.listeners[e] || (this.listeners[e] = new Set,
                this._get(e)),
                this.listeners[e].add(t)
            }
            _removeListener(e, t) {
                this.listeners[e] && (this.listeners[e].delete(t),
                0 === this.listeners[e].size && delete this.listeners[e]),
                0 === Object.keys(this.listeners).length && this.stopPolling()
            }
        }
        function tc(e) {
            return `__${e}${Math.floor(1e6 * Math.random())}`
        }
        async function th(e, t, n) {
            var r, i, s;
            let a = await n.verify();
            try {
                let o;
                if (y("string" == typeof a, e, "argument-error"),
                y("recaptcha" === n.type, e, "argument-error"),
                o = "string" == typeof t ? {
                    phoneNumber: t
                } : t,
                "session"in o) {
                    let t = o.session;
                    if ("phoneNumber"in o) {
                        y("enroll" === t.type, e, "internal-error");
                        let n = await (i = {
                            idToken: t.credential,
                            phoneEnrollmentInfo: {
                                phoneNumber: o.phoneNumber,
                                recaptchaToken: a
                            }
                        },
                        N(e, "POST", "/v2/accounts/mfaEnrollment:start", k(e, i)));
                        return n.phoneSessionInfo.sessionInfo
                    }
                    {
                        y("signin" === t.type, e, "internal-error");
                        let n = (null === (r = o.multiFactorHint) || void 0 === r ? void 0 : r.uid) || o.multiFactorUid;
                        y(n, e, "missing-multi-factor-info");
                        let i = await (s = {
                            mfaPendingCredential: t.credential,
                            mfaEnrollmentId: n,
                            phoneSignInInfo: {
                                recaptchaToken: a
                            }
                        },
                        N(e, "POST", "/v2/accounts/mfaSignIn:start", k(e, s)));
                        return i.phoneResponseInfo.sessionInfo
                    }
                }
                {
                    let {sessionInfo: t} = await eC(e, {
                        phoneNumber: o.phoneNumber,
                        recaptchaToken: a
                    });
                    return t
                }
            } finally {
                n._reset()
            }
        }
        tu.type = "LOCAL",
        tc("rcb"),
        new I(3e4,6e4);
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class td {
            constructor(e) {
                this.providerId = td.PROVIDER_ID,
                this.auth = ed(e)
            }
            verifyPhoneNumber(e, t) {
                return th(this.auth, e, (0,
                i.m9)(t))
            }
            static credential(e, t) {
                return ex._fromVerification(e, t)
            }
            static credentialFromResult(e) {
                return td.credentialFromTaggedObject(e)
            }
            static credentialFromError(e) {
                return td.credentialFromTaggedObject(e.customData || {})
            }
            static credentialFromTaggedObject({_tokenResponse: e}) {
                if (!e)
                    return null;
                let {phoneNumber: t, temporaryProof: n} = e;
                return t && n ? ex._fromTokenResponse(t, n) : null
            }
        }
        /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function tf(e, t) {
            return t ? b(t) : (y(e._popupRedirectResolver, e, "argument-error"),
            e._popupRedirectResolver)
        }
        td.PROVIDER_ID = "phone",
        td.PHONE_SIGN_IN_METHOD = "phone";
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class tp extends em {
            constructor(e) {
                super("custom", "custom"),
                this.params = e
            }
            _getIdTokenResponse(e) {
                return eT(e, this._buildIdpRequest())
            }
            _linkToIdToken(e, t) {
                return eT(e, this._buildIdpRequest(t))
            }
            _getReauthenticationResolver(e) {
                return eT(e, this._buildIdpRequest())
            }
            _buildIdpRequest(e) {
                let t = {
                    requestUri: this.params.requestUri,
                    sessionId: this.params.sessionId,
                    postBody: this.params.postBody,
                    tenantId: this.params.tenantId,
                    pendingToken: this.params.pendingToken,
                    returnSecureToken: !0,
                    returnIdpCredential: !0
                };
                return e && (t.idToken = e),
                t
            }
        }
        function tg(e) {
            return eG(e.auth, new tp(e), e.bypassAuthState)
        }
        function tm(e) {
            let {auth: t, user: n} = e;
            return y(n, t, "internal-error"),
            e$(n, new tp(e), e.bypassAuthState)
        }
        async function ty(e) {
            let {auth: t, user: n} = e;
            return y(n, t, "internal-error"),
            eK(n, new tp(e), e.bypassAuthState)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class tv {
            constructor(e, t, n, r, i=!1) {
                this.auth = e,
                this.resolver = n,
                this.user = r,
                this.bypassAuthState = i,
                this.pendingPromise = null,
                this.eventManager = null,
                this.filter = Array.isArray(t) ? t : [t]
            }
            execute() {
                return new Promise(async (e, t) => {
                    this.pendingPromise = {
                        resolve: e,
                        reject: t
                    };
                    try {
                        this.eventManager = await this.resolver._initialize(this.auth),
                        await this.onExecution(),
                        this.eventManager.registerConsumer(this)
                    } catch (e) {
                        this.reject(e)
                    }
                }
                )
            }
            async onAuthEvent(e) {
                let {urlResponse: t, sessionId: n, postBody: r, tenantId: i, error: s, type: a} = e;
                if (s) {
                    this.reject(s);
                    return
                }
                let o = {
                    auth: this.auth,
                    requestUri: t,
                    sessionId: n,
                    tenantId: i || void 0,
                    postBody: r || void 0,
                    user: this.user,
                    bypassAuthState: this.bypassAuthState
                };
                try {
                    this.resolve(await this.getIdpTask(a)(o))
                } catch (e) {
                    this.reject(e)
                }
            }
            onError(e) {
                this.reject(e)
            }
            getIdpTask(e) {
                switch (e) {
                case "signInViaPopup":
                case "signInViaRedirect":
                    return tg;
                case "linkViaPopup":
                case "linkViaRedirect":
                    return ty;
                case "reauthViaPopup":
                case "reauthViaRedirect":
                    return tm;
                default:
                    f(this.auth, "internal-error")
                }
            }
            resolve(e) {
                this.pendingPromise || v("Pending promise was never set"),
                this.pendingPromise.resolve(e),
                this.unregisterAndCleanUp()
            }
            reject(e) {
                this.pendingPromise || v("Pending promise was never set"),
                this.pendingPromise.reject(e),
                this.unregisterAndCleanUp()
            }
            unregisterAndCleanUp() {
                this.eventManager && this.eventManager.unregisterConsumer(this),
                this.pendingPromise = null,
                this.cleanUp()
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let tw = new I(2e3,1e4);
        async function tb(e, t, n) {
            let r = ed(e);
            !function(e, t, n) {
                if (!(t instanceof n))
                    throw n.name !== t.constructor.name && f(e, "argument-error"),
                    g(e, "argument-error", `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
            }(e, t, eL);
            let i = tf(r, n)
              , s = new t_(r,"signInViaPopup",t,i);
            return s.executeNotNull()
        }
        class t_ extends tv {
            constructor(e, t, n, r, i) {
                super(e, t, r, i),
                this.provider = n,
                this.authWindow = null,
                this.pollId = null,
                t_.currentPopupAction && t_.currentPopupAction.cancel(),
                t_.currentPopupAction = this
            }
            async executeNotNull() {
                let e = await this.execute();
                return y(e, this.auth, "internal-error"),
                e
            }
            async onExecution() {
                1 === this.filter.length || v("Popup operations only handle one event");
                let e = e6();
                this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e),
                this.authWindow.associatedEvent = e,
                this.resolver._originValidation(this.auth).catch(e => {
                    this.reject(e)
                }
                ),
                this.resolver._isIframeWebStorageSupported(this.auth, e => {
                    e || this.reject(p(this.auth, "web-storage-unsupported"))
                }
                ),
                this.pollUserCancellation()
            }
            get eventId() {
                var e;
                return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null
            }
            cancel() {
                this.reject(p(this.auth, "cancelled-popup-request"))
            }
            cleanUp() {
                this.authWindow && this.authWindow.close(),
                this.pollId && window.clearTimeout(this.pollId),
                this.authWindow = null,
                this.pollId = null,
                t_.currentPopupAction = null
            }
            pollUserCancellation() {
                let e = () => {
                    var t, n;
                    if (null === (n = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === n ? void 0 : n.closed) {
                        this.pollId = window.setTimeout( () => {
                            this.pollId = null,
                            this.reject(p(this.auth, "popup-closed-by-user"))
                        }
                        , 2e3);
                        return
                    }
                    this.pollId = window.setTimeout(e, tw.get())
                }
                ;
                e()
            }
        }
        t_.currentPopupAction = null;
        let tE = new Map;
        class tI extends tv {
            constructor(e, t, n=!1) {
                super(e, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], t, void 0, n),
                this.eventId = null
            }
            async execute() {
                let e = tE.get(this.auth._key());
                if (!e) {
                    try {
                        let t = await tT(this.resolver, this.auth)
                          , n = t ? await super.execute() : null;
                        e = () => Promise.resolve(n)
                    } catch (t) {
                        e = () => Promise.reject(t)
                    }
                    tE.set(this.auth._key(), e)
                }
                return this.bypassAuthState || tE.set(this.auth._key(), () => Promise.resolve(null)),
                e()
            }
            async onAuthEvent(e) {
                if ("signInViaRedirect" === e.type)
                    return super.onAuthEvent(e);
                if ("unknown" === e.type) {
                    this.resolve(null);
                    return
                }
                if (e.eventId) {
                    let t = await this.auth._redirectUserForId(e.eventId);
                    if (t)
                        return this.user = t,
                        super.onAuthEvent(e);
                    this.resolve(null)
                }
            }
            async onExecution() {}
            cleanUp() {}
        }
        async function tT(e, t) {
            let n = J("pendingRedirect", t.config.apiKey, t.name)
              , r = b(e._redirectPersistence);
            if (!await r._isAvailable())
                return !1;
            let i = await r._get(n) === "true";
            return await r._remove(n),
            i
        }
        function tS(e, t) {
            tE.set(e._key(), t)
        }
        async function tC(e, t, n=!1) {
            let r = ed(e)
              , i = tf(r, t)
              , s = new tI(r,i,n)
              , a = await s.execute();
            return a && !n && (delete a.user._redirectEventId,
            await r._persistUserIfCurrent(a.user),
            await r._setRedirectUser(null, t)),
            a
        }
        class tA {
            constructor(e) {
                this.auth = e,
                this.cachedEventUids = new Set,
                this.consumers = new Set,
                this.queuedRedirectEvent = null,
                this.hasHandledPotentialRedirect = !1,
                this.lastProcessedEventTime = Date.now()
            }
            registerConsumer(e) {
                this.consumers.add(e),
                this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e),
                this.saveEventToCache(this.queuedRedirectEvent),
                this.queuedRedirectEvent = null)
            }
            unregisterConsumer(e) {
                this.consumers.delete(e)
            }
            onEvent(e) {
                if (this.hasEventBeenHandled(e))
                    return !1;
                let t = !1;
                return this.consumers.forEach(n => {
                    this.isEventForConsumer(e, n) && (t = !0,
                    this.sendToConsumer(e, n),
                    this.saveEventToCache(e))
                }
                ),
                this.hasHandledPotentialRedirect || !function(e) {
                    switch (e.type) {
                    case "signInViaRedirect":
                    case "linkViaRedirect":
                    case "reauthViaRedirect":
                        return !0;
                    case "unknown":
                        return tN(e);
                    default:
                        return !1
                    }
                }(e) || (this.hasHandledPotentialRedirect = !0,
                t || (this.queuedRedirectEvent = e,
                t = !0)),
                t
            }
            sendToConsumer(e, t) {
                var n;
                if (e.error && !tN(e)) {
                    let r = (null === (n = e.error.code) || void 0 === n ? void 0 : n.split("auth/")[1]) || "internal-error";
                    t.onError(p(this.auth, r))
                } else
                    t.onAuthEvent(e)
            }
            isEventForConsumer(e, t) {
                let n = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
                return t.filter.includes(e.type) && n
            }
            hasEventBeenHandled(e) {
                return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(),
                this.cachedEventUids.has(tk(e))
            }
            saveEventToCache(e) {
                this.cachedEventUids.add(tk(e)),
                this.lastProcessedEventTime = Date.now()
            }
        }
        function tk(e) {
            return [e.type, e.eventId, e.sessionId, e.tenantId].filter(e => e).join("-")
        }
        function tN({type: e, error: t}) {
            return "unknown" === e && (null == t ? void 0 : t.code) === "auth/no-auth-event"
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function tO(e, t={}) {
            return N(e, "GET", "/v1/projects", t)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let tx = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
          , tR = /^https?/;
        async function tD(e) {
            if (e.config.emulator)
                return;
            let {authorizedDomains: t} = await tO(e);
            for (let e of t)
                try {
                    if (function(e) {
                        let t = _()
                          , {protocol: n, hostname: r} = new URL(t);
                        if (e.startsWith("chrome-extension://")) {
                            let i = new URL(e);
                            return "" === i.hostname && "" === r ? "chrome-extension:" === n && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === n && i.hostname === r
                        }
                        if (!tR.test(n))
                            return !1;
                        if (tx.test(e))
                            return r === e;
                        let i = e.replace(/\./g, "\\.")
                          , s = RegExp("^(.+\\." + i + "|" + i + ")$", "i");
                        return s.test(r)
                    }(e))
                        return
                } catch (e) {}
            f(e, "unauthorized-domain")
        }
        /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let tL = new I(3e4,6e4);
        function tP() {
            let e = e8().___jsl;
            if (null == e ? void 0 : e.H) {
                for (let t of Object.keys(e.H))
                    if (e.H[t].r = e.H[t].r || [],
                    e.H[t].L = e.H[t].L || [],
                    e.H[t].r = [...e.H[t].L],
                    e.CP)
                        for (let t = 0; t < e.CP.length; t++)
                            e.CP[t] = null
            }
        }
        let tM = null
          , tj = new I(5e3,15e3)
          , tU = {
            style: {
                position: "absolute",
                top: "-100px",
                width: "1px",
                height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
        }
          , tV = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
        async function tF(e) {
            let t = await (tM = tM || new Promise( (t, n) => {
                var r, i, s, a;
                function o() {
                    tP(),
                    gapi.load("gapi.iframes", {
                        callback: () => {
                            t(gapi.iframes.getContext())
                        }
                        ,
                        ontimeout: () => {
                            tP(),
                            n(p(e, "network-request-failed"))
                        }
                        ,
                        timeout: tL.get()
                    })
                }
                if (null === (i = null === (r = e8().gapi) || void 0 === r ? void 0 : r.iframes) || void 0 === i ? void 0 : i.Iframe)
                    t(gapi.iframes.getContext());
                else if (null === (s = e8().gapi) || void 0 === s ? void 0 : s.load)
                    o();
                else {
                    let t = tc("iframefcb");
                    return e8()[t] = () => {
                        gapi.load ? o() : n(p(e, "network-request-failed"))
                    }
                    ,
                    (a = `https://apis.google.com/js/api.js?onload=${t}`,
                    new Promise( (e, t) => {
                        var n, r;
                        let i = document.createElement("script");
                        i.setAttribute("src", a),
                        i.onload = e,
                        i.onerror = e => {
                            let n = p("internal-error");
                            n.customData = e,
                            t(n)
                        }
                        ,
                        i.type = "text/javascript",
                        i.charset = "UTF-8",
                        (null !== (r = null === (n = document.getElementsByTagName("head")) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : document).appendChild(i)
                    }
                    )).catch(e => n(e))
                }
            }
            ).catch(e => {
                throw tM = null,
                e
            }
            ))
              , n = e8().gapi;
            return y(n, e, "internal-error"),
            t.open({
                where: document.body,
                url: function(e) {
                    let t = e.config;
                    y(t.authDomain, e, "auth-domain-config-required");
                    let n = t.emulator ? T(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`
                      , r = {
                        apiKey: t.apiKey,
                        appName: e.name,
                        v: s.Jn
                    }
                      , a = tV.get(e.config.apiHost);
                    a && (r.eid = a);
                    let o = e._getFrameworks();
                    return o.length && (r.fw = o.join(",")),
                    `${n}?${(0,
                    i.xO)(r).slice(1)}`
                }(e),
                messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                attributes: tU,
                dontclear: !0
            }, t => new Promise(async (n, r) => {
                await t.restyle({
                    setHideOnLeave: !1
                });
                let i = p(e, "network-request-failed")
                  , s = e8().setTimeout( () => {
                    r(i)
                }
                , tj.get());
                function a() {
                    e8().clearTimeout(s),
                    n(t)
                }
                t.ping(a).then(a, () => {
                    r(i)
                }
                )
            }
            ))
        }
        /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let tz = {
            location: "yes",
            resizable: "yes",
            statusbar: "yes",
            toolbar: "no"
        };
        class tB {
            constructor(e) {
                this.window = e,
                this.associatedEvent = null
            }
            close() {
                if (this.window)
                    try {
                        this.window.close()
                    } catch (e) {}
            }
        }
        function tq(e, t, n, r, a, o) {
            y(e.config.authDomain, e, "auth-domain-config-required"),
            y(e.config.apiKey, e, "invalid-api-key");
            let l = {
                apiKey: e.config.apiKey,
                appName: e.name,
                authType: n,
                redirectUrl: r,
                v: s.Jn,
                eventId: a
            };
            if (t instanceof eL)
                for (let[n,r] of (t.setDefaultLanguage(e.languageCode),
                l.providerId = t.providerId || "",
                (0,
                i.xb)(t.getCustomParameters()) || (l.customParameters = JSON.stringify(t.getCustomParameters())),
                Object.entries(o || {})))
                    l[n] = r;
            if (t instanceof eP) {
                let e = t.getScopes().filter(e => "" !== e);
                e.length > 0 && (l.scopes = e.join(","))
            }
            e.tenantId && (l.tid = e.tenantId);
            let u = l;
            for (let e of Object.keys(u))
                void 0 === u[e] && delete u[e];
            return `${function({config: e}) {
                return e.emulator ? T(e, "emulator/auth/handler") : `https://${e.authDomain}/__/auth/handler`
            }(e)}?${(0,
            i.xO)(u).slice(1)}`
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let tH = "webStorageSupport"
          , tK = class {
            constructor() {
                this.eventManagers = {},
                this.iframes = {},
                this.originValidationPromises = {},
                this._redirectPersistence = e3,
                this._completeRedirectFn = tC,
                this._overrideRedirectResult = tS
            }
            async _openPopup(e, t, n, r) {
                var s;
                (null === (s = this.eventManagers[e._key()]) || void 0 === s ? void 0 : s.manager) || v("_initialize() not called before _openPopup()");
                let a = tq(e, t, n, _(), r);
                return function(e, t, n, r=500, s=600) {
                    let a = Math.max((window.screen.availHeight - s) / 2, 0).toString()
                      , o = Math.max((window.screen.availWidth - r) / 2, 0).toString()
                      , l = ""
                      , u = Object.assign(Object.assign({}, tz), {
                        width: r.toString(),
                        height: s.toString(),
                        top: a,
                        left: o
                    })
                      , c = (0,
                    i.z$)().toLowerCase();
                    n && (l = en(c) ? "_blank" : n),
                    ee(c) && (t = t || "http://localhost",
                    u.scrollbars = "yes");
                    let h = Object.entries(u).reduce( (e, [t,n]) => `${e}${t}=${n},`, "");
                    if (function(e=(0,
                    i.z$)()) {
                        var t;
                        return eo(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone)
                    }(c) && "_self" !== l)
                        return function(e, t) {
                            let n = document.createElement("a");
                            n.href = e,
                            n.target = t;
                            let r = document.createEvent("MouseEvent");
                            r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
                            n.dispatchEvent(r)
                        }(t || "", l),
                        new tB(null);
                    let d = window.open(t || "", l, h);
                    y(d, e, "popup-blocked");
                    try {
                        d.focus()
                    } catch (e) {}
                    return new tB(d)
                }(e, a, e6())
            }
            async _openRedirect(e, t, n, r) {
                var i;
                return await this._originValidation(e),
                i = tq(e, t, n, _(), r),
                e8().location.href = i,
                new Promise( () => {}
                )
            }
            _initialize(e) {
                let t = e._key();
                if (this.eventManagers[t]) {
                    let {manager: e, promise: n} = this.eventManagers[t];
                    return e ? Promise.resolve(e) : (n || v("If manager is not set, promise should be"),
                    n)
                }
                let n = this.initAndGetManager(e);
                return this.eventManagers[t] = {
                    promise: n
                },
                n.catch( () => {
                    delete this.eventManagers[t]
                }
                ),
                n
            }
            async initAndGetManager(e) {
                let t = await tF(e)
                  , n = new tA(e);
                return t.register("authEvent", t => {
                    y(null == t ? void 0 : t.authEvent, e, "invalid-auth-event");
                    let r = n.onEvent(t.authEvent);
                    return {
                        status: r ? "ACK" : "ERROR"
                    }
                }
                , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
                this.eventManagers[e._key()] = {
                    manager: n
                },
                this.iframes[e._key()] = t,
                n
            }
            _isIframeWebStorageSupported(e, t) {
                let n = this.iframes[e._key()];
                n.send(tH, {
                    type: tH
                }, n => {
                    var r;
                    let i = null === (r = null == n ? void 0 : n[0]) || void 0 === r ? void 0 : r[tH];
                    void 0 !== i && t(!!i),
                    f(e, "internal-error")
                }
                , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
            }
            _originValidation(e) {
                let t = e._key();
                return this.originValidationPromises[t] || (this.originValidationPromises[t] = tD(e)),
                this.originValidationPromises[t]
            }
            get _shouldInitProactively() {
                return el() || et() || eo()
            }
        }
        ;
        class t$ {
            constructor(e) {
                this.factorId = e
            }
            _process(e, t, n) {
                switch (t.type) {
                case "enroll":
                    return this._finalizeEnroll(e, t.credential, n);
                case "signin":
                    return this._finalizeSignIn(e, t.credential);
                default:
                    return v("unexpected MultiFactorSessionType")
                }
            }
        }
        class tG extends t$ {
            constructor(e) {
                super("phone"),
                this.credential = e
            }
            static _fromCredential(e) {
                return new tG(e)
            }
            _finalizeEnroll(e, t, n) {
                return N(e, "POST", "/v2/accounts/mfaEnrollment:finalize", k(e, {
                    idToken: t,
                    displayName: n,
                    phoneVerificationInfo: this.credential._makeVerificationRequest()
                }))
            }
            _finalizeSignIn(e, t) {
                return N(e, "POST", "/v2/accounts/mfaSignIn:finalize", k(e, {
                    mfaPendingCredential: t,
                    phoneVerificationInfo: this.credential._makeVerificationRequest()
                }))
            }
        }
        var tW = "@firebase/auth"
          , tQ = "0.21.4";
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class tX {
            constructor(e) {
                this.auth = e,
                this.internalListeners = new Map
            }
            getUid() {
                var e;
                return this.assertAuthConfigured(),
                (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null
            }
            async getToken(e) {
                if (this.assertAuthConfigured(),
                await this.auth._initializationPromise,
                !this.auth.currentUser)
                    return null;
                let t = await this.auth.currentUser.getIdToken(e);
                return {
                    accessToken: t
                }
            }
            addAuthTokenListener(e) {
                if (this.assertAuthConfigured(),
                this.internalListeners.has(e))
                    return;
                let t = this.auth.onIdTokenChanged(t => {
                    e((null == t ? void 0 : t.stsTokenManager.accessToken) || null)
                }
                );
                this.internalListeners.set(e, t),
                this.updateProactiveRefresh()
            }
            removeAuthTokenListener(e) {
                this.assertAuthConfigured();
                let t = this.internalListeners.get(e);
                t && (this.internalListeners.delete(e),
                t(),
                this.updateProactiveRefresh())
            }
            assertAuthConfigured() {
                y(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
            }
            updateProactiveRefresh() {
                this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
            }
        }
        let tJ = (0,
        i.Pz)("authIdTokenMaxAge") || 300
          , tY = null
          , tZ = e => async t => {
            let n = t && await t.getIdTokenResult()
              , r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
            if (r && r > tJ)
                return;
            let i = null == n ? void 0 : n.token;
            tY !== i && (tY = i,
            await fetch(e, {
                method: i ? "POST" : "DELETE",
                headers: i ? {
                    Authorization: `Bearer ${i}`
                } : {}
            }))
        }
        ;
        function t0(e=(0,
        s.Mq)()) {
            let t = (0,
            s.qX)(e, "auth");
            if (t.isInitialized())
                return t.getImmediate();
            let n = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            function(e, t) {
                let n = (0,
                s.qX)(e, "auth");
                if (n.isInitialized()) {
                    let e = n.getImmediate()
                      , r = n.getOptions();
                    if ((0,
                    i.vZ)(r, null != t ? t : {}))
                        return e;
                    f(e, "already-initialized")
                }
                let r = n.initialize({
                    options: t
                });
                return r
            }(e, {
                popupRedirectResolver: tK,
                persistence: [tu, e2, e3]
            })
              , r = (0,
            i.Pz)("authTokenSyncURL");
            if (r) {
                var a, o;
                let e = tZ(r);
                a = () => e(n.currentUser),
                (0,
                i.m9)(n).beforeAuthStateChanged(e, a),
                o = t => e(t),
                (0,
                i.m9)(n).onIdTokenChanged(o, void 0, void 0)
            }
            let l = (0,
            i.q4)("auth");
            return l && function(e, t, n) {
                let r = ed(e);
                y(r._canInitEmulator, r, "emulator-config-failed"),
                y(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
                let i = !!(null == n ? void 0 : n.disableWarnings)
                  , s = ep(t)
                  , {host: a, port: o} = function(e) {
                    let t = ep(e)
                      , n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
                    if (!n)
                        return {
                            host: "",
                            port: null
                        };
                    let r = n[2].split("@").pop() || ""
                      , i = /^(\[[^\]]+\])(:|$)/.exec(r);
                    if (i) {
                        let e = i[1];
                        return {
                            host: e,
                            port: eg(r.substr(e.length + 1))
                        }
                    }
                    {
                        let[e,t] = r.split(":");
                        return {
                            host: e,
                            port: eg(t)
                        }
                    }
                }(t)
                  , l = null === o ? "" : `:${o}`;
                r.config.emulator = {
                    url: `${s}//${a}${l}/`
                },
                r.settings.appVerificationDisabledForTesting = !0,
                r.emulatorConfig = Object.freeze({
                    host: a,
                    port: o,
                    protocol: s.replace(":", ""),
                    options: Object.freeze({
                        disableWarnings: i
                    })
                }),
                i || function() {
                    function e() {
                        let e = document.createElement("p")
                          , t = e.style;
                        e.innerText = "Running in emulator mode. Do not use with production credentials.",
                        t.position = "fixed",
                        t.width = "100%",
                        t.backgroundColor = "#ffffff",
                        t.border = ".1em solid #000000",
                        t.color = "#b50000",
                        t.bottom = "0px",
                        t.left = "0px",
                        t.margin = "0px",
                        t.zIndex = "10000",
                        t.textAlign = "center",
                        e.classList.add("firebase-emulator-warning"),
                        document.body.appendChild(e)
                    }
                    "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
                    "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e())
                }()
            }(n, `http://${l}`),
            n
        }
        r = "Browser",
        (0,
        s.Xd)(new l.wA("auth", (e, {options: t}) => {
            let n = e.getProvider("app").getImmediate()
              , i = e.getProvider("heartbeat")
              , {apiKey: s, authDomain: a} = n.options;
            return ( (e, n) => {
                y(s && !s.includes(":"), "invalid-api-key", {
                    appName: e.name
                }),
                y(!(null == a ? void 0 : a.includes(":")), "argument-error", {
                    appName: e.name
                });
                let i = {
                    apiKey: s,
                    authDomain: a,
                    clientPlatform: r,
                    apiHost: "identitytoolkit.googleapis.com",
                    tokenApiHost: "securetoken.googleapis.com",
                    apiScheme: "https",
                    sdkClientVersion: eu(r)
                }
                  , o = new eh(e,n,i);
                return function(e, t) {
                    let n = (null == t ? void 0 : t.persistence) || []
                      , r = (Array.isArray(n) ? n : [n]).map(b);
                    (null == t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap),
                    e._initializeWithPersistence(r, null == t ? void 0 : t.popupRedirectResolver)
                }(o, t),
                o
            }
            )(n, i)
        }
        ,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback( (e, t, n) => {
            let r = e.getProvider("auth-internal");
            r.initialize()
        }
        )),
        (0,
        s.Xd)(new l.wA("auth-internal",e => {
            let t = ed(e.getProvider("auth").getImmediate());
            return new tX(t)
        }
        ,"PRIVATE").setInstantiationMode("EXPLICIT")),
        (0,
        s.KN)(tW, tQ, /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function(e) {
            switch (e) {
            case "Node":
                return "node";
            case "ReactNative":
                return "rn";
            case "Worker":
                return "webworker";
            case "Cordova":
                return "cordova";
            default:
                return
            }
        }(r)),
        (0,
        s.KN)(tW, tQ, "esm2017")
    },
    3247: function(e, t, n) {
        "use strict";
        n.d(t, {
            ET: function() {
                return o2
            },
            hJ: function() {
                return oy
            },
            oe: function() {
                return o1
            },
            JU: function() {
                return ov
            },
            QT: function() {
                return oJ
            },
            PL: function() {
                return oZ
            },
            ad: function() {
                return oE
            },
            cf: function() {
                return o3
            },
            pl: function() {
                return o0
            }
        });
        var r, i, s, a, o, l, u, c, h = n(5816), d = n(8463), f = n(3333), p = n(4444), g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}, m = {}, y = y || {}, v = g || self;
        function w() {}
        function b(e) {
            var t = typeof e;
            return "array" == (t = "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null") || "object" == t && "number" == typeof e.length
        }
        function _(e) {
            var t = typeof e;
            return "object" == t && null != e || "function" == t
        }
        function E(e, t, n) {
            return e.call.apply(e.bind, arguments)
        }
        function I(e, t, n) {
            if (!e)
                throw Error();
            if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, r),
                    e.apply(t, n)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
        function T(e, t, n) {
            return (T = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? E : I).apply(null, arguments)
        }
        function S(e, t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function() {
                var t = n.slice();
                return t.push.apply(t, arguments),
                e.apply(this, t)
            }
        }
        function C(e, t) {
            function n() {}
            n.prototype = t.prototype,
            e.X = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e,
            e.Wb = function(e, n, r) {
                for (var i = Array(arguments.length - 2), s = 2; s < arguments.length; s++)
                    i[s - 2] = arguments[s];
                return t.prototype[n].apply(e, i)
            }
        }
        function A() {
            this.s = this.s,
            this.o = this.o
        }
        A.prototype.s = !1,
        A.prototype.na = function() {
            this.s || (this.s = !0,
            this.M())
        }
        ,
        A.prototype.M = function() {
            if (this.o)
                for (; this.o.length; )
                    this.o.shift()()
        }
        ;
        let k = Array.prototype.indexOf ? function(e, t) {
            return Array.prototype.indexOf.call(e, t, void 0)
        }
        : function(e, t) {
            if ("string" == typeof e)
                return "string" != typeof t || 1 != t.length ? -1 : e.indexOf(t, 0);
            for (let n = 0; n < e.length; n++)
                if (n in e && e[n] === t)
                    return n;
            return -1
        }
        ;
        function N(e) {
            let t = e.length;
            if (0 < t) {
                let n = Array(t);
                for (let r = 0; r < t; r++)
                    n[r] = e[r];
                return n
            }
            return []
        }
        function O(e, t) {
            for (let t = 1; t < arguments.length; t++) {
                let n = arguments[t];
                if (b(n)) {
                    let t = e.length || 0
                      , r = n.length || 0;
                    e.length = t + r;
                    for (let i = 0; i < r; i++)
                        e[t + i] = n[i]
                } else
                    e.push(n)
            }
        }
        function x(e, t) {
            this.type = e,
            this.g = this.target = t,
            this.defaultPrevented = !1
        }
        x.prototype.h = function() {
            this.defaultPrevented = !0
        }
        ;
        var R = function() {
            if (!v.addEventListener || !Object.defineProperty)
                return !1;
            var e = !1
              , t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            try {
                v.addEventListener("test", w, t),
                v.removeEventListener("test", w, t)
            } catch (e) {}
            return e
        }();
        function D(e) {
            return /^[\s\xa0]*$/.test(e)
        }
        var L = String.prototype.trim ? function(e) {
            return e.trim()
        }
        : function(e) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
        }
        ;
        function P(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function M() {
            var e = v.navigator;
            return e && (e = e.userAgent) ? e : ""
        }
        function j(e) {
            return -1 != M().indexOf(e)
        }
        function U(e) {
            return U[" "](e),
            e
        }
        U[" "] = w;
        var V = j("Opera")
          , F = j("Trident") || j("MSIE")
          , z = j("Edge")
          , B = z || F
          , q = j("Gecko") && !(-1 != M().toLowerCase().indexOf("webkit") && !j("Edge")) && !(j("Trident") || j("MSIE")) && !j("Edge")
          , H = -1 != M().toLowerCase().indexOf("webkit") && !j("Edge");
        function K() {
            var e = v.document;
            return e ? e.documentMode : void 0
        }
        e: {
            var $, G = "", W = ($ = M(),
            q ? /rv:([^\);]+)(\)|;)/.exec($) : z ? /Edge\/([\d\.]+)/.exec($) : F ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($) : H ? /WebKit\/(\S+)/.exec($) : V ? /(?:Version)[ \/]?(\S+)/.exec($) : void 0);
            if (W && (G = W ? W[1] : ""),
            F) {
                var Q = K();
                if (null != Q && Q > parseFloat(G)) {
                    i = String(Q);
                    break e
                }
            }
            i = G
        }
        var X = {}
          , J = v.document && F && (K() || parseInt(i, 10)) || void 0;
        function Y(e, t) {
            if (x.call(this, e ? e.type : ""),
            this.relatedTarget = this.g = this.target = null,
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
            this.key = "",
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
            this.state = null,
            this.pointerId = 0,
            this.pointerType = "",
            this.i = null,
            e) {
                var n = this.type = e.type
                  , r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
                if (this.target = e.target || e.srcElement,
                this.g = t,
                t = e.relatedTarget) {
                    if (q) {
                        e: {
                            try {
                                U(t.nodeName);
                                var i = !0;
                                break e
                            } catch (e) {}
                            i = !1
                        }
                        i || (t = null)
                    }
                } else
                    "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
                this.relatedTarget = t,
                r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX,
                this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY,
                this.screenX = r.screenX || 0,
                this.screenY = r.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX,
                this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY,
                this.screenX = e.screenX || 0,
                this.screenY = e.screenY || 0),
                this.button = e.button,
                this.key = e.key || "",
                this.ctrlKey = e.ctrlKey,
                this.altKey = e.altKey,
                this.shiftKey = e.shiftKey,
                this.metaKey = e.metaKey,
                this.pointerId = e.pointerId || 0,
                this.pointerType = "string" == typeof e.pointerType ? e.pointerType : Z[e.pointerType] || "",
                this.state = e.state,
                this.i = e,
                e.defaultPrevented && Y.X.h.call(this)
            }
        }
        C(Y, x);
        var Z = {
            2: "touch",
            3: "pen",
            4: "mouse"
        };
        Y.prototype.h = function() {
            Y.X.h.call(this);
            var e = this.i;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
        ;
        var ee = "closure_listenable_" + (1e6 * Math.random() | 0)
          , et = 0;
        function en(e, t, n, r, i) {
            this.listener = e,
            this.proxy = null,
            this.src = t,
            this.type = n,
            this.capture = !!r,
            this.ha = i,
            this.key = ++et,
            this.ba = this.ea = !1
        }
        function er(e) {
            e.ba = !0,
            e.listener = null,
            e.proxy = null,
            e.src = null,
            e.ha = null
        }
        function ei(e, t, n) {
            for (let r in e)
                t.call(n, e[r], r, e)
        }
        function es(e) {
            let t = {};
            for (let n in e)
                t[n] = e[n];
            return t
        }
        let ea = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function eo(e, t) {
            let n, r;
            for (let t = 1; t < arguments.length; t++) {
                for (n in r = arguments[t])
                    e[n] = r[n];
                for (let t = 0; t < ea.length; t++)
                    n = ea[t],
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
        }
        function el(e) {
            this.src = e,
            this.g = {},
            this.h = 0
        }
        function eu(e, t) {
            var n = t.type;
            if (n in e.g) {
                var r, i = e.g[n], s = k(i, t);
                (r = 0 <= s) && Array.prototype.splice.call(i, s, 1),
                r && (er(t),
                0 == e.g[n].length && (delete e.g[n],
                e.h--))
            }
        }
        function ec(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var s = e[i];
                if (!s.ba && s.listener == t && !!n == s.capture && s.ha == r)
                    return i
            }
            return -1
        }
        el.prototype.add = function(e, t, n, r, i) {
            var s = e.toString();
            (e = this.g[s]) || (e = this.g[s] = [],
            this.h++);
            var a = ec(e, t, r, i);
            return -1 < a ? (t = e[a],
            n || (t.ea = !1)) : ((t = new en(t,this.src,s,!!r,i)).ea = n,
            e.push(t)),
            t
        }
        ;
        var eh = "closure_lm_" + (1e6 * Math.random() | 0)
          , ed = {};
        function ef(e, t, n, r, i, s) {
            if (!t)
                throw Error("Invalid event type");
            var a = _(i) ? !!i.capture : !!i
              , o = ey(e);
            if (o || (e[eh] = o = new el(e)),
            (n = o.add(t, n, r, a, s)).proxy)
                return n;
            if (r = function e(t) {
                return em.call(e.src, e.listener, t)
            }
            ,
            n.proxy = r,
            r.src = e,
            r.listener = n,
            e.addEventListener)
                R || (i = a),
                void 0 === i && (i = !1),
                e.addEventListener(t.toString(), r, i);
            else if (e.attachEvent)
                e.attachEvent(eg(t.toString()), r);
            else if (e.addListener && e.removeListener)
                e.addListener(r);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            return n
        }
        function ep(e) {
            if ("number" != typeof e && e && !e.ba) {
                var t = e.src;
                if (t && t[ee])
                    eu(t.i, e);
                else {
                    var n = e.type
                      , r = e.proxy;
                    t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(eg(n), r) : t.addListener && t.removeListener && t.removeListener(r),
                    (n = ey(t)) ? (eu(n, e),
                    0 == n.h && (n.src = null,
                    t[eh] = null)) : er(e)
                }
            }
        }
        function eg(e) {
            return e in ed ? ed[e] : ed[e] = "on" + e
        }
        function em(e, t) {
            if (e.ba)
                e = !0;
            else {
                t = new Y(t,this);
                var n = e.listener
                  , r = e.ha || e.src;
                e.ea && ep(e),
                e = n.call(r, t)
            }
            return e
        }
        function ey(e) {
            return (e = e[eh])instanceof el ? e : null
        }
        var ev = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
        function ew(e) {
            return "function" == typeof e ? e : (e[ev] || (e[ev] = function(t) {
                return e.handleEvent(t)
            }
            ),
            e[ev])
        }
        function eb() {
            A.call(this),
            this.i = new el(this),
            this.P = this,
            this.I = null
        }
        function e_(e, t) {
            var n, r = e.I;
            if (r)
                for (n = []; r; r = r.I)
                    n.push(r);
            if (e = e.P,
            r = t.type || t,
            "string" == typeof t)
                t = new x(t,e);
            else if (t instanceof x)
                t.target = t.target || e;
            else {
                var i = t;
                eo(t = new x(r,e), i)
            }
            if (i = !0,
            n)
                for (var s = n.length - 1; 0 <= s; s--) {
                    var a = t.g = n[s];
                    i = eE(a, r, !0, t) && i
                }
            if (i = eE(a = t.g = e, r, !0, t) && i,
            i = eE(a, r, !1, t) && i,
            n)
                for (s = 0; s < n.length; s++)
                    i = eE(a = t.g = n[s], r, !1, t) && i
        }
        function eE(e, t, n, r) {
            if (!(t = e.i.g[String(t)]))
                return !0;
            t = t.concat();
            for (var i = !0, s = 0; s < t.length; ++s) {
                var a = t[s];
                if (a && !a.ba && a.capture == n) {
                    var o = a.listener
                      , l = a.ha || a.src;
                    a.ea && eu(e.i, a),
                    i = !1 !== o.call(l, r) && i
                }
            }
            return i && !r.defaultPrevented
        }
        C(eb, A),
        eb.prototype[ee] = !0,
        eb.prototype.removeEventListener = function(e, t, n, r) {
            !function e(t, n, r, i, s) {
                if (Array.isArray(n))
                    for (var a = 0; a < n.length; a++)
                        e(t, n[a], r, i, s);
                else
                    (i = _(i) ? !!i.capture : !!i,
                    r = ew(r),
                    t && t[ee]) ? (t = t.i,
                    (n = String(n).toString())in t.g && -1 < (r = ec(a = t.g[n], r, i, s)) && (er(a[r]),
                    Array.prototype.splice.call(a, r, 1),
                    0 == a.length && (delete t.g[n],
                    t.h--))) : t && (t = ey(t)) && (n = t.g[n.toString()],
                    t = -1,
                    n && (t = ec(n, r, i, s)),
                    (r = -1 < t ? n[t] : null) && ep(r))
            }(this, e, t, n, r)
        }
        ,
        eb.prototype.M = function() {
            if (eb.X.M.call(this),
            this.i) {
                var e, t = this.i;
                for (e in t.g) {
                    for (var n = t.g[e], r = 0; r < n.length; r++)
                        er(n[r]);
                    delete t.g[e],
                    t.h--
                }
            }
            this.I = null
        }
        ,
        eb.prototype.N = function(e, t, n, r) {
            return this.i.add(String(e), t, !1, n, r)
        }
        ,
        eb.prototype.O = function(e, t, n, r) {
            return this.i.add(String(e), t, !0, n, r)
        }
        ;
        var eI = v.JSON.stringify
          , eT = new class {
            constructor(e, t) {
                this.i = e,
                this.j = t,
                this.h = 0,
                this.g = null
            }
            get() {
                let e;
                return 0 < this.h ? (this.h--,
                e = this.g,
                this.g = e.next,
                e.next = null) : e = this.i(),
                e
            }
        }
        ( () => new eS,e => e.reset());
        class eS {
            constructor() {
                this.next = this.g = this.h = null
            }
            set(e, t) {
                this.h = e,
                this.g = t,
                this.next = null
            }
            reset() {
                this.next = this.g = this.h = null
            }
        }
        function eC(e, t) {
            var n;
            a || (n = v.Promise.resolve(void 0),
            a = function() {
                n.then(eN)
            }
            ),
            eA || (a(),
            eA = !0),
            ek.add(e, t)
        }
        var eA = !1
          , ek = new class {
            constructor() {
                this.h = this.g = null
            }
            add(e, t) {
                let n = eT.get();
                n.set(e, t),
                this.h ? this.h.next = n : this.g = n,
                this.h = n
            }
        }
        ;
        function eN() {
            let e;
            for (; e = null,
            (t = ek).g && (e = t.g,
            t.g = t.g.next,
            t.g || (t.h = null),
            e.next = null),
            n = e; ) {
                try {
                    n.h.call(n.g)
                } catch (e) {
                    !function(e) {
                        v.setTimeout( () => {
                            throw e
                        }
                        , 0)
                    }(e)
                }
                var t, n, r = eT;
                r.j(n),
                100 > r.h && (r.h++,
                n.next = r.g,
                r.g = n)
            }
            eA = !1
        }
        function eO(e, t) {
            eb.call(this),
            this.h = e || 1,
            this.g = t || v,
            this.j = T(this.lb, this),
            this.l = Date.now()
        }
        function ex(e) {
            e.ca = !1,
            e.R && (e.g.clearTimeout(e.R),
            e.R = null)
        }
        function eR(e, t, n) {
            if ("function" == typeof e)
                n && (e = T(e, n));
            else if (e && "function" == typeof e.handleEvent)
                e = T(e.handleEvent, e);
            else
                throw Error("Invalid listener argument");
            return 2147483647 < Number(t) ? -1 : v.setTimeout(e, t || 0)
        }
        C(eO, eb),
        (c = eO.prototype).ca = !1,
        c.R = null,
        c.lb = function() {
            if (this.ca) {
                var e = Date.now() - this.l;
                0 < e && e < .8 * this.h ? this.R = this.g.setTimeout(this.j, this.h - e) : (this.R && (this.g.clearTimeout(this.R),
                this.R = null),
                e_(this, "tick"),
                this.ca && (ex(this),
                this.start()))
            }
        }
        ,
        c.start = function() {
            this.ca = !0,
            this.R || (this.R = this.g.setTimeout(this.j, this.h),
            this.l = Date.now())
        }
        ,
        c.M = function() {
            eO.X.M.call(this),
            ex(this),
            delete this.g
        }
        ;
        class eD extends A {
            constructor(e, t) {
                super(),
                this.m = e,
                this.j = t,
                this.h = null,
                this.i = !1,
                this.g = null
            }
            l(e) {
                this.h = arguments,
                this.g ? this.i = !0 : function e(t) {
                    t.g = eR( () => {
                        t.g = null,
                        t.i && (t.i = !1,
                        e(t))
                    }
                    , t.j);
                    let n = t.h;
                    t.h = null,
                    t.m.apply(null, n)
                }(this)
            }
            M() {
                super.M(),
                this.g && (v.clearTimeout(this.g),
                this.g = null,
                this.i = !1,
                this.h = null)
            }
        }
        function eL(e) {
            A.call(this),
            this.h = e,
            this.g = {}
        }
        C(eL, A);
        var eP = [];
        function eM(e, t, n, r) {
            Array.isArray(n) || (n && (eP[0] = n.toString()),
            n = eP);
            for (var i = 0; i < n.length; i++) {
                var s = function e(t, n, r, i, s) {
                    if (i && i.once)
                        return function e(t, n, r, i, s) {
                            if (Array.isArray(n)) {
                                for (var a = 0; a < n.length; a++)
                                    e(t, n[a], r, i, s);
                                return null
                            }
                            return r = ew(r),
                            t && t[ee] ? t.O(n, r, _(i) ? !!i.capture : !!i, s) : ef(t, n, r, !0, i, s)
                        }(t, n, r, i, s);
                    if (Array.isArray(n)) {
                        for (var a = 0; a < n.length; a++)
                            e(t, n[a], r, i, s);
                        return null
                    }
                    return r = ew(r),
                    t && t[ee] ? t.N(n, r, _(i) ? !!i.capture : !!i, s) : ef(t, n, r, !1, i, s)
                }(t, n[i], r || e.handleEvent, !1, e.h || e);
                if (!s)
                    break;
                e.g[s.key] = s
            }
        }
        function ej(e) {
            ei(e.g, function(e, t) {
                this.g.hasOwnProperty(t) && ep(e)
            }, e),
            e.g = {}
        }
        function eU() {
            this.g = !0
        }
        function eV(e, t, n, r) {
            e.info(function() {
                return "XMLHTTP TEXT (" + t + "): " + function(e, t) {
                    if (!e.g)
                        return t;
                    if (!t)
                        return null;
                    try {
                        var n = JSON.parse(t);
                        if (n) {
                            for (e = 0; e < n.length; e++)
                                if (Array.isArray(n[e])) {
                                    var r = n[e];
                                    if (!(2 > r.length)) {
                                        var i = r[1];
                                        if (Array.isArray(i) && !(1 > i.length)) {
                                            var s = i[0];
                                            if ("noop" != s && "stop" != s && "close" != s)
                                                for (var a = 1; a < i.length; a++)
                                                    i[a] = ""
                                        }
                                    }
                                }
                        }
                        return eI(n)
                    } catch (e) {
                        return t
                    }
                }(e, n) + (r ? " " + r : "")
            })
        }
        eL.prototype.M = function() {
            eL.X.M.call(this),
            ej(this)
        }
        ,
        eL.prototype.handleEvent = function() {
            throw Error("EventHandler.handleEvent not implemented")
        }
        ,
        eU.prototype.Aa = function() {
            this.g = !1
        }
        ,
        eU.prototype.info = function() {}
        ;
        var eF = {}
          , ez = null;
        function eB() {
            return ez = ez || new eb
        }
        function eq(e) {
            x.call(this, eF.Pa, e)
        }
        function eH(e) {
            let t = eB();
            e_(t, new eq(t))
        }
        function eK(e, t) {
            x.call(this, eF.STAT_EVENT, e),
            this.stat = t
        }
        function e$(e) {
            let t = eB();
            e_(t, new eK(t,e))
        }
        function eG(e, t) {
            x.call(this, eF.Qa, e),
            this.size = t
        }
        function eW(e, t) {
            if ("function" != typeof e)
                throw Error("Fn must not be null and must be a function");
            return v.setTimeout(function() {
                e()
            }, t)
        }
        eF.Pa = "serverreachability",
        C(eq, x),
        eF.STAT_EVENT = "statevent",
        C(eK, x),
        eF.Qa = "timingevent",
        C(eG, x);
        var eQ = {
            NO_ERROR: 0,
            mb: 1,
            zb: 2,
            yb: 3,
            tb: 4,
            xb: 5,
            Ab: 6,
            Ma: 7,
            TIMEOUT: 8,
            Db: 9
        }
          , eX = {
            rb: "complete",
            Nb: "success",
            Na: "error",
            Ma: "abort",
            Fb: "ready",
            Gb: "readystatechange",
            TIMEOUT: "timeout",
            Bb: "incrementaldata",
            Eb: "progress",
            ub: "downloadprogress",
            Vb: "uploadprogress"
        };
        function eJ() {}
        function eY(e) {
            return e.h || (e.h = e.i())
        }
        function eZ() {}
        eJ.prototype.h = null;
        var e0 = {
            OPEN: "a",
            qb: "b",
            Na: "c",
            Cb: "d"
        };
        function e1() {
            x.call(this, "d")
        }
        function e2() {
            x.call(this, "c")
        }
        function e3() {}
        function e4(e, t, n, r) {
            this.l = e,
            this.j = t,
            this.m = n,
            this.U = r || 1,
            this.S = new eL(this),
            this.O = e5,
            e = B ? 125 : void 0,
            this.T = new eO(e),
            this.H = null,
            this.i = !1,
            this.s = this.A = this.v = this.K = this.F = this.V = this.B = null,
            this.D = [],
            this.g = null,
            this.C = 0,
            this.o = this.u = null,
            this.Y = -1,
            this.I = !1,
            this.N = 0,
            this.L = null,
            this.$ = this.J = this.Z = this.P = !1,
            this.h = new e6
        }
        function e6() {
            this.i = null,
            this.g = "",
            this.h = !1
        }
        C(e1, x),
        C(e2, x),
        C(e3, eJ),
        e3.prototype.g = function() {
            return new XMLHttpRequest
        }
        ,
        e3.prototype.i = function() {
            return {}
        }
        ,
        o = new e3;
        var e5 = 45e3
          , e8 = {}
          , e7 = {};
        function e9(e, t, n) {
            e.K = 1,
            e.v = ty(td(t)),
            e.s = n,
            e.P = !0,
            te(e, null)
        }
        function te(e, t) {
            e.F = Date.now(),
            tr(e),
            e.A = td(e.v);
            var n = e.A
              , r = e.U;
            Array.isArray(r) || (r = [String(r)]),
            tO(n.i, "t", r),
            e.C = 0,
            n = e.l.H,
            e.h = new e6,
            e.g = nw(e.l, n ? t : null, !e.s),
            0 < e.N && (e.L = new eD(T(e.La, e, e.g),e.N)),
            eM(e.S, e.g, "readystatechange", e.ib),
            t = e.H ? es(e.H) : {},
            e.s ? (e.u || (e.u = "POST"),
            t["Content-Type"] = "application/x-www-form-urlencoded",
            e.g.da(e.A, e.u, e.s, t)) : (e.u = "GET",
            e.g.da(e.A, e.u, null, t)),
            eH(),
            function(e, t, n, r, i, s) {
                e.info(function() {
                    if (e.g) {
                        if (s)
                            for (var a = "", o = s.split("&"), l = 0; l < o.length; l++) {
                                var u = o[l].split("=");
                                if (1 < u.length) {
                                    var c = u[0];
                                    u = u[1];
                                    var h = c.split("_");
                                    a = 2 <= h.length && "type" == h[1] ? a + (c + "=") + u + "&" : a + (c + "=redacted&")
                                }
                            }
                        else
                            a = null
                    } else
                        a = s;
                    return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + t + "\n" + n + "\n" + a
                })
            }(e.j, e.u, e.A, e.m, e.U, e.s)
        }
        function tt(e) {
            return !!e.g && "GET" == e.u && 2 != e.K && e.l.Da
        }
        function tn(e, t, n) {
            let r = !0, i;
            for (; !e.I && e.C < n.length; )
                if ((i = function(e, t) {
                    var n = e.C
                      , r = t.indexOf("\n", n);
                    return -1 == r ? e7 : isNaN(n = Number(t.substring(n, r))) ? e8 : (r += 1) + n > t.length ? e7 : (t = t.substr(r, n),
                    e.C = r + n,
                    t)
                }(e, n)) == e7) {
                    4 == t && (e.o = 4,
                    e$(14),
                    r = !1),
                    eV(e.j, e.m, null, "[Incomplete Response]");
                    break
                } else if (i == e8) {
                    e.o = 4,
                    e$(15),
                    eV(e.j, e.m, n, "[Invalid Chunk]"),
                    r = !1;
                    break
                } else
                    eV(e.j, e.m, i, null),
                    tl(e, i);
            tt(e) && i != e7 && i != e8 && (e.h.g = "",
            e.C = 0),
            4 != t || 0 != n.length || e.h.h || (e.o = 1,
            e$(16),
            r = !1),
            e.i = e.i && r,
            r ? 0 < n.length && !e.$ && (e.$ = !0,
            (t = e.l).g == e && t.$ && !t.K && (t.j.info("Great, no buffering proxy detected. Bytes received: " + n.length),
            nh(t),
            t.K = !0,
            e$(11))) : (eV(e.j, e.m, n, "[Invalid Chunked Response]"),
            to(e),
            ta(e))
        }
        function tr(e) {
            e.V = Date.now() + e.O,
            ti(e, e.O)
        }
        function ti(e, t) {
            if (null != e.B)
                throw Error("WatchDog timer not null");
            e.B = eW(T(e.gb, e), t)
        }
        function ts(e) {
            e.B && (v.clearTimeout(e.B),
            e.B = null)
        }
        function ta(e) {
            0 == e.l.G || e.I || np(e.l, e)
        }
        function to(e) {
            ts(e);
            var t = e.L;
            t && "function" == typeof t.na && t.na(),
            e.L = null,
            ex(e.T),
            ej(e.S),
            e.g && (t = e.g,
            e.g = null,
            t.abort(),
            t.na())
        }
        function tl(e, t) {
            try {
                var n = e.l;
                if (0 != n.G && (n.g == e || tj(n.h, e))) {
                    if (!e.J && tj(n.h, e) && 3 == n.G) {
                        try {
                            var r = n.Fa.g.parse(t)
                        } catch (e) {
                            r = null
                        }
                        if (Array.isArray(r) && 3 == r.length) {
                            var i = r;
                            if (0 == i[0]) {
                                e: if (!n.u) {
                                    if (n.g) {
                                        if (n.g.F + 3e3 < e.F)
                                            nf(n),
                                            nr(n);
                                        else
                                            break e
                                    }
                                    nc(n),
                                    e$(18)
                                }
                            } else
                                n.Ba = i[1],
                                0 < n.Ba - n.T && 37500 > i[2] && n.L && 0 == n.A && !n.v && (n.v = eW(T(n.cb, n), 6e3));
                            if (1 >= tM(n.h) && n.ja) {
                                try {
                                    n.ja()
                                } catch (e) {}
                                n.ja = void 0
                            }
                        } else
                            nm(n, 11)
                    } else if ((e.J || n.g == e) && nf(n),
                    !D(t))
                        for (i = n.Fa.g.parse(t),
                        t = 0; t < i.length; t++) {
                            let o = i[t];
                            if (n.T = o[0],
                            o = o[1],
                            2 == n.G) {
                                if ("c" == o[0]) {
                                    n.I = o[1],
                                    n.ka = o[2];
                                    let t = o[3];
                                    null != t && (n.ma = t,
                                    n.j.info("VER=" + n.ma));
                                    let i = o[4];
                                    null != i && (n.Ca = i,
                                    n.j.info("SVER=" + n.Ca));
                                    let l = o[5];
                                    null != l && "number" == typeof l && 0 < l && (r = 1.5 * l,
                                    n.J = r,
                                    n.j.info("backChannelRequestTimeoutMs_=" + r)),
                                    r = n;
                                    let u = e.g;
                                    if (u) {
                                        let e = u.g ? u.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                        if (e) {
                                            var s = r.h;
                                            s.g || -1 == e.indexOf("spdy") && -1 == e.indexOf("quic") && -1 == e.indexOf("h2") || (s.j = s.l,
                                            s.g = new Set,
                                            s.h && (tU(s, s.h),
                                            s.h = null))
                                        }
                                        if (r.D) {
                                            let e = u.g ? u.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                            e && (r.za = e,
                                            tm(r.F, r.D, e))
                                        }
                                    }
                                    if (n.G = 3,
                                    n.l && n.l.xa(),
                                    n.$ && (n.P = Date.now() - e.F,
                                    n.j.info("Handshake RTT: " + n.P + "ms")),
                                    (r = n).sa = nv(r, r.H ? r.ka : null, r.V),
                                    e.J) {
                                        tV(r.h, e);
                                        var a = r.J;
                                        a && e.setTimeout(a),
                                        e.B && (ts(e),
                                        tr(e)),
                                        r.g = e
                                    } else
                                        nu(r);
                                    0 < n.i.length && ns(n)
                                } else
                                    "stop" != o[0] && "close" != o[0] || nm(n, 7)
                            } else
                                3 == n.G && ("stop" == o[0] || "close" == o[0] ? "stop" == o[0] ? nm(n, 7) : nn(n) : "noop" != o[0] && n.l && n.l.wa(o),
                                n.A = 0)
                        }
                }
                eH(4)
            } catch (e) {}
        }
        function tu(e, t) {
            if (e.forEach && "function" == typeof e.forEach)
                e.forEach(t, void 0);
            else if (b(e) || "string" == typeof e)
                Array.prototype.forEach.call(e, t, void 0);
            else
                for (var n = function(e) {
                    if (e.oa && "function" == typeof e.oa)
                        return e.oa();
                    if (!e.W || "function" != typeof e.W) {
                        if ("undefined" != typeof Map && e instanceof Map)
                            return Array.from(e.keys());
                        if (!("undefined" != typeof Set && e instanceof Set)) {
                            if (b(e) || "string" == typeof e) {
                                var t = [];
                                e = e.length;
                                for (var n = 0; n < e; n++)
                                    t.push(n);
                                return t
                            }
                            for (let r in t = [],
                            n = 0,
                            e)
                                t[n++] = r;
                            return t
                        }
                    }
                }(e), r = function(e) {
                    if (e.W && "function" == typeof e.W)
                        return e.W();
                    if ("undefined" != typeof Map && e instanceof Map || "undefined" != typeof Set && e instanceof Set)
                        return Array.from(e.values());
                    if ("string" == typeof e)
                        return e.split("");
                    if (b(e)) {
                        for (var t = [], n = e.length, r = 0; r < n; r++)
                            t.push(e[r]);
                        return t
                    }
                    for (r in t = [],
                    n = 0,
                    e)
                        t[n++] = e[r];
                    return t
                }(e), i = r.length, s = 0; s < i; s++)
                    t.call(void 0, r[s], n && n[s], e)
        }
        (c = e4.prototype).setTimeout = function(e) {
            this.O = e
        }
        ,
        c.ib = function(e) {
            e = e.target;
            let t = this.L;
            t && 3 == t5(e) ? t.l() : this.La(e)
        }
        ,
        c.La = function(e) {
            try {
                if (e == this.g)
                    e: {
                        let c = t5(this.g);
                        var t = this.g.Ea();
                        let h = this.g.aa();
                        if (!(3 > c) && (3 != c || B || this.g && (this.h.h || this.g.fa() || t8(this.g)))) {
                            this.I || 4 != c || 7 == t || (8 == t || 0 >= h ? eH(3) : eH(2)),
                            ts(this);
                            var n = this.g.aa();
                            this.Y = n;
                            t: if (tt(this)) {
                                var r = t8(this.g);
                                e = "";
                                var i = r.length
                                  , s = 4 == t5(this.g);
                                if (!this.h.i) {
                                    if ("undefined" == typeof TextDecoder) {
                                        to(this),
                                        ta(this);
                                        var a = "";
                                        break t
                                    }
                                    this.h.i = new v.TextDecoder
                                }
                                for (t = 0; t < i; t++)
                                    this.h.h = !0,
                                    e += this.h.i.decode(r[t], {
                                        stream: s && t == i - 1
                                    });
                                r.splice(0, i),
                                this.h.g += e,
                                this.C = 0,
                                a = this.h.g
                            } else
                                a = this.g.fa();
                            if (this.i = 200 == n,
                            function(e, t, n, r, i, s, a) {
                                e.info(function() {
                                    return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + t + "\n" + n + "\n" + s + " " + a
                                })
                            }(this.j, this.u, this.A, this.m, this.U, c, n),
                            this.i) {
                                if (this.Z && !this.J) {
                                    t: {
                                        if (this.g) {
                                            var o, l = this.g;
                                            if ((o = l.g ? l.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !D(o)) {
                                                var u = o;
                                                break t
                                            }
                                        }
                                        u = null
                                    }
                                    if (n = u)
                                        eV(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"),
                                        this.J = !0,
                                        tl(this, n);
                                    else {
                                        this.i = !1,
                                        this.o = 3,
                                        e$(12),
                                        to(this),
                                        ta(this);
                                        break e
                                    }
                                }
                                this.P ? (tn(this, c, a),
                                B && this.i && 3 == c && (eM(this.S, this.T, "tick", this.hb),
                                this.T.start())) : (eV(this.j, this.m, a, null),
                                tl(this, a)),
                                4 == c && to(this),
                                this.i && !this.I && (4 == c ? np(this.l, this) : (this.i = !1,
                                tr(this)))
                            } else
                                400 == n && 0 < a.indexOf("Unknown SID") ? (this.o = 3,
                                e$(12)) : (this.o = 0,
                                e$(13)),
                                to(this),
                                ta(this)
                        }
                    }
            } catch (e) {} finally {}
        }
        ,
        c.hb = function() {
            if (this.g) {
                var e = t5(this.g)
                  , t = this.g.fa();
                this.C < t.length && (ts(this),
                tn(this, e, t),
                this.i && 4 != e && tr(this))
            }
        }
        ,
        c.cancel = function() {
            this.I = !0,
            to(this)
        }
        ,
        c.gb = function() {
            this.B = null;
            let e = Date.now();
            0 <= e - this.V ? (function(e, t) {
                e.info(function() {
                    return "TIMEOUT: " + t
                })
            }(this.j, this.A),
            2 != this.K && (eH(),
            e$(17)),
            to(this),
            this.o = 2,
            ta(this)) : ti(this, this.V - e)
        }
        ;
        var tc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
        function th(e, t) {
            if (this.g = this.s = this.j = "",
            this.m = null,
            this.o = this.l = "",
            this.h = !1,
            e instanceof th) {
                this.h = void 0 !== t ? t : e.h,
                tf(this, e.j),
                this.s = e.s,
                this.g = e.g,
                tp(this, e.m),
                this.l = e.l,
                t = e.i;
                var n = new tC;
                n.i = t.i,
                t.g && (n.g = new Map(t.g),
                n.h = t.h),
                tg(this, n),
                this.o = e.o
            } else
                e && (n = String(e).match(tc)) ? (this.h = !!t,
                tf(this, n[1] || "", !0),
                this.s = tv(n[2] || ""),
                this.g = tv(n[3] || "", !0),
                tp(this, n[4]),
                this.l = tv(n[5] || "", !0),
                tg(this, n[6] || "", !0),
                this.o = tv(n[7] || "")) : (this.h = !!t,
                this.i = new tC(null,this.h))
        }
        function td(e) {
            return new th(e)
        }
        function tf(e, t, n) {
            e.j = n ? tv(t, !0) : t,
            e.j && (e.j = e.j.replace(/:$/, ""))
        }
        function tp(e, t) {
            if (t) {
                if (isNaN(t = Number(t)) || 0 > t)
                    throw Error("Bad port number " + t);
                e.m = t
            } else
                e.m = null
        }
        function tg(e, t, n) {
            var r, i;
            t instanceof tC ? (e.i = t,
            r = e.i,
            (i = e.h) && !r.j && (tA(r),
            r.i = null,
            r.g.forEach(function(e, t) {
                var n = t.toLowerCase();
                t != n && (tk(this, t),
                tO(this, n, e))
            }, r)),
            r.j = i) : (n || (t = tw(t, tT)),
            e.i = new tC(t,e.h))
        }
        function tm(e, t, n) {
            e.i.set(t, n)
        }
        function ty(e) {
            return tm(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)),
            e
        }
        function tv(e, t) {
            return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
        }
        function tw(e, t, n) {
            return "string" == typeof e ? (e = encodeURI(e).replace(t, tb),
            n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            e) : null
        }
        function tb(e) {
            return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
        }
        th.prototype.toString = function() {
            var e = []
              , t = this.j;
            t && e.push(tw(t, t_, !0), ":");
            var n = this.g;
            return (n || "file" == t) && (e.push("//"),
            (t = this.s) && e.push(tw(t, t_, !0), "@"),
            e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            null != (n = this.m) && e.push(":", String(n))),
            (n = this.l) && (this.g && "/" != n.charAt(0) && e.push("/"),
            e.push(tw(n, "/" == n.charAt(0) ? tI : tE, !0))),
            (n = this.i.toString()) && e.push("?", n),
            (n = this.o) && e.push("#", tw(n, tS)),
            e.join("")
        }
        ;
        var t_ = /[#\/\?@]/g
          , tE = /[#\?:]/g
          , tI = /[#\?]/g
          , tT = /[#\?@]/g
          , tS = /#/g;
        function tC(e, t) {
            this.h = this.g = null,
            this.i = e || null,
            this.j = !!t
        }
        function tA(e) {
            e.g || (e.g = new Map,
            e.h = 0,
            e.i && function(e, t) {
                if (e) {
                    e = e.split("&");
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n].indexOf("=")
                          , i = null;
                        if (0 <= r) {
                            var s = e[n].substring(0, r);
                            i = e[n].substring(r + 1)
                        } else
                            s = e[n];
                        t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                    }
                }
            }(e.i, function(t, n) {
                e.add(decodeURIComponent(t.replace(/\+/g, " ")), n)
            }))
        }
        function tk(e, t) {
            tA(e),
            t = tx(e, t),
            e.g.has(t) && (e.i = null,
            e.h -= e.g.get(t).length,
            e.g.delete(t))
        }
        function tN(e, t) {
            return tA(e),
            t = tx(e, t),
            e.g.has(t)
        }
        function tO(e, t, n) {
            tk(e, t),
            0 < n.length && (e.i = null,
            e.g.set(tx(e, t), N(n)),
            e.h += n.length)
        }
        function tx(e, t) {
            return t = String(t),
            e.j && (t = t.toLowerCase()),
            t
        }
        (c = tC.prototype).add = function(e, t) {
            tA(this),
            this.i = null,
            e = tx(this, e);
            var n = this.g.get(e);
            return n || this.g.set(e, n = []),
            n.push(t),
            this.h += 1,
            this
        }
        ,
        c.forEach = function(e, t) {
            tA(this),
            this.g.forEach(function(n, r) {
                n.forEach(function(n) {
                    e.call(t, n, r, this)
                }, this)
            }, this)
        }
        ,
        c.oa = function() {
            tA(this);
            let e = Array.from(this.g.values())
              , t = Array.from(this.g.keys())
              , n = [];
            for (let r = 0; r < t.length; r++) {
                let i = e[r];
                for (let e = 0; e < i.length; e++)
                    n.push(t[r])
            }
            return n
        }
        ,
        c.W = function(e) {
            tA(this);
            let t = [];
            if ("string" == typeof e)
                tN(this, e) && (t = t.concat(this.g.get(tx(this, e))));
            else {
                e = Array.from(this.g.values());
                for (let n = 0; n < e.length; n++)
                    t = t.concat(e[n])
            }
            return t
        }
        ,
        c.set = function(e, t) {
            return tA(this),
            this.i = null,
            tN(this, e = tx(this, e)) && (this.h -= this.g.get(e).length),
            this.g.set(e, [t]),
            this.h += 1,
            this
        }
        ,
        c.get = function(e, t) {
            return e && 0 < (e = this.W(e)).length ? String(e[0]) : t
        }
        ,
        c.toString = function() {
            if (this.i)
                return this.i;
            if (!this.g)
                return "";
            let e = []
              , t = Array.from(this.g.keys());
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                let s = encodeURIComponent(String(r))
                  , a = this.W(r);
                for (r = 0; r < a.length; r++) {
                    var i = s;
                    "" !== a[r] && (i += "=" + encodeURIComponent(String(a[r]))),
                    e.push(i)
                }
            }
            return this.i = e.join("&")
        }
        ;
        var tR = class {
            constructor(e, t) {
                this.h = e,
                this.g = t
            }
        }
        ;
        function tD(e) {
            this.l = e || tL,
            e = v.PerformanceNavigationTiming ? 0 < (e = v.performance.getEntriesByType("navigation")).length && ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol) : !!(v.g && v.g.Ga && v.g.Ga() && v.g.Ga().$b),
            this.j = e ? this.l : 1,
            this.g = null,
            1 < this.j && (this.g = new Set),
            this.h = null,
            this.i = []
        }
        var tL = 10;
        function tP(e) {
            return !!e.h || !!e.g && e.g.size >= e.j
        }
        function tM(e) {
            return e.h ? 1 : e.g ? e.g.size : 0
        }
        function tj(e, t) {
            return e.h ? e.h == t : !!e.g && e.g.has(t)
        }
        function tU(e, t) {
            e.g ? e.g.add(t) : e.h = t
        }
        function tV(e, t) {
            e.h && e.h == t ? e.h = null : e.g && e.g.has(t) && e.g.delete(t)
        }
        function tF(e) {
            if (null != e.h)
                return e.i.concat(e.h.D);
            if (null != e.g && 0 !== e.g.size) {
                let t = e.i;
                for (let n of e.g.values())
                    t = t.concat(n.D);
                return t
            }
            return N(e.i)
        }
        function tz() {}
        function tB() {
            this.g = new tz
        }
        function tq(e, t, n, r, i) {
            try {
                t.onload = null,
                t.onerror = null,
                t.onabort = null,
                t.ontimeout = null,
                i(r)
            } catch (e) {}
        }
        function tH(e) {
            this.l = e.ac || null,
            this.j = e.jb || !1
        }
        function tK(e, t) {
            eb.call(this),
            this.D = e,
            this.u = t,
            this.m = void 0,
            this.readyState = t$,
            this.status = 0,
            this.responseType = this.responseText = this.response = this.statusText = "",
            this.onreadystatechange = null,
            this.v = new Headers,
            this.h = null,
            this.C = "GET",
            this.B = "",
            this.g = !1,
            this.A = this.j = this.l = null
        }
        tD.prototype.cancel = function() {
            if (this.i = tF(this),
            this.h)
                this.h.cancel(),
                this.h = null;
            else if (this.g && 0 !== this.g.size) {
                for (let e of this.g.values())
                    e.cancel();
                this.g.clear()
            }
        }
        ,
        tz.prototype.stringify = function(e) {
            return v.JSON.stringify(e, void 0)
        }
        ,
        tz.prototype.parse = function(e) {
            return v.JSON.parse(e, void 0)
        }
        ,
        C(tH, eJ),
        tH.prototype.g = function() {
            return new tK(this.l,this.j)
        }
        ,
        tH.prototype.i = (r = {},
        function() {
            return r
        }
        ),
        C(tK, eb);
        var t$ = 0;
        function tG(e) {
            e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))
        }
        function tW(e) {
            e.readyState = 4,
            e.l = null,
            e.j = null,
            e.A = null,
            tQ(e)
        }
        function tQ(e) {
            e.onreadystatechange && e.onreadystatechange.call(e)
        }
        (c = tK.prototype).open = function(e, t) {
            if (this.readyState != t$)
                throw this.abort(),
                Error("Error reopening a connection");
            this.C = e,
            this.B = t,
            this.readyState = 1,
            tQ(this)
        }
        ,
        c.send = function(e) {
            if (1 != this.readyState)
                throw this.abort(),
                Error("need to call open() first. ");
            this.g = !0;
            let t = {
                headers: this.v,
                method: this.C,
                credentials: this.m,
                cache: void 0
            };
            e && (t.body = e),
            (this.D || v).fetch(new Request(this.B,t)).then(this.Wa.bind(this), this.ga.bind(this))
        }
        ,
        c.abort = function() {
            this.response = this.responseText = "",
            this.v = new Headers,
            this.status = 0,
            this.j && this.j.cancel("Request was aborted.").catch( () => {}
            ),
            1 <= this.readyState && this.g && 4 != this.readyState && (this.g = !1,
            tW(this)),
            this.readyState = t$
        }
        ,
        c.Wa = function(e) {
            if (this.g && (this.l = e,
            this.h || (this.status = this.l.status,
            this.statusText = this.l.statusText,
            this.h = e.headers,
            this.readyState = 2,
            tQ(this)),
            this.g && (this.readyState = 3,
            tQ(this),
            this.g))) {
                if ("arraybuffer" === this.responseType)
                    e.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
                else if (void 0 !== v.ReadableStream && "body"in e) {
                    if (this.j = e.body.getReader(),
                    this.u) {
                        if (this.responseType)
                            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else
                        this.response = this.responseText = "",
                        this.A = new TextDecoder;
                    tG(this)
                } else
                    e.text().then(this.Va.bind(this), this.ga.bind(this))
            }
        }
        ,
        c.Ta = function(e) {
            if (this.g) {
                if (this.u && e.value)
                    this.response.push(e.value);
                else if (!this.u) {
                    var t = e.value ? e.value : new Uint8Array(0);
                    (t = this.A.decode(t, {
                        stream: !e.done
                    })) && (this.response = this.responseText += t)
                }
                e.done ? tW(this) : tQ(this),
                3 == this.readyState && tG(this)
            }
        }
        ,
        c.Va = function(e) {
            this.g && (this.response = this.responseText = e,
            tW(this))
        }
        ,
        c.Ua = function(e) {
            this.g && (this.response = e,
            tW(this))
        }
        ,
        c.ga = function() {
            this.g && tW(this)
        }
        ,
        c.setRequestHeader = function(e, t) {
            this.v.append(e, t)
        }
        ,
        c.getResponseHeader = function(e) {
            return this.h && this.h.get(e.toLowerCase()) || ""
        }
        ,
        c.getAllResponseHeaders = function() {
            if (!this.h)
                return "";
            let e = []
              , t = this.h.entries();
            for (var n = t.next(); !n.done; )
                e.push((n = n.value)[0] + ": " + n[1]),
                n = t.next();
            return e.join("\r\n")
        }
        ,
        Object.defineProperty(tK.prototype, "withCredentials", {
            get: function() {
                return "include" === this.m
            },
            set: function(e) {
                this.m = e ? "include" : "same-origin"
            }
        });
        var tX = v.JSON.parse;
        function tJ(e) {
            eb.call(this),
            this.headers = new Map,
            this.u = e || null,
            this.h = !1,
            this.C = this.g = null,
            this.H = "",
            this.m = 0,
            this.j = "",
            this.l = this.F = this.v = this.D = !1,
            this.B = 0,
            this.A = null,
            this.J = tY,
            this.K = this.L = !1
        }
        C(tJ, eb);
        var tY = ""
          , tZ = /^https?$/i
          , t0 = ["POST", "PUT"];
        function t1(e, t) {
            e.h = !1,
            e.g && (e.l = !0,
            e.g.abort(),
            e.l = !1),
            e.j = t,
            e.m = 5,
            t2(e),
            t4(e)
        }
        function t2(e) {
            e.D || (e.D = !0,
            e_(e, "complete"),
            e_(e, "error"))
        }
        function t3(e) {
            if (e.h && void 0 !== y && (!e.C[1] || 4 != t5(e) || 2 != e.aa())) {
                if (e.v && 4 == t5(e))
                    eR(e.Ha, 0, e);
                else if (e_(e, "readystatechange"),
                4 == t5(e)) {
                    e.h = !1;
                    try {
                        let o = e.aa();
                        e: switch (o) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var t, n, r = !0;
                            break e;
                        default:
                            r = !1
                        }
                        if (!(t = r)) {
                            if (n = 0 === o) {
                                var i = String(e.H).match(tc)[1] || null;
                                if (!i && v.self && v.self.location) {
                                    var s = v.self.location.protocol;
                                    i = s.substr(0, s.length - 1)
                                }
                                n = !tZ.test(i ? i.toLowerCase() : "")
                            }
                            t = n
                        }
                        if (t)
                            e_(e, "complete"),
                            e_(e, "success");
                        else {
                            e.m = 6;
                            try {
                                var a = 2 < t5(e) ? e.g.statusText : ""
                            } catch (e) {
                                a = ""
                            }
                            e.j = a + " [" + e.aa() + "]",
                            t2(e)
                        }
                    } finally {
                        t4(e)
                    }
                }
            }
        }
        function t4(e, t) {
            if (e.g) {
                t6(e);
                let n = e.g
                  , r = e.C[0] ? w : null;
                e.g = null,
                e.C = null,
                t || e_(e, "ready");
                try {
                    n.onreadystatechange = r
                } catch (e) {}
            }
        }
        function t6(e) {
            e.g && e.K && (e.g.ontimeout = null),
            e.A && (v.clearTimeout(e.A),
            e.A = null)
        }
        function t5(e) {
            return e.g ? e.g.readyState : 0
        }
        function t8(e) {
            try {
                if (!e.g)
                    return null;
                if ("response"in e.g)
                    return e.g.response;
                switch (e.J) {
                case tY:
                case "text":
                    return e.g.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer"in e.g)
                        return e.g.mozResponseArrayBuffer
                }
                return null
            } catch (e) {
                return null
            }
        }
        function t7(e) {
            let t = "";
            return ei(e, function(e, n) {
                t += n + ":" + e + "\r\n"
            }),
            t
        }
        function t9(e, t, n) {
            e: {
                for (r in n) {
                    var r = !1;
                    break e
                }
                r = !0
            }
            r || (n = t7(n),
            "string" == typeof e ? null != n && encodeURIComponent(String(n)) : tm(e, t, n))
        }
        function ne(e, t, n) {
            return n && n.internalChannelParams && n.internalChannelParams[e] || t
        }
        function nt(e) {
            this.Ca = 0,
            this.i = [],
            this.j = new eU,
            this.ka = this.sa = this.F = this.V = this.g = this.za = this.D = this.ia = this.o = this.S = this.s = null,
            this.ab = this.U = 0,
            this.Za = ne("failFast", !1, e),
            this.L = this.v = this.u = this.m = this.l = null,
            this.Y = !0,
            this.pa = this.Ba = this.T = -1,
            this.Z = this.A = this.C = 0,
            this.Xa = ne("baseRetryDelayMs", 5e3, e),
            this.bb = ne("retryDelaySeedMs", 1e4, e),
            this.$a = ne("forwardChannelMaxRetries", 2, e),
            this.ta = ne("forwardChannelRequestTimeoutMs", 2e4, e),
            this.ra = e && e.xmlHttpFactory || void 0,
            this.Da = e && e.Zb || !1,
            this.J = void 0,
            this.H = e && e.supportsCrossDomainXhr || !1,
            this.I = "",
            this.h = new tD(e && e.concurrentRequestLimit),
            this.Fa = new tB,
            this.O = e && e.fastHandshake || !1,
            this.N = e && e.encodeInitMessageHeaders || !1,
            this.O && this.N && (this.N = !1),
            this.Ya = e && e.Xb || !1,
            e && e.Aa && this.j.Aa(),
            e && e.forceLongPolling && (this.Y = !1),
            this.$ = !this.O && this.Y && e && e.detectBufferingProxy || !1,
            this.ja = void 0,
            this.P = 0,
            this.K = !1,
            this.la = this.B = null
        }
        function nn(e) {
            if (ni(e),
            3 == e.G) {
                var t = e.U++
                  , n = td(e.F);
                tm(n, "SID", e.I),
                tm(n, "RID", t),
                tm(n, "TYPE", "terminate"),
                no(e, n),
                (t = new e4(e,e.j,t,void 0)).K = 2,
                t.v = ty(td(n)),
                n = !1,
                v.navigator && v.navigator.sendBeacon && (n = v.navigator.sendBeacon(t.v.toString(), "")),
                !n && v.Image && ((new Image).src = t.v,
                n = !0),
                n || (t.g = nw(t.l, null),
                t.g.da(t.v)),
                t.F = Date.now(),
                tr(t)
            }
            ny(e)
        }
        function nr(e) {
            e.g && (nh(e),
            e.g.cancel(),
            e.g = null)
        }
        function ni(e) {
            nr(e),
            e.u && (v.clearTimeout(e.u),
            e.u = null),
            nf(e),
            e.h.cancel(),
            e.m && ("number" == typeof e.m && v.clearTimeout(e.m),
            e.m = null)
        }
        function ns(e) {
            tP(e.h) || e.m || (e.m = !0,
            eC(e.Ja, e),
            e.C = 0)
        }
        function na(e, t) {
            var n;
            n = t ? t.m : e.U++;
            let r = td(e.F);
            tm(r, "SID", e.I),
            tm(r, "RID", n),
            tm(r, "AID", e.T),
            no(e, r),
            e.o && e.s && t9(r, e.o, e.s),
            n = new e4(e,e.j,n,e.C + 1),
            null === e.o && (n.H = e.s),
            t && (e.i = t.D.concat(e.i)),
            t = nl(e, n, 1e3),
            n.setTimeout(Math.round(.5 * e.ta) + Math.round(.5 * e.ta * Math.random())),
            tU(e.h, n),
            e9(n, r, t)
        }
        function no(e, t) {
            e.ia && ei(e.ia, function(e, n) {
                tm(t, n, e)
            }),
            e.l && tu({}, function(e, n) {
                tm(t, n, e)
            })
        }
        function nl(e, t, n) {
            n = Math.min(e.i.length, n);
            var r = e.l ? T(e.l.Ra, e.l, e) : null;
            e: {
                var i = e.i;
                let t = -1;
                for (; ; ) {
                    let e = ["count=" + n];
                    -1 == t ? 0 < n ? (t = i[0].h,
                    e.push("ofs=" + t)) : t = 0 : e.push("ofs=" + t);
                    let s = !0;
                    for (let a = 0; a < n; a++) {
                        let n = i[a].h
                          , o = i[a].g;
                        if (0 > (n -= t))
                            t = Math.max(0, i[a].h - 100),
                            s = !1;
                        else
                            try {
                                !function(e, t, n) {
                                    let r = n || "";
                                    try {
                                        tu(e, function(e, n) {
                                            let i = e;
                                            _(e) && (i = eI(e)),
                                            t.push(r + n + "=" + encodeURIComponent(i))
                                        })
                                    } catch (e) {
                                        throw t.push(r + "type=" + encodeURIComponent("_badmap")),
                                        e
                                    }
                                }(o, e, "req" + n + "_")
                            } catch (e) {
                                r && r(o)
                            }
                    }
                    if (s) {
                        r = e.join("&");
                        break e
                    }
                }
            }
            return e = e.i.splice(0, n),
            t.D = e,
            r
        }
        function nu(e) {
            e.g || e.u || (e.Z = 1,
            eC(e.Ia, e),
            e.A = 0)
        }
        function nc(e) {
            return !e.g && !e.u && !(3 <= e.A) && (e.Z++,
            e.u = eW(T(e.Ia, e), ng(e, e.A)),
            e.A++,
            !0)
        }
        function nh(e) {
            null != e.B && (v.clearTimeout(e.B),
            e.B = null)
        }
        function nd(e) {
            e.g = new e4(e,e.j,"rpc",e.Z),
            null === e.o && (e.g.H = e.s),
            e.g.N = 0;
            var t = td(e.sa);
            tm(t, "RID", "rpc"),
            tm(t, "SID", e.I),
            tm(t, "CI", e.L ? "0" : "1"),
            tm(t, "AID", e.T),
            tm(t, "TYPE", "xmlhttp"),
            no(e, t),
            e.o && e.s && t9(t, e.o, e.s),
            e.J && e.g.setTimeout(e.J);
            var n = e.g;
            e = e.ka,
            n.K = 1,
            n.v = ty(td(t)),
            n.s = null,
            n.P = !0,
            te(n, e)
        }
        function nf(e) {
            null != e.v && (v.clearTimeout(e.v),
            e.v = null)
        }
        function np(e, t) {
            var n = null;
            if (e.g == t) {
                nf(e),
                nh(e),
                e.g = null;
                var r = 2
            } else {
                if (!tj(e.h, t))
                    return;
                n = t.D,
                tV(e.h, t),
                r = 1
            }
            if (0 != e.G) {
                if (e.pa = t.Y,
                t.i) {
                    if (1 == r) {
                        n = t.s ? t.s.length : 0,
                        t = Date.now() - t.F;
                        var i, s, a = e.C;
                        e_(r = eB(), new eG(r,n)),
                        ns(e)
                    } else
                        nu(e)
                } else if (3 == (a = t.o) || 0 == a && 0 < e.pa || !(1 == r && (i = e,
                s = t,
                !(tM(i.h) >= i.h.j - (i.m ? 1 : 0)) && (i.m ? (i.i = s.D.concat(i.i),
                !0) : 1 != i.G && 2 != i.G && !(i.C >= (i.Za ? 0 : i.$a)) && (i.m = eW(T(i.Ja, i, s), ng(i, i.C)),
                i.C++,
                !0))) || 2 == r && nc(e)))
                    switch (n && 0 < n.length && ((t = e.h).i = t.i.concat(n)),
                    a) {
                    case 1:
                        nm(e, 5);
                        break;
                    case 4:
                        nm(e, 10);
                        break;
                    case 3:
                        nm(e, 6);
                        break;
                    default:
                        nm(e, 2)
                    }
            }
        }
        function ng(e, t) {
            let n = e.Xa + Math.floor(Math.random() * e.bb);
            return e.l || (n *= 2),
            n * t
        }
        function nm(e, t) {
            if (e.j.info("Error code " + t),
            2 == t) {
                var n = null;
                e.l && (n = null);
                var r = T(e.kb, e);
                n || (n = new th("//www.google.com/images/cleardot.gif"),
                v.location && "http" == v.location.protocol || tf(n, "https"),
                ty(n)),
                function(e, t) {
                    let n = new eU;
                    if (v.Image) {
                        let r = new Image;
                        r.onload = S(tq, n, r, "TestLoadImage: loaded", !0, t),
                        r.onerror = S(tq, n, r, "TestLoadImage: error", !1, t),
                        r.onabort = S(tq, n, r, "TestLoadImage: abort", !1, t),
                        r.ontimeout = S(tq, n, r, "TestLoadImage: timeout", !1, t),
                        v.setTimeout(function() {
                            r.ontimeout && r.ontimeout()
                        }, 1e4),
                        r.src = e
                    } else
                        t(!1)
                }(n.toString(), r)
            } else
                e$(2);
            e.G = 0,
            e.l && e.l.va(t),
            ny(e),
            ni(e)
        }
        function ny(e) {
            if (e.G = 0,
            e.la = [],
            e.l) {
                let t = tF(e.h);
                (0 != t.length || 0 != e.i.length) && (O(e.la, t),
                O(e.la, e.i),
                e.h.i.length = 0,
                N(e.i),
                e.i.length = 0),
                e.l.ua()
            }
        }
        function nv(e, t, n) {
            var r = n instanceof th ? td(n) : new th(n,void 0);
            if ("" != r.g)
                t && (r.g = t + "." + r.g),
                tp(r, r.m);
            else {
                var i = v.location;
                r = i.protocol,
                t = t ? t + "." + i.hostname : i.hostname,
                i = +i.port;
                var s = new th(null,void 0);
                r && tf(s, r),
                t && (s.g = t),
                i && tp(s, i),
                n && (s.l = n),
                r = s
            }
            return n = e.D,
            t = e.za,
            n && t && tm(r, n, t),
            tm(r, "VER", e.ma),
            no(e, r),
            r
        }
        function nw(e, t, n) {
            if (t && !e.H)
                throw Error("Can't create secondary domain capable XhrIo object.");
            return (t = new tJ(n && e.Da && !e.ra ? new tH({
                jb: !0
            }) : e.ra)).Ka(e.H),
            t
        }
        function nb() {}
        function n_() {
            if (F && !(10 <= Number(J)))
                throw Error("Environmental error: no available transport.")
        }
        function nE(e, t) {
            eb.call(this),
            this.g = new nt(t),
            this.l = e,
            this.h = t && t.messageUrlParams || null,
            e = t && t.messageHeaders || null,
            t && t.clientProtocolHeaderRequired && (e ? e["X-Client-Protocol"] = "webchannel" : e = {
                "X-Client-Protocol": "webchannel"
            }),
            this.g.s = e,
            e = t && t.initMessageHeaders || null,
            t && t.messageContentType && (e ? e["X-WebChannel-Content-Type"] = t.messageContentType : e = {
                "X-WebChannel-Content-Type": t.messageContentType
            }),
            t && t.ya && (e ? e["X-WebChannel-Client-Profile"] = t.ya : e = {
                "X-WebChannel-Client-Profile": t.ya
            }),
            this.g.S = e,
            (e = t && t.Yb) && !D(e) && (this.g.o = e),
            this.A = t && t.supportsCrossDomainXhr || !1,
            this.v = t && t.sendRawJson || !1,
            (t = t && t.httpSessionIdParam) && !D(t) && (this.g.D = t,
            null !== (e = this.h) && t in e && t in (e = this.h) && delete e[t]),
            this.j = new nS(this)
        }
        function nI(e) {
            e1.call(this);
            var t = e.__sm__;
            if (t) {
                e: {
                    for (let n in t) {
                        e = n;
                        break e
                    }
                    e = void 0
                }
                (this.i = e) && (e = this.i,
                t = null !== t && e in t ? t[e] : void 0),
                this.data = t
            } else
                this.data = e
        }
        function nT() {
            e2.call(this),
            this.status = 1
        }
        function nS(e) {
            this.g = e
        }
        (c = tJ.prototype).Ka = function(e) {
            this.L = e
        }
        ,
        c.da = function(e, t, n, r) {
            if (this.g)
                throw Error("[goog.net.XhrIo] Object is active with another request=" + this.H + "; newUri=" + e);
            t = t ? t.toUpperCase() : "GET",
            this.H = e,
            this.j = "",
            this.m = 0,
            this.D = !1,
            this.h = !0,
            this.g = this.u ? this.u.g() : o.g(),
            this.C = this.u ? eY(this.u) : eY(o),
            this.g.onreadystatechange = T(this.Ha, this);
            try {
                this.F = !0,
                this.g.open(t, String(e), !0),
                this.F = !1
            } catch (e) {
                t1(this, e);
                return
            }
            if (e = n || "",
            n = new Map(this.headers),
            r) {
                if (Object.getPrototypeOf(r) === Object.prototype)
                    for (var s in r)
                        n.set(s, r[s]);
                else if ("function" == typeof r.keys && "function" == typeof r.get)
                    for (let e of r.keys())
                        n.set(e, r.get(e));
                else
                    throw Error("Unknown input type for opt_headers: " + String(r))
            }
            for (let[i,a] of (r = Array.from(n.keys()).find(e => "content-type" == e.toLowerCase()),
            s = v.FormData && e instanceof v.FormData,
            !(0 <= k(t0, t)) || r || s || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
            n))
                this.g.setRequestHeader(i, a);
            this.J && (this.g.responseType = this.J),
            "withCredentials"in this.g && this.g.withCredentials !== this.L && (this.g.withCredentials = this.L);
            try {
                var a, l;
                t6(this),
                0 < this.B && ((this.K = (a = this.g,
                F && (l = X,
                Object.prototype.hasOwnProperty.call(l, 9) ? l[9] : l[9] = function() {
                    let e = 0
                      , t = L(String(i)).split(".")
                      , n = L("9").split(".")
                      , r = Math.max(t.length, n.length);
                    for (let i = 0; 0 == e && i < r; i++) {
                        var s = t[i] || ""
                          , a = n[i] || "";
                        do {
                            if (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""],
                            a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                            0 == s[0].length && 0 == a[0].length)
                                break;
                            e = P(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || P(0 == s[2].length, 0 == a[2].length) || P(s[2], a[2]),
                            s = s[3],
                            a = a[3]
                        } while (0 == e)
                    }
                    return 0 <= e
                }(9)) && "number" == typeof a.timeout && void 0 !== a.ontimeout)) ? (this.g.timeout = this.B,
                this.g.ontimeout = T(this.qa, this)) : this.A = eR(this.qa, this.B, this)),
                this.v = !0,
                this.g.send(e),
                this.v = !1
            } catch (e) {
                t1(this, e)
            }
        }
        ,
        c.qa = function() {
            void 0 !== y && this.g && (this.j = "Timed out after " + this.B + "ms, aborting",
            this.m = 8,
            e_(this, "timeout"),
            this.abort(8))
        }
        ,
        c.abort = function(e) {
            this.g && this.h && (this.h = !1,
            this.l = !0,
            this.g.abort(),
            this.l = !1,
            this.m = e || 7,
            e_(this, "complete"),
            e_(this, "abort"),
            t4(this))
        }
        ,
        c.M = function() {
            this.g && (this.h && (this.h = !1,
            this.l = !0,
            this.g.abort(),
            this.l = !1),
            t4(this, !0)),
            tJ.X.M.call(this)
        }
        ,
        c.Ha = function() {
            this.s || (this.F || this.v || this.l ? t3(this) : this.fb())
        }
        ,
        c.fb = function() {
            t3(this)
        }
        ,
        c.aa = function() {
            try {
                return 2 < t5(this) ? this.g.status : -1
            } catch (e) {
                return -1
            }
        }
        ,
        c.fa = function() {
            try {
                return this.g ? this.g.responseText : ""
            } catch (e) {
                return ""
            }
        }
        ,
        c.Sa = function(e) {
            if (this.g) {
                var t = this.g.responseText;
                return e && 0 == t.indexOf(e) && (t = t.substring(e.length)),
                tX(t)
            }
        }
        ,
        c.Ea = function() {
            return this.m
        }
        ,
        c.Oa = function() {
            return "string" == typeof this.j ? this.j : String(this.j)
        }
        ,
        (c = nt.prototype).ma = 8,
        c.G = 1,
        c.Ja = function(e) {
            if (this.m) {
                if (this.m = null,
                1 == this.G) {
                    if (!e) {
                        this.U = Math.floor(1e5 * Math.random()),
                        e = this.U++;
                        let i = new e4(this,this.j,e,void 0)
                          , s = this.s;
                        if (this.S && (s ? eo(s = es(s), this.S) : s = this.S),
                        null !== this.o || this.N || (i.H = s,
                        s = null),
                        this.O)
                            e: {
                                for (var t = 0, n = 0; n < this.i.length; n++) {
                                    t: {
                                        var r = this.i[n];
                                        if ("__data__"in r.g && "string" == typeof (r = r.g.__data__)) {
                                            r = r.length;
                                            break t
                                        }
                                        r = void 0
                                    }
                                    if (void 0 === r)
                                        break;
                                    if (4096 < (t += r)) {
                                        t = n;
                                        break e
                                    }
                                    if (4096 === t || n === this.i.length - 1) {
                                        t = n + 1;
                                        break e
                                    }
                                }
                                t = 1e3
                            }
                        else
                            t = 1e3;
                        t = nl(this, i, t),
                        tm(n = td(this.F), "RID", e),
                        tm(n, "CVER", 22),
                        this.D && tm(n, "X-HTTP-Session-Id", this.D),
                        no(this, n),
                        s && (this.N ? t = "headers=" + encodeURIComponent(String(t7(s))) + "&" + t : this.o && t9(n, this.o, s)),
                        tU(this.h, i),
                        this.Ya && tm(n, "TYPE", "init"),
                        this.O ? (tm(n, "$req", t),
                        tm(n, "SID", "null"),
                        i.Z = !0,
                        e9(i, n, null)) : e9(i, n, t),
                        this.G = 2
                    }
                } else
                    3 == this.G && (e ? na(this, e) : 0 == this.i.length || tP(this.h) || na(this))
            }
        }
        ,
        c.Ia = function() {
            if (this.u = null,
            nd(this),
            this.$ && !(this.K || null == this.g || 0 >= this.P)) {
                var e = 2 * this.P;
                this.j.info("BP detection timer enabled: " + e),
                this.B = eW(T(this.eb, this), e)
            }
        }
        ,
        c.eb = function() {
            this.B && (this.B = null,
            this.j.info("BP detection timeout reached."),
            this.j.info("Buffering proxy detected and switch to long-polling!"),
            this.L = !1,
            this.K = !0,
            e$(10),
            nr(this),
            nd(this))
        }
        ,
        c.cb = function() {
            null != this.v && (this.v = null,
            nr(this),
            nc(this),
            e$(19))
        }
        ,
        c.kb = function(e) {
            e ? (this.j.info("Successfully pinged google.com"),
            e$(2)) : (this.j.info("Failed to ping google.com"),
            e$(1))
        }
        ,
        (c = nb.prototype).xa = function() {}
        ,
        c.wa = function() {}
        ,
        c.va = function() {}
        ,
        c.ua = function() {}
        ,
        c.Ra = function() {}
        ,
        n_.prototype.g = function(e, t) {
            return new nE(e,t)
        }
        ,
        C(nE, eb),
        nE.prototype.m = function() {
            this.g.l = this.j,
            this.A && (this.g.H = !0);
            var e = this.g
              , t = this.l
              , n = this.h || void 0;
            e$(0),
            e.V = t,
            e.ia = n || {},
            e.L = e.Y,
            e.F = nv(e, null, e.V),
            ns(e)
        }
        ,
        nE.prototype.close = function() {
            nn(this.g)
        }
        ,
        nE.prototype.u = function(e) {
            var t = this.g;
            if ("string" == typeof e) {
                var n = {};
                n.__data__ = e,
                e = n
            } else
                this.v && ((n = {}).__data__ = eI(e),
                e = n);
            t.i.push(new tR(t.ab++,e)),
            3 == t.G && ns(t)
        }
        ,
        nE.prototype.M = function() {
            this.g.l = null,
            delete this.j,
            nn(this.g),
            delete this.g,
            nE.X.M.call(this)
        }
        ,
        C(nI, e1),
        C(nT, e2),
        C(nS, nb),
        nS.prototype.xa = function() {
            e_(this.g, "a")
        }
        ,
        nS.prototype.wa = function(e) {
            e_(this.g, new nI(e))
        }
        ,
        nS.prototype.va = function(e) {
            e_(this.g, new nT)
        }
        ,
        nS.prototype.ua = function() {
            e_(this.g, "b")
        }
        ,
        n_.prototype.createWebChannel = n_.prototype.g,
        nE.prototype.send = nE.prototype.u,
        nE.prototype.open = nE.prototype.m,
        nE.prototype.close = nE.prototype.close,
        eQ.NO_ERROR = 0,
        eQ.TIMEOUT = 8,
        eQ.HTTP_ERROR = 6,
        eX.COMPLETE = "complete",
        eZ.EventType = e0,
        e0.OPEN = "a",
        e0.CLOSE = "b",
        e0.ERROR = "c",
        e0.MESSAGE = "d",
        eb.prototype.listen = eb.prototype.N,
        tJ.prototype.listenOnce = tJ.prototype.O,
        tJ.prototype.getLastError = tJ.prototype.Oa,
        tJ.prototype.getLastErrorCode = tJ.prototype.Ea,
        tJ.prototype.getStatus = tJ.prototype.aa,
        tJ.prototype.getResponseJson = tJ.prototype.Sa,
        tJ.prototype.getResponseText = tJ.prototype.fa,
        tJ.prototype.send = tJ.prototype.da,
        tJ.prototype.setWithCredentials = tJ.prototype.Ka;
        var nC = m.createWebChannelTransport = function() {
            return new n_
        }
          , nA = m.getStatEventTarget = function() {
            return eB()
        }
          , nk = m.ErrorCode = eQ
          , nN = m.EventType = eX
          , nO = m.Event = eF
          , nx = m.Stat = {
            sb: 0,
            vb: 1,
            wb: 2,
            Pb: 3,
            Ub: 4,
            Rb: 5,
            Sb: 6,
            Qb: 7,
            Ob: 8,
            Tb: 9,
            PROXY: 10,
            NOPROXY: 11,
            Mb: 12,
            Ib: 13,
            Jb: 14,
            Hb: 15,
            Kb: 16,
            Lb: 17,
            ob: 18,
            nb: 19,
            pb: 20
        }
          , nR = m.FetchXmlHttpFactory = tH
          , nD = m.WebChannel = eZ
          , nL = m.XhrIo = tJ;
        n(3454);
        let nP = "@firebase/firestore";
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class nM {
            constructor(e) {
                this.uid = e
            }
            isAuthenticated() {
                return null != this.uid
            }
            toKey() {
                return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
            }
            isEqual(e) {
                return e.uid === this.uid
            }
        }
        nM.UNAUTHENTICATED = new nM(null),
        nM.GOOGLE_CREDENTIALS = new nM("google-credentials-uid"),
        nM.FIRST_PARTY = new nM("first-party-uid"),
        nM.MOCK_USER = new nM("mock-user");
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let nj = "9.17.2"
          , nU = new f.Yd("@firebase/firestore");
        function nV() {
            return nU.logLevel
        }
        function nF(e, ...t) {
            if (nU.logLevel <= f.in.DEBUG) {
                let n = t.map(nq);
                nU.debug(`Firestore (${nj}): ${e}`, ...n)
            }
        }
        function nz(e, ...t) {
            if (nU.logLevel <= f.in.ERROR) {
                let n = t.map(nq);
                nU.error(`Firestore (${nj}): ${e}`, ...n)
            }
        }
        function nB(e, ...t) {
            if (nU.logLevel <= f.in.WARN) {
                let n = t.map(nq);
                nU.warn(`Firestore (${nj}): ${e}`, ...n)
            }
        }
        function nq(e) {
            if ("string" == typeof e)
                return e;
            try {
                return JSON.stringify(e)
            } catch (t) {
                return e
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function nH(e="Unexpected state") {
            let t = `FIRESTORE (${nj}) INTERNAL ASSERTION FAILED: ` + e;
            throw nz(t),
            Error(t)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let nK = {
            OK: "ok",
            CANCELLED: "cancelled",
            UNKNOWN: "unknown",
            INVALID_ARGUMENT: "invalid-argument",
            DEADLINE_EXCEEDED: "deadline-exceeded",
            NOT_FOUND: "not-found",
            ALREADY_EXISTS: "already-exists",
            PERMISSION_DENIED: "permission-denied",
            UNAUTHENTICATED: "unauthenticated",
            RESOURCE_EXHAUSTED: "resource-exhausted",
            FAILED_PRECONDITION: "failed-precondition",
            ABORTED: "aborted",
            OUT_OF_RANGE: "out-of-range",
            UNIMPLEMENTED: "unimplemented",
            INTERNAL: "internal",
            UNAVAILABLE: "unavailable",
            DATA_LOSS: "data-loss"
        };
        class n$ extends p.ZR {
            constructor(e, t) {
                super(e, t),
                this.code = e,
                this.message = t,
                this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class nG {
            constructor() {
                this.promise = new Promise( (e, t) => {
                    this.resolve = e,
                    this.reject = t
                }
                )
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class nW {
            constructor(e, t) {
                this.user = t,
                this.type = "OAuth",
                this.headers = new Map,
                this.headers.set("Authorization", `Bearer ${e}`)
            }
        }
        class nQ {
            getToken() {
                return Promise.resolve(null)
            }
            invalidateToken() {}
            start(e, t) {
                e.enqueueRetryable( () => t(nM.UNAUTHENTICATED))
            }
            shutdown() {}
        }
        class nX {
            constructor(e) {
                this.token = e,
                this.changeListener = null
            }
            getToken() {
                return Promise.resolve(this.token)
            }
            invalidateToken() {}
            start(e, t) {
                this.changeListener = t,
                e.enqueueRetryable( () => t(this.token.user))
            }
            shutdown() {
                this.changeListener = null
            }
        }
        class nJ {
            constructor(e) {
                this.t = e,
                this.currentUser = nM.UNAUTHENTICATED,
                this.i = 0,
                this.forceRefresh = !1,
                this.auth = null
            }
            start(e, t) {
                let n = this.i
                  , r = e => this.i !== n ? (n = this.i,
                t(e)) : Promise.resolve()
                  , i = new nG;
                this.o = () => {
                    this.i++,
                    this.currentUser = this.u(),
                    i.resolve(),
                    i = new nG,
                    e.enqueueRetryable( () => r(this.currentUser))
                }
                ;
                let s = () => {
                    let t = i;
                    e.enqueueRetryable(async () => {
                        await t.promise,
                        await r(this.currentUser)
                    }
                    )
                }
                  , a = e => {
                    nF("FirebaseAuthCredentialsProvider", "Auth detected"),
                    this.auth = e,
                    this.auth.addAuthTokenListener(this.o),
                    s()
                }
                ;
                this.t.onInit(e => a(e)),
                setTimeout( () => {
                    if (!this.auth) {
                        let e = this.t.getImmediate({
                            optional: !0
                        });
                        e ? a(e) : (nF("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                        i.resolve(),
                        i = new nG)
                    }
                }
                , 0),
                s()
            }
            getToken() {
                let e = this.i
                  , t = this.forceRefresh;
                return this.forceRefresh = !1,
                this.auth ? this.auth.getToken(t).then(t => this.i !== e ? (nF("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."),
                this.getToken()) : t ? ("string" == typeof t.accessToken || nH(),
                new nW(t.accessToken,this.currentUser)) : null) : Promise.resolve(null)
            }
            invalidateToken() {
                this.forceRefresh = !0
            }
            shutdown() {
                this.auth && this.auth.removeAuthTokenListener(this.o)
            }
            u() {
                let e = this.auth && this.auth.getUid();
                return null === e || "string" == typeof e || nH(),
                new nM(e)
            }
        }
        class nY {
            constructor(e, t, n, r) {
                this.h = e,
                this.l = t,
                this.m = n,
                this.g = r,
                this.type = "FirstParty",
                this.user = nM.FIRST_PARTY,
                this.p = new Map
            }
            I() {
                return this.g ? this.g() : ("object" == typeof this.h && null !== this.h && this.h.auth && this.h.auth.getAuthHeaderValueForFirstParty || nH(),
                this.h.auth.getAuthHeaderValueForFirstParty([]))
            }
            get headers() {
                this.p.set("X-Goog-AuthUser", this.l);
                let e = this.I();
                return e && this.p.set("Authorization", e),
                this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m),
                this.p
            }
        }
        class nZ {
            constructor(e, t, n, r) {
                this.h = e,
                this.l = t,
                this.m = n,
                this.g = r
            }
            getToken() {
                return Promise.resolve(new nY(this.h,this.l,this.m,this.g))
            }
            start(e, t) {
                e.enqueueRetryable( () => t(nM.FIRST_PARTY))
            }
            shutdown() {}
            invalidateToken() {}
        }
        class n0 {
            constructor(e) {
                this.value = e,
                this.type = "AppCheck",
                this.headers = new Map,
                e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
            }
        }
        class n1 {
            constructor(e) {
                this.T = e,
                this.forceRefresh = !1,
                this.appCheck = null,
                this.A = null
            }
            start(e, t) {
                let n = e => {
                    null != e.error && nF("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);
                    let n = e.token !== this.A;
                    return this.A = e.token,
                    nF("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`),
                    n ? t(e.token) : Promise.resolve()
                }
                ;
                this.o = t => {
                    e.enqueueRetryable( () => n(t))
                }
                ;
                let r = e => {
                    nF("FirebaseAppCheckTokenProvider", "AppCheck detected"),
                    this.appCheck = e,
                    this.appCheck.addTokenListener(this.o)
                }
                ;
                this.T.onInit(e => r(e)),
                setTimeout( () => {
                    if (!this.appCheck) {
                        let e = this.T.getImmediate({
                            optional: !0
                        });
                        e ? r(e) : nF("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
                    }
                }
                , 0)
            }
            getToken() {
                let e = this.forceRefresh;
                return this.forceRefresh = !1,
                this.appCheck ? this.appCheck.getToken(e).then(e => e ? ("string" == typeof e.token || nH(),
                this.A = e.token,
                new n0(e.token)) : null) : Promise.resolve(null)
            }
            invalidateToken() {
                this.forceRefresh = !0
            }
            shutdown() {
                this.appCheck && this.appCheck.removeTokenListener(this.o)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class n2 {
            static R() {
                let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                  , t = Math.floor(256 / e.length) * e.length
                  , n = "";
                for (; n.length < 20; ) {
                    let r = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                    function(e) {
                        let t = "undefined" != typeof self && (self.crypto || self.msCrypto)
                          , n = new Uint8Array(e);
                        if (t && "function" == typeof t.getRandomValues)
                            t.getRandomValues(n);
                        else
                            for (let t = 0; t < e; t++)
                                n[t] = Math.floor(256 * Math.random());
                        return n
                    }(40);
                    for (let i = 0; i < r.length; ++i)
                        n.length < 20 && r[i] < t && (n += e.charAt(r[i] % e.length))
                }
                return n
            }
        }
        function n3(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function n4(e, t, n) {
            return e.length === t.length && e.every( (e, r) => n(e, t[r]))
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class n6 {
            constructor(e, t) {
                if (this.seconds = e,
                this.nanoseconds = t,
                t < 0 || t >= 1e9)
                    throw new n$(nK.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + t);
                if (e < -62135596800 || e >= 253402300800)
                    throw new n$(nK.INVALID_ARGUMENT,"Timestamp seconds out of range: " + e)
            }
            static now() {
                return n6.fromMillis(Date.now())
            }
            static fromDate(e) {
                return n6.fromMillis(e.getTime())
            }
            static fromMillis(e) {
                let t = Math.floor(e / 1e3);
                return new n6(t,Math.floor(1e6 * (e - 1e3 * t)))
            }
            toDate() {
                return new Date(this.toMillis())
            }
            toMillis() {
                return 1e3 * this.seconds + this.nanoseconds / 1e6
            }
            _compareTo(e) {
                return this.seconds === e.seconds ? n3(this.nanoseconds, e.nanoseconds) : n3(this.seconds, e.seconds)
            }
            isEqual(e) {
                return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
            }
            toString() {
                return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
            }
            toJSON() {
                return {
                    seconds: this.seconds,
                    nanoseconds: this.nanoseconds
                }
            }
            valueOf() {
                let e = this.seconds - -62135596800;
                return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class n5 {
            constructor(e) {
                this.timestamp = e
            }
            static fromTimestamp(e) {
                return new n5(e)
            }
            static min() {
                return new n5(new n6(0,0))
            }
            static max() {
                return new n5(new n6(253402300799,999999999))
            }
            compareTo(e) {
                return this.timestamp._compareTo(e.timestamp)
            }
            isEqual(e) {
                return this.timestamp.isEqual(e.timestamp)
            }
            toMicroseconds() {
                return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            }
            toString() {
                return "SnapshotVersion(" + this.timestamp.toString() + ")"
            }
            toTimestamp() {
                return this.timestamp
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class n8 {
            constructor(e, t, n) {
                void 0 === t ? t = 0 : t > e.length && nH(),
                void 0 === n ? n = e.length - t : n > e.length - t && nH(),
                this.segments = e,
                this.offset = t,
                this.len = n
            }
            get length() {
                return this.len
            }
            isEqual(e) {
                return 0 === n8.comparator(this, e)
            }
            child(e) {
                let t = this.segments.slice(this.offset, this.limit());
                return e instanceof n8 ? e.forEach(e => {
                    t.push(e)
                }
                ) : t.push(e),
                this.construct(t)
            }
            limit() {
                return this.offset + this.length
            }
            popFirst(e) {
                return e = void 0 === e ? 1 : e,
                this.construct(this.segments, this.offset + e, this.length - e)
            }
            popLast() {
                return this.construct(this.segments, this.offset, this.length - 1)
            }
            firstSegment() {
                return this.segments[this.offset]
            }
            lastSegment() {
                return this.get(this.length - 1)
            }
            get(e) {
                return this.segments[this.offset + e]
            }
            isEmpty() {
                return 0 === this.length
            }
            isPrefixOf(e) {
                if (e.length < this.length)
                    return !1;
                for (let t = 0; t < this.length; t++)
                    if (this.get(t) !== e.get(t))
                        return !1;
                return !0
            }
            isImmediateParentOf(e) {
                if (this.length + 1 !== e.length)
                    return !1;
                for (let t = 0; t < this.length; t++)
                    if (this.get(t) !== e.get(t))
                        return !1;
                return !0
            }
            forEach(e) {
                for (let t = this.offset, n = this.limit(); t < n; t++)
                    e(this.segments[t])
            }
            toArray() {
                return this.segments.slice(this.offset, this.limit())
            }
            static comparator(e, t) {
                let n = Math.min(e.length, t.length);
                for (let r = 0; r < n; r++) {
                    let n = e.get(r)
                      , i = t.get(r);
                    if (n < i)
                        return -1;
                    if (n > i)
                        return 1
                }
                return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
            }
        }
        class n7 extends n8 {
            construct(e, t, n) {
                return new n7(e,t,n)
            }
            canonicalString() {
                return this.toArray().join("/")
            }
            toString() {
                return this.canonicalString()
            }
            static fromString(...e) {
                let t = [];
                for (let n of e) {
                    if (n.indexOf("//") >= 0)
                        throw new n$(nK.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);
                    t.push(...n.split("/").filter(e => e.length > 0))
                }
                return new n7(t)
            }
            static emptyPath() {
                return new n7([])
            }
        }
        let n9 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
        class re extends n8 {
            construct(e, t, n) {
                return new re(e,t,n)
            }
            static isValidIdentifier(e) {
                return n9.test(e)
            }
            canonicalString() {
                return this.toArray().map(e => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
                re.isValidIdentifier(e) || (e = "`" + e + "`"),
                e)).join(".")
            }
            toString() {
                return this.canonicalString()
            }
            isKeyField() {
                return 1 === this.length && "__name__" === this.get(0)
            }
            static keyField() {
                return new re(["__name__"])
            }
            static fromServerFormat(e) {
                let t = []
                  , n = ""
                  , r = 0
                  , i = () => {
                    if (0 === n.length)
                        throw new n$(nK.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
                    t.push(n),
                    n = ""
                }
                  , s = !1;
                for (; r < e.length; ) {
                    let t = e[r];
                    if ("\\" === t) {
                        if (r + 1 === e.length)
                            throw new n$(nK.INVALID_ARGUMENT,"Path has trailing escape character: " + e);
                        let t = e[r + 1];
                        if ("\\" !== t && "." !== t && "`" !== t)
                            throw new n$(nK.INVALID_ARGUMENT,"Path has invalid escape sequence: " + e);
                        n += t,
                        r += 2
                    } else
                        "`" === t ? (s = !s,
                        r++) : "." !== t || s ? (n += t,
                        r++) : (i(),
                        r++)
                }
                if (i(),
                s)
                    throw new n$(nK.INVALID_ARGUMENT,"Unterminated ` in path: " + e);
                return new re(t)
            }
            static emptyPath() {
                return new re([])
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rt {
            constructor(e) {
                this.path = e
            }
            static fromPath(e) {
                return new rt(n7.fromString(e))
            }
            static fromName(e) {
                return new rt(n7.fromString(e).popFirst(5))
            }
            static empty() {
                return new rt(n7.emptyPath())
            }
            get collectionGroup() {
                return this.path.popLast().lastSegment()
            }
            hasCollectionId(e) {
                return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
            }
            getCollectionGroup() {
                return this.path.get(this.path.length - 2)
            }
            getCollectionPath() {
                return this.path.popLast()
            }
            isEqual(e) {
                return null !== e && 0 === n7.comparator(this.path, e.path)
            }
            toString() {
                return this.path.toString()
            }
            static comparator(e, t) {
                return n7.comparator(e.path, t.path)
            }
            static isDocumentKey(e) {
                return e.length % 2 == 0
            }
            static fromSegments(e) {
                return new rt(new n7(e.slice()))
            }
        }
        class rn {
            constructor(e, t, n) {
                this.readTime = e,
                this.documentKey = t,
                this.largestBatchId = n
            }
            static min() {
                return new rn(n5.min(),rt.empty(),-1)
            }
            static max() {
                return new rn(n5.max(),rt.empty(),-1)
            }
        }
        class rr {
            constructor() {
                this.onCommittedListeners = []
            }
            addOnCommittedListener(e) {
                this.onCommittedListeners.push(e)
            }
            raiseOnCommittedEvent() {
                this.onCommittedListeners.forEach(e => e())
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        async function ri(e) {
            if (e.code !== nK.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== e.message)
                throw e;
            nF("LocalStore", "Unexpectedly lost primary lease")
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rs {
            constructor(e) {
                this.nextCallback = null,
                this.catchCallback = null,
                this.result = void 0,
                this.error = void 0,
                this.isDone = !1,
                this.callbackAttached = !1,
                e(e => {
                    this.isDone = !0,
                    this.result = e,
                    this.nextCallback && this.nextCallback(e)
                }
                , e => {
                    this.isDone = !0,
                    this.error = e,
                    this.catchCallback && this.catchCallback(e)
                }
                )
            }
            catch(e) {
                return this.next(void 0, e)
            }
            next(e, t) {
                return this.callbackAttached && nH(),
                this.callbackAttached = !0,
                this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new rs( (n, r) => {
                    this.nextCallback = t => {
                        this.wrapSuccess(e, t).next(n, r)
                    }
                    ,
                    this.catchCallback = e => {
                        this.wrapFailure(t, e).next(n, r)
                    }
                }
                )
            }
            toPromise() {
                return new Promise( (e, t) => {
                    this.next(e, t)
                }
                )
            }
            wrapUserFunction(e) {
                try {
                    let t = e();
                    return t instanceof rs ? t : rs.resolve(t)
                } catch (e) {
                    return rs.reject(e)
                }
            }
            wrapSuccess(e, t) {
                return e ? this.wrapUserFunction( () => e(t)) : rs.resolve(t)
            }
            wrapFailure(e, t) {
                return e ? this.wrapUserFunction( () => e(t)) : rs.reject(t)
            }
            static resolve(e) {
                return new rs( (t, n) => {
                    t(e)
                }
                )
            }
            static reject(e) {
                return new rs( (t, n) => {
                    n(e)
                }
                )
            }
            static waitFor(e) {
                return new rs( (t, n) => {
                    let r = 0
                      , i = 0
                      , s = !1;
                    e.forEach(e => {
                        ++r,
                        e.next( () => {
                            ++i,
                            s && i === r && t()
                        }
                        , e => n(e))
                    }
                    ),
                    s = !0,
                    i === r && t()
                }
                )
            }
            static or(e) {
                let t = rs.resolve(!1);
                for (let n of e)
                    t = t.next(e => e ? rs.resolve(e) : n());
                return t
            }
            static forEach(e, t) {
                let n = [];
                return e.forEach( (e, r) => {
                    n.push(t.call(this, e, r))
                }
                ),
                this.waitFor(n)
            }
            static mapArray(e, t) {
                return new rs( (n, r) => {
                    let i = e.length
                      , s = Array(i)
                      , a = 0;
                    for (let o = 0; o < i; o++) {
                        let l = o;
                        t(e[l]).next(e => {
                            s[l] = e,
                            ++a === i && n(s)
                        }
                        , e => r(e))
                    }
                }
                )
            }
            static doWhile(e, t) {
                return new rs( (n, r) => {
                    let i = () => {
                        !0 === e() ? t().next( () => {
                            i()
                        }
                        , r) : n()
                    }
                    ;
                    i()
                }
                )
            }
        }
        function ra(e) {
            return "IndexedDbTransactionError" === e.name
        }
        /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ro {
            constructor(e, t) {
                this.previousValue = e,
                t && (t.sequenceNumberHandler = e => this.ut(e),
                this.ct = e => t.writeSequenceNumber(e))
            }
            ut(e) {
                return this.previousValue = Math.max(e, this.previousValue),
                this.previousValue
            }
            next() {
                let e = ++this.previousValue;
                return this.ct && this.ct(e),
                e
            }
        }
        ro.at = -1;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rl {
            constructor(e, t, n, r, i, s, a, o) {
                this.databaseId = e,
                this.appId = t,
                this.persistenceKey = n,
                this.host = r,
                this.ssl = i,
                this.forceLongPolling = s,
                this.autoDetectLongPolling = a,
                this.useFetchStreams = o
            }
        }
        class ru {
            constructor(e, t) {
                this.projectId = e,
                this.database = t || "(default)"
            }
            static empty() {
                return new ru("","")
            }
            get isDefaultDatabase() {
                return "(default)" === this.database
            }
            isEqual(e) {
                return e instanceof ru && e.projectId === this.projectId && e.database === this.database
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function rc(e) {
            let t = 0;
            for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t++;
            return t
        }
        function rh(e, t) {
            for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
        }
        function rd(e) {
            for (let t in e)
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        function rf(e) {
            return 0 === e && 1 / e == -1 / 0
        }
        /**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rp extends Error {
            constructor() {
                super(...arguments),
                this.name = "Base64DecodeError"
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rg {
            constructor(e) {
                this.binaryString = e
            }
            static fromBase64String(e) {
                let t = function(e) {
                    try {
                        return atob(e)
                    } catch (e) {
                        throw e instanceof DOMException ? new rp("Invalid base64 string: " + e) : e
                    }
                }(e);
                return new rg(t)
            }
            static fromUint8Array(e) {
                let t = function(e) {
                    let t = "";
                    for (let n = 0; n < e.length; ++n)
                        t += String.fromCharCode(e[n]);
                    return t
                }(e);
                return new rg(t)
            }
            [Symbol.iterator]() {
                let e = 0;
                return {
                    next: () => e < this.binaryString.length ? {
                        value: this.binaryString.charCodeAt(e++),
                        done: !1
                    } : {
                        value: void 0,
                        done: !0
                    }
                }
            }
            toBase64() {
                return btoa(this.binaryString)
            }
            toUint8Array() {
                return function(e) {
                    let t = new Uint8Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        t[n] = e.charCodeAt(n);
                    return t
                }(this.binaryString)
            }
            approximateByteSize() {
                return 2 * this.binaryString.length
            }
            compareTo(e) {
                return n3(this.binaryString, e.binaryString)
            }
            isEqual(e) {
                return this.binaryString === e.binaryString
            }
        }
        rg.EMPTY_BYTE_STRING = new rg("");
        let rm = RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
        function ry(e) {
            if (e || nH(),
            "string" == typeof e) {
                let t = 0
                  , n = rm.exec(e);
                if (n || nH(),
                n[1]) {
                    let e = n[1];
                    t = Number(e = (e + "000000000").substr(0, 9))
                }
                let r = new Date(e);
                return {
                    seconds: Math.floor(r.getTime() / 1e3),
                    nanos: t
                }
            }
            return {
                seconds: rv(e.seconds),
                nanos: rv(e.nanos)
            }
        }
        function rv(e) {
            return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0
        }
        function rw(e) {
            return "string" == typeof e ? rg.fromBase64String(e) : rg.fromUint8Array(e)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function rb(e) {
            var t, n;
            return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
        }
        function r_(e) {
            let t = ry(e.mapValue.fields.__local_write_time__.timestampValue);
            return new n6(t.seconds,t.nanos)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let rE = {
            mapValue: {
                fields: {
                    __type__: {
                        stringValue: "__max__"
                    }
                }
            }
        };
        function rI(e) {
            return "nullValue"in e ? 0 : "booleanValue"in e ? 1 : "integerValue"in e || "doubleValue"in e ? 2 : "timestampValue"in e ? 3 : "stringValue"in e ? 5 : "bytesValue"in e ? 6 : "referenceValue"in e ? 7 : "geoPointValue"in e ? 8 : "arrayValue"in e ? 9 : "mapValue"in e ? rb(e) ? 4 : rP(e) ? 9007199254740991 : 10 : nH()
        }
        function rT(e, t) {
            if (e === t)
                return !0;
            let n = rI(e);
            if (n !== rI(t))
                return !1;
            switch (n) {
            case 0:
            case 9007199254740991:
                return !0;
            case 1:
                return e.booleanValue === t.booleanValue;
            case 4:
                return r_(e).isEqual(r_(t));
            case 3:
                return function(e, t) {
                    if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length)
                        return e.timestampValue === t.timestampValue;
                    let n = ry(e.timestampValue)
                      , r = ry(t.timestampValue);
                    return n.seconds === r.seconds && n.nanos === r.nanos
                }(e, t);
            case 5:
                return e.stringValue === t.stringValue;
            case 6:
                return rw(e.bytesValue).isEqual(rw(t.bytesValue));
            case 7:
                return e.referenceValue === t.referenceValue;
            case 8:
                return rv(e.geoPointValue.latitude) === rv(t.geoPointValue.latitude) && rv(e.geoPointValue.longitude) === rv(t.geoPointValue.longitude);
            case 2:
                return function(e, t) {
                    if ("integerValue"in e && "integerValue"in t)
                        return rv(e.integerValue) === rv(t.integerValue);
                    if ("doubleValue"in e && "doubleValue"in t) {
                        let n = rv(e.doubleValue)
                          , r = rv(t.doubleValue);
                        return n === r ? rf(n) === rf(r) : isNaN(n) && isNaN(r)
                    }
                    return !1
                }(e, t);
            case 9:
                return n4(e.arrayValue.values || [], t.arrayValue.values || [], rT);
            case 10:
                return function(e, t) {
                    let n = e.mapValue.fields || {}
                      , r = t.mapValue.fields || {};
                    if (rc(n) !== rc(r))
                        return !1;
                    for (let e in n)
                        if (n.hasOwnProperty(e) && (void 0 === r[e] || !rT(n[e], r[e])))
                            return !1;
                    return !0
                }(e, t);
            default:
                return nH()
            }
        }
        function rS(e, t) {
            return void 0 !== (e.values || []).find(e => rT(e, t))
        }
        function rC(e, t) {
            if (e === t)
                return 0;
            let n = rI(e)
              , r = rI(t);
            if (n !== r)
                return n3(n, r);
            switch (n) {
            case 0:
            case 9007199254740991:
                return 0;
            case 1:
                return n3(e.booleanValue, t.booleanValue);
            case 2:
                return function(e, t) {
                    let n = rv(e.integerValue || e.doubleValue)
                      , r = rv(t.integerValue || t.doubleValue);
                    return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                }(e, t);
            case 3:
                return rA(e.timestampValue, t.timestampValue);
            case 4:
                return rA(r_(e), r_(t));
            case 5:
                return n3(e.stringValue, t.stringValue);
            case 6:
                return function(e, t) {
                    let n = rw(e)
                      , r = rw(t);
                    return n.compareTo(r)
                }(e.bytesValue, t.bytesValue);
            case 7:
                return function(e, t) {
                    let n = e.split("/")
                      , r = t.split("/");
                    for (let e = 0; e < n.length && e < r.length; e++) {
                        let t = n3(n[e], r[e]);
                        if (0 !== t)
                            return t
                    }
                    return n3(n.length, r.length)
                }(e.referenceValue, t.referenceValue);
            case 8:
                return function(e, t) {
                    let n = n3(rv(e.latitude), rv(t.latitude));
                    return 0 !== n ? n : n3(rv(e.longitude), rv(t.longitude))
                }(e.geoPointValue, t.geoPointValue);
            case 9:
                return function(e, t) {
                    let n = e.values || []
                      , r = t.values || [];
                    for (let e = 0; e < n.length && e < r.length; ++e) {
                        let t = rC(n[e], r[e]);
                        if (t)
                            return t
                    }
                    return n3(n.length, r.length)
                }(e.arrayValue, t.arrayValue);
            case 10:
                return function(e, t) {
                    if (e === rE.mapValue && t === rE.mapValue)
                        return 0;
                    if (e === rE.mapValue)
                        return 1;
                    if (t === rE.mapValue)
                        return -1;
                    let n = e.fields || {}
                      , r = Object.keys(n)
                      , i = t.fields || {}
                      , s = Object.keys(i);
                    r.sort(),
                    s.sort();
                    for (let e = 0; e < r.length && e < s.length; ++e) {
                        let t = n3(r[e], s[e]);
                        if (0 !== t)
                            return t;
                        let a = rC(n[r[e]], i[s[e]]);
                        if (0 !== a)
                            return a
                    }
                    return n3(r.length, s.length)
                }(e.mapValue, t.mapValue);
            default:
                throw nH()
            }
        }
        function rA(e, t) {
            if ("string" == typeof e && "string" == typeof t && e.length === t.length)
                return n3(e, t);
            let n = ry(e)
              , r = ry(t)
              , i = n3(n.seconds, r.seconds);
            return 0 !== i ? i : n3(n.nanos, r.nanos)
        }
        function rk(e) {
            var t, n;
            return "nullValue"in e ? "null" : "booleanValue"in e ? "" + e.booleanValue : "integerValue"in e ? "" + e.integerValue : "doubleValue"in e ? "" + e.doubleValue : "timestampValue"in e ? function(e) {
                let t = ry(e);
                return `time(${t.seconds},${t.nanos})`
            }(e.timestampValue) : "stringValue"in e ? e.stringValue : "bytesValue"in e ? rw(e.bytesValue).toBase64() : "referenceValue"in e ? (n = e.referenceValue,
            rt.fromName(n).toString()) : "geoPointValue"in e ? `geo(${(t = e.geoPointValue).latitude},${t.longitude})` : "arrayValue"in e ? function(e) {
                let t = "["
                  , n = !0;
                for (let r of e.values || [])
                    n ? n = !1 : t += ",",
                    t += rk(r);
                return t + "]"
            }(e.arrayValue) : "mapValue"in e ? function(e) {
                let t = Object.keys(e.fields || {}).sort()
                  , n = "{"
                  , r = !0;
                for (let i of t)
                    r ? r = !1 : n += ",",
                    n += `${i}:${rk(e.fields[i])}`;
                return n + "}"
            }(e.mapValue) : nH()
        }
        function rN(e) {
            return !!e && "integerValue"in e
        }
        function rO(e) {
            return !!e && "arrayValue"in e
        }
        function rx(e) {
            return !!e && "nullValue"in e
        }
        function rR(e) {
            return !!e && "doubleValue"in e && isNaN(Number(e.doubleValue))
        }
        function rD(e) {
            return !!e && "mapValue"in e
        }
        function rL(e) {
            if (e.geoPointValue)
                return {
                    geoPointValue: Object.assign({}, e.geoPointValue)
                };
            if (e.timestampValue && "object" == typeof e.timestampValue)
                return {
                    timestampValue: Object.assign({}, e.timestampValue)
                };
            if (e.mapValue) {
                let t = {
                    mapValue: {
                        fields: {}
                    }
                };
                return rh(e.mapValue.fields, (e, n) => t.mapValue.fields[e] = rL(n)),
                t
            }
            if (e.arrayValue) {
                let t = {
                    arrayValue: {
                        values: []
                    }
                };
                for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
                    t.arrayValue.values[n] = rL(e.arrayValue.values[n]);
                return t
            }
            return Object.assign({}, e)
        }
        function rP(e) {
            return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rM {
            constructor(e, t) {
                this.position = e,
                this.inclusive = t
            }
        }
        function rj(e, t, n) {
            let r = 0;
            for (let i = 0; i < e.position.length; i++) {
                let s = t[i]
                  , a = e.position[i];
                if (r = s.field.isKeyField() ? rt.comparator(rt.fromName(a.referenceValue), n.key) : rC(a, n.data.field(s.field)),
                "desc" === s.dir && (r *= -1),
                0 !== r)
                    break
            }
            return r
        }
        function rU(e, t) {
            if (null === e)
                return null === t;
            if (null === t || e.inclusive !== t.inclusive || e.position.length !== t.position.length)
                return !1;
            for (let n = 0; n < e.position.length; n++)
                if (!rT(e.position[n], t.position[n]))
                    return !1;
            return !0
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rV {
        }
        class rF extends rV {
            constructor(e, t, n) {
                super(),
                this.field = e,
                this.op = t,
                this.value = n
            }
            static create(e, t, n) {
                return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new rH(e,t,n) : "array-contains" === t ? new rW(e,n) : "in" === t ? new rQ(e,n) : "not-in" === t ? new rX(e,n) : "array-contains-any" === t ? new rJ(e,n) : new rF(e,t,n)
            }
            static createKeyFieldInFilter(e, t, n) {
                return "in" === t ? new rK(e,n) : new r$(e,n)
            }
            matches(e) {
                let t = e.data.field(this.field);
                return "!=" === this.op ? null !== t && this.matchesComparison(rC(t, this.value)) : null !== t && rI(this.value) === rI(t) && this.matchesComparison(rC(t, this.value))
            }
            matchesComparison(e) {
                switch (this.op) {
                case "<":
                    return e < 0;
                case "<=":
                    return e <= 0;
                case "==":
                    return 0 === e;
                case "!=":
                    return 0 !== e;
                case ">":
                    return e > 0;
                case ">=":
                    return e >= 0;
                default:
                    return nH()
                }
            }
            isInequality() {
                return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
            }
            getFlattenedFilters() {
                return [this]
            }
            getFilters() {
                return [this]
            }
            getFirstInequalityField() {
                return this.isInequality() ? this.field : null
            }
        }
        class rz extends rV {
            constructor(e, t) {
                super(),
                this.filters = e,
                this.op = t,
                this.ft = null
            }
            static create(e, t) {
                return new rz(e,t)
            }
            matches(e) {
                return rB(this) ? void 0 === this.filters.find(t => !t.matches(e)) : void 0 !== this.filters.find(t => t.matches(e))
            }
            getFlattenedFilters() {
                return null !== this.ft || (this.ft = this.filters.reduce( (e, t) => e.concat(t.getFlattenedFilters()), [])),
                this.ft
            }
            getFilters() {
                return Object.assign([], this.filters)
            }
            getFirstInequalityField() {
                let e = this.dt(e => e.isInequality());
                return null !== e ? e.field : null
            }
            dt(e) {
                for (let t of this.getFlattenedFilters())
                    if (e(t))
                        return t;
                return null
            }
        }
        function rB(e) {
            return "and" === e.op
        }
        function rq(e) {
            for (let t of e.filters)
                if (t instanceof rz)
                    return !1;
            return !0
        }
        class rH extends rF {
            constructor(e, t, n) {
                super(e, t, n),
                this.key = rt.fromName(n.referenceValue)
            }
            matches(e) {
                let t = rt.comparator(e.key, this.key);
                return this.matchesComparison(t)
            }
        }
        class rK extends rF {
            constructor(e, t) {
                super(e, "in", t),
                this.keys = rG("in", t)
            }
            matches(e) {
                return this.keys.some(t => t.isEqual(e.key))
            }
        }
        class r$ extends rF {
            constructor(e, t) {
                super(e, "not-in", t),
                this.keys = rG("not-in", t)
            }
            matches(e) {
                return !this.keys.some(t => t.isEqual(e.key))
            }
        }
        function rG(e, t) {
            var n;
            return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(e => rt.fromName(e.referenceValue))
        }
        class rW extends rF {
            constructor(e, t) {
                super(e, "array-contains", t)
            }
            matches(e) {
                let t = e.data.field(this.field);
                return rO(t) && rS(t.arrayValue, this.value)
            }
        }
        class rQ extends rF {
            constructor(e, t) {
                super(e, "in", t)
            }
            matches(e) {
                let t = e.data.field(this.field);
                return null !== t && rS(this.value.arrayValue, t)
            }
        }
        class rX extends rF {
            constructor(e, t) {
                super(e, "not-in", t)
            }
            matches(e) {
                if (rS(this.value.arrayValue, {
                    nullValue: "NULL_VALUE"
                }))
                    return !1;
                let t = e.data.field(this.field);
                return null !== t && !rS(this.value.arrayValue, t)
            }
        }
        class rJ extends rF {
            constructor(e, t) {
                super(e, "array-contains-any", t)
            }
            matches(e) {
                let t = e.data.field(this.field);
                return !(!rO(t) || !t.arrayValue.values) && t.arrayValue.values.some(e => rS(this.value.arrayValue, e))
            }
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rY {
            constructor(e, t="asc") {
                this.field = e,
                this.dir = t
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class rZ {
            constructor(e, t) {
                this.comparator = e,
                this.root = t || r1.EMPTY
            }
            insert(e, t) {
                return new rZ(this.comparator,this.root.insert(e, t, this.comparator).copy(null, null, r1.BLACK, null, null))
            }
            remove(e) {
                return new rZ(this.comparator,this.root.remove(e, this.comparator).copy(null, null, r1.BLACK, null, null))
            }
            get(e) {
                let t = this.root;
                for (; !t.isEmpty(); ) {
                    let n = this.comparator(e, t.key);
                    if (0 === n)
                        return t.value;
                    n < 0 ? t = t.left : n > 0 && (t = t.right)
                }
                return null
            }
            indexOf(e) {
                let t = 0
                  , n = this.root;
                for (; !n.isEmpty(); ) {
                    let r = this.comparator(e, n.key);
                    if (0 === r)
                        return t + n.left.size;
                    r < 0 ? n = n.left : (t += n.left.size + 1,
                    n = n.right)
                }
                return -1
            }
            isEmpty() {
                return this.root.isEmpty()
            }
            get size() {
                return this.root.size
            }
            minKey() {
                return this.root.minKey()
            }
            maxKey() {
                return this.root.maxKey()
            }
            inorderTraversal(e) {
                return this.root.inorderTraversal(e)
            }
            forEach(e) {
                this.inorderTraversal( (t, n) => (e(t, n),
                !1))
            }
            toString() {
                let e = [];
                return this.inorderTraversal( (t, n) => (e.push(`${t}:${n}`),
                !1)),
                `{${e.join(", ")}}`
            }
            reverseTraversal(e) {
                return this.root.reverseTraversal(e)
            }
            getIterator() {
                return new r0(this.root,null,this.comparator,!1)
            }
            getIteratorFrom(e) {
                return new r0(this.root,e,this.comparator,!1)
            }
            getReverseIterator() {
                return new r0(this.root,null,this.comparator,!0)
            }
            getReverseIteratorFrom(e) {
                return new r0(this.root,e,this.comparator,!0)
            }
        }
        class r0 {
            constructor(e, t, n, r) {
                this.isReverse = r,
                this.nodeStack = [];
                let i = 1;
                for (; !e.isEmpty(); )
                    if (i = t ? n(e.key, t) : 1,
                    t && r && (i *= -1),
                    i < 0)
                        e = this.isReverse ? e.left : e.right;
                    else {
                        if (0 === i) {
                            this.nodeStack.push(e);
                            break
                        }
                        this.nodeStack.push(e),
                        e = this.isReverse ? e.right : e.left
                    }
            }
            getNext() {
                let e = this.nodeStack.pop()
                  , t = {
                    key: e.key,
                    value: e.value
                };
                if (this.isReverse)
                    for (e = e.left; !e.isEmpty(); )
                        this.nodeStack.push(e),
                        e = e.right;
                else
                    for (e = e.right; !e.isEmpty(); )
                        this.nodeStack.push(e),
                        e = e.left;
                return t
            }
            hasNext() {
                return this.nodeStack.length > 0
            }
            peek() {
                if (0 === this.nodeStack.length)
                    return null;
                let e = this.nodeStack[this.nodeStack.length - 1];
                return {
                    key: e.key,
                    value: e.value
                }
            }
        }
        class r1 {
            constructor(e, t, n, r, i) {
                this.key = e,
                this.value = t,
                this.color = null != n ? n : r1.RED,
                this.left = null != r ? r : r1.EMPTY,
                this.right = null != i ? i : r1.EMPTY,
                this.size = this.left.size + 1 + this.right.size
            }
            copy(e, t, n, r, i) {
                return new r1(null != e ? e : this.key,null != t ? t : this.value,null != n ? n : this.color,null != r ? r : this.left,null != i ? i : this.right)
            }
            isEmpty() {
                return !1
            }
            inorderTraversal(e) {
                return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
            }
            reverseTraversal(e) {
                return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
            }
            min() {
                return this.left.isEmpty() ? this : this.left.min()
            }
            minKey() {
                return this.min().key
            }
            maxKey() {
                return this.right.isEmpty() ? this.key : this.right.maxKey()
            }
            insert(e, t, n) {
                let r = this
                  , i = n(e, r.key);
                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp()
            }
            removeMin() {
                if (this.left.isEmpty())
                    return r1.EMPTY;
                let e = this;
                return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
                (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
            }
            remove(e, t) {
                let n, r = this;
                if (0 > t(e, r.key))
                    r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()),
                    r = r.copy(null, null, null, r.left.remove(e, t), null);
                else {
                    if (r.left.isRed() && (r = r.rotateRight()),
                    r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()),
                    0 === t(e, r.key)) {
                        if (r.right.isEmpty())
                            return r1.EMPTY;
                        n = r.right.min(),
                        r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                    }
                    r = r.copy(null, null, null, null, r.right.remove(e, t))
                }
                return r.fixUp()
            }
            isRed() {
                return this.color
            }
            fixUp() {
                let e = this;
                return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
                e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
                e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
                e
            }
            moveRedLeft() {
                let e = this.colorFlip();
                return e.right.left.isRed() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight())).rotateLeft()).colorFlip()),
                e
            }
            moveRedRight() {
                let e = this.colorFlip();
                return e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()),
                e
            }
            rotateLeft() {
                let e = this.copy(null, null, r1.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null)
            }
            rotateRight() {
                let e = this.copy(null, null, r1.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e)
            }
            colorFlip() {
                let e = this.left.copy(null, null, !this.left.color, null, null)
                  , t = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, e, t)
            }
            checkMaxDepth() {
                let e = this.check();
                return Math.pow(2, e) <= this.size + 1
            }
            check() {
                if (this.isRed() && this.left.isRed() || this.right.isRed())
                    throw nH();
                let e = this.left.check();
                if (e !== this.right.check())
                    throw nH();
                return e + (this.isRed() ? 0 : 1)
            }
        }
        r1.EMPTY = null,
        r1.RED = !0,
        r1.BLACK = !1,
        r1.EMPTY = new class {
            constructor() {
                this.size = 0
            }
            get key() {
                throw nH()
            }
            get value() {
                throw nH()
            }
            get color() {
                throw nH()
            }
            get left() {
                throw nH()
            }
            get right() {
                throw nH()
            }
            copy(e, t, n, r, i) {
                return this
            }
            insert(e, t, n) {
                return new r1(e,t)
            }
            remove(e, t) {
                return this
            }
            isEmpty() {
                return !0
            }
            inorderTraversal(e) {
                return !1
            }
            reverseTraversal(e) {
                return !1
            }
            minKey() {
                return null
            }
            maxKey() {
                return null
            }
            isRed() {
                return !1
            }
            checkMaxDepth() {
                return !0
            }
            check() {
                return 0
            }
        }
        ;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class r2 {
            constructor(e) {
                this.comparator = e,
                this.data = new rZ(this.comparator)
            }
            has(e) {
                return null !== this.data.get(e)
            }
            first() {
                return this.data.minKey()
            }
            last() {
                return this.data.maxKey()
            }
            get size() {
                return this.data.size
            }
            indexOf(e) {
                return this.data.indexOf(e)
            }
            forEach(e) {
                this.data.inorderTraversal( (t, n) => (e(t),
                !1))
            }
            forEachInRange(e, t) {
                let n = this.data.getIteratorFrom(e[0]);
                for (; n.hasNext(); ) {
                    let r = n.getNext();
                    if (this.comparator(r.key, e[1]) >= 0)
                        return;
                    t(r.key)
                }
            }
            forEachWhile(e, t) {
                let n;
                for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); )
                    if (!e(n.getNext().key))
                        return
            }
            firstAfterOrEqual(e) {
                let t = this.data.getIteratorFrom(e);
                return t.hasNext() ? t.getNext().key : null
            }
            getIterator() {
                return new r3(this.data.getIterator())
            }
            getIteratorFrom(e) {
                return new r3(this.data.getIteratorFrom(e))
            }
            add(e) {
                return this.copy(this.data.remove(e).insert(e, !0))
            }
            delete(e) {
                return this.has(e) ? this.copy(this.data.remove(e)) : this
            }
            isEmpty() {
                return this.data.isEmpty()
            }
            unionWith(e) {
                let t = this;
                return t.size < e.size && (t = e,
                e = this),
                e.forEach(e => {
                    t = t.add(e)
                }
                ),
                t
            }
            isEqual(e) {
                if (!(e instanceof r2) || this.size !== e.size)
                    return !1;
                let t = this.data.getIterator()
                  , n = e.data.getIterator();
                for (; t.hasNext(); ) {
                    let e = t.getNext().key
                      , r = n.getNext().key;
                    if (0 !== this.comparator(e, r))
                        return !1
                }
                return !0
            }
            toArray() {
                let e = [];
                return this.forEach(t => {
                    e.push(t)
                }
                ),
                e
            }
            toString() {
                let e = [];
                return this.forEach(t => e.push(t)),
                "SortedSet(" + e.toString() + ")"
            }
            copy(e) {
                let t = new r2(this.comparator);
                return t.data = e,
                t
            }
        }
        class r3 {
            constructor(e) {
                this.iter = e
            }
            getNext() {
                return this.iter.getNext().key
            }
            hasNext() {
                return this.iter.hasNext()
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class r4 {
            constructor(e) {
                this.fields = e,
                e.sort(re.comparator)
            }
            static empty() {
                return new r4([])
            }
            unionWith(e) {
                let t = new r2(re.comparator);
                for (let e of this.fields)
                    t = t.add(e);
                for (let n of e)
                    t = t.add(n);
                return new r4(t.toArray())
            }
            covers(e) {
                for (let t of this.fields)
                    if (t.isPrefixOf(e))
                        return !0;
                return !1
            }
            isEqual(e) {
                return n4(this.fields, e.fields, (e, t) => e.isEqual(t))
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class r6 {
            constructor(e) {
                this.value = e
            }
            static empty() {
                return new r6({
                    mapValue: {}
                })
            }
            field(e) {
                if (e.isEmpty())
                    return this.value;
                {
                    let t = this.value;
                    for (let n = 0; n < e.length - 1; ++n)
                        if (!rD(t = (t.mapValue.fields || {})[e.get(n)]))
                            return null;
                    return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null
                }
            }
            set(e, t) {
                this.getFieldsMap(e.popLast())[e.lastSegment()] = rL(t)
            }
            setAll(e) {
                let t = re.emptyPath()
                  , n = {}
                  , r = [];
                e.forEach( (e, i) => {
                    if (!t.isImmediateParentOf(i)) {
                        let e = this.getFieldsMap(t);
                        this.applyChanges(e, n, r),
                        n = {},
                        r = [],
                        t = i.popLast()
                    }
                    e ? n[i.lastSegment()] = rL(e) : r.push(i.lastSegment())
                }
                );
                let i = this.getFieldsMap(t);
                this.applyChanges(i, n, r)
            }
            delete(e) {
                let t = this.field(e.popLast());
                rD(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]
            }
            isEqual(e) {
                return rT(this.value, e.value)
            }
            getFieldsMap(e) {
                let t = this.value;
                t.mapValue.fields || (t.mapValue = {
                    fields: {}
                });
                for (let n = 0; n < e.length; ++n) {
                    let r = t.mapValue.fields[e.get(n)];
                    rD(r) && r.mapValue.fields || (r = {
                        mapValue: {
                            fields: {}
                        }
                    },
                    t.mapValue.fields[e.get(n)] = r),
                    t = r
                }
                return t.mapValue.fields
            }
            applyChanges(e, t, n) {
                for (let r of (rh(t, (t, n) => e[t] = n),
                n))
                    delete e[r]
            }
            clone() {
                return new r6(rL(this.value))
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class r5 {
            constructor(e, t, n, r, i, s, a) {
                this.key = e,
                this.documentType = t,
                this.version = n,
                this.readTime = r,
                this.createTime = i,
                this.data = s,
                this.documentState = a
            }
            static newInvalidDocument(e) {
                return new r5(e,0,n5.min(),n5.min(),n5.min(),r6.empty(),0)
            }
            static newFoundDocument(e, t, n, r) {
                return new r5(e,1,t,n5.min(),n,r,0)
            }
            static newNoDocument(e, t) {
                return new r5(e,2,t,n5.min(),n5.min(),r6.empty(),0)
            }
            static newUnknownDocument(e, t) {
                return new r5(e,3,t,n5.min(),n5.min(),r6.empty(),2)
            }
            convertToFoundDocument(e, t) {
                return this.createTime.isEqual(n5.min()) && (2 === this.documentType || 0 === this.documentType) && (this.createTime = e),
                this.version = e,
                this.documentType = 1,
                this.data = t,
                this.documentState = 0,
                this
            }
            convertToNoDocument(e) {
                return this.version = e,
                this.documentType = 2,
                this.data = r6.empty(),
                this.documentState = 0,
                this
            }
            convertToUnknownDocument(e) {
                return this.version = e,
                this.documentType = 3,
                this.data = r6.empty(),
                this.documentState = 2,
                this
            }
            setHasCommittedMutations() {
                return this.documentState = 2,
                this
            }
            setHasLocalMutations() {
                return this.documentState = 1,
                this.version = n5.min(),
                this
            }
            setReadTime(e) {
                return this.readTime = e,
                this
            }
            get hasLocalMutations() {
                return 1 === this.documentState
            }
            get hasCommittedMutations() {
                return 2 === this.documentState
            }
            get hasPendingWrites() {
                return this.hasLocalMutations || this.hasCommittedMutations
            }
            isValidDocument() {
                return 0 !== this.documentType
            }
            isFoundDocument() {
                return 1 === this.documentType
            }
            isNoDocument() {
                return 2 === this.documentType
            }
            isUnknownDocument() {
                return 3 === this.documentType
            }
            isEqual(e) {
                return e instanceof r5 && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data)
            }
            mutableCopy() {
                return new r5(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)
            }
            toString() {
                return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class r8 {
            constructor(e, t=null, n=[], r=[], i=null, s=null, a=null) {
                this.path = e,
                this.collectionGroup = t,
                this.orderBy = n,
                this.filters = r,
                this.limit = i,
                this.startAt = s,
                this.endAt = a,
                this._t = null
            }
        }
        function r7(e, t=null, n=[], r=[], i=null, s=null, a=null) {
            return new r8(e,t,n,r,i,s,a)
        }
        function r9(e) {
            let t = e;
            if (null === t._t) {
                let e = t.path.canonicalString();
                null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup),
                e += "|f:" + t.filters.map(e => (function e(t) {
                    if (t instanceof rF)
                        return t.field.canonicalString() + t.op.toString() + rk(t.value);
                    if (rq(t) && rB(t))
                        return t.filters.map(t => e(t)).join(",");
                    {
                        let n = t.filters.map(t => e(t)).join(",");
                        return `${t.op}(${n})`
                    }
                }
                )(e)).join(",") + "|ob:" + t.orderBy.map(e => e.field.canonicalString() + e.dir).join(","),
                null == t.limit || (e += "|l:" + t.limit),
                t.startAt && (e += "|lb:" + (t.startAt.inclusive ? "b:" : "a:") + t.startAt.position.map(e => rk(e)).join(",")),
                t.endAt && (e += "|ub:" + (t.endAt.inclusive ? "a:" : "b:") + t.endAt.position.map(e => rk(e)).join(",")),
                t._t = e
            }
            return t._t
        }
        function ie(e, t) {
            if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length)
                return !1;
            for (let i = 0; i < e.orderBy.length; i++) {
                var n, r;
                if (n = e.orderBy[i],
                r = t.orderBy[i],
                !(n.dir === r.dir && n.field.isEqual(r.field)))
                    return !1
            }
            if (e.filters.length !== t.filters.length)
                return !1;
            for (let n = 0; n < e.filters.length; n++)
                if (!function e(t, n) {
                    return t instanceof rF ? n instanceof rF && t.op === n.op && t.field.isEqual(n.field) && rT(t.value, n.value) : t instanceof rz ? n instanceof rz && t.op === n.op && t.filters.length === n.filters.length && t.filters.reduce( (t, r, i) => t && e(r, n.filters[i]), !0) : void nH()
                }(e.filters[n], t.filters[n]))
                    return !1;
            return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!rU(e.startAt, t.startAt) && rU(e.endAt, t.endAt)
        }
        function it(e) {
            return rt.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ir {
            constructor(e, t=null, n=[], r=[], i=null, s="F", a=null, o=null) {
                this.path = e,
                this.collectionGroup = t,
                this.explicitOrderBy = n,
                this.filters = r,
                this.limit = i,
                this.limitType = s,
                this.startAt = a,
                this.endAt = o,
                this.wt = null,
                this.gt = null,
                this.startAt,
                this.endAt
            }
        }
        function ii(e) {
            return new ir(e)
        }
        function is(e) {
            return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField())
        }
        function ia(e) {
            let t = e;
            if (null === t.wt) {
                t.wt = [];
                let e = function(e) {
                    for (let t of e.filters) {
                        let e = t.getFirstInequalityField();
                        if (null !== e)
                            return e
                    }
                    return null
                }(t)
                  , n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
                if (null !== e && null === n)
                    e.isKeyField() || t.wt.push(new rY(e)),
                    t.wt.push(new rY(re.keyField(),"asc"));
                else {
                    let e = !1;
                    for (let n of t.explicitOrderBy)
                        t.wt.push(n),
                        n.field.isKeyField() && (e = !0);
                    if (!e) {
                        let e = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
                        t.wt.push(new rY(re.keyField(),e))
                    }
                }
            }
            return t.wt
        }
        function io(e) {
            let t = e;
            if (!t.gt) {
                if ("F" === t.limitType)
                    t.gt = r7(t.path, t.collectionGroup, ia(t), t.filters, t.limit, t.startAt, t.endAt);
                else {
                    let e = [];
                    for (let n of ia(t)) {
                        let t = "desc" === n.dir ? "asc" : "desc";
                        e.push(new rY(n.field,t))
                    }
                    let n = t.endAt ? new rM(t.endAt.position,t.endAt.inclusive) : null
                      , r = t.startAt ? new rM(t.startAt.position,t.startAt.inclusive) : null;
                    t.gt = r7(t.path, t.collectionGroup, e, t.filters, t.limit, n, r)
                }
            }
            return t.gt
        }
        function il(e, t, n) {
            return new ir(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)
        }
        function iu(e, t) {
            return ie(io(e), io(t)) && e.limitType === t.limitType
        }
        function ic(e) {
            return `${r9(io(e))}|lt:${e.limitType}`
        }
        function ih(e) {
            var t;
            let n;
            return `Query(target=${n = (t = io(e)).path.canonicalString(),
            null !== t.collectionGroup && (n += " collectionGroup=" + t.collectionGroup),
            t.filters.length > 0 && (n += `, filters: [${t.filters.map(e => (function e(t) {
                return tinstanceof rF ? `${t.field.canonicalString()} ${t.op} ${rk(t.value)}` : t instanceof rz ? t.op.toString() + " {" + t.getFilters().map(e).join(" ,") + "}" : "Filter"
            }
            )(e)).join(", ")}]`),
            null == t.limit || (n += ", limit: " + t.limit),
            t.orderBy.length > 0 && (n += `, orderBy: [${t.orderBy.map(e => `${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),
            t.startAt && (n += ", startAt: " + (t.startAt.inclusive ? "b:" : "a:") + t.startAt.position.map(e => rk(e)).join(",")),
            t.endAt && (n += ", endAt: " + (t.endAt.inclusive ? "a:" : "b:") + t.endAt.position.map(e => rk(e)).join(",")),
            `Target(${n})`}; limitType=${e.limitType})`
        }
        function id(e, t) {
            return t.isFoundDocument() && function(e, t) {
                let n = t.key.path;
                return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : rt.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)
            }(e, t) && function(e, t) {
                for (let n of ia(e))
                    if (!n.field.isKeyField() && null === t.data.field(n.field))
                        return !1;
                return !0
            }(e, t) && function(e, t) {
                for (let n of e.filters)
                    if (!n.matches(t))
                        return !1;
                return !0
            }(e, t) && (!e.startAt || !!function(e, t, n) {
                let r = rj(e, t, n);
                return e.inclusive ? r <= 0 : r < 0
            }(e.startAt, ia(e), t)) && (!e.endAt || !!function(e, t, n) {
                let r = rj(e, t, n);
                return e.inclusive ? r >= 0 : r > 0
            }(e.endAt, ia(e), t))
        }
        function ip(e) {
            return (t, n) => {
                let r = !1;
                for (let i of ia(e)) {
                    let e = function(e, t, n) {
                        let r = e.field.isKeyField() ? rt.comparator(t.key, n.key) : function(e, t, n) {
                            let r = t.data.field(e)
                              , i = n.data.field(e);
                            return null !== r && null !== i ? rC(r, i) : nH()
                        }(e.field, t, n);
                        switch (e.dir) {
                        case "asc":
                            return r;
                        case "desc":
                            return -1 * r;
                        default:
                            return nH()
                        }
                    }(i, t, n);
                    if (0 !== e)
                        return e;
                    r = r || i.field.isKeyField()
                }
                return 0
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function ig(e, t) {
            if (e.yt) {
                if (isNaN(t))
                    return {
                        doubleValue: "NaN"
                    };
                if (t === 1 / 0)
                    return {
                        doubleValue: "Infinity"
                    };
                if (t === -1 / 0)
                    return {
                        doubleValue: "-Infinity"
                    }
            }
            return {
                doubleValue: rf(t) ? "-0" : t
            }
        }
        function im(e) {
            return {
                integerValue: "" + e
            }
        }
        /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class iy {
            constructor() {
                this._ = void 0
            }
        }
        function iv(e, t) {
            return e instanceof iT ? rN(t) || t && "doubleValue"in t ? t : {
                integerValue: 0
            } : null
        }
        class iw extends iy {
        }
        class ib extends iy {
            constructor(e) {
                super(),
                this.elements = e
            }
        }
        function i_(e, t) {
            let n = iC(t);
            for (let t of e.elements)
                n.some(e => rT(e, t)) || n.push(t);
            return {
                arrayValue: {
                    values: n
                }
            }
        }
        class iE extends iy {
            constructor(e) {
                super(),
                this.elements = e
            }
        }
        function iI(e, t) {
            let n = iC(t);
            for (let t of e.elements)
                n = n.filter(e => !rT(e, t));
            return {
                arrayValue: {
                    values: n
                }
            }
        }
        class iT extends iy {
            constructor(e, t) {
                super(),
                this.Tt = e,
                this.It = t
            }
        }
        function iS(e) {
            return rv(e.integerValue || e.doubleValue)
        }
        function iC(e) {
            return rO(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []
        }
        class iA {
            constructor(e, t) {
                this.version = e,
                this.transformResults = t
            }
        }
        class ik {
            constructor(e, t) {
                this.updateTime = e,
                this.exists = t
            }
            static none() {
                return new ik
            }
            static exists(e) {
                return new ik(void 0,e)
            }
            static updateTime(e) {
                return new ik(e)
            }
            get isNone() {
                return void 0 === this.updateTime && void 0 === this.exists
            }
            isEqual(e) {
                return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
            }
        }
        function iN(e, t) {
            return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument()
        }
        class iO {
        }
        function ix(e, t) {
            if (!e.hasLocalMutations || t && 0 === t.fields.length)
                return null;
            if (null === t)
                return e.isNoDocument() ? new iV(e.key,ik.none()) : new iL(e.key,e.data,ik.none());
            {
                let n = e.data
                  , r = r6.empty()
                  , i = new r2(re.comparator);
                for (let e of t.fields)
                    if (!i.has(e)) {
                        let t = n.field(e);
                        null === t && e.length > 1 && (e = e.popLast(),
                        t = n.field(e)),
                        null === t ? r.delete(e) : r.set(e, t),
                        i = i.add(e)
                    }
                return new iP(e.key,r,new r4(i.toArray()),ik.none())
            }
        }
        function iR(e, t, n, r) {
            return e instanceof iL ? function(e, t, n, r) {
                if (!iN(e.precondition, t))
                    return n;
                let i = e.value.clone()
                  , s = iU(e.fieldTransforms, r, t);
                return i.setAll(s),
                t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
                null
            }(e, t, n, r) : e instanceof iP ? function(e, t, n, r) {
                if (!iN(e.precondition, t))
                    return n;
                let i = iU(e.fieldTransforms, r, t)
                  , s = t.data;
                return (s.setAll(iM(e)),
                s.setAll(i),
                t.convertToFoundDocument(t.version, s).setHasLocalMutations(),
                null === n) ? null : n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e => e.field))
            }(e, t, n, r) : iN(e.precondition, t) ? (t.convertToNoDocument(t.version).setHasLocalMutations(),
            null) : n
        }
        function iD(e, t) {
            var n, r;
            return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && (n = e.fieldTransforms,
            r = t.fieldTransforms,
            !!(void 0 === n && void 0 === r || !(!n || !r) && n4(n, r, (e, t) => {
                var n, r;
                return e.field.isEqual(t.field) && (n = e.transform,
                r = t.transform,
                n instanceof ib && r instanceof ib || n instanceof iE && r instanceof iE ? n4(n.elements, r.elements, rT) : n instanceof iT && r instanceof iT ? rT(n.It, r.It) : n instanceof iw && r instanceof iw)
            }
            ))) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask))
        }
        class iL extends iO {
            constructor(e, t, n, r=[]) {
                super(),
                this.key = e,
                this.value = t,
                this.precondition = n,
                this.fieldTransforms = r,
                this.type = 0
            }
            getFieldMask() {
                return null
            }
        }
        class iP extends iO {
            constructor(e, t, n, r, i=[]) {
                super(),
                this.key = e,
                this.data = t,
                this.fieldMask = n,
                this.precondition = r,
                this.fieldTransforms = i,
                this.type = 1
            }
            getFieldMask() {
                return this.fieldMask
            }
        }
        function iM(e) {
            let t = new Map;
            return e.fieldMask.fields.forEach(n => {
                if (!n.isEmpty()) {
                    let r = e.data.field(n);
                    t.set(n, r)
                }
            }
            ),
            t
        }
        function ij(e, t, n) {
            var r;
            let i = new Map;
            e.length === n.length || nH();
            for (let s = 0; s < n.length; s++) {
                let a = e[s]
                  , o = a.transform
                  , l = t.data.field(a.field);
                i.set(a.field, (r = n[s],
                o instanceof ib ? i_(o, l) : o instanceof iE ? iI(o, l) : r))
            }
            return i
        }
        function iU(e, t, n) {
            let r = new Map;
            for (let i of e) {
                let e = i.transform
                  , s = n.data.field(i.field);
                r.set(i.field, e instanceof iw ? function(e, t) {
                    let n = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: e.seconds,
                                    nanos: e.nanoseconds
                                }
                            }
                        }
                    };
                    return t && (n.fields.__previous_value__ = t),
                    {
                        mapValue: n
                    }
                }(t, s) : e instanceof ib ? i_(e, s) : e instanceof iE ? iI(e, s) : function(e, t) {
                    let n = iv(e, t)
                      , r = iS(n) + iS(e.It);
                    return rN(n) && rN(e.It) ? im(r) : ig(e.Tt, r)
                }(e, s))
            }
            return r
        }
        class iV extends iO {
            constructor(e, t) {
                super(),
                this.key = e,
                this.precondition = t,
                this.type = 2,
                this.fieldTransforms = []
            }
            getFieldMask() {
                return null
            }
        }
        class iF extends iO {
            constructor(e, t) {
                super(),
                this.key = e,
                this.precondition = t,
                this.type = 3,
                this.fieldTransforms = []
            }
            getFieldMask() {
                return null
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class iz {
            constructor(e) {
                this.count = e
            }
        }
        function iB(e) {
            if (void 0 === e)
                return nz("GRPC error has no .code"),
                nK.UNKNOWN;
            switch (e) {
            case l.OK:
                return nK.OK;
            case l.CANCELLED:
                return nK.CANCELLED;
            case l.UNKNOWN:
                return nK.UNKNOWN;
            case l.DEADLINE_EXCEEDED:
                return nK.DEADLINE_EXCEEDED;
            case l.RESOURCE_EXHAUSTED:
                return nK.RESOURCE_EXHAUSTED;
            case l.INTERNAL:
                return nK.INTERNAL;
            case l.UNAVAILABLE:
                return nK.UNAVAILABLE;
            case l.UNAUTHENTICATED:
                return nK.UNAUTHENTICATED;
            case l.INVALID_ARGUMENT:
                return nK.INVALID_ARGUMENT;
            case l.NOT_FOUND:
                return nK.NOT_FOUND;
            case l.ALREADY_EXISTS:
                return nK.ALREADY_EXISTS;
            case l.PERMISSION_DENIED:
                return nK.PERMISSION_DENIED;
            case l.FAILED_PRECONDITION:
                return nK.FAILED_PRECONDITION;
            case l.ABORTED:
                return nK.ABORTED;
            case l.OUT_OF_RANGE:
                return nK.OUT_OF_RANGE;
            case l.UNIMPLEMENTED:
                return nK.UNIMPLEMENTED;
            case l.DATA_LOSS:
                return nK.DATA_LOSS;
            default:
                return nH()
            }
        }
        (u = l || (l = {}))[u.OK = 0] = "OK",
        u[u.CANCELLED = 1] = "CANCELLED",
        u[u.UNKNOWN = 2] = "UNKNOWN",
        u[u.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT",
        u[u.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED",
        u[u.NOT_FOUND = 5] = "NOT_FOUND",
        u[u.ALREADY_EXISTS = 6] = "ALREADY_EXISTS",
        u[u.PERMISSION_DENIED = 7] = "PERMISSION_DENIED",
        u[u.UNAUTHENTICATED = 16] = "UNAUTHENTICATED",
        u[u.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED",
        u[u.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION",
        u[u.ABORTED = 10] = "ABORTED",
        u[u.OUT_OF_RANGE = 11] = "OUT_OF_RANGE",
        u[u.UNIMPLEMENTED = 12] = "UNIMPLEMENTED",
        u[u.INTERNAL = 13] = "INTERNAL",
        u[u.UNAVAILABLE = 14] = "UNAVAILABLE",
        u[u.DATA_LOSS = 15] = "DATA_LOSS";
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class iq {
            constructor(e, t) {
                this.mapKeyFn = e,
                this.equalsFn = t,
                this.inner = {},
                this.innerSize = 0
            }
            get(e) {
                let t = this.mapKeyFn(e)
                  , n = this.inner[t];
                if (void 0 !== n) {
                    for (let[t,r] of n)
                        if (this.equalsFn(t, e))
                            return r
                }
            }
            has(e) {
                return void 0 !== this.get(e)
            }
            set(e, t) {
                let n = this.mapKeyFn(e)
                  , r = this.inner[n];
                if (void 0 === r)
                    return this.inner[n] = [[e, t]],
                    void this.innerSize++;
                for (let n = 0; n < r.length; n++)
                    if (this.equalsFn(r[n][0], e))
                        return void (r[n] = [e, t]);
                r.push([e, t]),
                this.innerSize++
            }
            delete(e) {
                let t = this.mapKeyFn(e)
                  , n = this.inner[t];
                if (void 0 === n)
                    return !1;
                for (let r = 0; r < n.length; r++)
                    if (this.equalsFn(n[r][0], e))
                        return 1 === n.length ? delete this.inner[t] : n.splice(r, 1),
                        this.innerSize--,
                        !0;
                return !1
            }
            forEach(e) {
                rh(this.inner, (t, n) => {
                    for (let[t,r] of n)
                        e(t, r)
                }
                )
            }
            isEmpty() {
                return rd(this.inner)
            }
            size() {
                return this.innerSize
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let iH = new rZ(rt.comparator)
          , iK = new rZ(rt.comparator);
        function i$(...e) {
            let t = iK;
            for (let n of e)
                t = t.insert(n.key, n);
            return t
        }
        function iG(e) {
            let t = iK;
            return e.forEach( (e, n) => t = t.insert(e, n.overlayedDocument)),
            t
        }
        function iW() {
            return new iq(e => e.toString(), (e, t) => e.isEqual(t))
        }
        let iQ = new rZ(rt.comparator)
          , iX = new r2(rt.comparator);
        function iJ(...e) {
            let t = iX;
            for (let n of e)
                t = t.add(n);
            return t
        }
        let iY = new r2(n3);
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class iZ {
            constructor(e, t, n, r, i) {
                this.snapshotVersion = e,
                this.targetChanges = t,
                this.targetMismatches = n,
                this.documentUpdates = r,
                this.resolvedLimboDocuments = i
            }
            static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
                let r = new Map;
                return r.set(e, i0.createSynthesizedTargetChangeForCurrentChange(e, t, n)),
                new iZ(n5.min(),r,iY,iH,iJ())
            }
        }
        class i0 {
            constructor(e, t, n, r, i) {
                this.resumeToken = e,
                this.current = t,
                this.addedDocuments = n,
                this.modifiedDocuments = r,
                this.removedDocuments = i
            }
            static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
                return new i0(n,t,iJ(),iJ(),iJ())
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class i1 {
            constructor(e, t, n, r) {
                this.Et = e,
                this.removedTargetIds = t,
                this.key = n,
                this.At = r
            }
        }
        class i2 {
            constructor(e, t) {
                this.targetId = e,
                this.Rt = t
            }
        }
        class i3 {
            constructor(e, t, n=rg.EMPTY_BYTE_STRING, r=null) {
                this.state = e,
                this.targetIds = t,
                this.resumeToken = n,
                this.cause = r
            }
        }
        class i4 {
            constructor() {
                this.bt = 0,
                this.vt = i8(),
                this.Pt = rg.EMPTY_BYTE_STRING,
                this.Vt = !1,
                this.St = !0
            }
            get current() {
                return this.Vt
            }
            get resumeToken() {
                return this.Pt
            }
            get Dt() {
                return 0 !== this.bt
            }
            get Ct() {
                return this.St
            }
            xt(e) {
                e.approximateByteSize() > 0 && (this.St = !0,
                this.Pt = e)
            }
            Nt() {
                let e = iJ()
                  , t = iJ()
                  , n = iJ();
                return this.vt.forEach( (r, i) => {
                    switch (i) {
                    case 0:
                        e = e.add(r);
                        break;
                    case 2:
                        t = t.add(r);
                        break;
                    case 1:
                        n = n.add(r);
                        break;
                    default:
                        nH()
                    }
                }
                ),
                new i0(this.Pt,this.Vt,e,t,n)
            }
            kt() {
                this.St = !1,
                this.vt = i8()
            }
            Ot(e, t) {
                this.St = !0,
                this.vt = this.vt.insert(e, t)
            }
            Mt(e) {
                this.St = !0,
                this.vt = this.vt.remove(e)
            }
            Ft() {
                this.bt += 1
            }
            $t() {
                this.bt -= 1
            }
            Bt() {
                this.St = !0,
                this.Vt = !0
            }
        }
        class i6 {
            constructor(e) {
                this.Lt = e,
                this.qt = new Map,
                this.Ut = iH,
                this.Kt = i5(),
                this.Gt = new r2(n3)
            }
            Qt(e) {
                for (let t of e.Et)
                    e.At && e.At.isFoundDocument() ? this.jt(t, e.At) : this.zt(t, e.key, e.At);
                for (let t of e.removedTargetIds)
                    this.zt(t, e.key, e.At)
            }
            Wt(e) {
                this.forEachTarget(e, t => {
                    let n = this.Ht(t);
                    switch (e.state) {
                    case 0:
                        this.Jt(t) && n.xt(e.resumeToken);
                        break;
                    case 1:
                        n.$t(),
                        n.Dt || n.kt(),
                        n.xt(e.resumeToken);
                        break;
                    case 2:
                        n.$t(),
                        n.Dt || this.removeTarget(t);
                        break;
                    case 3:
                        this.Jt(t) && (n.Bt(),
                        n.xt(e.resumeToken));
                        break;
                    case 4:
                        this.Jt(t) && (this.Yt(t),
                        n.xt(e.resumeToken));
                        break;
                    default:
                        nH()
                    }
                }
                )
            }
            forEachTarget(e, t) {
                e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.qt.forEach( (e, n) => {
                    this.Jt(n) && t(n)
                }
                )
            }
            Zt(e) {
                let t = e.targetId
                  , n = e.Rt.count
                  , r = this.Xt(t);
                if (r) {
                    let e = r.target;
                    if (it(e)) {
                        if (0 === n) {
                            let n = new rt(e.path);
                            this.zt(t, n, r5.newNoDocument(n, n5.min()))
                        } else
                            1 === n || nH()
                    } else
                        this.te(t) !== n && (this.Yt(t),
                        this.Gt = this.Gt.add(t))
                }
            }
            ee(e) {
                let t = new Map;
                this.qt.forEach( (n, r) => {
                    let i = this.Xt(r);
                    if (i) {
                        if (n.current && it(i.target)) {
                            let t = new rt(i.target.path);
                            null !== this.Ut.get(t) || this.ne(r, t) || this.zt(r, t, r5.newNoDocument(t, e))
                        }
                        n.Ct && (t.set(r, n.Nt()),
                        n.kt())
                    }
                }
                );
                let n = iJ();
                this.Kt.forEach( (e, t) => {
                    let r = !0;
                    t.forEachWhile(e => {
                        let t = this.Xt(e);
                        return !t || 2 === t.purpose || (r = !1,
                        !1)
                    }
                    ),
                    r && (n = n.add(e))
                }
                ),
                this.Ut.forEach( (t, n) => n.setReadTime(e));
                let r = new iZ(e,t,this.Gt,this.Ut,n);
                return this.Ut = iH,
                this.Kt = i5(),
                this.Gt = new r2(n3),
                r
            }
            jt(e, t) {
                if (!this.Jt(e))
                    return;
                let n = this.ne(e, t.key) ? 2 : 0;
                this.Ht(e).Ot(t.key, n),
                this.Ut = this.Ut.insert(t.key, t),
                this.Kt = this.Kt.insert(t.key, this.se(t.key).add(e))
            }
            zt(e, t, n) {
                if (!this.Jt(e))
                    return;
                let r = this.Ht(e);
                this.ne(e, t) ? r.Ot(t, 1) : r.Mt(t),
                this.Kt = this.Kt.insert(t, this.se(t).delete(e)),
                n && (this.Ut = this.Ut.insert(t, n))
            }
            removeTarget(e) {
                this.qt.delete(e)
            }
            te(e) {
                let t = this.Ht(e).Nt();
                return this.Lt.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
            }
            Ft(e) {
                this.Ht(e).Ft()
            }
            Ht(e) {
                let t = this.qt.get(e);
                return t || (t = new i4,
                this.qt.set(e, t)),
                t
            }
            se(e) {
                let t = this.Kt.get(e);
                return t || (t = new r2(n3),
                this.Kt = this.Kt.insert(e, t)),
                t
            }
            Jt(e) {
                let t = null !== this.Xt(e);
                return t || nF("WatchChangeAggregator", "Detected inactive target", e),
                t
            }
            Xt(e) {
                let t = this.qt.get(e);
                return t && t.Dt ? null : this.Lt.ie(e)
            }
            Yt(e) {
                this.qt.set(e, new i4),
                this.Lt.getRemoteKeysForTarget(e).forEach(t => {
                    this.zt(e, t, null)
                }
                )
            }
            ne(e, t) {
                return this.Lt.getRemoteKeysForTarget(e).has(t)
            }
        }
        function i5() {
            return new rZ(rt.comparator)
        }
        function i8() {
            return new rZ(rt.comparator)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let i7 = {
            asc: "ASCENDING",
            desc: "DESCENDING"
        }
          , i9 = {
            "<": "LESS_THAN",
            "<=": "LESS_THAN_OR_EQUAL",
            ">": "GREATER_THAN",
            ">=": "GREATER_THAN_OR_EQUAL",
            "==": "EQUAL",
            "!=": "NOT_EQUAL",
            "array-contains": "ARRAY_CONTAINS",
            in: "IN",
            "not-in": "NOT_IN",
            "array-contains-any": "ARRAY_CONTAINS_ANY"
        }
          , se = {
            and: "AND",
            or: "OR"
        };
        class st {
            constructor(e, t) {
                this.databaseId = e,
                this.yt = t
            }
        }
        function sn(e, t) {
            return e.yt ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : {
                seconds: "" + t.seconds,
                nanos: t.nanoseconds
            }
        }
        function sr(e, t) {
            return e.yt ? t.toBase64() : t.toUint8Array()
        }
        function si(e) {
            return e || nH(),
            n5.fromTimestamp(function(e) {
                let t = ry(e);
                return new n6(t.seconds,t.nanos)
            }(e))
        }
        function ss(e, t) {
            return new n7(["projects", e.projectId, "databases", e.database]).child("documents").child(t).canonicalString()
        }
        function sa(e) {
            let t = n7.fromString(e);
            return sg(t) || nH(),
            t
        }
        function so(e, t) {
            return ss(e.databaseId, t.path)
        }
        function sl(e, t) {
            let n = sa(t);
            if (n.get(1) !== e.databaseId.projectId)
                throw new n$(nK.INVALID_ARGUMENT,"Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
            if (n.get(3) !== e.databaseId.database)
                throw new n$(nK.INVALID_ARGUMENT,"Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
            return new rt(sh(n))
        }
        function su(e, t) {
            return ss(e.databaseId, t)
        }
        function sc(e) {
            return new n7(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString()
        }
        function sh(e) {
            return e.length > 4 && "documents" === e.get(4) || nH(),
            e.popFirst(5)
        }
        function sd(e, t, n) {
            return {
                name: so(e, t),
                fields: n.value.mapValue.fields
            }
        }
        function sf(e) {
            return {
                fieldPath: e.canonicalString()
            }
        }
        function sp(e) {
            return re.fromServerFormat(e.fieldPath)
        }
        function sg(e) {
            return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sm {
            constructor(e, t, n, r) {
                this.batchId = e,
                this.localWriteTime = t,
                this.baseMutations = n,
                this.mutations = r
            }
            applyToRemoteDocument(e, t) {
                let n = t.mutationResults;
                for (let t = 0; t < this.mutations.length; t++) {
                    let i = this.mutations[t];
                    if (i.key.isEqual(e.key)) {
                        var r;
                        r = n[t],
                        i instanceof iL ? function(e, t, n) {
                            let r = e.value.clone()
                              , i = ij(e.fieldTransforms, t, n.transformResults);
                            r.setAll(i),
                            t.convertToFoundDocument(n.version, r).setHasCommittedMutations()
                        }(i, e, r) : i instanceof iP ? function(e, t, n) {
                            if (!iN(e.precondition, t))
                                return void t.convertToUnknownDocument(n.version);
                            let r = ij(e.fieldTransforms, t, n.transformResults)
                              , i = t.data;
                            i.setAll(iM(e)),
                            i.setAll(r),
                            t.convertToFoundDocument(n.version, i).setHasCommittedMutations()
                        }(i, e, r) : function(e, t, n) {
                            t.convertToNoDocument(n.version).setHasCommittedMutations()
                        }(0, e, r)
                    }
                }
            }
            applyToLocalView(e, t) {
                for (let n of this.baseMutations)
                    n.key.isEqual(e.key) && (t = iR(n, e, t, this.localWriteTime));
                for (let n of this.mutations)
                    n.key.isEqual(e.key) && (t = iR(n, e, t, this.localWriteTime));
                return t
            }
            applyToLocalDocumentSet(e, t) {
                let n = iW();
                return this.mutations.forEach(r => {
                    let i = e.get(r.key)
                      , s = i.overlayedDocument
                      , a = this.applyToLocalView(s, i.mutatedFields);
                    a = t.has(r.key) ? null : a;
                    let o = ix(s, a);
                    null !== o && n.set(r.key, o),
                    s.isValidDocument() || s.convertToNoDocument(n5.min())
                }
                ),
                n
            }
            keys() {
                return this.mutations.reduce( (e, t) => e.add(t.key), iJ())
            }
            isEqual(e) {
                return this.batchId === e.batchId && n4(this.mutations, e.mutations, (e, t) => iD(e, t)) && n4(this.baseMutations, e.baseMutations, (e, t) => iD(e, t))
            }
        }
        class sy {
            constructor(e, t, n, r) {
                this.batch = e,
                this.commitVersion = t,
                this.mutationResults = n,
                this.docVersions = r
            }
            static from(e, t, n) {
                e.mutations.length === n.length || nH();
                let r = iQ
                  , i = e.mutations;
                for (let e = 0; e < i.length; e++)
                    r = r.insert(i[e].key, n[e].version);
                return new sy(e,t,n,r)
            }
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sv {
            constructor(e, t) {
                this.largestBatchId = e,
                this.mutation = t
            }
            getKey() {
                return this.mutation.key
            }
            isEqual(e) {
                return null !== e && this.mutation === e.mutation
            }
            toString() {
                return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sw {
            constructor(e, t, n, r, i=n5.min(), s=n5.min(), a=rg.EMPTY_BYTE_STRING) {
                this.target = e,
                this.targetId = t,
                this.purpose = n,
                this.sequenceNumber = r,
                this.snapshotVersion = i,
                this.lastLimboFreeSnapshotVersion = s,
                this.resumeToken = a
            }
            withSequenceNumber(e) {
                return new sw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)
            }
            withResumeToken(e, t) {
                return new sw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)
            }
            withLastLimboFreeSnapshotVersion(e) {
                return new sw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sb {
            constructor(e) {
                this.oe = e
            }
        }
        /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class s_ {
            constructor() {}
            ae(e, t) {
                this.he(e, t),
                t.le()
            }
            he(e, t) {
                if ("nullValue"in e)
                    this.fe(t, 5);
                else if ("booleanValue"in e)
                    this.fe(t, 10),
                    t.de(e.booleanValue ? 1 : 0);
                else if ("integerValue"in e)
                    this.fe(t, 15),
                    t.de(rv(e.integerValue));
                else if ("doubleValue"in e) {
                    let n = rv(e.doubleValue);
                    isNaN(n) ? this.fe(t, 13) : (this.fe(t, 15),
                    rf(n) ? t.de(0) : t.de(n))
                } else if ("timestampValue"in e) {
                    let n = e.timestampValue;
                    this.fe(t, 20),
                    "string" == typeof n ? t._e(n) : (t._e(`${n.seconds || ""}`),
                    t.de(n.nanos || 0))
                } else if ("stringValue"in e)
                    this.we(e.stringValue, t),
                    this.me(t);
                else if ("bytesValue"in e)
                    this.fe(t, 30),
                    t.ge(rw(e.bytesValue)),
                    this.me(t);
                else if ("referenceValue"in e)
                    this.ye(e.referenceValue, t);
                else if ("geoPointValue"in e) {
                    let n = e.geoPointValue;
                    this.fe(t, 45),
                    t.de(n.latitude || 0),
                    t.de(n.longitude || 0)
                } else
                    "mapValue"in e ? rP(e) ? this.fe(t, Number.MAX_SAFE_INTEGER) : (this.pe(e.mapValue, t),
                    this.me(t)) : "arrayValue"in e ? (this.Ie(e.arrayValue, t),
                    this.me(t)) : nH()
            }
            we(e, t) {
                this.fe(t, 25),
                this.Te(e, t)
            }
            Te(e, t) {
                t._e(e)
            }
            pe(e, t) {
                let n = e.fields || {};
                for (let e of (this.fe(t, 55),
                Object.keys(n)))
                    this.we(e, t),
                    this.he(n[e], t)
            }
            Ie(e, t) {
                let n = e.values || [];
                for (let e of (this.fe(t, 50),
                n))
                    this.he(e, t)
            }
            ye(e, t) {
                this.fe(t, 37),
                rt.fromName(e).path.forEach(e => {
                    this.fe(t, 60),
                    this.Te(e, t)
                }
                )
            }
            fe(e, t) {
                e.de(t)
            }
            me(e) {
                e.de(2)
            }
        }
        s_.Ee = new s_;
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sE {
            constructor() {
                this.Ze = new sI
            }
            addToCollectionParentIndex(e, t) {
                return this.Ze.add(t),
                rs.resolve()
            }
            getCollectionParents(e, t) {
                return rs.resolve(this.Ze.getEntries(t))
            }
            addFieldIndex(e, t) {
                return rs.resolve()
            }
            deleteFieldIndex(e, t) {
                return rs.resolve()
            }
            getDocumentsMatchingTarget(e, t) {
                return rs.resolve(null)
            }
            getIndexType(e, t) {
                return rs.resolve(0)
            }
            getFieldIndexes(e, t) {
                return rs.resolve([])
            }
            getNextCollectionGroupToUpdate(e) {
                return rs.resolve(null)
            }
            getMinOffset(e, t) {
                return rs.resolve(rn.min())
            }
            getMinOffsetFromCollectionGroup(e, t) {
                return rs.resolve(rn.min())
            }
            updateCollectionGroup(e, t, n) {
                return rs.resolve()
            }
            updateIndexEntries(e, t) {
                return rs.resolve()
            }
        }
        class sI {
            constructor() {
                this.index = {}
            }
            add(e) {
                let t = e.lastSegment()
                  , n = e.popLast()
                  , r = this.index[t] || new r2(n7.comparator)
                  , i = !r.has(n);
                return this.index[t] = r.add(n),
                i
            }
            has(e) {
                let t = e.lastSegment()
                  , n = e.popLast()
                  , r = this.index[t];
                return r && r.has(n)
            }
            getEntries(e) {
                return (this.index[e] || new r2(n7.comparator)).toArray()
            }
        }
        new Uint8Array(0);
        class sT {
            constructor(e, t, n) {
                this.cacheSizeCollectionThreshold = e,
                this.percentileToCollect = t,
                this.maximumSequenceNumbersToCollect = n
            }
            static withCacheSize(e) {
                return new sT(e,sT.DEFAULT_COLLECTION_PERCENTILE,sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        sT.DEFAULT_COLLECTION_PERCENTILE = 10,
        sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3,
        sT.DEFAULT = new sT(41943040,sT.DEFAULT_COLLECTION_PERCENTILE,sT.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),
        sT.DISABLED = new sT(-1,0,0);
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sS {
            constructor(e) {
                this.Pn = e
            }
            next() {
                return this.Pn += 2,
                this.Pn
            }
            static Vn() {
                return new sS(0)
            }
            static Sn() {
                return new sS(-1)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sC {
            constructor() {
                this.changes = new iq(e => e.toString(), (e, t) => e.isEqual(t)),
                this.changesApplied = !1
            }
            addEntry(e) {
                this.assertNotApplied(),
                this.changes.set(e.key, e)
            }
            removeEntry(e, t) {
                this.assertNotApplied(),
                this.changes.set(e, r5.newInvalidDocument(e).setReadTime(t))
            }
            getEntry(e, t) {
                this.assertNotApplied();
                let n = this.changes.get(t);
                return void 0 !== n ? rs.resolve(n) : this.getFromCache(e, t)
            }
            getEntries(e, t) {
                return this.getAllFromCache(e, t)
            }
            apply(e) {
                return this.assertNotApplied(),
                this.changesApplied = !0,
                this.applyChanges(e)
            }
            assertNotApplied() {}
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sA {
            constructor(e, t) {
                this.overlayedDocument = e,
                this.mutatedFields = t
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sk {
            constructor(e, t, n, r) {
                this.remoteDocumentCache = e,
                this.mutationQueue = t,
                this.documentOverlayCache = n,
                this.indexManager = r
            }
            getDocument(e, t) {
                let n = null;
                return this.documentOverlayCache.getOverlay(e, t).next(r => (n = r,
                this.remoteDocumentCache.getEntry(e, t))).next(e => (null !== n && iR(n.mutation, e, r4.empty(), n6.now()),
                e))
            }
            getDocuments(e, t) {
                return this.remoteDocumentCache.getEntries(e, t).next(t => this.getLocalViewOfDocuments(e, t, iJ()).next( () => t))
            }
            getLocalViewOfDocuments(e, t, n=iJ()) {
                let r = iW();
                return this.populateOverlays(e, r, t).next( () => this.computeViews(e, t, r, n).next(e => {
                    let t = i$();
                    return e.forEach( (e, n) => {
                        t = t.insert(e, n.overlayedDocument)
                    }
                    ),
                    t
                }
                ))
            }
            getOverlayedDocuments(e, t) {
                let n = iW();
                return this.populateOverlays(e, n, t).next( () => this.computeViews(e, t, n, iJ()))
            }
            populateOverlays(e, t, n) {
                let r = [];
                return n.forEach(e => {
                    t.has(e) || r.push(e)
                }
                ),
                this.documentOverlayCache.getOverlays(e, r).next(e => {
                    e.forEach( (e, n) => {
                        t.set(e, n)
                    }
                    )
                }
                )
            }
            computeViews(e, t, n, r) {
                let i = iH
                  , s = iW()
                  , a = iW();
                return t.forEach( (e, t) => {
                    let a = n.get(t.key);
                    r.has(t.key) && (void 0 === a || a.mutation instanceof iP) ? i = i.insert(t.key, t) : void 0 !== a ? (s.set(t.key, a.mutation.getFieldMask()),
                    iR(a.mutation, t, a.mutation.getFieldMask(), n6.now())) : s.set(t.key, r4.empty())
                }
                ),
                this.recalculateAndSaveOverlays(e, i).next(e => (e.forEach( (e, t) => s.set(e, t)),
                t.forEach( (e, t) => {
                    var n;
                    return a.set(e, new sA(t,null !== (n = s.get(e)) && void 0 !== n ? n : null))
                }
                ),
                a))
            }
            recalculateAndSaveOverlays(e, t) {
                let n = iW()
                  , r = new rZ( (e, t) => e - t)
                  , i = iJ();
                return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next(e => {
                    for (let i of e)
                        i.keys().forEach(e => {
                            let s = t.get(e);
                            if (null === s)
                                return;
                            let a = n.get(e) || r4.empty();
                            a = i.applyToLocalView(s, a),
                            n.set(e, a);
                            let o = (r.get(i.batchId) || iJ()).add(e);
                            r = r.insert(i.batchId, o)
                        }
                        )
                }
                ).next( () => {
                    let s = []
                      , a = r.getReverseIterator();
                    for (; a.hasNext(); ) {
                        let r = a.getNext()
                          , o = r.key
                          , l = r.value
                          , u = iW();
                        l.forEach(e => {
                            if (!i.has(e)) {
                                let r = ix(t.get(e), n.get(e));
                                null !== r && u.set(e, r),
                                i = i.add(e)
                            }
                        }
                        ),
                        s.push(this.documentOverlayCache.saveOverlays(e, o, u))
                    }
                    return rs.waitFor(s)
                }
                ).next( () => n)
            }
            recalculateAndSaveOverlaysForDocumentKeys(e, t) {
                return this.remoteDocumentCache.getEntries(e, t).next(t => this.recalculateAndSaveOverlays(e, t))
            }
            getDocumentsMatchingQuery(e, t, n) {
                return rt.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length ? this.getDocumentsMatchingDocumentQuery(e, t.path) : null !== t.collectionGroup ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n) : this.getDocumentsMatchingCollectionQuery(e, t, n)
            }
            getNextDocuments(e, t, n, r) {
                return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next(i => {
                    let s = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : rs.resolve(iW())
                      , a = -1
                      , o = i;
                    return s.next(t => rs.forEach(t, (t, n) => (a < n.largestBatchId && (a = n.largestBatchId),
                    i.get(t) ? rs.resolve() : this.remoteDocumentCache.getEntry(e, t).next(e => {
                        o = o.insert(t, e)
                    }
                    ))).next( () => this.populateOverlays(e, t, i)).next( () => this.computeViews(e, o, t, iJ())).next(e => ({
                        batchId: a,
                        changes: iG(e)
                    })))
                }
                )
            }
            getDocumentsMatchingDocumentQuery(e, t) {
                return this.getDocument(e, new rt(t)).next(e => {
                    let t = i$();
                    return e.isFoundDocument() && (t = t.insert(e.key, e)),
                    t
                }
                )
            }
            getDocumentsMatchingCollectionGroupQuery(e, t, n) {
                let r = t.collectionGroup
                  , i = i$();
                return this.indexManager.getCollectionParents(e, r).next(s => rs.forEach(s, s => {
                    var a;
                    let o = (a = s.child(r),
                    new ir(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));
                    return this.getDocumentsMatchingCollectionQuery(e, o, n).next(e => {
                        e.forEach( (e, t) => {
                            i = i.insert(e, t)
                        }
                        )
                    }
                    )
                }
                ).next( () => i))
            }
            getDocumentsMatchingCollectionQuery(e, t, n) {
                let r;
                return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next(i => (r = i,
                this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, r))).next(e => {
                    r.forEach( (t, n) => {
                        let r = n.getKey();
                        null === e.get(r) && (e = e.insert(r, r5.newInvalidDocument(r)))
                    }
                    );
                    let n = i$();
                    return e.forEach( (e, i) => {
                        let s = r.get(e);
                        void 0 !== s && iR(s.mutation, i, r4.empty(), n6.now()),
                        id(t, i) && (n = n.insert(e, i))
                    }
                    ),
                    n
                }
                )
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sN {
            constructor(e) {
                this.Tt = e,
                this.es = new Map,
                this.ns = new Map
            }
            getBundleMetadata(e, t) {
                return rs.resolve(this.es.get(t))
            }
            saveBundleMetadata(e, t) {
                return this.es.set(t.id, {
                    id: t.id,
                    version: t.version,
                    createTime: si(t.createTime)
                }),
                rs.resolve()
            }
            getNamedQuery(e, t) {
                return rs.resolve(this.ns.get(t))
            }
            saveNamedQuery(e, t) {
                return this.ns.set(t.name, {
                    name: t.name,
                    query: function(e) {
                        let t = function(e) {
                            var t, n, r, i, s, a, o, l;
                            let u, c = function(e) {
                                let t = sa(e);
                                return 4 === t.length ? n7.emptyPath() : sh(t)
                            }(e.parent), h = e.structuredQuery, d = h.from ? h.from.length : 0, f = null;
                            if (d > 0) {
                                1 === d || nH();
                                let e = h.from[0];
                                e.allDescendants ? f = e.collectionId : c = c.child(e.collectionId)
                            }
                            let p = [];
                            h.where && (p = function(e) {
                                var t;
                                let n = function e(t) {
                                    return void 0 !== t.unaryFilter ? function(e) {
                                        switch (e.unaryFilter.op) {
                                        case "IS_NAN":
                                            let t = sp(e.unaryFilter.field);
                                            return rF.create(t, "==", {
                                                doubleValue: NaN
                                            });
                                        case "IS_NULL":
                                            let n = sp(e.unaryFilter.field);
                                            return rF.create(n, "==", {
                                                nullValue: "NULL_VALUE"
                                            });
                                        case "IS_NOT_NAN":
                                            let r = sp(e.unaryFilter.field);
                                            return rF.create(r, "!=", {
                                                doubleValue: NaN
                                            });
                                        case "IS_NOT_NULL":
                                            let i = sp(e.unaryFilter.field);
                                            return rF.create(i, "!=", {
                                                nullValue: "NULL_VALUE"
                                            });
                                        default:
                                            return nH()
                                        }
                                    }(t) : void 0 !== t.fieldFilter ? rF.create(sp(t.fieldFilter.field), function(e) {
                                        switch (e) {
                                        case "EQUAL":
                                            return "==";
                                        case "NOT_EQUAL":
                                            return "!=";
                                        case "GREATER_THAN":
                                            return ">";
                                        case "GREATER_THAN_OR_EQUAL":
                                            return ">=";
                                        case "LESS_THAN":
                                            return "<";
                                        case "LESS_THAN_OR_EQUAL":
                                            return "<=";
                                        case "ARRAY_CONTAINS":
                                            return "array-contains";
                                        case "IN":
                                            return "in";
                                        case "NOT_IN":
                                            return "not-in";
                                        case "ARRAY_CONTAINS_ANY":
                                            return "array-contains-any";
                                        default:
                                            return nH()
                                        }
                                    }(t.fieldFilter.op), t.fieldFilter.value) : void 0 !== t.compositeFilter ? rz.create(t.compositeFilter.filters.map(t => e(t)), function(e) {
                                        switch (e) {
                                        case "AND":
                                            return "and";
                                        case "OR":
                                            return "or";
                                        default:
                                            return nH()
                                        }
                                    }(t.compositeFilter.op)) : nH()
                                }(e);
                                return n instanceof rz && rq(t = n) && rB(t) ? n.getFilters() : [n]
                            }(h.where));
                            let g = [];
                            h.orderBy && (g = h.orderBy.map(e => new rY(sp(e.field),function(e) {
                                switch (e) {
                                case "ASCENDING":
                                    return "asc";
                                case "DESCENDING":
                                    return "desc";
                                default:
                                    return
                                }
                            }(e.direction))));
                            let m = null;
                            h.limit && (m = null == (u = "object" == typeof (t = h.limit) ? t.value : t) ? null : u);
                            let y = null;
                            h.startAt && (y = function(e) {
                                let t = !!e.before
                                  , n = e.values || [];
                                return new rM(n,t)
                            }(h.startAt));
                            let v = null;
                            return h.endAt && (v = function(e) {
                                let t = !e.before
                                  , n = e.values || [];
                                return new rM(n,t)
                            }(h.endAt)),
                            n = c,
                            r = f,
                            i = g,
                            s = p,
                            a = m,
                            o = y,
                            l = v,
                            new ir(n,r,i,s,a,"F",o,l)
                        }({
                            parent: e.parent,
                            structuredQuery: e.structuredQuery
                        });
                        return "LAST" === e.limitType ? il(t, t.limit, "L") : t
                    }(t.bundledQuery),
                    readTime: si(t.readTime)
                }),
                rs.resolve()
            }
        }
        /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sO {
            constructor() {
                this.overlays = new rZ(rt.comparator),
                this.ss = new Map
            }
            getOverlay(e, t) {
                return rs.resolve(this.overlays.get(t))
            }
            getOverlays(e, t) {
                let n = iW();
                return rs.forEach(t, t => this.getOverlay(e, t).next(e => {
                    null !== e && n.set(t, e)
                }
                )).next( () => n)
            }
            saveOverlays(e, t, n) {
                return n.forEach( (n, r) => {
                    this.ce(e, t, r)
                }
                ),
                rs.resolve()
            }
            removeOverlaysForBatchId(e, t, n) {
                let r = this.ss.get(n);
                return void 0 !== r && (r.forEach(e => this.overlays = this.overlays.remove(e)),
                this.ss.delete(n)),
                rs.resolve()
            }
            getOverlaysForCollection(e, t, n) {
                let r = iW()
                  , i = t.length + 1
                  , s = new rt(t.child(""))
                  , a = this.overlays.getIteratorFrom(s);
                for (; a.hasNext(); ) {
                    let e = a.getNext().value
                      , s = e.getKey();
                    if (!t.isPrefixOf(s.path))
                        break;
                    s.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e)
                }
                return rs.resolve(r)
            }
            getOverlaysForCollectionGroup(e, t, n, r) {
                let i = new rZ( (e, t) => e - t)
                  , s = this.overlays.getIterator();
                for (; s.hasNext(); ) {
                    let e = s.getNext().value;
                    if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
                        let t = i.get(e.largestBatchId);
                        null === t && (t = iW(),
                        i = i.insert(e.largestBatchId, t)),
                        t.set(e.getKey(), e)
                    }
                }
                let a = iW()
                  , o = i.getIterator();
                for (; o.hasNext() && (o.getNext().value.forEach( (e, t) => a.set(e, t)),
                !(a.size() >= r)); )
                    ;
                return rs.resolve(a)
            }
            ce(e, t, n) {
                let r = this.overlays.get(n.key);
                if (null !== r) {
                    let e = this.ss.get(r.largestBatchId).delete(n.key);
                    this.ss.set(r.largestBatchId, e)
                }
                this.overlays = this.overlays.insert(n.key, new sv(t,n));
                let i = this.ss.get(t);
                void 0 === i && (i = iJ(),
                this.ss.set(t, i)),
                this.ss.set(t, i.add(n.key))
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sx {
            constructor() {
                this.rs = new r2(sR.os),
                this.us = new r2(sR.cs)
            }
            isEmpty() {
                return this.rs.isEmpty()
            }
            addReference(e, t) {
                let n = new sR(e,t);
                this.rs = this.rs.add(n),
                this.us = this.us.add(n)
            }
            hs(e, t) {
                e.forEach(e => this.addReference(e, t))
            }
            removeReference(e, t) {
                this.ls(new sR(e,t))
            }
            fs(e, t) {
                e.forEach(e => this.removeReference(e, t))
            }
            ds(e) {
                let t = new rt(new n7([]))
                  , n = new sR(t,e)
                  , r = new sR(t,e + 1)
                  , i = [];
                return this.us.forEachInRange([n, r], e => {
                    this.ls(e),
                    i.push(e.key)
                }
                ),
                i
            }
            _s() {
                this.rs.forEach(e => this.ls(e))
            }
            ls(e) {
                this.rs = this.rs.delete(e),
                this.us = this.us.delete(e)
            }
            ws(e) {
                let t = new rt(new n7([]))
                  , n = new sR(t,e)
                  , r = new sR(t,e + 1)
                  , i = iJ();
                return this.us.forEachInRange([n, r], e => {
                    i = i.add(e.key)
                }
                ),
                i
            }
            containsKey(e) {
                let t = new sR(e,0)
                  , n = this.rs.firstAfterOrEqual(t);
                return null !== n && e.isEqual(n.key)
            }
        }
        class sR {
            constructor(e, t) {
                this.key = e,
                this.gs = t
            }
            static os(e, t) {
                return rt.comparator(e.key, t.key) || n3(e.gs, t.gs)
            }
            static cs(e, t) {
                return n3(e.gs, t.gs) || rt.comparator(e.key, t.key)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sD {
            constructor(e, t) {
                this.indexManager = e,
                this.referenceDelegate = t,
                this.mutationQueue = [],
                this.ys = 1,
                this.ps = new r2(sR.os)
            }
            checkEmpty(e) {
                return rs.resolve(0 === this.mutationQueue.length)
            }
            addMutationBatch(e, t, n, r) {
                let i = this.ys;
                this.ys++,
                this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
                let s = new sm(i,t,n,r);
                for (let t of (this.mutationQueue.push(s),
                r))
                    this.ps = this.ps.add(new sR(t.key,i)),
                    this.indexManager.addToCollectionParentIndex(e, t.key.path.popLast());
                return rs.resolve(s)
            }
            lookupMutationBatch(e, t) {
                return rs.resolve(this.Is(t))
            }
            getNextMutationBatchAfterBatchId(e, t) {
                let n = this.Ts(t + 1)
                  , r = n < 0 ? 0 : n;
                return rs.resolve(this.mutationQueue.length > r ? this.mutationQueue[r] : null)
            }
            getHighestUnacknowledgedBatchId() {
                return rs.resolve(0 === this.mutationQueue.length ? -1 : this.ys - 1)
            }
            getAllMutationBatches(e) {
                return rs.resolve(this.mutationQueue.slice())
            }
            getAllMutationBatchesAffectingDocumentKey(e, t) {
                let n = new sR(t,0)
                  , r = new sR(t,Number.POSITIVE_INFINITY)
                  , i = [];
                return this.ps.forEachInRange([n, r], e => {
                    let t = this.Is(e.gs);
                    i.push(t)
                }
                ),
                rs.resolve(i)
            }
            getAllMutationBatchesAffectingDocumentKeys(e, t) {
                let n = new r2(n3);
                return t.forEach(e => {
                    let t = new sR(e,0)
                      , r = new sR(e,Number.POSITIVE_INFINITY);
                    this.ps.forEachInRange([t, r], e => {
                        n = n.add(e.gs)
                    }
                    )
                }
                ),
                rs.resolve(this.Es(n))
            }
            getAllMutationBatchesAffectingQuery(e, t) {
                let n = t.path
                  , r = n.length + 1
                  , i = n;
                rt.isDocumentKey(i) || (i = i.child(""));
                let s = new sR(new rt(i),0)
                  , a = new r2(n3);
                return this.ps.forEachWhile(e => {
                    let t = e.key.path;
                    return !!n.isPrefixOf(t) && (t.length === r && (a = a.add(e.gs)),
                    !0)
                }
                , s),
                rs.resolve(this.Es(a))
            }
            Es(e) {
                let t = [];
                return e.forEach(e => {
                    let n = this.Is(e);
                    null !== n && t.push(n)
                }
                ),
                t
            }
            removeMutationBatch(e, t) {
                0 === this.As(t.batchId, "removed") || nH(),
                this.mutationQueue.shift();
                let n = this.ps;
                return rs.forEach(t.mutations, r => {
                    let i = new sR(r.key,t.batchId);
                    return n = n.delete(i),
                    this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
                }
                ).next( () => {
                    this.ps = n
                }
                )
            }
            bn(e) {}
            containsKey(e, t) {
                let n = new sR(t,0)
                  , r = this.ps.firstAfterOrEqual(n);
                return rs.resolve(t.isEqual(r && r.key))
            }
            performConsistencyCheck(e) {
                return this.mutationQueue.length,
                rs.resolve()
            }
            As(e, t) {
                return this.Ts(e)
            }
            Ts(e) {
                return 0 === this.mutationQueue.length ? 0 : e - this.mutationQueue[0].batchId
            }
            Is(e) {
                let t = this.Ts(e);
                return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t]
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sL {
            constructor(e) {
                this.Rs = e,
                this.docs = new rZ(rt.comparator),
                this.size = 0
            }
            setIndexManager(e) {
                this.indexManager = e
            }
            addEntry(e, t) {
                let n = t.key
                  , r = this.docs.get(n)
                  , i = r ? r.size : 0
                  , s = this.Rs(t);
                return this.docs = this.docs.insert(n, {
                    document: t.mutableCopy(),
                    size: s
                }),
                this.size += s - i,
                this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
            }
            removeEntry(e) {
                let t = this.docs.get(e);
                t && (this.docs = this.docs.remove(e),
                this.size -= t.size)
            }
            getEntry(e, t) {
                let n = this.docs.get(t);
                return rs.resolve(n ? n.document.mutableCopy() : r5.newInvalidDocument(t))
            }
            getEntries(e, t) {
                let n = iH;
                return t.forEach(e => {
                    let t = this.docs.get(e);
                    n = n.insert(e, t ? t.document.mutableCopy() : r5.newInvalidDocument(e))
                }
                ),
                rs.resolve(n)
            }
            getDocumentsMatchingQuery(e, t, n, r) {
                let i = iH
                  , s = t.path
                  , a = new rt(s.child(""))
                  , o = this.docs.getIteratorFrom(a);
                for (; o.hasNext(); ) {
                    let {key: e, value: {document: a}} = o.getNext();
                    if (!s.isPrefixOf(e.path))
                        break;
                    e.path.length > s.length + 1 || 0 >= function(e, t) {
                        let n = e.readTime.compareTo(t.readTime);
                        return 0 !== n ? n : 0 !== (n = rt.comparator(e.documentKey, t.documentKey)) ? n : n3(e.largestBatchId, t.largestBatchId)
                    }(new rn(a.readTime,a.key,-1), n) || (r.has(a.key) || id(t, a)) && (i = i.insert(a.key, a.mutableCopy()))
                }
                return rs.resolve(i)
            }
            getAllFromCollectionGroup(e, t, n, r) {
                nH()
            }
            bs(e, t) {
                return rs.forEach(this.docs, e => t(e))
            }
            newChangeBuffer(e) {
                return new sP(this)
            }
            getSize(e) {
                return rs.resolve(this.size)
            }
        }
        class sP extends sC {
            constructor(e) {
                super(),
                this.Xn = e
            }
            applyChanges(e) {
                let t = [];
                return this.changes.forEach( (n, r) => {
                    r.isValidDocument() ? t.push(this.Xn.addEntry(e, r)) : this.Xn.removeEntry(n)
                }
                ),
                rs.waitFor(t)
            }
            getFromCache(e, t) {
                return this.Xn.getEntry(e, t)
            }
            getAllFromCache(e, t) {
                return this.Xn.getEntries(e, t)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sM {
            constructor(e) {
                this.persistence = e,
                this.vs = new iq(e => r9(e),ie),
                this.lastRemoteSnapshotVersion = n5.min(),
                this.highestTargetId = 0,
                this.Ps = 0,
                this.Vs = new sx,
                this.targetCount = 0,
                this.Ss = sS.Vn()
            }
            forEachTarget(e, t) {
                return this.vs.forEach( (e, n) => t(n)),
                rs.resolve()
            }
            getLastRemoteSnapshotVersion(e) {
                return rs.resolve(this.lastRemoteSnapshotVersion)
            }
            getHighestSequenceNumber(e) {
                return rs.resolve(this.Ps)
            }
            allocateTargetId(e) {
                return this.highestTargetId = this.Ss.next(),
                rs.resolve(this.highestTargetId)
            }
            setTargetsMetadata(e, t, n) {
                return n && (this.lastRemoteSnapshotVersion = n),
                t > this.Ps && (this.Ps = t),
                rs.resolve()
            }
            xn(e) {
                this.vs.set(e.target, e);
                let t = e.targetId;
                t > this.highestTargetId && (this.Ss = new sS(t),
                this.highestTargetId = t),
                e.sequenceNumber > this.Ps && (this.Ps = e.sequenceNumber)
            }
            addTargetData(e, t) {
                return this.xn(t),
                this.targetCount += 1,
                rs.resolve()
            }
            updateTargetData(e, t) {
                return this.xn(t),
                rs.resolve()
            }
            removeTargetData(e, t) {
                return this.vs.delete(t.target),
                this.Vs.ds(t.targetId),
                this.targetCount -= 1,
                rs.resolve()
            }
            removeTargets(e, t, n) {
                let r = 0
                  , i = [];
                return this.vs.forEach( (s, a) => {
                    a.sequenceNumber <= t && null === n.get(a.targetId) && (this.vs.delete(s),
                    i.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
                    r++)
                }
                ),
                rs.waitFor(i).next( () => r)
            }
            getTargetCount(e) {
                return rs.resolve(this.targetCount)
            }
            getTargetData(e, t) {
                let n = this.vs.get(t) || null;
                return rs.resolve(n)
            }
            addMatchingKeys(e, t, n) {
                return this.Vs.hs(t, n),
                rs.resolve()
            }
            removeMatchingKeys(e, t, n) {
                this.Vs.fs(t, n);
                let r = this.persistence.referenceDelegate
                  , i = [];
                return r && t.forEach(t => {
                    i.push(r.markPotentiallyOrphaned(e, t))
                }
                ),
                rs.waitFor(i)
            }
            removeMatchingKeysForTargetId(e, t) {
                return this.Vs.ds(t),
                rs.resolve()
            }
            getMatchingKeysForTargetId(e, t) {
                let n = this.Vs.ws(t);
                return rs.resolve(n)
            }
            containsKey(e, t) {
                return rs.resolve(this.Vs.containsKey(t))
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sj {
            constructor(e, t) {
                var n;
                this.Ds = {},
                this.overlays = {},
                this.Cs = new ro(0),
                this.xs = !1,
                this.xs = !0,
                this.referenceDelegate = e(this),
                this.Ns = new sM(this),
                this.indexManager = new sE,
                this.remoteDocumentCache = (n = e => this.referenceDelegate.ks(e),
                new sL(n)),
                this.Tt = new sb(t),
                this.Os = new sN(this.Tt)
            }
            start() {
                return Promise.resolve()
            }
            shutdown() {
                return this.xs = !1,
                Promise.resolve()
            }
            get started() {
                return this.xs
            }
            setDatabaseDeletedListener() {}
            setNetworkEnabled() {}
            getIndexManager(e) {
                return this.indexManager
            }
            getDocumentOverlayCache(e) {
                let t = this.overlays[e.toKey()];
                return t || (t = new sO,
                this.overlays[e.toKey()] = t),
                t
            }
            getMutationQueue(e, t) {
                let n = this.Ds[e.toKey()];
                return n || (n = new sD(t,this.referenceDelegate),
                this.Ds[e.toKey()] = n),
                n
            }
            getTargetCache() {
                return this.Ns
            }
            getRemoteDocumentCache() {
                return this.remoteDocumentCache
            }
            getBundleCache() {
                return this.Os
            }
            runTransaction(e, t, n) {
                nF("MemoryPersistence", "Starting transaction:", e);
                let r = new sU(this.Cs.next());
                return this.referenceDelegate.Ms(),
                n(r).next(e => this.referenceDelegate.Fs(r).next( () => e)).toPromise().then(e => (r.raiseOnCommittedEvent(),
                e))
            }
            $s(e, t) {
                return rs.or(Object.values(this.Ds).map(n => () => n.containsKey(e, t)))
            }
        }
        class sU extends rr {
            constructor(e) {
                super(),
                this.currentSequenceNumber = e
            }
        }
        class sV {
            constructor(e) {
                this.persistence = e,
                this.Bs = new sx,
                this.Ls = null
            }
            static qs(e) {
                return new sV(e)
            }
            get Us() {
                if (this.Ls)
                    return this.Ls;
                throw nH()
            }
            addReference(e, t, n) {
                return this.Bs.addReference(n, t),
                this.Us.delete(n.toString()),
                rs.resolve()
            }
            removeReference(e, t, n) {
                return this.Bs.removeReference(n, t),
                this.Us.add(n.toString()),
                rs.resolve()
            }
            markPotentiallyOrphaned(e, t) {
                return this.Us.add(t.toString()),
                rs.resolve()
            }
            removeTarget(e, t) {
                this.Bs.ds(t.targetId).forEach(e => this.Us.add(e.toString()));
                let n = this.persistence.getTargetCache();
                return n.getMatchingKeysForTargetId(e, t.targetId).next(e => {
                    e.forEach(e => this.Us.add(e.toString()))
                }
                ).next( () => n.removeTargetData(e, t))
            }
            Ms() {
                this.Ls = new Set
            }
            Fs(e) {
                let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                return rs.forEach(this.Us, n => {
                    let r = rt.fromPath(n);
                    return this.Ks(e, r).next(e => {
                        e || t.removeEntry(r, n5.min())
                    }
                    )
                }
                ).next( () => (this.Ls = null,
                t.apply(e)))
            }
            updateLimboDocument(e, t) {
                return this.Ks(e, t).next(e => {
                    e ? this.Us.delete(t.toString()) : this.Us.add(t.toString())
                }
                )
            }
            ks(e) {
                return 0
            }
            Ks(e, t) {
                return rs.or([ () => rs.resolve(this.Bs.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.$s(e, t)])
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sF {
            constructor(e, t, n, r) {
                this.targetId = e,
                this.fromCache = t,
                this.Ci = n,
                this.xi = r
            }
            static Ni(e, t) {
                let n = iJ()
                  , r = iJ();
                for (let e of t.docChanges)
                    switch (e.type) {
                    case 0:
                        n = n.add(e.doc.key);
                        break;
                    case 1:
                        r = r.add(e.doc.key)
                    }
                return new sF(e,t.fromCache,n,r)
            }
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sz {
            constructor() {
                this.ki = !1
            }
            initialize(e, t) {
                this.Oi = e,
                this.indexManager = t,
                this.ki = !0
            }
            getDocumentsMatchingQuery(e, t, n, r) {
                return this.Mi(e, t).next(i => i || this.Fi(e, t, r, n)).next(n => n || this.$i(e, t))
            }
            Mi(e, t) {
                if (is(t))
                    return rs.resolve(null);
                let n = io(t);
                return this.indexManager.getIndexType(e, n).next(r => 0 === r ? null : (null !== t.limit && 1 === r && (n = io(t = il(t, null, "F"))),
                this.indexManager.getDocumentsMatchingTarget(e, n).next(r => {
                    let i = iJ(...r);
                    return this.Oi.getDocuments(e, i).next(r => this.indexManager.getMinOffset(e, n).next(n => {
                        let s = this.Bi(t, r);
                        return this.Li(t, s, i, n.readTime) ? this.Mi(e, il(t, null, "F")) : this.qi(e, s, t, n)
                    }
                    ))
                }
                )))
            }
            Fi(e, t, n, r) {
                return is(t) || r.isEqual(n5.min()) ? this.$i(e, t) : this.Oi.getDocuments(e, n).next(i => {
                    let s = this.Bi(t, i);
                    return this.Li(t, s, n, r) ? this.$i(e, t) : (nV() <= f.in.DEBUG && nF("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), ih(t)),
                    this.qi(e, s, t, function(e, t) {
                        let n = e.toTimestamp().seconds
                          , r = e.toTimestamp().nanoseconds + 1
                          , i = n5.fromTimestamp(1e9 === r ? new n6(n + 1,0) : new n6(n,r));
                        return new rn(i,rt.empty(),-1)
                    }(r, 0)))
                }
                )
            }
            Bi(e, t) {
                let n = new r2(ip(e));
                return t.forEach( (t, r) => {
                    id(e, r) && (n = n.add(r))
                }
                ),
                n
            }
            Li(e, t, n, r) {
                if (null === e.limit)
                    return !1;
                if (n.size !== t.size)
                    return !0;
                let i = "F" === e.limitType ? t.last() : t.first();
                return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0)
            }
            $i(e, t) {
                return nV() <= f.in.DEBUG && nF("QueryEngine", "Using full collection scan to execute query:", ih(t)),
                this.Oi.getDocumentsMatchingQuery(e, t, rn.min())
            }
            qi(e, t, n, r) {
                return this.Oi.getDocumentsMatchingQuery(e, n, r).next(e => (t.forEach(t => {
                    e = e.insert(t.key, t)
                }
                ),
                e))
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sB {
            constructor(e, t, n, r) {
                this.persistence = e,
                this.Ui = t,
                this.Tt = r,
                this.Ki = new rZ(n3),
                this.Gi = new iq(e => r9(e),ie),
                this.Qi = new Map,
                this.ji = e.getRemoteDocumentCache(),
                this.Ns = e.getTargetCache(),
                this.Os = e.getBundleCache(),
                this.zi(n)
            }
            zi(e) {
                this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e),
                this.indexManager = this.persistence.getIndexManager(e),
                this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager),
                this.localDocuments = new sk(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),
                this.ji.setIndexManager(this.indexManager),
                this.Ui.initialize(this.localDocuments, this.indexManager)
            }
            collectGarbage(e) {
                return this.persistence.runTransaction("Collect garbage", "readwrite-primary", t => e.collect(t, this.Ki))
            }
        }
        async function sq(e, t) {
            return await e.persistence.runTransaction("Handle user change", "readonly", n => {
                let r;
                return e.mutationQueue.getAllMutationBatches(n).next(i => (r = i,
                e.zi(t),
                e.mutationQueue.getAllMutationBatches(n))).next(t => {
                    let i = []
                      , s = []
                      , a = iJ();
                    for (let e of r)
                        for (let t of (i.push(e.batchId),
                        e.mutations))
                            a = a.add(t.key);
                    for (let e of t)
                        for (let t of (s.push(e.batchId),
                        e.mutations))
                            a = a.add(t.key);
                    return e.localDocuments.getDocuments(n, a).next(e => ({
                        Wi: e,
                        removedBatchIds: i,
                        addedBatchIds: s
                    }))
                }
                )
            }
            )
        }
        function sH(e) {
            return e.persistence.runTransaction("Get last remote snapshot version", "readonly", t => e.Ns.getLastRemoteSnapshotVersion(t))
        }
        async function sK(e, t, n) {
            let r = e
              , i = r.Ki.get(t);
            try {
                n || await r.persistence.runTransaction("Release target", n ? "readwrite" : "readwrite-primary", e => r.persistence.referenceDelegate.removeTarget(e, i))
            } catch (e) {
                if (!ra(e))
                    throw e;
                nF("LocalStore", `Failed to update sequence numbers for target ${t}: ${e}`)
            }
            r.Ki = r.Ki.remove(t),
            r.Gi.delete(i.target)
        }
        function s$(e, t, n) {
            let r = n5.min()
              , i = iJ();
            return e.persistence.runTransaction("Execute query", "readonly", s => (function(e, t, n) {
                let r = e.Gi.get(n);
                return void 0 !== r ? rs.resolve(e.Ki.get(r)) : e.Ns.getTargetData(t, n)
            }
            )(e, s, io(t)).next(t => {
                if (t)
                    return r = t.lastLimboFreeSnapshotVersion,
                    e.Ns.getMatchingKeysForTargetId(s, t.targetId).next(e => {
                        i = e
                    }
                    )
            }
            ).next( () => e.Ui.getDocumentsMatchingQuery(s, t, n ? r : n5.min(), n ? i : iJ())).next(n => {
                var r;
                let s;
                return r = t.collectionGroup || (t.path.length % 2 == 1 ? t.path.lastSegment() : t.path.get(t.path.length - 2)),
                s = e.Qi.get(r) || n5.min(),
                n.forEach( (e, t) => {
                    t.readTime.compareTo(s) > 0 && (s = t.readTime)
                }
                ),
                e.Qi.set(r, s),
                {
                    documents: n,
                    Yi: i
                }
            }
            ))
        }
        class sG {
            constructor() {
                this.activeTargetIds = iY
            }
            sr(e) {
                this.activeTargetIds = this.activeTargetIds.add(e)
            }
            ir(e) {
                this.activeTargetIds = this.activeTargetIds.delete(e)
            }
            nr() {
                let e = {
                    activeTargetIds: this.activeTargetIds.toArray(),
                    updateTimeMs: Date.now()
                };
                return JSON.stringify(e)
            }
        }
        class sW {
            constructor() {
                this.Ur = new sG,
                this.Kr = {},
                this.onlineStateHandler = null,
                this.sequenceNumberHandler = null
            }
            addPendingMutation(e) {}
            updateMutationState(e, t, n) {}
            addLocalQueryTarget(e) {
                return this.Ur.sr(e),
                this.Kr[e] || "not-current"
            }
            updateQueryState(e, t, n) {
                this.Kr[e] = t
            }
            removeLocalQueryTarget(e) {
                this.Ur.ir(e)
            }
            isLocalQueryTarget(e) {
                return this.Ur.activeTargetIds.has(e)
            }
            clearQueryState(e) {
                delete this.Kr[e]
            }
            getAllActiveQueryTargets() {
                return this.Ur.activeTargetIds
            }
            isActiveQueryTarget(e) {
                return this.Ur.activeTargetIds.has(e)
            }
            start() {
                return this.Ur = new sG,
                Promise.resolve()
            }
            handleUserChange(e, t, n) {}
            setOnlineState(e) {}
            shutdown() {}
            writeSequenceNumber(e) {}
            notifyBundleLoaded(e) {}
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sQ {
            Gr(e) {}
            shutdown() {}
        }
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sX {
            constructor() {
                this.Qr = () => this.jr(),
                this.zr = () => this.Wr(),
                this.Hr = [],
                this.Jr()
            }
            Gr(e) {
                this.Hr.push(e)
            }
            shutdown() {
                window.removeEventListener("online", this.Qr),
                window.removeEventListener("offline", this.zr)
            }
            Jr() {
                window.addEventListener("online", this.Qr),
                window.addEventListener("offline", this.zr)
            }
            jr() {
                for (let e of (nF("ConnectivityMonitor", "Network connectivity changed: AVAILABLE"),
                this.Hr))
                    e(0)
            }
            Wr() {
                for (let e of (nF("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE"),
                this.Hr))
                    e(1)
            }
            static C() {
                return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let sJ = {
            BatchGetDocuments: "batchGet",
            Commit: "commit",
            RunQuery: "runQuery",
            RunAggregationQuery: "runAggregationQuery"
        };
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sY {
            constructor(e) {
                this.Yr = e.Yr,
                this.Zr = e.Zr
            }
            Xr(e) {
                this.eo = e
            }
            no(e) {
                this.so = e
            }
            onMessage(e) {
                this.io = e
            }
            close() {
                this.Zr()
            }
            send(e) {
                this.Yr(e)
            }
            ro() {
                this.eo()
            }
            oo(e) {
                this.so(e)
            }
            uo(e) {
                this.io(e)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class sZ extends class {
            constructor(e) {
                this.databaseInfo = e,
                this.databaseId = e.databaseId;
                let t = e.ssl ? "https" : "http";
                this.co = t + "://" + e.host,
                this.ao = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents"
            }
            get ho() {
                return !1
            }
            lo(e, t, n, r, i) {
                let s = this.fo(e, t);
                nF("RestConnection", "Sending: ", s, n);
                let a = {};
                return this._o(a, r, i),
                this.wo(e, s, a, n).then(e => (nF("RestConnection", "Received: ", e),
                e), t => {
                    throw nB("RestConnection", `${e} failed with error: `, t, "url: ", s, "request:", n),
                    t
                }
                )
            }
            mo(e, t, n, r, i, s) {
                return this.lo(e, t, n, r, i)
            }
            _o(e, t, n) {
                e["X-Goog-Api-Client"] = "gl-js/ fire/" + nj,
                e["Content-Type"] = "text/plain",
                this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
                t && t.headers.forEach( (t, n) => e[n] = t),
                n && n.headers.forEach( (t, n) => e[n] = t)
            }
            fo(e, t) {
                let n = sJ[e];
                return `${this.co}/v1/${t}:${n}`
            }
        }
        {
            constructor(e) {
                super(e),
                this.forceLongPolling = e.forceLongPolling,
                this.autoDetectLongPolling = e.autoDetectLongPolling,
                this.useFetchStreams = e.useFetchStreams
            }
            wo(e, t, n, r) {
                return new Promise( (i, s) => {
                    let a = new nL;
                    a.setWithCredentials(!0),
                    a.listenOnce(nN.COMPLETE, () => {
                        try {
                            switch (a.getLastErrorCode()) {
                            case nk.NO_ERROR:
                                let t = a.getResponseJson();
                                nF("Connection", "XHR received:", JSON.stringify(t)),
                                i(t);
                                break;
                            case nk.TIMEOUT:
                                nF("Connection", 'RPC "' + e + '" timed out'),
                                s(new n$(nK.DEADLINE_EXCEEDED,"Request time out"));
                                break;
                            case nk.HTTP_ERROR:
                                let n = a.getStatus();
                                if (nF("Connection", 'RPC "' + e + '" failed with status:', n, "response text:", a.getResponseText()),
                                n > 0) {
                                    let e = a.getResponseJson();
                                    Array.isArray(e) && (e = e[0]);
                                    let t = null == e ? void 0 : e.error;
                                    if (t && t.status && t.message) {
                                        let e = function(e) {
                                            let t = e.toLowerCase().replace(/_/g, "-");
                                            return Object.values(nK).indexOf(t) >= 0 ? t : nK.UNKNOWN
                                        }(t.status);
                                        s(new n$(e,t.message))
                                    } else
                                        s(new n$(nK.UNKNOWN,"Server responded with status " + a.getStatus()))
                                } else
                                    s(new n$(nK.UNAVAILABLE,"Connection failed."));
                                break;
                            default:
                                nH()
                            }
                        } finally {
                            nF("Connection", 'RPC "' + e + '" completed.')
                        }
                    }
                    );
                    let o = JSON.stringify(r);
                    a.send(t, "POST", o, n, 15)
                }
                )
            }
            yo(e, t, n) {
                let r = [this.co, "/", "google.firestore.v1.Firestore", "/", e, "/channel"]
                  , i = nC()
                  , s = nA()
                  , a = {
                    httpSessionIdParam: "gsessionid",
                    initMessageHeaders: {},
                    messageUrlParams: {
                        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
                    },
                    sendRawJson: !0,
                    supportsCrossDomainXhr: !0,
                    internalChannelParams: {
                        forwardChannelRequestTimeoutMs: 6e5
                    },
                    forceLongPolling: this.forceLongPolling,
                    detectBufferingProxy: this.autoDetectLongPolling
                };
                this.useFetchStreams && (a.xmlHttpFactory = new nR({})),
                this._o(a.initMessageHeaders, t, n),
                a.encodeInitMessageHeaders = !0;
                let o = r.join("");
                nF("Connection", "Creating WebChannel: " + o, a);
                let u = i.createWebChannel(o, a)
                  , c = !1
                  , h = !1
                  , d = new sY({
                    Yr: e => {
                        h ? nF("Connection", "Not sending because WebChannel is closed:", e) : (c || (nF("Connection", "Opening WebChannel transport."),
                        u.open(),
                        c = !0),
                        nF("Connection", "WebChannel sending:", e),
                        u.send(e))
                    }
                    ,
                    Zr: () => u.close()
                })
                  , f = (e, t, n) => {
                    e.listen(t, e => {
                        try {
                            n(e)
                        } catch (e) {
                            setTimeout( () => {
                                throw e
                            }
                            , 0)
                        }
                    }
                    )
                }
                ;
                return f(u, nD.EventType.OPEN, () => {
                    h || nF("Connection", "WebChannel transport opened.")
                }
                ),
                f(u, nD.EventType.CLOSE, () => {
                    h || (h = !0,
                    nF("Connection", "WebChannel transport closed"),
                    d.oo())
                }
                ),
                f(u, nD.EventType.ERROR, e => {
                    h || (h = !0,
                    nB("Connection", "WebChannel transport errored:", e),
                    d.oo(new n$(nK.UNAVAILABLE,"The operation could not be completed")))
                }
                ),
                f(u, nD.EventType.MESSAGE, e => {
                    var t;
                    if (!h) {
                        let n = e.data[0];
                        n || nH();
                        let r = n.error || (null === (t = n[0]) || void 0 === t ? void 0 : t.error);
                        if (r) {
                            nF("Connection", "WebChannel received error:", r);
                            let e = r.status
                              , t = function(e) {
                                let t = l[e];
                                if (void 0 !== t)
                                    return iB(t)
                            }(e)
                              , n = r.message;
                            void 0 === t && (t = nK.INTERNAL,
                            n = "Unknown error status: " + e + " with message " + r.message),
                            h = !0,
                            d.oo(new n$(t,n)),
                            u.close()
                        } else
                            nF("Connection", "WebChannel received:", n),
                            d.uo(n)
                    }
                }
                ),
                f(s, nO.STAT_EVENT, e => {
                    e.stat === nx.PROXY ? nF("Connection", "Detected buffering proxy") : e.stat === nx.NOPROXY && nF("Connection", "Detected no buffering proxy")
                }
                ),
                setTimeout( () => {
                    d.ro()
                }
                , 0),
                d
            }
        }
        function s0() {
            return "undefined" != typeof document ? document : null
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function s1(e) {
            return new st(e,!0)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class s2 {
            constructor(e, t, n=1e3, r=1.5, i=6e4) {
                this.Ys = e,
                this.timerId = t,
                this.po = n,
                this.Io = r,
                this.To = i,
                this.Eo = 0,
                this.Ao = null,
                this.Ro = Date.now(),
                this.reset()
            }
            reset() {
                this.Eo = 0
            }
            bo() {
                this.Eo = this.To
            }
            vo(e) {
                this.cancel();
                let t = Math.floor(this.Eo + this.Po())
                  , n = Math.max(0, Date.now() - this.Ro)
                  , r = Math.max(0, t - n);
                r > 0 && nF("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),
                this.Ao = this.Ys.enqueueAfterDelay(this.timerId, r, () => (this.Ro = Date.now(),
                e())),
                this.Eo *= this.Io,
                this.Eo < this.po && (this.Eo = this.po),
                this.Eo > this.To && (this.Eo = this.To)
            }
            Vo() {
                null !== this.Ao && (this.Ao.skipDelay(),
                this.Ao = null)
            }
            cancel() {
                null !== this.Ao && (this.Ao.cancel(),
                this.Ao = null)
            }
            Po() {
                return (Math.random() - .5) * this.Eo
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class s3 {
            constructor(e, t, n, r, i, s, a, o) {
                this.Ys = e,
                this.So = n,
                this.Do = r,
                this.connection = i,
                this.authCredentialsProvider = s,
                this.appCheckCredentialsProvider = a,
                this.listener = o,
                this.state = 0,
                this.Co = 0,
                this.xo = null,
                this.No = null,
                this.stream = null,
                this.ko = new s2(e,t)
            }
            Oo() {
                return 1 === this.state || 5 === this.state || this.Mo()
            }
            Mo() {
                return 2 === this.state || 3 === this.state
            }
            start() {
                4 !== this.state ? this.auth() : this.Fo()
            }
            async stop() {
                this.Oo() && await this.close(0)
            }
            $o() {
                this.state = 0,
                this.ko.reset()
            }
            Bo() {
                this.Mo() && null === this.xo && (this.xo = this.Ys.enqueueAfterDelay(this.So, 6e4, () => this.Lo()))
            }
            qo(e) {
                this.Uo(),
                this.stream.send(e)
            }
            async Lo() {
                if (this.Mo())
                    return this.close(0)
            }
            Uo() {
                this.xo && (this.xo.cancel(),
                this.xo = null)
            }
            Ko() {
                this.No && (this.No.cancel(),
                this.No = null)
            }
            async close(e, t) {
                this.Uo(),
                this.Ko(),
                this.ko.cancel(),
                this.Co++,
                4 !== e ? this.ko.reset() : t && t.code === nK.RESOURCE_EXHAUSTED ? (nz(t.toString()),
                nz("Using maximum backoff delay to prevent overloading the backend."),
                this.ko.bo()) : t && t.code === nK.UNAUTHENTICATED && 3 !== this.state && (this.authCredentialsProvider.invalidateToken(),
                this.appCheckCredentialsProvider.invalidateToken()),
                null !== this.stream && (this.Go(),
                this.stream.close(),
                this.stream = null),
                this.state = e,
                await this.listener.no(t)
            }
            Go() {}
            auth() {
                this.state = 1;
                let e = this.Qo(this.Co)
                  , t = this.Co;
                Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then( ([e,n]) => {
                    this.Co === t && this.jo(e, n)
                }
                , t => {
                    e( () => {
                        let e = new n$(nK.UNKNOWN,"Fetching auth token failed: " + t.message);
                        return this.zo(e)
                    }
                    )
                }
                )
            }
            jo(e, t) {
                let n = this.Qo(this.Co);
                this.stream = this.Wo(e, t),
                this.stream.Xr( () => {
                    n( () => (this.state = 2,
                    this.No = this.Ys.enqueueAfterDelay(this.Do, 1e4, () => (this.Mo() && (this.state = 3),
                    Promise.resolve())),
                    this.listener.Xr()))
                }
                ),
                this.stream.no(e => {
                    n( () => this.zo(e))
                }
                ),
                this.stream.onMessage(e => {
                    n( () => this.onMessage(e))
                }
                )
            }
            Fo() {
                this.state = 5,
                this.ko.vo(async () => {
                    this.state = 0,
                    this.start()
                }
                )
            }
            zo(e) {
                return nF("PersistentStream", `close with error: ${e}`),
                this.stream = null,
                this.close(4, e)
            }
            Qo(e) {
                return t => {
                    this.Ys.enqueueAndForget( () => this.Co === e ? t() : (nF("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."),
                    Promise.resolve()))
                }
            }
        }
        class s4 extends s3 {
            constructor(e, t, n, r, i, s) {
                super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, s),
                this.Tt = i
            }
            Wo(e, t) {
                return this.connection.yo("Listen", e, t)
            }
            onMessage(e) {
                this.ko.reset();
                let t = function(e, t) {
                    let n;
                    if ("targetChange"in t) {
                        var r, i;
                        t.targetChange;
                        let s = "NO_CHANGE" === (r = t.targetChange.targetChangeType || "NO_CHANGE") ? 0 : "ADD" === r ? 1 : "REMOVE" === r ? 2 : "CURRENT" === r ? 3 : "RESET" === r ? 4 : nH()
                          , a = t.targetChange.targetIds || []
                          , o = (i = t.targetChange.resumeToken,
                        e.yt ? (void 0 === i || "string" == typeof i || nH(),
                        rg.fromBase64String(i || "")) : (void 0 === i || i instanceof Uint8Array || nH(),
                        rg.fromUint8Array(i || new Uint8Array)))
                          , l = t.targetChange.cause
                          , u = l && function(e) {
                            let t = void 0 === e.code ? nK.UNKNOWN : iB(e.code);
                            return new n$(t,e.message || "")
                        }(l);
                        n = new i3(s,a,o,u || null)
                    } else if ("documentChange"in t) {
                        t.documentChange;
                        let r = t.documentChange;
                        r.document,
                        r.document.name,
                        r.document.updateTime;
                        let i = sl(e, r.document.name)
                          , s = si(r.document.updateTime)
                          , a = r.document.createTime ? si(r.document.createTime) : n5.min()
                          , o = new r6({
                            mapValue: {
                                fields: r.document.fields
                            }
                        })
                          , l = r5.newFoundDocument(i, s, a, o)
                          , u = r.targetIds || []
                          , c = r.removedTargetIds || [];
                        n = new i1(u,c,l.key,l)
                    } else if ("documentDelete"in t) {
                        t.documentDelete;
                        let r = t.documentDelete;
                        r.document;
                        let i = sl(e, r.document)
                          , s = r.readTime ? si(r.readTime) : n5.min()
                          , a = r5.newNoDocument(i, s)
                          , o = r.removedTargetIds || [];
                        n = new i1([],o,a.key,a)
                    } else if ("documentRemove"in t) {
                        t.documentRemove;
                        let r = t.documentRemove;
                        r.document;
                        let i = sl(e, r.document)
                          , s = r.removedTargetIds || [];
                        n = new i1([],s,i,null)
                    } else {
                        if (!("filter"in t))
                            return nH();
                        {
                            t.filter;
                            let e = t.filter;
                            e.targetId;
                            let r = e.count || 0
                              , i = new iz(r)
                              , s = e.targetId;
                            n = new i2(s,i)
                        }
                    }
                    return n
                }(this.Tt, e)
                  , n = function(e) {
                    if (!("targetChange"in e))
                        return n5.min();
                    let t = e.targetChange;
                    return t.targetIds && t.targetIds.length ? n5.min() : t.readTime ? si(t.readTime) : n5.min()
                }(e);
                return this.listener.Ho(t, n)
            }
            Jo(e) {
                let t = {};
                t.database = sc(this.Tt),
                t.addTarget = function(e, t) {
                    let n;
                    let r = t.target;
                    return (n = it(r) ? {
                        documents: {
                            documents: [su(e, r.path)]
                        }
                    } : {
                        query: function(e, t) {
                            var n, r, i;
                            let s = {
                                structuredQuery: {}
                            }
                              , a = t.path;
                            null !== t.collectionGroup ? (s.parent = su(e, a),
                            s.structuredQuery.from = [{
                                collectionId: t.collectionGroup,
                                allDescendants: !0
                            }]) : (s.parent = su(e, a.popLast()),
                            s.structuredQuery.from = [{
                                collectionId: a.lastSegment()
                            }]);
                            let o = function(e) {
                                if (0 !== e.length)
                                    return function e(t) {
                                        return t instanceof rF ? function(e) {
                                            if ("==" === e.op) {
                                                if (rR(e.value))
                                                    return {
                                                        unaryFilter: {
                                                            field: sf(e.field),
                                                            op: "IS_NAN"
                                                        }
                                                    };
                                                if (rx(e.value))
                                                    return {
                                                        unaryFilter: {
                                                            field: sf(e.field),
                                                            op: "IS_NULL"
                                                        }
                                                    }
                                            } else if ("!=" === e.op) {
                                                if (rR(e.value))
                                                    return {
                                                        unaryFilter: {
                                                            field: sf(e.field),
                                                            op: "IS_NOT_NAN"
                                                        }
                                                    };
                                                if (rx(e.value))
                                                    return {
                                                        unaryFilter: {
                                                            field: sf(e.field),
                                                            op: "IS_NOT_NULL"
                                                        }
                                                    }
                                            }
                                            return {
                                                fieldFilter: {
                                                    field: sf(e.field),
                                                    op: i9[e.op],
                                                    value: e.value
                                                }
                                            }
                                        }(t) : t instanceof rz ? function(t) {
                                            let n = t.getFilters().map(t => e(t));
                                            return 1 === n.length ? n[0] : {
                                                compositeFilter: {
                                                    op: se[t.op],
                                                    filters: n
                                                }
                                            }
                                        }(t) : nH()
                                    }(rz.create(e, "and"))
                            }(t.filters);
                            o && (s.structuredQuery.where = o);
                            let l = function(e) {
                                if (0 !== e.length)
                                    return e.map(e => ({
                                        field: sf(e.field),
                                        direction: i7[e.dir]
                                    }))
                            }(t.orderBy);
                            l && (s.structuredQuery.orderBy = l);
                            let u = (r = t.limit,
                            e.yt || null == r ? r : {
                                value: r
                            });
                            return null !== u && (s.structuredQuery.limit = u),
                            t.startAt && (s.structuredQuery.startAt = {
                                before: (n = t.startAt).inclusive,
                                values: n.position
                            }),
                            t.endAt && (s.structuredQuery.endAt = {
                                before: !(i = t.endAt).inclusive,
                                values: i.position
                            }),
                            s
                        }(e, r)
                    }).targetId = t.targetId,
                    t.resumeToken.approximateByteSize() > 0 ? n.resumeToken = sr(e, t.resumeToken) : t.snapshotVersion.compareTo(n5.min()) > 0 && (n.readTime = sn(e, t.snapshotVersion.toTimestamp())),
                    n
                }(this.Tt, e);
                let n = function(e, t) {
                    let n = function(e, t) {
                        switch (t) {
                        case 0:
                            return null;
                        case 1:
                            return "existence-filter-mismatch";
                        case 2:
                            return "limbo-document";
                        default:
                            return nH()
                        }
                    }(0, t.purpose);
                    return null == n ? null : {
                        "goog-listen-tags": n
                    }
                }(this.Tt, e);
                n && (t.labels = n),
                this.qo(t)
            }
            Yo(e) {
                let t = {};
                t.database = sc(this.Tt),
                t.removeTarget = e,
                this.qo(t)
            }
        }
        class s6 extends s3 {
            constructor(e, t, n, r, i, s) {
                super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, s),
                this.Tt = i,
                this.Zo = !1
            }
            get Xo() {
                return this.Zo
            }
            start() {
                this.Zo = !1,
                this.lastStreamToken = void 0,
                super.start()
            }
            Go() {
                this.Zo && this.tu([])
            }
            Wo(e, t) {
                return this.connection.yo("Write", e, t)
            }
            onMessage(e) {
                var t, n;
                if (e.streamToken || nH(),
                this.lastStreamToken = e.streamToken,
                this.Zo) {
                    this.ko.reset();
                    let r = (t = e.writeResults,
                    n = e.commitTime,
                    t && t.length > 0 ? (void 0 !== n || nH(),
                    t.map(e => {
                        let t;
                        return (t = e.updateTime ? si(e.updateTime) : si(n)).isEqual(n5.min()) && (t = si(n)),
                        new iA(t,e.transformResults || [])
                    }
                    )) : [])
                      , i = si(e.commitTime);
                    return this.listener.eu(i, r)
                }
                return e.writeResults && 0 !== e.writeResults.length && nH(),
                this.Zo = !0,
                this.listener.nu()
            }
            su() {
                let e = {};
                e.database = sc(this.Tt),
                this.qo(e)
            }
            tu(e) {
                let t = {
                    streamToken: this.lastStreamToken,
                    writes: e.map(e => (function(e, t) {
                        var n;
                        let r;
                        if (t instanceof iL)
                            r = {
                                update: sd(e, t.key, t.value)
                            };
                        else if (t instanceof iV)
                            r = {
                                delete: so(e, t.key)
                            };
                        else if (t instanceof iP)
                            r = {
                                update: sd(e, t.key, t.data),
                                updateMask: function(e) {
                                    let t = [];
                                    return e.fields.forEach(e => t.push(e.canonicalString())),
                                    {
                                        fieldPaths: t
                                    }
                                }(t.fieldMask)
                            };
                        else {
                            if (!(t instanceof iF))
                                return nH();
                            r = {
                                verify: so(e, t.key)
                            }
                        }
                        return t.fieldTransforms.length > 0 && (r.updateTransforms = t.fieldTransforms.map(e => (function(e, t) {
                            let n = t.transform;
                            if (n instanceof iw)
                                return {
                                    fieldPath: t.field.canonicalString(),
                                    setToServerValue: "REQUEST_TIME"
                                };
                            if (n instanceof ib)
                                return {
                                    fieldPath: t.field.canonicalString(),
                                    appendMissingElements: {
                                        values: n.elements
                                    }
                                };
                            if (n instanceof iE)
                                return {
                                    fieldPath: t.field.canonicalString(),
                                    removeAllFromArray: {
                                        values: n.elements
                                    }
                                };
                            if (n instanceof iT)
                                return {
                                    fieldPath: t.field.canonicalString(),
                                    increment: n.It
                                };
                            throw nH()
                        }
                        )(0, e))),
                        t.precondition.isNone || (r.currentDocument = void 0 !== (n = t.precondition).updateTime ? {
                            updateTime: sn(e, n.updateTime.toTimestamp())
                        } : void 0 !== n.exists ? {
                            exists: n.exists
                        } : nH()),
                        r
                    }
                    )(this.Tt, e))
                };
                this.qo(t)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class s5 extends class {
        }
        {
            constructor(e, t, n, r) {
                super(),
                this.authCredentials = e,
                this.appCheckCredentials = t,
                this.connection = n,
                this.Tt = r,
                this.iu = !1
            }
            ru() {
                if (this.iu)
                    throw new n$(nK.FAILED_PRECONDITION,"The client has already been terminated.")
            }
            lo(e, t, n) {
                return this.ru(),
                Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then( ([r,i]) => this.connection.lo(e, t, n, r, i)).catch(e => {
                    throw "FirebaseError" === e.name ? (e.code === nK.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
                    this.appCheckCredentials.invalidateToken()),
                    e) : new n$(nK.UNKNOWN,e.toString())
                }
                )
            }
            mo(e, t, n, r) {
                return this.ru(),
                Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then( ([i,s]) => this.connection.mo(e, t, n, i, s, r)).catch(e => {
                    throw "FirebaseError" === e.name ? (e.code === nK.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
                    this.appCheckCredentials.invalidateToken()),
                    e) : new n$(nK.UNKNOWN,e.toString())
                }
                )
            }
            terminate() {
                this.iu = !0
            }
        }
        class s8 {
            constructor(e, t) {
                this.asyncQueue = e,
                this.onlineStateHandler = t,
                this.state = "Unknown",
                this.ou = 0,
                this.uu = null,
                this.cu = !0
            }
            au() {
                0 === this.ou && (this.hu("Unknown"),
                this.uu = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.uu = null,
                this.lu("Backend didn't respond within 10 seconds."),
                this.hu("Offline"),
                Promise.resolve())))
            }
            fu(e) {
                "Online" === this.state ? this.hu("Unknown") : (this.ou++,
                this.ou >= 1 && (this.du(),
                this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),
                this.hu("Offline")))
            }
            set(e) {
                this.du(),
                this.ou = 0,
                "Online" === e && (this.cu = !1),
                this.hu(e)
            }
            hu(e) {
                e !== this.state && (this.state = e,
                this.onlineStateHandler(e))
            }
            lu(e) {
                let t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
                this.cu ? (nz(t),
                this.cu = !1) : nF("OnlineStateTracker", t)
            }
            du() {
                null !== this.uu && (this.uu.cancel(),
                this.uu = null)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class s7 {
            constructor(e, t, n, r, i) {
                this.localStore = e,
                this.datastore = t,
                this.asyncQueue = n,
                this.remoteSyncer = {},
                this._u = [],
                this.wu = new Map,
                this.mu = new Set,
                this.gu = [],
                this.yu = i,
                this.yu.Gr(e => {
                    n.enqueueAndForget(async () => {
                        ao(this) && (nF("RemoteStore", "Restarting streams for network reachability change."),
                        await async function(e) {
                            e.mu.add(4),
                            await ae(e),
                            e.pu.set("Unknown"),
                            e.mu.delete(4),
                            await s9(e)
                        }(this))
                    }
                    )
                }
                ),
                this.pu = new s8(n,r)
            }
        }
        async function s9(e) {
            if (ao(e))
                for (let t of e.gu)
                    await t(!0)
        }
        async function ae(e) {
            for (let t of e.gu)
                await t(!1)
        }
        function at(e, t) {
            e.wu.has(t.targetId) || (e.wu.set(t.targetId, t),
            aa(e) ? as(e) : aE(e).Mo() && ar(e, t))
        }
        function an(e, t) {
            let n = aE(e);
            e.wu.delete(t),
            n.Mo() && ai(e, t),
            0 === e.wu.size && (n.Mo() ? n.Bo() : ao(e) && e.pu.set("Unknown"))
        }
        function ar(e, t) {
            e.Iu.Ft(t.targetId),
            aE(e).Jo(t)
        }
        function ai(e, t) {
            e.Iu.Ft(t),
            aE(e).Yo(t)
        }
        function as(e) {
            e.Iu = new i6({
                getRemoteKeysForTarget: t => e.remoteSyncer.getRemoteKeysForTarget(t),
                ie: t => e.wu.get(t) || null
            }),
            aE(e).start(),
            e.pu.au()
        }
        function aa(e) {
            return ao(e) && !aE(e).Oo() && e.wu.size > 0
        }
        function ao(e) {
            return 0 === e.mu.size
        }
        async function al(e) {
            e.wu.forEach( (t, n) => {
                ar(e, t)
            }
            )
        }
        async function au(e, t) {
            e.Iu = void 0,
            aa(e) ? (e.pu.fu(t),
            as(e)) : e.pu.set("Unknown")
        }
        async function ac(e, t, n) {
            if (e.pu.set("Online"),
            t instanceof i3 && 2 === t.state && t.cause)
                try {
                    await async function(e, t) {
                        let n = t.cause;
                        for (let r of t.targetIds)
                            e.wu.has(r) && (await e.remoteSyncer.rejectListen(r, n),
                            e.wu.delete(r),
                            e.Iu.removeTarget(r))
                    }(e, t)
                } catch (n) {
                    nF("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), n),
                    await ah(e, n)
                }
            else if (t instanceof i1 ? e.Iu.Qt(t) : t instanceof i2 ? e.Iu.Zt(t) : e.Iu.Wt(t),
            !n.isEqual(n5.min()))
                try {
                    let t = await sH(e.localStore);
                    n.compareTo(t) >= 0 && await function(e, t) {
                        let n = e.Iu.ee(t);
                        return n.targetChanges.forEach( (n, r) => {
                            if (n.resumeToken.approximateByteSize() > 0) {
                                let i = e.wu.get(r);
                                i && e.wu.set(r, i.withResumeToken(n.resumeToken, t))
                            }
                        }
                        ),
                        n.targetMismatches.forEach(t => {
                            let n = e.wu.get(t);
                            if (!n)
                                return;
                            e.wu.set(t, n.withResumeToken(rg.EMPTY_BYTE_STRING, n.snapshotVersion)),
                            ai(e, t);
                            let r = new sw(n.target,t,1,n.sequenceNumber);
                            ar(e, r)
                        }
                        ),
                        e.remoteSyncer.applyRemoteEvent(n)
                    }(e, n)
                } catch (t) {
                    nF("RemoteStore", "Failed to raise snapshot:", t),
                    await ah(e, t)
                }
        }
        async function ah(e, t, n) {
            if (!ra(t))
                throw t;
            e.mu.add(1),
            await ae(e),
            e.pu.set("Offline"),
            n || (n = () => sH(e.localStore)),
            e.asyncQueue.enqueueRetryable(async () => {
                nF("RemoteStore", "Retrying IndexedDB access"),
                await n(),
                e.mu.delete(1),
                await s9(e)
            }
            )
        }
        function ad(e, t) {
            return t().catch(n => ah(e, n, t))
        }
        async function af(e) {
            let t = aI(e)
              , n = e._u.length > 0 ? e._u[e._u.length - 1].batchId : -1;
            for (; ao(e) && e._u.length < 10; )
                try {
                    let r = await function(e, t) {
                        return e.persistence.runTransaction("Get next mutation batch", "readonly", n => (void 0 === t && (t = -1),
                        e.mutationQueue.getNextMutationBatchAfterBatchId(n, t)))
                    }(e.localStore, n);
                    if (null === r) {
                        0 === e._u.length && t.Bo();
                        break
                    }
                    n = r.batchId,
                    function(e, t) {
                        e._u.push(t);
                        let n = aI(e);
                        n.Mo() && n.Xo && n.tu(t.mutations)
                    }(e, r)
                } catch (t) {
                    await ah(e, t)
                }
            ap(e) && ag(e)
        }
        function ap(e) {
            return ao(e) && !aI(e).Oo() && e._u.length > 0
        }
        function ag(e) {
            aI(e).start()
        }
        async function am(e) {
            aI(e).su()
        }
        async function ay(e) {
            let t = aI(e);
            for (let n of e._u)
                t.tu(n.mutations)
        }
        async function av(e, t, n) {
            let r = e._u.shift()
              , i = sy.from(r, t, n);
            await ad(e, () => e.remoteSyncer.applySuccessfulWrite(i)),
            await af(e)
        }
        async function aw(e, t) {
            t && aI(e).Xo && await async function(e, t) {
                var n;
                if (function(e) {
                    switch (e) {
                    default:
                        return nH();
                    case nK.CANCELLED:
                    case nK.UNKNOWN:
                    case nK.DEADLINE_EXCEEDED:
                    case nK.RESOURCE_EXHAUSTED:
                    case nK.INTERNAL:
                    case nK.UNAVAILABLE:
                    case nK.UNAUTHENTICATED:
                        return !1;
                    case nK.INVALID_ARGUMENT:
                    case nK.NOT_FOUND:
                    case nK.ALREADY_EXISTS:
                    case nK.PERMISSION_DENIED:
                    case nK.FAILED_PRECONDITION:
                    case nK.ABORTED:
                    case nK.OUT_OF_RANGE:
                    case nK.UNIMPLEMENTED:
                    case nK.DATA_LOSS:
                        return !0
                    }
                }(n = t.code) && n !== nK.ABORTED) {
                    let n = e._u.shift();
                    aI(e).$o(),
                    await ad(e, () => e.remoteSyncer.rejectFailedWrite(n.batchId, t)),
                    await af(e)
                }
            }(e, t),
            ap(e) && ag(e)
        }
        async function ab(e, t) {
            e.asyncQueue.verifyOperationInProgress(),
            nF("RemoteStore", "RemoteStore received new credentials");
            let n = ao(e);
            e.mu.add(3),
            await ae(e),
            n && e.pu.set("Unknown"),
            await e.remoteSyncer.handleCredentialChange(t),
            e.mu.delete(3),
            await s9(e)
        }
        async function a_(e, t) {
            t ? (e.mu.delete(2),
            await s9(e)) : t || (e.mu.add(2),
            await ae(e),
            e.pu.set("Unknown"))
        }
        function aE(e) {
            var t, n, r;
            return e.Tu || (e.Tu = (t = e.datastore,
            n = e.asyncQueue,
            r = {
                Xr: al.bind(null, e),
                no: au.bind(null, e),
                Ho: ac.bind(null, e)
            },
            t.ru(),
            new s4(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),
            e.gu.push(async t => {
                t ? (e.Tu.$o(),
                aa(e) ? as(e) : e.pu.set("Unknown")) : (await e.Tu.stop(),
                e.Iu = void 0)
            }
            )),
            e.Tu
        }
        function aI(e) {
            var t, n, r;
            return e.Eu || (e.Eu = (t = e.datastore,
            n = e.asyncQueue,
            r = {
                Xr: am.bind(null, e),
                no: aw.bind(null, e),
                nu: ay.bind(null, e),
                eu: av.bind(null, e)
            },
            t.ru(),
            new s6(n,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),
            e.gu.push(async t => {
                t ? (e.Eu.$o(),
                await af(e)) : (await e.Eu.stop(),
                e._u.length > 0 && (nF("RemoteStore", `Stopping write stream with ${e._u.length} pending writes`),
                e._u = []))
            }
            )),
            e.Eu
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class aT {
            constructor(e, t, n, r, i) {
                this.asyncQueue = e,
                this.timerId = t,
                this.targetTimeMs = n,
                this.op = r,
                this.removalCallback = i,
                this.deferred = new nG,
                this.then = this.deferred.promise.then.bind(this.deferred.promise),
                this.deferred.promise.catch(e => {}
                )
            }
            static createAndSchedule(e, t, n, r, i) {
                let s = Date.now() + n
                  , a = new aT(e,t,s,r,i);
                return a.start(n),
                a
            }
            start(e) {
                this.timerHandle = setTimeout( () => this.handleDelayElapsed(), e)
            }
            skipDelay() {
                return this.handleDelayElapsed()
            }
            cancel(e) {
                null !== this.timerHandle && (this.clearTimeout(),
                this.deferred.reject(new n$(nK.CANCELLED,"Operation cancelled" + (e ? ": " + e : ""))))
            }
            handleDelayElapsed() {
                this.asyncQueue.enqueueAndForget( () => null !== this.timerHandle ? (this.clearTimeout(),
                this.op().then(e => this.deferred.resolve(e))) : Promise.resolve())
            }
            clearTimeout() {
                null !== this.timerHandle && (this.removalCallback(this),
                clearTimeout(this.timerHandle),
                this.timerHandle = null)
            }
        }
        function aS(e, t) {
            if (nz("AsyncQueue", `${t}: ${e}`),
            ra(e))
                return new n$(nK.UNAVAILABLE,`${t}: ${e}`);
            throw e
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class aC {
            constructor(e) {
                this.comparator = e ? (t, n) => e(t, n) || rt.comparator(t.key, n.key) : (e, t) => rt.comparator(e.key, t.key),
                this.keyedMap = i$(),
                this.sortedSet = new rZ(this.comparator)
            }
            static emptySet(e) {
                return new aC(e.comparator)
            }
            has(e) {
                return null != this.keyedMap.get(e)
            }
            get(e) {
                return this.keyedMap.get(e)
            }
            first() {
                return this.sortedSet.minKey()
            }
            last() {
                return this.sortedSet.maxKey()
            }
            isEmpty() {
                return this.sortedSet.isEmpty()
            }
            indexOf(e) {
                let t = this.keyedMap.get(e);
                return t ? this.sortedSet.indexOf(t) : -1
            }
            get size() {
                return this.sortedSet.size
            }
            forEach(e) {
                this.sortedSet.inorderTraversal( (t, n) => (e(t),
                !1))
            }
            add(e) {
                let t = this.delete(e.key);
                return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null))
            }
            delete(e) {
                let t = this.get(e);
                return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this
            }
            isEqual(e) {
                if (!(e instanceof aC) || this.size !== e.size)
                    return !1;
                let t = this.sortedSet.getIterator()
                  , n = e.sortedSet.getIterator();
                for (; t.hasNext(); ) {
                    let e = t.getNext().key
                      , r = n.getNext().key;
                    if (!e.isEqual(r))
                        return !1
                }
                return !0
            }
            toString() {
                let e = [];
                return this.forEach(t => {
                    e.push(t.toString())
                }
                ),
                0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)"
            }
            copy(e, t) {
                let n = new aC;
                return n.comparator = this.comparator,
                n.keyedMap = e,
                n.sortedSet = t,
                n
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class aA {
            constructor() {
                this.Au = new rZ(rt.comparator)
            }
            track(e) {
                let t = e.doc.key
                  , n = this.Au.get(t);
                n ? 0 !== e.type && 3 === n.type ? this.Au = this.Au.insert(t, e) : 3 === e.type && 1 !== n.type ? this.Au = this.Au.insert(t, {
                    type: n.type,
                    doc: e.doc
                }) : 2 === e.type && 2 === n.type ? this.Au = this.Au.insert(t, {
                    type: 2,
                    doc: e.doc
                }) : 2 === e.type && 0 === n.type ? this.Au = this.Au.insert(t, {
                    type: 0,
                    doc: e.doc
                }) : 1 === e.type && 0 === n.type ? this.Au = this.Au.remove(t) : 1 === e.type && 2 === n.type ? this.Au = this.Au.insert(t, {
                    type: 1,
                    doc: n.doc
                }) : 0 === e.type && 1 === n.type ? this.Au = this.Au.insert(t, {
                    type: 2,
                    doc: e.doc
                }) : nH() : this.Au = this.Au.insert(t, e)
            }
            Ru() {
                let e = [];
                return this.Au.inorderTraversal( (t, n) => {
                    e.push(n)
                }
                ),
                e
            }
        }
        class ak {
            constructor(e, t, n, r, i, s, a, o, l) {
                this.query = e,
                this.docs = t,
                this.oldDocs = n,
                this.docChanges = r,
                this.mutatedKeys = i,
                this.fromCache = s,
                this.syncStateChanged = a,
                this.excludesMetadataChanges = o,
                this.hasCachedResults = l
            }
            static fromInitialDocuments(e, t, n, r, i) {
                let s = [];
                return t.forEach(e => {
                    s.push({
                        type: 0,
                        doc: e
                    })
                }
                ),
                new ak(e,t,aC.emptySet(t),s,n,r,!0,!1,i)
            }
            get hasPendingWrites() {
                return !this.mutatedKeys.isEmpty()
            }
            isEqual(e) {
                if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && iu(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs)))
                    return !1;
                let t = this.docChanges
                  , n = e.docChanges;
                if (t.length !== n.length)
                    return !1;
                for (let e = 0; e < t.length; e++)
                    if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc))
                        return !1;
                return !0
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class aN {
            constructor() {
                this.bu = void 0,
                this.listeners = []
            }
        }
        class aO {
            constructor() {
                this.queries = new iq(e => ic(e),iu),
                this.onlineState = "Unknown",
                this.vu = new Set
            }
        }
        async function ax(e, t) {
            let n = t.query
              , r = !1
              , i = e.queries.get(n);
            if (i || (r = !0,
            i = new aN),
            r)
                try {
                    i.bu = await e.onListen(n)
                } catch (n) {
                    let e = aS(n, `Initialization of query '${ih(t.query)}' failed`);
                    return void t.onError(e)
                }
            e.queries.set(n, i),
            i.listeners.push(t),
            t.Pu(e.onlineState),
            i.bu && t.Vu(i.bu) && aP(e)
        }
        async function aR(e, t) {
            let n = t.query
              , r = !1
              , i = e.queries.get(n);
            if (i) {
                let e = i.listeners.indexOf(t);
                e >= 0 && (i.listeners.splice(e, 1),
                r = 0 === i.listeners.length)
            }
            if (r)
                return e.queries.delete(n),
                e.onUnlisten(n)
        }
        function aD(e, t) {
            let n = !1;
            for (let r of t) {
                let t = r.query
                  , i = e.queries.get(t);
                if (i) {
                    for (let e of i.listeners)
                        e.Vu(r) && (n = !0);
                    i.bu = r
                }
            }
            n && aP(e)
        }
        function aL(e, t, n) {
            let r = e.queries.get(t);
            if (r)
                for (let e of r.listeners)
                    e.onError(n);
            e.queries.delete(t)
        }
        function aP(e) {
            e.vu.forEach(e => {
                e.next()
            }
            )
        }
        class aM {
            constructor(e, t, n) {
                this.query = e,
                this.Su = t,
                this.Du = !1,
                this.Cu = null,
                this.onlineState = "Unknown",
                this.options = n || {}
            }
            Vu(e) {
                if (!this.options.includeMetadataChanges) {
                    let t = [];
                    for (let n of e.docChanges)
                        3 !== n.type && t.push(n);
                    e = new ak(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)
                }
                let t = !1;
                return this.Du ? this.xu(e) && (this.Su.next(e),
                t = !0) : this.Nu(e, this.onlineState) && (this.ku(e),
                t = !0),
                this.Cu = e,
                t
            }
            onError(e) {
                this.Su.error(e)
            }
            Pu(e) {
                this.onlineState = e;
                let t = !1;
                return this.Cu && !this.Du && this.Nu(this.Cu, e) && (this.ku(this.Cu),
                t = !0),
                t
            }
            Nu(e, t) {
                return !e.fromCache || (!this.options.Ou || !("Offline" !== t)) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t)
            }
            xu(e) {
                if (e.docChanges.length > 0)
                    return !0;
                let t = this.Cu && this.Cu.hasPendingWrites !== e.hasPendingWrites;
                return !(!e.syncStateChanged && !t) && !0 === this.options.includeMetadataChanges
            }
            ku(e) {
                e = ak.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults),
                this.Du = !0,
                this.Su.next(e)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class aj {
            constructor(e) {
                this.key = e
            }
        }
        class aU {
            constructor(e) {
                this.key = e
            }
        }
        class aV {
            constructor(e, t) {
                this.query = e,
                this.Ku = t,
                this.Gu = null,
                this.hasCachedResults = !1,
                this.current = !1,
                this.Qu = iJ(),
                this.mutatedKeys = iJ(),
                this.ju = ip(e),
                this.zu = new aC(this.ju)
            }
            get Wu() {
                return this.Ku
            }
            Hu(e, t) {
                let n = t ? t.Ju : new aA
                  , r = t ? t.zu : this.zu
                  , i = t ? t.mutatedKeys : this.mutatedKeys
                  , s = r
                  , a = !1
                  , o = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null
                  , l = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
                if (e.inorderTraversal( (e, t) => {
                    let u = r.get(e)
                      , c = id(this.query, t) ? t : null
                      , h = !!u && this.mutatedKeys.has(u.key)
                      , d = !!c && (c.hasLocalMutations || this.mutatedKeys.has(c.key) && c.hasCommittedMutations)
                      , f = !1;
                    u && c ? u.data.isEqual(c.data) ? h !== d && (n.track({
                        type: 3,
                        doc: c
                    }),
                    f = !0) : this.Yu(u, c) || (n.track({
                        type: 2,
                        doc: c
                    }),
                    f = !0,
                    (o && this.ju(c, o) > 0 || l && 0 > this.ju(c, l)) && (a = !0)) : !u && c ? (n.track({
                        type: 0,
                        doc: c
                    }),
                    f = !0) : u && !c && (n.track({
                        type: 1,
                        doc: u
                    }),
                    f = !0,
                    (o || l) && (a = !0)),
                    f && (c ? (s = s.add(c),
                    i = d ? i.add(e) : i.delete(e)) : (s = s.delete(e),
                    i = i.delete(e)))
                }
                ),
                null !== this.query.limit)
                    for (; s.size > this.query.limit; ) {
                        let e = "F" === this.query.limitType ? s.last() : s.first();
                        s = s.delete(e.key),
                        i = i.delete(e.key),
                        n.track({
                            type: 1,
                            doc: e
                        })
                    }
                return {
                    zu: s,
                    Ju: n,
                    Li: a,
                    mutatedKeys: i
                }
            }
            Yu(e, t) {
                return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
            }
            applyChanges(e, t, n) {
                let r = this.zu;
                this.zu = e.zu,
                this.mutatedKeys = e.mutatedKeys;
                let i = e.Ju.Ru();
                i.sort( (e, t) => (function(e, t) {
                    let n = e => {
                        switch (e) {
                        case 0:
                            return 1;
                        case 2:
                        case 3:
                            return 2;
                        case 1:
                            return 0;
                        default:
                            return nH()
                        }
                    }
                    ;
                    return n(e) - n(t)
                }
                )(e.type, t.type) || this.ju(e.doc, t.doc)),
                this.Zu(n);
                let s = t ? this.Xu() : []
                  , a = 0 === this.Qu.size && this.current ? 1 : 0
                  , o = a !== this.Gu;
                return (this.Gu = a,
                0 !== i.length || o) ? {
                    snapshot: new ak(this.query,e.zu,r,i,e.mutatedKeys,0 === a,o,!1,!!n && n.resumeToken.approximateByteSize() > 0),
                    tc: s
                } : {
                    tc: s
                }
            }
            Pu(e) {
                return this.current && "Offline" === e ? (this.current = !1,
                this.applyChanges({
                    zu: this.zu,
                    Ju: new aA,
                    mutatedKeys: this.mutatedKeys,
                    Li: !1
                }, !1)) : {
                    tc: []
                }
            }
            ec(e) {
                return !this.Ku.has(e) && !!this.zu.has(e) && !this.zu.get(e).hasLocalMutations
            }
            Zu(e) {
                e && (e.addedDocuments.forEach(e => this.Ku = this.Ku.add(e)),
                e.modifiedDocuments.forEach(e => {}
                ),
                e.removedDocuments.forEach(e => this.Ku = this.Ku.delete(e)),
                this.current = e.current)
            }
            Xu() {
                if (!this.current)
                    return [];
                let e = this.Qu;
                this.Qu = iJ(),
                this.zu.forEach(e => {
                    this.ec(e.key) && (this.Qu = this.Qu.add(e.key))
                }
                );
                let t = [];
                return e.forEach(e => {
                    this.Qu.has(e) || t.push(new aU(e))
                }
                ),
                this.Qu.forEach(n => {
                    e.has(n) || t.push(new aj(n))
                }
                ),
                t
            }
            nc(e) {
                this.Ku = e.Yi,
                this.Qu = iJ();
                let t = this.Hu(e.documents);
                return this.applyChanges(t, !0)
            }
            sc() {
                return ak.fromInitialDocuments(this.query, this.zu, this.mutatedKeys, 0 === this.Gu, this.hasCachedResults)
            }
        }
        class aF {
            constructor(e, t, n) {
                this.query = e,
                this.targetId = t,
                this.view = n
            }
        }
        class az {
            constructor(e) {
                this.key = e,
                this.ic = !1
            }
        }
        class aB {
            constructor(e, t, n, r, i, s) {
                this.localStore = e,
                this.remoteStore = t,
                this.eventManager = n,
                this.sharedClientState = r,
                this.currentUser = i,
                this.maxConcurrentLimboResolutions = s,
                this.rc = {},
                this.oc = new iq(e => ic(e),iu),
                this.uc = new Map,
                this.cc = new Set,
                this.ac = new rZ(rt.comparator),
                this.hc = new Map,
                this.lc = new sx,
                this.fc = {},
                this.dc = new Map,
                this._c = sS.Sn(),
                this.onlineState = "Unknown",
                this.wc = void 0
            }
            get isPrimaryClient() {
                return !0 === this.wc
            }
        }
        async function aq(e, t) {
            let n, r;
            let i = function(e) {
                let t = e;
                return t.remoteStore.remoteSyncer.applyRemoteEvent = aG.bind(null, t),
                t.remoteStore.remoteSyncer.getRemoteKeysForTarget = a5.bind(null, t),
                t.remoteStore.remoteSyncer.rejectListen = aQ.bind(null, t),
                t.rc.Ho = aD.bind(null, t.eventManager),
                t.rc.gc = aL.bind(null, t.eventManager),
                t
            }(e)
              , s = i.oc.get(t);
            if (s)
                n = s.targetId,
                i.sharedClientState.addLocalQueryTarget(n),
                r = s.view.sc();
            else {
                let e = await function(e, t) {
                    let n = e;
                    return n.persistence.runTransaction("Allocate target", "readwrite", e => {
                        let r;
                        return n.Ns.getTargetData(e, t).next(i => i ? (r = i,
                        rs.resolve(r)) : n.Ns.allocateTargetId(e).next(i => (r = new sw(t,i,0,e.currentSequenceNumber),
                        n.Ns.addTargetData(e, r).next( () => r))))
                    }
                    ).then(e => {
                        let r = n.Ki.get(e.targetId);
                        return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.Ki = n.Ki.insert(e.targetId, e),
                        n.Gi.set(t, e.targetId)),
                        e
                    }
                    )
                }(i.localStore, io(t));
                i.isPrimaryClient && at(i.remoteStore, e);
                let s = i.sharedClientState.addLocalQueryTarget(e.targetId);
                r = await aH(i, t, n = e.targetId, "current" === s, e.resumeToken)
            }
            return r
        }
        async function aH(e, t, n, r, i) {
            e.mc = (t, n, r) => (async function(e, t, n, r) {
                let i = t.view.Hu(n);
                i.Li && (i = await s$(e.localStore, t.query, !1).then( ({documents: e}) => t.view.Hu(e, i)));
                let s = r && r.targetChanges.get(t.targetId)
                  , a = t.view.applyChanges(i, e.isPrimaryClient, s);
                return a2(e, t.targetId, a.tc),
                a.snapshot
            }
            )(e, t, n, r);
            let s = await s$(e.localStore, t, !0)
              , a = new aV(t,s.Yi)
              , o = a.Hu(s.documents)
              , l = i0.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i)
              , u = a.applyChanges(o, e.isPrimaryClient, l);
            a2(e, n, u.tc);
            let c = new aF(t,n,a);
            return e.oc.set(t, c),
            e.uc.has(n) ? e.uc.get(n).push(t) : e.uc.set(n, [t]),
            u.snapshot
        }
        async function aK(e, t) {
            let n = e.oc.get(t)
              , r = e.uc.get(n.targetId);
            if (r.length > 1)
                return e.uc.set(n.targetId, r.filter(e => !iu(e, t))),
                void e.oc.delete(t);
            e.isPrimaryClient ? (e.sharedClientState.removeLocalQueryTarget(n.targetId),
            e.sharedClientState.isActiveQueryTarget(n.targetId) || await sK(e.localStore, n.targetId, !1).then( () => {
                e.sharedClientState.clearQueryState(n.targetId),
                an(e.remoteStore, n.targetId),
                a0(e, n.targetId)
            }
            ).catch(ri)) : (a0(e, n.targetId),
            await sK(e.localStore, n.targetId, !0))
        }
        async function a$(e, t, n) {
            let r = function(e) {
                let t = e;
                return t.remoteStore.remoteSyncer.applySuccessfulWrite = aX.bind(null, t),
                t.remoteStore.remoteSyncer.rejectFailedWrite = aJ.bind(null, t),
                t
            }(e);
            try {
                var i, s;
                let e;
                let a = await function(e, t) {
                    let n, r;
                    let i = n6.now()
                      , s = t.reduce( (e, t) => e.add(t.key), iJ());
                    return e.persistence.runTransaction("Locally write mutations", "readwrite", a => {
                        let o = iH
                          , l = iJ();
                        return e.ji.getEntries(a, s).next(e => {
                            (o = e).forEach( (e, t) => {
                                t.isValidDocument() || (l = l.add(e))
                            }
                            )
                        }
                        ).next( () => e.localDocuments.getOverlayedDocuments(a, o)).next(r => {
                            n = r;
                            let s = [];
                            for (let e of t) {
                                let t = function(e, t) {
                                    let n = null;
                                    for (let r of e.fieldTransforms) {
                                        let e = t.data.field(r.field)
                                          , i = iv(r.transform, e || null);
                                        null != i && (null === n && (n = r6.empty()),
                                        n.set(r.field, i))
                                    }
                                    return n || null
                                }(e, n.get(e.key).overlayedDocument);
                                null != t && s.push(new iP(e.key,t,function e(t) {
                                    let n = [];
                                    return rh(t.fields, (t, r) => {
                                        let i = new re([t]);
                                        if (rD(r)) {
                                            let t = e(r.mapValue).fields;
                                            if (0 === t.length)
                                                n.push(i);
                                            else
                                                for (let e of t)
                                                    n.push(i.child(e))
                                        } else
                                            n.push(i)
                                    }
                                    ),
                                    new r4(n)
                                }(t.value.mapValue),ik.exists(!0)))
                            }
                            return e.mutationQueue.addMutationBatch(a, i, s, t)
                        }
                        ).next(t => {
                            r = t;
                            let i = t.applyToLocalDocumentSet(n, l);
                            return e.documentOverlayCache.saveOverlays(a, t.batchId, i)
                        }
                        )
                    }
                    ).then( () => ({
                        batchId: r.batchId,
                        changes: iG(n)
                    }))
                }(r.localStore, t);
                r.sharedClientState.addPendingMutation(a.batchId),
                i = r,
                s = a.batchId,
                (e = i.fc[i.currentUser.toKey()]) || (e = new rZ(n3)),
                e = e.insert(s, n),
                i.fc[i.currentUser.toKey()] = e,
                await a4(r, a.changes),
                await af(r.remoteStore)
            } catch (t) {
                let e = aS(t, "Failed to persist write");
                n.reject(e)
            }
        }
        async function aG(e, t) {
            try {
                let n = await function(e, t) {
                    let n = e
                      , r = t.snapshotVersion
                      , i = n.Ki;
                    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", e => {
                        var s;
                        let a, o;
                        let l = n.ji.newChangeBuffer({
                            trackRemovals: !0
                        });
                        i = n.Ki;
                        let u = [];
                        t.targetChanges.forEach( (s, a) => {
                            var o;
                            let l = i.get(a);
                            if (!l)
                                return;
                            u.push(n.Ns.removeMatchingKeys(e, s.removedDocuments, a).next( () => n.Ns.addMatchingKeys(e, s.addedDocuments, a)));
                            let c = l.withSequenceNumber(e.currentSequenceNumber);
                            t.targetMismatches.has(a) ? c = c.withResumeToken(rg.EMPTY_BYTE_STRING, n5.min()).withLastLimboFreeSnapshotVersion(n5.min()) : s.resumeToken.approximateByteSize() > 0 && (c = c.withResumeToken(s.resumeToken, r)),
                            i = i.insert(a, c),
                            o = c,
                            (0 === l.resumeToken.approximateByteSize() || o.snapshotVersion.toMicroseconds() - l.snapshotVersion.toMicroseconds() >= 3e8 || s.addedDocuments.size + s.modifiedDocuments.size + s.removedDocuments.size > 0) && u.push(n.Ns.updateTargetData(e, c))
                        }
                        );
                        let c = iH
                          , h = iJ();
                        if (t.documentUpdates.forEach(r => {
                            t.resolvedLimboDocuments.has(r) && u.push(n.persistence.referenceDelegate.updateLimboDocument(e, r))
                        }
                        ),
                        u.push((s = t.documentUpdates,
                        a = iJ(),
                        o = iJ(),
                        s.forEach(e => a = a.add(e)),
                        l.getEntries(e, a).next(e => {
                            let t = iH;
                            return s.forEach( (n, r) => {
                                let i = e.get(n);
                                r.isFoundDocument() !== i.isFoundDocument() && (o = o.add(n)),
                                r.isNoDocument() && r.version.isEqual(n5.min()) ? (l.removeEntry(n, r.readTime),
                                t = t.insert(n, r)) : !i.isValidDocument() || r.version.compareTo(i.version) > 0 || 0 === r.version.compareTo(i.version) && i.hasPendingWrites ? (l.addEntry(r),
                                t = t.insert(n, r)) : nF("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", i.version, " Watch version:", r.version)
                            }
                            ),
                            {
                                Hi: t,
                                Ji: o
                            }
                        }
                        )).next(e => {
                            c = e.Hi,
                            h = e.Ji
                        }
                        )),
                        !r.isEqual(n5.min())) {
                            let t = n.Ns.getLastRemoteSnapshotVersion(e).next(t => n.Ns.setTargetsMetadata(e, e.currentSequenceNumber, r));
                            u.push(t)
                        }
                        return rs.waitFor(u).next( () => l.apply(e)).next( () => n.localDocuments.getLocalViewOfDocuments(e, c, h)).next( () => c)
                    }
                    ).then(e => (n.Ki = i,
                    e))
                }(e.localStore, t);
                t.targetChanges.forEach( (t, n) => {
                    let r = e.hc.get(n);
                    r && (t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1 || nH(),
                    t.addedDocuments.size > 0 ? r.ic = !0 : t.modifiedDocuments.size > 0 ? r.ic || nH() : t.removedDocuments.size > 0 && (r.ic || nH(),
                    r.ic = !1))
                }
                ),
                await a4(e, n, t)
            } catch (e) {
                await ri(e)
            }
        }
        function aW(e, t, n) {
            let r = e;
            if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
                let e = [];
                r.oc.forEach( (n, r) => {
                    let i = r.view.Pu(t);
                    i.snapshot && e.push(i.snapshot)
                }
                ),
                function(e, t) {
                    let n = e;
                    n.onlineState = t;
                    let r = !1;
                    n.queries.forEach( (e, n) => {
                        for (let e of n.listeners)
                            e.Pu(t) && (r = !0)
                    }
                    ),
                    r && aP(n)
                }(r.eventManager, t),
                e.length && r.rc.Ho(e),
                r.onlineState = t,
                r.isPrimaryClient && r.sharedClientState.setOnlineState(t)
            }
        }
        async function aQ(e, t, n) {
            let r = e;
            r.sharedClientState.updateQueryState(t, "rejected", n);
            let i = r.hc.get(t)
              , s = i && i.key;
            if (s) {
                let e = new rZ(rt.comparator);
                e = e.insert(s, r5.newNoDocument(s, n5.min()));
                let n = iJ().add(s)
                  , i = new iZ(n5.min(),new Map,new r2(n3),e,n);
                await aG(r, i),
                r.ac = r.ac.remove(s),
                r.hc.delete(t),
                a3(r)
            } else
                await sK(r.localStore, t, !1).then( () => a0(r, t, n)).catch(ri)
        }
        async function aX(e, t) {
            var n;
            let r = t.batch.batchId;
            try {
                let i = await (n = e.localStore).persistence.runTransaction("Acknowledge batch", "readwrite-primary", e => {
                    let r = t.batch.keys()
                      , i = n.ji.newChangeBuffer({
                        trackRemovals: !0
                    });
                    return (function(e, t, n, r) {
                        let i = n.batch
                          , s = i.keys()
                          , a = rs.resolve();
                        return s.forEach(e => {
                            a = a.next( () => r.getEntry(t, e)).next(t => {
                                let s = n.docVersions.get(e);
                                null !== s || nH(),
                                0 > t.version.compareTo(s) && (i.applyToRemoteDocument(t, n),
                                t.isValidDocument() && (t.setReadTime(n.commitVersion),
                                r.addEntry(t)))
                            }
                            )
                        }
                        ),
                        a.next( () => e.mutationQueue.removeMutationBatch(t, i))
                    }
                    )(n, e, t, i).next( () => i.apply(e)).next( () => n.mutationQueue.performConsistencyCheck(e)).next( () => n.documentOverlayCache.removeOverlaysForBatchId(e, r, t.batch.batchId)).next( () => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, function(e) {
                        let t = iJ();
                        for (let n = 0; n < e.mutationResults.length; ++n)
                            e.mutationResults[n].transformResults.length > 0 && (t = t.add(e.batch.mutations[n].key));
                        return t
                    }(t))).next( () => n.localDocuments.getDocuments(e, r))
                }
                );
                aZ(e, r, null),
                aY(e, r),
                e.sharedClientState.updateMutationState(r, "acknowledged"),
                await a4(e, i)
            } catch (e) {
                await ri(e)
            }
        }
        async function aJ(e, t, n) {
            var r;
            try {
                let i = await (r = e.localStore).persistence.runTransaction("Reject batch", "readwrite-primary", e => {
                    let n;
                    return r.mutationQueue.lookupMutationBatch(e, t).next(t => (null !== t || nH(),
                    n = t.keys(),
                    r.mutationQueue.removeMutationBatch(e, t))).next( () => r.mutationQueue.performConsistencyCheck(e)).next( () => r.documentOverlayCache.removeOverlaysForBatchId(e, n, t)).next( () => r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e, n)).next( () => r.localDocuments.getDocuments(e, n))
                }
                );
                aZ(e, t, n),
                aY(e, t),
                e.sharedClientState.updateMutationState(t, "rejected", n),
                await a4(e, i)
            } catch (e) {
                await ri(e)
            }
        }
        function aY(e, t) {
            (e.dc.get(t) || []).forEach(e => {
                e.resolve()
            }
            ),
            e.dc.delete(t)
        }
        function aZ(e, t, n) {
            let r = e
              , i = r.fc[r.currentUser.toKey()];
            if (i) {
                let e = i.get(t);
                e && (n ? e.reject(n) : e.resolve(),
                i = i.remove(t)),
                r.fc[r.currentUser.toKey()] = i
            }
        }
        function a0(e, t, n=null) {
            for (let r of (e.sharedClientState.removeLocalQueryTarget(t),
            e.uc.get(t)))
                e.oc.delete(r),
                n && e.rc.gc(r, n);
            e.uc.delete(t),
            e.isPrimaryClient && e.lc.ds(t).forEach(t => {
                e.lc.containsKey(t) || a1(e, t)
            }
            )
        }
        function a1(e, t) {
            e.cc.delete(t.path.canonicalString());
            let n = e.ac.get(t);
            null !== n && (an(e.remoteStore, n),
            e.ac = e.ac.remove(t),
            e.hc.delete(n),
            a3(e))
        }
        function a2(e, t, n) {
            for (let r of n)
                r instanceof aj ? (e.lc.addReference(r.key, t),
                function(e, t) {
                    let n = t.key
                      , r = n.path.canonicalString();
                    e.ac.get(n) || e.cc.has(r) || (nF("SyncEngine", "New document in limbo: " + n),
                    e.cc.add(r),
                    a3(e))
                }(e, r)) : r instanceof aU ? (nF("SyncEngine", "Document no longer in limbo: " + r.key),
                e.lc.removeReference(r.key, t),
                e.lc.containsKey(r.key) || a1(e, r.key)) : nH()
        }
        function a3(e) {
            for (; e.cc.size > 0 && e.ac.size < e.maxConcurrentLimboResolutions; ) {
                let t = e.cc.values().next().value;
                e.cc.delete(t);
                let n = new rt(n7.fromString(t))
                  , r = e._c.next();
                e.hc.set(r, new az(n)),
                e.ac = e.ac.insert(n, r),
                at(e.remoteStore, new sw(io(ii(n.path)),r,2,ro.at))
            }
        }
        async function a4(e, t, n) {
            let r = []
              , i = []
              , s = [];
            e.oc.isEmpty() || (e.oc.forEach( (a, o) => {
                s.push(e.mc(o, t, n).then(t => {
                    if ((t || n) && e.isPrimaryClient && e.sharedClientState.updateQueryState(o.targetId, (null == t ? void 0 : t.fromCache) ? "not-current" : "current"),
                    t) {
                        r.push(t);
                        let e = sF.Ni(o.targetId, t);
                        i.push(e)
                    }
                }
                ))
            }
            ),
            await Promise.all(s),
            e.rc.Ho(r),
            await async function(e, t) {
                let n = e;
                try {
                    await n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", e => rs.forEach(t, t => rs.forEach(t.Ci, r => n.persistence.referenceDelegate.addReference(e, t.targetId, r)).next( () => rs.forEach(t.xi, r => n.persistence.referenceDelegate.removeReference(e, t.targetId, r)))))
                } catch (e) {
                    if (!ra(e))
                        throw e;
                    nF("LocalStore", "Failed to update sequence numbers: " + e)
                }
                for (let e of t) {
                    let t = e.targetId;
                    if (!e.fromCache) {
                        let e = n.Ki.get(t)
                          , r = e.snapshotVersion
                          , i = e.withLastLimboFreeSnapshotVersion(r);
                        n.Ki = n.Ki.insert(t, i)
                    }
                }
            }(e.localStore, i))
        }
        async function a6(e, t) {
            let n = e;
            if (!n.currentUser.isEqual(t)) {
                nF("SyncEngine", "User change. New user:", t.toKey());
                let e = await sq(n.localStore, t);
                n.currentUser = t,
                n.dc.forEach(e => {
                    e.forEach(e => {
                        e.reject(new n$(nK.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))
                    }
                    )
                }
                ),
                n.dc.clear(),
                n.sharedClientState.handleUserChange(t, e.removedBatchIds, e.addedBatchIds),
                await a4(n, e.Wi)
            }
        }
        function a5(e, t) {
            let n = e.hc.get(t);
            if (n && n.ic)
                return iJ().add(n.key);
            {
                let n = iJ()
                  , r = e.uc.get(t);
                if (!r)
                    return n;
                for (let t of r) {
                    let r = e.oc.get(t);
                    n = n.unionWith(r.view.Wu)
                }
                return n
            }
        }
        class a8 {
            constructor() {
                this.synchronizeTabs = !1
            }
            async initialize(e) {
                this.Tt = s1(e.databaseInfo.databaseId),
                this.sharedClientState = this.Ic(e),
                this.persistence = this.Tc(e),
                await this.persistence.start(),
                this.localStore = this.Ec(e),
                this.gcScheduler = this.Ac(e, this.localStore),
                this.indexBackfillerScheduler = this.Rc(e, this.localStore)
            }
            Ac(e, t) {
                return null
            }
            Rc(e, t) {
                return null
            }
            Ec(e) {
                var t, n, r, i;
                return t = this.persistence,
                n = new sz,
                r = e.initialUser,
                i = this.Tt,
                new sB(t,n,r,i)
            }
            Tc(e) {
                return new sj(sV.qs,this.Tt)
            }
            Ic(e) {
                return new sW
            }
            async terminate() {
                this.gcScheduler && this.gcScheduler.stop(),
                await this.sharedClientState.shutdown(),
                await this.persistence.shutdown()
            }
        }
        class a7 {
            async initialize(e, t) {
                this.localStore || (this.localStore = e.localStore,
                this.sharedClientState = e.sharedClientState,
                this.datastore = this.createDatastore(t),
                this.remoteStore = this.createRemoteStore(t),
                this.eventManager = this.createEventManager(t),
                this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs),
                this.sharedClientState.onlineStateHandler = e => aW(this.syncEngine, e, 1),
                this.remoteStore.remoteSyncer.handleCredentialChange = a6.bind(null, this.syncEngine),
                await a_(this.remoteStore, this.syncEngine.isPrimaryClient))
            }
            createEventManager(e) {
                return new aO
            }
            createDatastore(e) {
                var t, n, r;
                let i = s1(e.databaseInfo.databaseId)
                  , s = (t = e.databaseInfo,
                new sZ(t));
                return n = e.authCredentials,
                r = e.appCheckCredentials,
                new s5(n,r,s,i)
            }
            createRemoteStore(e) {
                var t, n, r, i, s;
                return t = this.localStore,
                n = this.datastore,
                r = e.asyncQueue,
                i = e => aW(this.syncEngine, e, 0),
                s = sX.C() ? new sX : new sQ,
                new s7(t,n,r,i,s)
            }
            createSyncEngine(e, t) {
                return function(e, t, n, r, i, s, a) {
                    let o = new aB(e,t,n,r,i,s);
                    return a && (o.wc = !0),
                    o
                }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t)
            }
            terminate() {
                return async function(e) {
                    nF("RemoteStore", "RemoteStore shutting down."),
                    e.mu.add(5),
                    await ae(e),
                    e.yu.shutdown(),
                    e.pu.set("Unknown")
                }(this.remoteStore)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class a9 {
            constructor(e) {
                this.observer = e,
                this.muted = !1
            }
            next(e) {
                this.observer.next && this.vc(this.observer.next, e)
            }
            error(e) {
                this.observer.error ? this.vc(this.observer.error, e) : nz("Uncaught Error in snapshot listener:", e.toString())
            }
            Pc() {
                this.muted = !0
            }
            vc(e, t) {
                this.muted || setTimeout( () => {
                    this.muted || e(t)
                }
                , 0)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oe {
            constructor(e, t, n, r) {
                this.authCredentials = e,
                this.appCheckCredentials = t,
                this.asyncQueue = n,
                this.databaseInfo = r,
                this.user = nM.UNAUTHENTICATED,
                this.clientId = n2.R(),
                this.authCredentialListener = () => Promise.resolve(),
                this.appCheckCredentialListener = () => Promise.resolve(),
                this.authCredentials.start(n, async e => {
                    nF("FirestoreClient", "Received user=", e.uid),
                    await this.authCredentialListener(e),
                    this.user = e
                }
                ),
                this.appCheckCredentials.start(n, e => (nF("FirestoreClient", "Received new app check token=", e),
                this.appCheckCredentialListener(e, this.user)))
            }
            async getConfiguration() {
                return {
                    asyncQueue: this.asyncQueue,
                    databaseInfo: this.databaseInfo,
                    clientId: this.clientId,
                    authCredentials: this.authCredentials,
                    appCheckCredentials: this.appCheckCredentials,
                    initialUser: this.user,
                    maxConcurrentLimboResolutions: 100
                }
            }
            setCredentialChangeListener(e) {
                this.authCredentialListener = e
            }
            setAppCheckTokenChangeListener(e) {
                this.appCheckCredentialListener = e
            }
            verifyNotTerminated() {
                if (this.asyncQueue.isShuttingDown)
                    throw new n$(nK.FAILED_PRECONDITION,"The client has already been terminated.")
            }
            terminate() {
                this.asyncQueue.enterRestrictedMode();
                let e = new nG;
                return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
                    try {
                        this.onlineComponents && await this.onlineComponents.terminate(),
                        this.offlineComponents && await this.offlineComponents.terminate(),
                        this.authCredentials.shutdown(),
                        this.appCheckCredentials.shutdown(),
                        e.resolve()
                    } catch (n) {
                        let t = aS(n, "Failed to shutdown persistence");
                        e.reject(t)
                    }
                }
                ),
                e.promise
            }
        }
        async function ot(e, t) {
            e.asyncQueue.verifyOperationInProgress(),
            nF("FirestoreClient", "Initializing OfflineComponentProvider");
            let n = await e.getConfiguration();
            await t.initialize(n);
            let r = n.initialUser;
            e.setCredentialChangeListener(async e => {
                r.isEqual(e) || (await sq(t.localStore, e),
                r = e)
            }
            ),
            t.persistence.setDatabaseDeletedListener( () => e.terminate()),
            e.offlineComponents = t
        }
        async function on(e, t) {
            e.asyncQueue.verifyOperationInProgress();
            let n = await or(e);
            nF("FirestoreClient", "Initializing OnlineComponentProvider");
            let r = await e.getConfiguration();
            await t.initialize(n, r),
            e.setCredentialChangeListener(e => ab(t.remoteStore, e)),
            e.setAppCheckTokenChangeListener( (e, n) => ab(t.remoteStore, n)),
            e.onlineComponents = t
        }
        async function or(e) {
            return e.offlineComponents || (nF("FirestoreClient", "Using default OfflineComponentProvider"),
            await ot(e, new a8)),
            e.offlineComponents
        }
        async function oi(e) {
            return e.onlineComponents || (nF("FirestoreClient", "Using default OnlineComponentProvider"),
            await on(e, new a7)),
            e.onlineComponents
        }
        async function os(e) {
            let t = await oi(e)
              , n = t.eventManager;
            return n.onListen = aq.bind(null, t.syncEngine),
            n.onUnlisten = aK.bind(null, t.syncEngine),
            n
        }
        let oa = new Map;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function oo(e, t, n) {
            if (!n)
                throw new n$(nK.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)
        }
        function ol(e) {
            if (!rt.isDocumentKey(e))
                throw new n$(nK.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)
        }
        function ou(e) {
            if (rt.isDocumentKey(e))
                throw new n$(nK.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)
        }
        function oc(e) {
            if (void 0 === e)
                return "undefined";
            if (null === e)
                return "null";
            if ("string" == typeof e)
                return e.length > 20 && (e = `${e.substring(0, 20)}...`),
                JSON.stringify(e);
            if ("number" == typeof e || "boolean" == typeof e)
                return "" + e;
            if ("object" == typeof e) {
                if (e instanceof Array)
                    return "an array";
                {
                    var t;
                    let n = (t = e).constructor ? t.constructor.name : null;
                    return n ? `a custom ${n} object` : "an object"
                }
            }
            return "function" == typeof e ? "a function" : nH()
        }
        function oh(e, t) {
            if ("_delegate"in e && (e = e._delegate),
            !(e instanceof t)) {
                if (t.name === e.constructor.name)
                    throw new n$(nK.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                {
                    let n = oc(e);
                    throw new n$(nK.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)
                }
            }
            return e
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class od {
            constructor(e) {
                var t;
                if (void 0 === e.host) {
                    if (void 0 !== e.ssl)
                        throw new n$(nK.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com",
                    this.ssl = !0
                } else
                    this.host = e.host,
                    this.ssl = null === (t = e.ssl) || void 0 === t || t;
                if (this.credentials = e.credentials,
                this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties,
                void 0 === e.cacheSizeBytes)
                    this.cacheSizeBytes = 41943040;
                else {
                    if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
                        throw new n$(nK.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");
                    this.cacheSizeBytes = e.cacheSizeBytes
                }
                this.experimentalForceLongPolling = !!e.experimentalForceLongPolling,
                this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling,
                this.useFetchStreams = !!e.useFetchStreams,
                function(e, t, n, r) {
                    if (!0 === t && !0 === r)
                        throw new n$(nK.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)
                }("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling)
            }
            isEqual(e) {
                return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class of {
            constructor(e, t, n, r) {
                this._authCredentials = e,
                this._appCheckCredentials = t,
                this._databaseId = n,
                this._app = r,
                this.type = "firestore-lite",
                this._persistenceKey = "(lite)",
                this._settings = new od({}),
                this._settingsFrozen = !1
            }
            get app() {
                if (!this._app)
                    throw new n$(nK.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");
                return this._app
            }
            get _initialized() {
                return this._settingsFrozen
            }
            get _terminated() {
                return void 0 !== this._terminateTask
            }
            _setSettings(e) {
                if (this._settingsFrozen)
                    throw new n$(nK.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                this._settings = new od(e),
                void 0 !== e.credentials && (this._authCredentials = function(e) {
                    if (!e)
                        return new nQ;
                    switch (e.type) {
                    case "gapi":
                        let t = e.client;
                        return new nZ(t,e.sessionIndex || "0",e.iamToken || null,e.authTokenFactory || null);
                    case "provider":
                        return e.client;
                    default:
                        throw new n$(nK.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")
                    }
                }(e.credentials))
            }
            _getSettings() {
                return this._settings
            }
            _freezeSettings() {
                return this._settingsFrozen = !0,
                this._settings
            }
            _delete() {
                return this._terminateTask || (this._terminateTask = this._terminate()),
                this._terminateTask
            }
            toJSON() {
                return {
                    app: this._app,
                    databaseId: this._databaseId,
                    settings: this._settings
                }
            }
            _terminate() {
                return function(e) {
                    let t = oa.get(e);
                    t && (nF("ComponentProvider", "Removing Datastore"),
                    oa.delete(e),
                    t.terminate())
                }(this),
                Promise.resolve()
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class op {
            constructor(e, t, n) {
                this.converter = t,
                this._key = n,
                this.type = "document",
                this.firestore = e
            }
            get _path() {
                return this._key.path
            }
            get id() {
                return this._key.path.lastSegment()
            }
            get path() {
                return this._key.path.canonicalString()
            }
            get parent() {
                return new om(this.firestore,this.converter,this._key.path.popLast())
            }
            withConverter(e) {
                return new op(this.firestore,e,this._key)
            }
        }
        class og {
            constructor(e, t, n) {
                this.converter = t,
                this._query = n,
                this.type = "query",
                this.firestore = e
            }
            withConverter(e) {
                return new og(this.firestore,e,this._query)
            }
        }
        class om extends og {
            constructor(e, t, n) {
                super(e, t, ii(n)),
                this._path = n,
                this.type = "collection"
            }
            get id() {
                return this._query.path.lastSegment()
            }
            get path() {
                return this._query.path.canonicalString()
            }
            get parent() {
                let e = this._path.popLast();
                return e.isEmpty() ? null : new op(this.firestore,null,new rt(e))
            }
            withConverter(e) {
                return new om(this.firestore,e,this._path)
            }
        }
        function oy(e, t, ...n) {
            if (e = (0,
            p.m9)(e),
            oo("collection", "path", t),
            e instanceof of) {
                let r = n7.fromString(t, ...n);
                return ou(r),
                new om(e,null,r)
            }
            {
                if (!(e instanceof op || e instanceof om))
                    throw new n$(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                let r = e._path.child(n7.fromString(t, ...n));
                return ou(r),
                new om(e.firestore,null,r)
            }
        }
        function ov(e, t, ...n) {
            if (e = (0,
            p.m9)(e),
            1 == arguments.length && (t = n2.R()),
            oo("doc", "path", t),
            e instanceof of) {
                let r = n7.fromString(t, ...n);
                return ol(r),
                new op(e,null,new rt(r))
            }
            {
                if (!(e instanceof op || e instanceof om))
                    throw new n$(nK.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                let r = e._path.child(n7.fromString(t, ...n));
                return ol(r),
                new op(e.firestore,e instanceof om ? e.converter : null,new rt(r))
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ow {
            constructor() {
                this.qc = Promise.resolve(),
                this.Uc = [],
                this.Kc = !1,
                this.Gc = [],
                this.Qc = null,
                this.jc = !1,
                this.zc = !1,
                this.Wc = [],
                this.ko = new s2(this,"async_queue_retry"),
                this.Hc = () => {
                    let e = s0();
                    e && nF("AsyncQueue", "Visibility state changed to " + e.visibilityState),
                    this.ko.Vo()
                }
                ;
                let e = s0();
                e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Hc)
            }
            get isShuttingDown() {
                return this.Kc
            }
            enqueueAndForget(e) {
                this.enqueue(e)
            }
            enqueueAndForgetEvenWhileRestricted(e) {
                this.Jc(),
                this.Yc(e)
            }
            enterRestrictedMode(e) {
                if (!this.Kc) {
                    this.Kc = !0,
                    this.zc = e || !1;
                    let t = s0();
                    t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Hc)
                }
            }
            enqueue(e) {
                if (this.Jc(),
                this.Kc)
                    return new Promise( () => {}
                    );
                let t = new nG;
                return this.Yc( () => this.Kc && this.zc ? Promise.resolve() : (e().then(t.resolve, t.reject),
                t.promise)).then( () => t.promise)
            }
            enqueueRetryable(e) {
                this.enqueueAndForget( () => (this.Uc.push(e),
                this.Zc()))
            }
            async Zc() {
                if (0 !== this.Uc.length) {
                    try {
                        await this.Uc[0](),
                        this.Uc.shift(),
                        this.ko.reset()
                    } catch (e) {
                        if (!ra(e))
                            throw e;
                        nF("AsyncQueue", "Operation failed with retryable error: " + e)
                    }
                    this.Uc.length > 0 && this.ko.vo( () => this.Zc())
                }
            }
            Yc(e) {
                let t = this.qc.then( () => (this.jc = !0,
                e().catch(e => {
                    let t;
                    this.Qc = e,
                    this.jc = !1;
                    let n = (t = e.message || "",
                    e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack),
                    t);
                    throw nz("INTERNAL UNHANDLED ERROR: ", n),
                    e
                }
                ).then(e => (this.jc = !1,
                e))));
                return this.qc = t,
                t
            }
            enqueueAfterDelay(e, t, n) {
                this.Jc(),
                this.Wc.indexOf(e) > -1 && (t = 0);
                let r = aT.createAndSchedule(this, e, t, n, e => this.Xc(e));
                return this.Gc.push(r),
                r
            }
            Jc() {
                this.Qc && nH()
            }
            verifyOperationInProgress() {}
            async ta() {
                let e;
                do
                    await (e = this.qc);
                while (e !== this.qc)
            }
            ea(e) {
                for (let t of this.Gc)
                    if (t.timerId === e)
                        return !0;
                return !1
            }
            na(e) {
                return this.ta().then( () => {
                    for (let t of (this.Gc.sort( (e, t) => e.targetTimeMs - t.targetTimeMs),
                    this.Gc))
                        if (t.skipDelay(),
                        "all" !== e && t.timerId === e)
                            break;
                    return this.ta()
                }
                )
            }
            sa(e) {
                this.Wc.push(e)
            }
            Xc(e) {
                let t = this.Gc.indexOf(e);
                this.Gc.splice(t, 1)
            }
        }
        function ob(e) {
            return function(e, t) {
                if ("object" != typeof e || null === e)
                    return !1;
                for (let n of t)
                    if (n in e && "function" == typeof e[n])
                        return !0;
                return !1
            }(e, ["next", "error", "complete"])
        }
        class o_ extends of {
            constructor(e, t, n, r) {
                super(e, t, n, r),
                this.type = "firestore",
                this._queue = new ow,
                this._persistenceKey = (null == r ? void 0 : r.name) || "[DEFAULT]"
            }
            _terminate() {
                return this._firestoreClient || oT(this),
                this._firestoreClient.terminate()
            }
        }
        function oE(e, t) {
            let n = "object" == typeof e ? e : (0,
            h.Mq)()
              , r = (0,
            h.qX)(n, "firestore").getImmediate({
                identifier: "string" == typeof e ? e : t || "(default)"
            });
            if (!r._initialized) {
                let e = (0,
                p.P0)("firestore");
                e && function(e, t, n, r={}) {
                    var i;
                    let s = (e = oh(e, of))._getSettings();
                    if ("firestore.googleapis.com" !== s.host && s.host !== t && nB("Host has been set in both settings() and useEmulator(), emulator host will be used"),
                    e._setSettings(Object.assign(Object.assign({}, s), {
                        host: `${t}:${n}`,
                        ssl: !1
                    })),
                    r.mockUserToken) {
                        let t, n;
                        if ("string" == typeof r.mockUserToken)
                            t = r.mockUserToken,
                            n = nM.MOCK_USER;
                        else {
                            t = (0,
                            p.Sg)(r.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
                            let s = r.mockUserToken.sub || r.mockUserToken.user_id;
                            if (!s)
                                throw new n$(nK.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");
                            n = new nM(s)
                        }
                        e._authCredentials = new nX(new nW(t,n))
                    }
                }(r, ...e)
            }
            return r
        }
        function oI(e) {
            return e._firestoreClient || oT(e),
            e._firestoreClient.verifyNotTerminated(),
            e._firestoreClient
        }
        function oT(e) {
            var t, n, r, i;
            let s = e._freezeSettings()
              , a = (n = e._databaseId,
            r = (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "",
            i = e._persistenceKey,
            new rl(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams));
            e._firestoreClient = new oe(e._authCredentials,e._appCheckCredentials,e._queue,a)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oS {
            constructor(e) {
                this._byteString = e
            }
            static fromBase64String(e) {
                try {
                    return new oS(rg.fromBase64String(e))
                } catch (e) {
                    throw new n$(nK.INVALID_ARGUMENT,"Failed to construct data from Base64 string: " + e)
                }
            }
            static fromUint8Array(e) {
                return new oS(rg.fromUint8Array(e))
            }
            toBase64() {
                return this._byteString.toBase64()
            }
            toUint8Array() {
                return this._byteString.toUint8Array()
            }
            toString() {
                return "Bytes(base64: " + this.toBase64() + ")"
            }
            isEqual(e) {
                return this._byteString.isEqual(e._byteString)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oC {
            constructor(...e) {
                for (let t = 0; t < e.length; ++t)
                    if (0 === e[t].length)
                        throw new n$(nK.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");
                this._internalPath = new re(e)
            }
            isEqual(e) {
                return this._internalPath.isEqual(e._internalPath)
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oA {
            constructor(e) {
                this._methodName = e
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class ok {
            constructor(e, t) {
                if (!isFinite(e) || e < -90 || e > 90)
                    throw new n$(nK.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: " + e);
                if (!isFinite(t) || t < -180 || t > 180)
                    throw new n$(nK.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: " + t);
                this._lat = e,
                this._long = t
            }
            get latitude() {
                return this._lat
            }
            get longitude() {
                return this._long
            }
            isEqual(e) {
                return this._lat === e._lat && this._long === e._long
            }
            toJSON() {
                return {
                    latitude: this._lat,
                    longitude: this._long
                }
            }
            _compareTo(e) {
                return n3(this._lat, e._lat) || n3(this._long, e._long)
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        let oN = /^__.*__$/;
        class oO {
            constructor(e, t, n) {
                this.data = e,
                this.fieldMask = t,
                this.fieldTransforms = n
            }
            toMutation(e, t) {
                return null !== this.fieldMask ? new iP(e,this.data,this.fieldMask,t,this.fieldTransforms) : new iL(e,this.data,t,this.fieldTransforms)
            }
        }
        function ox(e) {
            switch (e) {
            case 0:
            case 2:
            case 1:
                return !0;
            case 3:
            case 4:
                return !1;
            default:
                throw nH()
            }
        }
        class oR {
            constructor(e, t, n, r, i, s) {
                this.settings = e,
                this.databaseId = t,
                this.Tt = n,
                this.ignoreUndefinedProperties = r,
                void 0 === i && this.ia(),
                this.fieldTransforms = i || [],
                this.fieldMask = s || []
            }
            get path() {
                return this.settings.path
            }
            get ra() {
                return this.settings.ra
            }
            oa(e) {
                return new oR(Object.assign(Object.assign({}, this.settings), e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)
            }
            ua(e) {
                var t;
                let n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e)
                  , r = this.oa({
                    path: n,
                    ca: !1
                });
                return r.aa(e),
                r
            }
            ha(e) {
                var t;
                let n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e)
                  , r = this.oa({
                    path: n,
                    ca: !1
                });
                return r.ia(),
                r
            }
            la(e) {
                return this.oa({
                    path: void 0,
                    ca: !0
                })
            }
            fa(e) {
                return oF(e, this.settings.methodName, this.settings.da || !1, this.path, this.settings._a)
            }
            contains(e) {
                return void 0 !== this.fieldMask.find(t => e.isPrefixOf(t)) || void 0 !== this.fieldTransforms.find(t => e.isPrefixOf(t.field))
            }
            ia() {
                if (this.path)
                    for (let e = 0; e < this.path.length; e++)
                        this.aa(this.path.get(e))
            }
            aa(e) {
                if (0 === e.length)
                    throw this.fa("Document fields must not be empty");
                if (ox(this.ra) && oN.test(e))
                    throw this.fa('Document fields cannot begin and end with "__"')
            }
        }
        class oD {
            constructor(e, t, n) {
                this.databaseId = e,
                this.ignoreUndefinedProperties = t,
                this.Tt = n || s1(e)
            }
            wa(e, t, n, r=!1) {
                return new oR({
                    ra: e,
                    methodName: t,
                    _a: n,
                    path: re.emptyPath(),
                    ca: !1,
                    da: r
                },this.databaseId,this.Tt,this.ignoreUndefinedProperties)
            }
        }
        function oL(e) {
            let t = e._freezeSettings()
              , n = s1(e._databaseId);
            return new oD(e._databaseId,!!t.ignoreUndefinedProperties,n)
        }
        function oP(e, t, n, r, i, s={}) {
            let a, o;
            let l = e.wa(s.merge || s.mergeFields ? 2 : 0, t, n, i);
            oj("Data must be an object, but it was:", l, r);
            let u = function e(t, n) {
                let r = {};
                return rd(t) ? n.path && n.path.length > 0 && n.fieldMask.push(n.path) : rh(t, (t, i) => {
                    let s = function t(n, r) {
                        if (oM(n = (0,
                        p.m9)(n)))
                            return oj("Unsupported field value:", r, n),
                            e(n, r);
                        if (n instanceof oA)
                            return function(e, t) {
                                if (!ox(t.ra))
                                    throw t.fa(`${e._methodName}() can only be used with update() and set()`);
                                if (!t.path)
                                    throw t.fa(`${e._methodName}() is not currently supported inside arrays`);
                                let n = e._toFieldTransform(t);
                                n && t.fieldTransforms.push(n)
                            }(n, r),
                            null;
                        if (void 0 === n && r.ignoreUndefinedProperties)
                            return null;
                        if (r.path && r.fieldMask.push(r.path),
                        n instanceof Array) {
                            if (r.settings.ca && 4 !== r.ra)
                                throw r.fa("Nested arrays are not supported");
                            return function(e, n) {
                                let r = []
                                  , i = 0;
                                for (let s of e) {
                                    let e = t(s, n.la(i));
                                    null == e && (e = {
                                        nullValue: "NULL_VALUE"
                                    }),
                                    r.push(e),
                                    i++
                                }
                                return {
                                    arrayValue: {
                                        values: r
                                    }
                                }
                            }(n, r)
                        }
                        return function(e, t) {
                            if (null === (e = (0,
                            p.m9)(e)))
                                return {
                                    nullValue: "NULL_VALUE"
                                };
                            if ("number" == typeof e) {
                                var n, r, i;
                                return n = t.Tt,
                                "number" == typeof (i = r = e) && Number.isInteger(i) && !rf(i) && i <= Number.MAX_SAFE_INTEGER && i >= Number.MIN_SAFE_INTEGER ? im(r) : ig(n, r)
                            }
                            if ("boolean" == typeof e)
                                return {
                                    booleanValue: e
                                };
                            if ("string" == typeof e)
                                return {
                                    stringValue: e
                                };
                            if (e instanceof Date) {
                                let n = n6.fromDate(e);
                                return {
                                    timestampValue: sn(t.Tt, n)
                                }
                            }
                            if (e instanceof n6) {
                                let n = new n6(e.seconds,1e3 * Math.floor(e.nanoseconds / 1e3));
                                return {
                                    timestampValue: sn(t.Tt, n)
                                }
                            }
                            if (e instanceof ok)
                                return {
                                    geoPointValue: {
                                        latitude: e.latitude,
                                        longitude: e.longitude
                                    }
                                };
                            if (e instanceof oS)
                                return {
                                    bytesValue: sr(t.Tt, e._byteString)
                                };
                            if (e instanceof op) {
                                let n = t.databaseId
                                  , r = e.firestore._databaseId;
                                if (!r.isEqual(n))
                                    throw t.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
                                return {
                                    referenceValue: ss(e.firestore._databaseId || t.databaseId, e._key.path)
                                }
                            }
                            throw t.fa(`Unsupported field value: ${oc(e)}`)
                        }(n, r)
                    }(i, n.ua(t));
                    null != s && (r[t] = s)
                }
                ),
                {
                    mapValue: {
                        fields: r
                    }
                }
            }(r, l);
            if (s.merge)
                a = new r4(l.fieldMask),
                o = l.fieldTransforms;
            else if (s.mergeFields) {
                let e = [];
                for (let r of s.mergeFields) {
                    let i = function(e, t, n) {
                        if ((t = (0,
                        p.m9)(t))instanceof oC)
                            return t._internalPath;
                        if ("string" == typeof t)
                            return oV(e, t);
                        throw oF("Field path arguments must be of type string or ", e, !1, void 0, n)
                    }(t, r, n);
                    if (!l.contains(i))
                        throw new n$(nK.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);
                    (function(e, t) {
                        return e.some(e => e.isEqual(t))
                    }
                    )(e, i) || e.push(i)
                }
                a = new r4(e),
                o = l.fieldTransforms.filter(e => a.covers(e.field))
            } else
                a = null,
                o = l.fieldTransforms;
            return new oO(new r6(u),a,o)
        }
        function oM(e) {
            return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof n6 || e instanceof ok || e instanceof oS || e instanceof op || e instanceof oA)
        }
        function oj(e, t, n) {
            if (!oM(n) || !("object" == typeof n && null !== n && (Object.getPrototypeOf(n) === Object.prototype || null === Object.getPrototypeOf(n)))) {
                let r = oc(n);
                throw "an object" === r ? t.fa(e + " a custom object") : t.fa(e + " " + r)
            }
        }
        let oU = RegExp("[~\\*/\\[\\]]");
        function oV(e, t, n) {
            if (t.search(oU) >= 0)
                throw oF(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, e, !1, void 0, n);
            try {
                return new oC(...t.split("."))._internalPath
            } catch (r) {
                throw oF(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, e, !1, void 0, n)
            }
        }
        function oF(e, t, n, r, i) {
            let s = r && !r.isEmpty()
              , a = void 0 !== i
              , o = `Function ${t}() called with invalid data`;
            n && (o += " (via `toFirestore()`)"),
            o += ". ";
            let l = "";
            return (s || a) && (l += " (found",
            s && (l += ` in field ${r}`),
            a && (l += ` in document ${i}`),
            l += ")"),
            new n$(nK.INVALID_ARGUMENT,o + e + l)
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oz {
            constructor(e, t, n, r, i) {
                this._firestore = e,
                this._userDataWriter = t,
                this._key = n,
                this._document = r,
                this._converter = i
            }
            get id() {
                return this._key.path.lastSegment()
            }
            get ref() {
                return new op(this._firestore,this._converter,this._key)
            }
            exists() {
                return null !== this._document
            }
            data() {
                if (this._document) {
                    if (this._converter) {
                        let e = new oB(this._firestore,this._userDataWriter,this._key,this._document,null);
                        return this._converter.fromFirestore(e)
                    }
                    return this._userDataWriter.convertValue(this._document.data.value)
                }
            }
            get(e) {
                if (this._document) {
                    let t = this._document.data.field(oq("DocumentSnapshot.get", e));
                    if (null !== t)
                        return this._userDataWriter.convertValue(t)
                }
            }
        }
        class oB extends oz {
            data() {
                return super.data()
            }
        }
        function oq(e, t) {
            return "string" == typeof t ? oV(e, t) : t instanceof oC ? t._internalPath : t._delegate._internalPath
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function oH(e) {
            if ("L" === e.limitType && 0 === e.explicitOrderBy.length)
                throw new n$(nK.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")
        }
        class oK {
            convertValue(e, t="none") {
                switch (rI(e)) {
                case 0:
                    return null;
                case 1:
                    return e.booleanValue;
                case 2:
                    return rv(e.integerValue || e.doubleValue);
                case 3:
                    return this.convertTimestamp(e.timestampValue);
                case 4:
                    return this.convertServerTimestamp(e, t);
                case 5:
                    return e.stringValue;
                case 6:
                    return this.convertBytes(rw(e.bytesValue));
                case 7:
                    return this.convertReference(e.referenceValue);
                case 8:
                    return this.convertGeoPoint(e.geoPointValue);
                case 9:
                    return this.convertArray(e.arrayValue, t);
                case 10:
                    return this.convertObject(e.mapValue, t);
                default:
                    throw nH()
                }
            }
            convertObject(e, t) {
                let n = {};
                return rh(e.fields, (e, r) => {
                    n[e] = this.convertValue(r, t)
                }
                ),
                n
            }
            convertGeoPoint(e) {
                return new ok(rv(e.latitude),rv(e.longitude))
            }
            convertArray(e, t) {
                return (e.values || []).map(e => this.convertValue(e, t))
            }
            convertServerTimestamp(e, t) {
                switch (t) {
                case "previous":
                    let n = function e(t) {
                        let n = t.mapValue.fields.__previous_value__;
                        return rb(n) ? e(n) : n
                    }(e);
                    return null == n ? null : this.convertValue(n, t);
                case "estimate":
                    return this.convertTimestamp(r_(e));
                default:
                    return null
                }
            }
            convertTimestamp(e) {
                let t = ry(e);
                return new n6(t.seconds,t.nanos)
            }
            convertDocumentKey(e, t) {
                let n = n7.fromString(e);
                sg(n) || nH();
                let r = new ru(n.get(1),n.get(3))
                  , i = new rt(n.popFirst(5));
                return r.isEqual(t) || nz(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),
                i
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function o$(e, t, n) {
            return e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        class oG {
            constructor(e, t) {
                this.hasPendingWrites = e,
                this.fromCache = t
            }
            isEqual(e) {
                return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache
            }
        }
        class oW extends oz {
            constructor(e, t, n, r, i, s) {
                super(e, t, n, r, s),
                this._firestore = e,
                this._firestoreImpl = e,
                this.metadata = i
            }
            exists() {
                return super.exists()
            }
            data(e={}) {
                if (this._document) {
                    if (this._converter) {
                        let t = new oQ(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);
                        return this._converter.fromFirestore(t, e)
                    }
                    return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps)
                }
            }
            get(e, t={}) {
                if (this._document) {
                    let n = this._document.data.field(oq("DocumentSnapshot.get", e));
                    if (null !== n)
                        return this._userDataWriter.convertValue(n, t.serverTimestamps)
                }
            }
        }
        class oQ extends oW {
            data(e={}) {
                return super.data(e)
            }
        }
        class oX {
            constructor(e, t, n, r) {
                this._firestore = e,
                this._userDataWriter = t,
                this._snapshot = r,
                this.metadata = new oG(r.hasPendingWrites,r.fromCache),
                this.query = n
            }
            get docs() {
                let e = [];
                return this.forEach(t => e.push(t)),
                e
            }
            get size() {
                return this._snapshot.docs.size
            }
            get empty() {
                return 0 === this.size
            }
            forEach(e, t) {
                this._snapshot.docs.forEach(n => {
                    e.call(t, new oQ(this._firestore,this._userDataWriter,n.key,n,new oG(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))
                }
                )
            }
            docChanges(e={}) {
                let t = !!e.includeMetadataChanges;
                if (t && this._snapshot.excludesMetadataChanges)
                    throw new n$(nK.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t || (this._cachedChanges = function(e, t) {
                    if (e._snapshot.oldDocs.isEmpty()) {
                        let t = 0;
                        return e._snapshot.docChanges.map(n => {
                            let r = new oQ(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oG(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);
                            return n.doc,
                            {
                                type: "added",
                                doc: r,
                                oldIndex: -1,
                                newIndex: t++
                            }
                        }
                        )
                    }
                    {
                        let n = e._snapshot.oldDocs;
                        return e._snapshot.docChanges.filter(e => t || 3 !== e.type).map(t => {
                            let r = new oQ(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oG(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter)
                              , i = -1
                              , s = -1;
                            return 0 !== t.type && (i = n.indexOf(t.doc.key),
                            n = n.delete(t.doc.key)),
                            1 !== t.type && (s = (n = n.add(t.doc)).indexOf(t.doc.key)),
                            {
                                type: function(e) {
                                    switch (e) {
                                    case 0:
                                        return "added";
                                    case 2:
                                    case 3:
                                        return "modified";
                                    case 1:
                                        return "removed";
                                    default:
                                        return nH()
                                    }
                                }(t.type),
                                doc: r,
                                oldIndex: i,
                                newIndex: s
                            }
                        }
                        )
                    }
                }(this, t),
                this._cachedChangesIncludeMetadataChanges = t),
                this._cachedChanges
            }
        }
        /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function oJ(e) {
            e = oh(e, op);
            let t = oh(e.firestore, o_);
            return (function(e, t, n={}) {
                let r = new nG;
                return e.asyncQueue.enqueueAndForget(async () => (function(e, t, n, r, i) {
                    let s = new a9({
                        next: s => {
                            t.enqueueAndForget( () => aR(e, a));
                            let o = s.docs.has(n);
                            !o && s.fromCache ? i.reject(new n$(nK.UNAVAILABLE,"Failed to get document because the client is offline.")) : o && s.fromCache && r && "server" === r.source ? i.reject(new n$(nK.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(s)
                        }
                        ,
                        error: e => i.reject(e)
                    })
                      , a = new aM(ii(n.path),s,{
                        includeMetadataChanges: !0,
                        Ou: !0
                    });
                    return ax(e, a)
                }
                )(await os(e), e.asyncQueue, t, n, r)),
                r.promise
            }
            )(oI(t), e._key).then(n => o6(t, e, n))
        }
        class oY extends oK {
            constructor(e) {
                super(),
                this.firestore = e
            }
            convertBytes(e) {
                return new oS(e)
            }
            convertReference(e) {
                let t = this.convertDocumentKey(e, this.firestore._databaseId);
                return new op(this.firestore,null,t)
            }
        }
        function oZ(e) {
            e = oh(e, og);
            let t = oh(e.firestore, o_)
              , n = oI(t)
              , r = new oY(t);
            return oH(e._query),
            (function(e, t, n={}) {
                let r = new nG;
                return e.asyncQueue.enqueueAndForget(async () => (function(e, t, n, r, i) {
                    let s = new a9({
                        next: n => {
                            t.enqueueAndForget( () => aR(e, a)),
                            n.fromCache && "server" === r.source ? i.reject(new n$(nK.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
                        }
                        ,
                        error: e => i.reject(e)
                    })
                      , a = new aM(n,s,{
                        includeMetadataChanges: !0,
                        Ou: !0
                    });
                    return ax(e, a)
                }
                )(await os(e), e.asyncQueue, t, n, r)),
                r.promise
            }
            )(n, e._query).then(n => new oX(t,r,e,n))
        }
        function o0(e, t, n) {
            e = oh(e, op);
            let r = oh(e.firestore, o_)
              , i = o$(e.converter, t, n);
            return o4(r, [oP(oL(r), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, ik.none())])
        }
        function o1(e) {
            return o4(oh(e.firestore, o_), [new iV(e._key,ik.none())])
        }
        function o2(e, t) {
            let n = oh(e.firestore, o_)
              , r = ov(e)
              , i = o$(e.converter, t);
            return o4(n, [oP(oL(e.firestore), "addDoc", r._key, i, null !== e.converter, {}).toMutation(r._key, ik.exists(!1))]).then( () => r)
        }
        function o3(e, ...t) {
            var n, r, i;
            let s, a, o;
            e = (0,
            p.m9)(e);
            let l = {
                includeMetadataChanges: !1
            }
              , u = 0;
            "object" != typeof t[0] || ob(t[u]) || (l = t[u],
            u++);
            let c = {
                includeMetadataChanges: l.includeMetadataChanges
            };
            if (ob(t[u])) {
                let e = t[u];
                t[u] = null === (n = e.next) || void 0 === n ? void 0 : n.bind(e),
                t[u + 1] = null === (r = e.error) || void 0 === r ? void 0 : r.bind(e),
                t[u + 2] = null === (i = e.complete) || void 0 === i ? void 0 : i.bind(e)
            }
            if (e instanceof op)
                a = oh(e.firestore, o_),
                o = ii(e._key.path),
                s = {
                    next: n => {
                        t[u] && t[u](o6(a, e, n))
                    }
                    ,
                    error: t[u + 1],
                    complete: t[u + 2]
                };
            else {
                let n = oh(e, og);
                a = oh(n.firestore, o_),
                o = n._query;
                let r = new oY(a);
                s = {
                    next: e => {
                        t[u] && t[u](new oX(a,r,n,e))
                    }
                    ,
                    error: t[u + 1],
                    complete: t[u + 2]
                },
                oH(e._query)
            }
            return function(e, t, n, r) {
                let i = new a9(r)
                  , s = new aM(t,i,n);
                return e.asyncQueue.enqueueAndForget(async () => ax(await os(e), s)),
                () => {
                    i.Pc(),
                    e.asyncQueue.enqueueAndForget(async () => aR(await os(e), s))
                }
            }(oI(a), o, c, s)
        }
        function o4(e, t) {
            return function(e, t) {
                let n = new nG;
                return e.asyncQueue.enqueueAndForget(async () => a$(await oi(e).then(e => e.syncEngine), t, n)),
                n.promise
            }(oI(e), t)
        }
        function o6(e, t, n) {
            let r = n.docs.get(t._key)
              , i = new oY(e);
            return new oW(e,i,t._key,r,new oG(n.hasPendingWrites,n.fromCache),t.converter)
        }
        !function(e, t=!0) {
            nj = h.Jn,
            (0,
            h.Xd)(new d.wA("firestore", (e, {instanceIdentifier: n, options: r}) => {
                let i = e.getProvider("app").getImmediate()
                  , s = new o_(new nJ(e.getProvider("auth-internal")),new n1(e.getProvider("app-check-internal")),function(e, t) {
                    if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"]))
                        throw new n$(nK.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');
                    return new ru(e.options.projectId,t)
                }(i, n),i);
                return r = Object.assign({
                    useFetchStreams: t
                }, r),
                s._setSettings(r),
                s
            }
            ,"PUBLIC").setMultipleInstances(!0)),
            (0,
            h.KN)(nP, "3.8.4", void 0),
            (0,
            h.KN)(nP, "3.8.4", "esm2017")
        }()
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(6840),
        t(880)
    }),
    _N_E = e.O()
}
]);
