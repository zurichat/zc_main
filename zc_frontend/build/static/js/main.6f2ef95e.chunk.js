;(this.webpackJsonpzc_frontend = this.webpackJsonpzc_frontend || []).push([
  [0],
  {
    14: function (e, t, c) {
      e.exports = {
        container: 'Dropdown_container__1P8bF',
        isClosed: 'Dropdown_isClosed__37-eP',
        dropDownButton: 'Dropdown_dropDownButton__1cb5s',
        hidden: 'Dropdown_hidden__3bvWa',
        header: 'Dropdown_header__3Rhm-',
        addButton: 'Dropdown_addButton__oNet7',
        content: 'Dropdown_content__2w7Th',
        item: 'Dropdown_item__1crBY'
      }
    },
    173: function (e, t, c) {},
    179: function (e, t, c) {
      'use strict'
      c.r(t)
      var n = c(1),
        s = c.n(n),
        a = c(87),
        r = c.n(a),
        o = c(93),
        i = c(3),
        l = c(7),
        d = c(88),
        j = c.n(d),
        b = c(0),
        h = Object(n.createContext)(null),
        u = function (e) {
          var t = e.children,
            c = Object(n.useState)(null),
            s = Object(l.a)(c, 2),
            a = s[0],
            r = s[1],
            o = Object(n.useRef)(),
            i = Object(n.useState)(!1),
            d = Object(l.a)(i, 2),
            j = d[0],
            u = d[1],
            _ = Object(n.useState)(!1),
            m = Object(l.a)(_, 2),
            p = m[0],
            x = m[1],
            O = Object(n.useState)(null),
            g = Object(l.a)(O, 2),
            f = g[0],
            v = g[1],
            N = {
              url: [a, r],
              openModal: function () {
                u(!j)
              },
              closeModal: function (e) {
                o.current === e.target && (u(!1), console.log('close'))
              },
              openStatus: function () {
                x(!p)
              },
              closeStatus: function (e) {
                o.current === e.target && x(!1)
              },
              modalRef: o,
              show: [j, u],
              status: [p, x],
              emoji: [f, v],
              onEmojiClick: function (e, t) {
                v(t)
              }
            }
          return Object(b.jsx)(h.Provider, { value: N, children: t })
        },
        _ = c(89),
        m = c.n(_),
        p = c(90),
        x = c.n(p),
        O = c(91),
        g = c.n(O),
        f = function () {
          return Object(b.jsxs)('div', {
            className: g.a.container,
            children: [
              Object(b.jsx)('img', {
                src: '/zurichatlogo.svg',
                alt: 'Zuri Chat Logo'
              }),
              Object(b.jsx)('strong', { children: 'Welcome to the Workspace' })
            ]
          })
        },
        v = function () {
          var e = Object(n.useContext)(h),
            t = Object(l.a)(e.url, 1)[0]
          return (
            Object(n.useEffect)(
              function () {
                if (t) {
                  var e = document.getElementById('zc-plugin-root'),
                    c = /^https?:\/\//,
                    n = new URL(c.test(t) ? t : 'http://' + t),
                    s = function (e, t) {
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 'text/html',
                        s = c.test(e) ? e : ''.concat(t.origin).concat(e)
                      return '/proxy?url='.concat(s, '&mimeType=').concat(n)
                    }
                  return (
                    j.a
                      .get(s(n.toString()))
                      .then(function (t) {
                        var c = m.a.load(t.data)
                        c('link[rel="stylesheet"]').each(function () {
                          var e = this,
                            t = document.createElement('link')
                          Object.keys(this.attribs).forEach(function (c) {
                            return t.setAttribute(c, e.attribs[c])
                          }),
                            t.setAttribute(
                              'href',
                              s(this.attribs.href, n, 'text/css')
                            ),
                            t.setAttribute('data-plugin-res', !0),
                            c(this).remove(),
                            document.head.prepend(t)
                        }),
                          c('script').each(function () {
                            var e = this,
                              t = document.createElement('script')
                            Object.keys(this.attribs).forEach(function (c) {
                              return t.setAttribute(c, e.attribs[c])
                            }),
                              t.src
                                ? t.setAttribute(
                                    'src',
                                    s(
                                      this.attribs.src,
                                      n,
                                      'application/javascript'
                                    )
                                  )
                                : (t.innerText = c(this).html()),
                              c(this).remove(),
                              t.setAttribute('data-plugin-res', !0),
                              document.body.appendChild(t)
                          }),
                          (e.innerHTML = c('body').html())
                      })
                      .catch(function (c) {
                        e.innerHTML = 'Failed to Load '
                          .concat(t, ' Plugin: ')
                          .concat(c.message)
                      }),
                    function () {
                      ;(e.innerHTML = ''),
                        document
                          .querySelectorAll('[data-plugin-res]')
                          .forEach(function (e) {
                            return e.remove()
                          })
                    }
                  )
                }
              },
              [t]
            ),
            Object(b.jsxs)(b.Fragment, {
              children: [
                Object(b.jsx)('section', {
                  className: x.a.container,
                  children: Object(b.jsx)('div', {
                    id: 'zc-plugin-root',
                    children: 'Loading...'
                  })
                }),
                !t && Object(b.jsx)(f, {})
              ]
            })
          )
        },
        N = c(34),
        w = c(25),
        k = c.n(w),
        y = c(14),
        C = c.n(y),
        L = function (e) {
          var t = e.children,
            c = e.title,
            s = e.opened,
            a = e.showAddButton,
            r = e.onTitleClick,
            o = Object(n.useState)(s),
            i = Object(l.a)(o, 2),
            d = i[0],
            j = i[1]
          return Object(b.jsxs)('div', {
            className: ''
              .concat(C.a.container)
              .concat(d ? '' : ' '.concat(C.a.isClosed)),
            children: [
              Object(b.jsxs)('div', {
                className: C.a.header,
                children: [
                  Object(b.jsx)('button', {
                    className: ''
                      .concat(C.a.dropDownButton)
                      .concat(t ? '' : ' '.concat(C.a.hidden)),
                    onClick: function () {
                      return j(!d)
                    },
                    children: Object(b.jsx)('img', {
                      src: '/shapekeyboardarrowdown2.svg',
                      alt: 'Dropdown button'
                    })
                  }),
                  Object(b.jsx)('span', { onClick: r, children: c }),
                  Object(b.jsx)('img', {
                    className: ''
                      .concat(C.a.addButton)
                      .concat(a ? '' : ' '.concat(C.a.hidden)),
                    src: '/addicon.svg',
                    alt: 'Add button'
                  })
                ]
              }),
              Object(b.jsx)('ul', {
                className: C.a.content,
                children:
                  t &&
                  t.map(function (e, t) {
                    return Object(b.jsx)(
                      'li',
                      { className: C.a.item, children: e },
                      t
                    )
                  })
              })
            ]
          })
        }
      L.defaultProps = { opened: !0 }
      var S = L,
        T = function (e) {
          return fetch(e).then(function (e) {
            return e.json()
          })
        },
        B = function () {
          var e = Object(N.a)('/api/plugin/channels', T).data,
            t = Object(N.a)('/api/plugin/messages', T).data,
            c = Object(N.a)('/api/plugin/list', T).data,
            s = Object(n.useContext)(h).setUrl
          return Object(b.jsxs)('div', {
            className: k.a.container,
            children: [
              Object(b.jsxs)('div', {
                className: k.a.zuriLogo,
                children: [
                  Object(b.jsx)('img', {
                    src: '/zurichatlogo.svg',
                    alt: 'Zuri Chat logo'
                  }),
                  Object(b.jsx)('p', { children: 'ZURI' })
                ]
              }),
              Object(b.jsxs)('div', {
                className: k.a.orgInfo,
                children: [
                  Object(b.jsxs)('div', {
                    className: k.a.orgName,
                    children: [
                      Object(b.jsx)('p', { children: 'HNGi8' }),
                      Object(b.jsx)('img', {
                        src: '/shapekeyboardarrowdown.svg',
                        alt: 'Organisation settings button'
                      })
                    ]
                  }),
                  Object(b.jsx)('div', {
                    className: k.a.newMessage,
                    children: Object(b.jsx)('img', {
                      src: '/newmessage.svg',
                      alt: 'New message icon'
                    })
                  })
                ]
              }),
              Object(b.jsx)(S, {
                title: 'Channels',
                children:
                  e &&
                  e.channels.map(function (e, t) {
                    return Object(b.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          Object(b.jsx)('span', { children: '#' }),
                          e.name
                        ]
                      },
                      t
                    )
                  })
              }),
              c &&
                Object.keys(c).map(function (e) {
                  return Object(b.jsx)(
                    S,
                    {
                      title: c[e].name,
                      showAddButton: !1,
                      onTitleClick: function () {
                        return s(e)
                      }
                    },
                    e
                  )
                }),
              Object(b.jsx)(S, {
                title: 'messages',
                children:
                  t &&
                  t.messages.map(function (e, t) {
                    return Object(b.jsxs)(
                      n.Fragment,
                      {
                        children: [
                          Object(b.jsx)('span', {
                            children: Object(b.jsx)('img', {
                              src: e.avatar,
                              alt: 'avatar'
                            })
                          }),
                          e.name
                        ]
                      },
                      t
                    )
                  })
              })
            ]
          })
        },
        D = c(4),
        I = c.n(D),
        A = c(31),
        E = c.n(A),
        H = function () {
          return Object(b.jsxs)('div', {
            className: E.a.searchBar,
            children: [
              Object(b.jsx)('input', {
                type: 'search',
                className: E.a.searchInput,
                placeholder: 'Search here'
              }),
              Object(b.jsx)('img', {
                src: '/search-2-line.svg',
                className: E.a.searchSvg,
                alt: 'search'
              })
            ]
          })
        },
        M = function () {
          var e = Object(n.useContext)(h).openModal
          return Object(b.jsx)('div', {
            className: I.a.container,
            children: Object(b.jsxs)('div', {
              className: I.a.topbar,
              children: [
                Object(b.jsx)(H, {}),
                Object(b.jsx)('img', { src: '/settings.svg', alt: 'settings' }),
                Object(b.jsx)('div', {
                  className: I.a.profile,
                  onClick: e,
                  children: Object(b.jsx)('img', {
                    src: '/profile.png',
                    alt: 'Profile'
                  })
                })
              ]
            })
          })
        },
        F = c(32),
        P = c.n(F),
        R = c(33),
        z = c(51),
        U = c.n(z),
        G = function () {
          var e = Object(n.useContext)(h),
            t = Object(l.a)(e.show, 1)[0],
            c = Object(l.a)(e.status, 2),
            s = c[0],
            a = c[1],
            r = Object(l.a)(e.emoji, 1)[0],
            o = e.onEmojiClick,
            i = e.openStatus,
            d = e.closeStatus,
            j = e.modalRef
          return Object(b.jsxs)(b.Fragment, {
            children: [
              s
                ? Object(b.jsx)('div', {
                    ref: j,
                    className: I.a.backgrounds,
                    onClick: d,
                    children: Object(b.jsxs)('div', {
                      className: I.a.picker,
                      children: [
                        Object(b.jsx)(R.c, {
                          className: I.a.times,
                          onClick: function () {
                            return a(!s)
                          }
                        }),
                        Object(b.jsx)('div', {
                          className: I.a.smileys,
                          children: Object(b.jsx)(U.a, {
                            onEmojiClick: o,
                            skinTone: z.SKIN_TONE_MEDIUM_DARK
                          })
                        })
                      ]
                    })
                  })
                : null,
              t
                ? Object(b.jsxs)('section', {
                    className: I.a.topbarModal,
                    children: [
                      Object(b.jsxs)('div', {
                        className: I.a.sectionOne,
                        children: [
                          Object(b.jsx)('div', {
                            className: I.a.oneLeft,
                            children: Object(b.jsx)('img', {
                              src: '/profile.png',
                              alt: 'profile'
                            })
                          }),
                          Object(b.jsxs)('div', {
                            className: I.a.oneRight,
                            children: [
                              Object(b.jsx)('h4', { children: 'Praise.A' }),
                              Object(b.jsxs)('div', {
                                className: I.a.online,
                                children: [
                                  Object(b.jsx)(R.b, { className: I.a.circle }),
                                  Object(b.jsx)('p', { children: 'Active' })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      Object(b.jsx)('div', {
                        onClick: i,
                        className: I.a.sectionTwo,
                        children: Object(b.jsx)('p', {
                          children: r ? r.emoji : null
                        })
                      }),
                      Object(b.jsxs)('div', {
                        className: I.a.sectionThree,
                        children: [
                          Object(b.jsx)('p', {
                            onClick: i,
                            children: 'Set a status'
                          }),
                          Object(b.jsx)('p', {
                            children: 'Set yourself as away'
                          }),
                          Object(b.jsxs)('div', {
                            className: I.a.pause,
                            children: [
                              Object(b.jsx)('p', {
                                children: 'Pause Notifications'
                              }),
                              Object(b.jsx)(R.a, { className: I.a.chevron })
                            ]
                          })
                        ]
                      }),
                      Object(b.jsx)('hr', {}),
                      Object(b.jsxs)('div', {
                        className: I.a.sectionFour,
                        children: [
                          Object(b.jsx)('p', { children: 'Edit profile' }),
                          Object(b.jsx)('p', { children: 'View profile' }),
                          Object(b.jsx)('p', { children: 'Preference' })
                        ]
                      }),
                      Object(b.jsx)('hr', {}),
                      Object(b.jsx)('div', {
                        className: I.a.sectionFive,
                        children: Object(b.jsx)('p', {
                          children: 'Sign out of Team Einstein workspace'
                        })
                      })
                    ]
                  })
                : null
            ]
          })
        },
        J = function () {
          return Object(b.jsx)(u, {
            children: Object(b.jsxs)('div', {
              className: P.a.container,
              children: [
                Object(b.jsx)(B, {}),
                Object(b.jsxs)('div', {
                  className: P.a.room,
                  children: [
                    Object(b.jsx)(M, {}),
                    Object(b.jsx)(G, {}),
                    Object(b.jsx)('div', {
                      className: P.a.pluginContent,
                      children: Object(b.jsx)(v, {})
                    })
                  ]
                })
              ]
            })
          })
        },
        Z = c(21),
        W = c(28),
        K = c(2),
        V = c.n(K),
        q = function () {
          var e,
            t,
            c = Object(n.useState)(''),
            s = Object(l.a)(c, 2),
            a = s[0],
            r = s[1],
            o = Object(n.useState)({ password: '', showPassword: !1 }),
            i = Object(l.a)(o, 2),
            d = i[0],
            j = i[1]
          return Object(b.jsx)('div', {
            className: 'container-fluid '.concat(V.a.body),
            children: Object(b.jsxs)('div', {
              class: 'row',
              children: [
                Object(b.jsxs)('div', {
                  class: 'col-md-5 '.concat(V.a.side),
                  children: [
                    Object(b.jsxs)('div', {
                      className: 'row',
                      children: [
                        Object(b.jsx)('img', {
                          src: '/Group3155.png',
                          alt: ''
                        }),
                        Object(b.jsx)('div', {
                          className: 'col-md-12 mb-5',
                          children: Object(b.jsx)('img', {
                            className: 'float-end mt-4 '.concat(V.a.headimg),
                            src: '/Group3150.svg',
                            alt: ''
                          })
                        })
                      ]
                    }),
                    Object(b.jsxs)('div', {
                      className: 'col-md-12 text-center text-white '.concat(
                        V.a.header
                      ),
                      children: [
                        Object(b.jsxs)('h3', {
                          className: ' '.concat(V.a.headertext),
                          children: [
                            'Have fun while working ',
                            Object(b.jsx)('br', {}),
                            ' as a team'
                          ]
                        }),
                        Object(b.jsx)('p', {
                          className: ''.concat(V.a.text),
                          children: 'Unlimited team collaboration platform'
                        }),
                        Object(b.jsx)('img', { src: '/Group3149.svg', alt: '' })
                      ]
                    }),
                    Object(b.jsxs)('div', {
                      class: ' col-md-6 d-flex '.concat(V.a.person),
                      children: [
                        Object(b.jsx)('img', {
                          class: ''.concat(V.a.flower),
                          src: '/Group3151.png',
                          alt: ''
                        }),
                        Object(b.jsx)('img', {
                          class: ''.concat(V.a.person1),
                          src: 'person1.svg',
                          alt: ''
                        }),
                        Object(b.jsx)('img', {
                          class: ''.concat(V.a.person2),
                          src: 'person2.svg',
                          alt: ''
                        })
                      ]
                    })
                  ]
                }),
                Object(b.jsxs)('div', {
                  class: 'col-md-7 '.concat(V.a.login),
                  children: [
                    Object(b.jsx)('div', {
                      className: 'pt-4 mt-3 text-center',
                      children: Object(b.jsxs)('span', {
                        children: [
                          Object(b.jsx)('img', {
                            src: 'zurichatlogo.svg',
                            alt: 'logo'
                          }),
                          Object(b.jsx)('p', {
                            className: 'd-inline p-2',
                            children: 'Zuri chat'
                          })
                        ]
                      })
                    }),
                    Object(b.jsxs)('div', {
                      className: 'pt-1 mt-3',
                      children: [
                        Object(b.jsx)('h2', {
                          className: 'pt-2 ',
                          children: 'Log in'
                        }),
                        Object(b.jsx)('p', {
                          className: V.a.subtext,
                          children:
                            'Login with the data you entered during your'
                        }),
                        Object(b.jsx)('div', {
                          className: 'd-flex '.concat(V.a.email_input),
                          children: Object(b.jsx)('div', {
                            className: 'mb-3 col-12 col-md-6 w-100',
                            children: Object(b.jsx)('input', {
                              type: 'email',
                              className: 'py-2 form-control',
                              value: a,
                              onChange: function (e) {
                                console.log(e.target.value), r(e.target.value)
                              },
                              placeholder: 'Enter your email address',
                              required: !0
                            })
                          })
                        }),
                        Object(b.jsxs)('div', {
                          className: 'd-flex '.concat(V.a.email_input),
                          children: [
                            Object(b.jsx)('div', {
                              className: 'mb-3 col-12 col-md-6 w-100 d-flex',
                              children: Object(b.jsx)(
                                'input',
                                ((e = {
                                  type: d.showPassword ? 'text' : 'password',
                                  onChange:
                                    ((t = 'password'),
                                    function (e) {
                                      j(
                                        Object(W.a)(
                                          Object(W.a)({}, d),
                                          {},
                                          Object(Z.a)({}, t, e.target.value)
                                        )
                                      )
                                    }),
                                  className: 'py-2 form-control',
                                  value: d.password
                                }),
                                Object(Z.a)(e, 'onChange', function (e) {
                                  console.log(e.target.value), j(e.target.value)
                                }),
                                Object(Z.a)(
                                  e,
                                  'placeholder',
                                  'Enter a password'
                                ),
                                Object(Z.a)(e, 'id', 'id_password'),
                                e)
                              )
                            }),
                            Object(b.jsx)('i', {
                              className: 'far fa-eye-slash '.concat(V.a.far),
                              onClick: function () {
                                j(
                                  Object(W.a)(
                                    Object(W.a)({}, d),
                                    {},
                                    { showPassword: !d.showPassword }
                                  )
                                )
                              },
                              onMouseDown: function (e) {
                                e.preventDefault()
                              }
                            })
                          ]
                        }),
                        Object(b.jsxs)('div', {
                          class: 'mb-3 form-check',
                          children: [
                            Object(b.jsx)('input', {
                              type: 'checkbox',
                              class: 'form-check-input',
                              id: 'exampleCheck1'
                            }),
                            Object(b.jsx)('label', {
                              className:
                                'form-check-label text-secondary '.concat(
                                  V.a.checktext
                                ),
                              for: 'exampleCheck1',
                              children: 'Remember me'
                            }),
                            Object(b.jsxs)('label', {
                              className: 'float-md-end text-secondary  '.concat(
                                V.a.checktext
                              ),
                              children: [
                                'Forgot password? ',
                                Object(b.jsx)('a', {
                                  href: '/',
                                  className: ''.concat(V.a.checklink),
                                  children: 'Get help signing in'
                                })
                              ]
                            })
                          ]
                        }),
                        Object(b.jsx)('div', {
                          children: Object(b.jsx)('button', {
                            className: ''.concat(
                              V.a.button,
                              ' btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2'
                            ),
                            children: 'Log In'
                          })
                        }),
                        Object(b.jsxs)('div', {
                          className: 'my-2 d-flex justify-content-around',
                          children: [
                            Object(b.jsx)('img', {
                              className: 'w-50 p-3',
                              src: 'Line.svg',
                              alt: 'line'
                            }),
                            Object(b.jsx)('p', {
                              className: ''.concat(V.a.or),
                              children: 'OR'
                            }),
                            Object(b.jsx)('img', {
                              className: 'w-50 p-3',
                              src: 'Line.svg',
                              alt: 'line',
                              srcset: ''
                            })
                          ]
                        }),
                        Object(b.jsxs)('div', {
                          className: 'my-3 text-center',
                          children: [
                            Object(b.jsx)('img', {
                              className: 'mx-3 '.concat(V.a.icon),
                              src: '/google.png',
                              alt: 'google icon'
                            }),
                            Object(b.jsx)('img', {
                              className: 'mx-3 '.concat(V.a.icon),
                              src: '/apple.png',
                              alt: 'apple icon'
                            })
                          ]
                        }),
                        Object(b.jsx)('div', {
                          className: 'my-3',
                          children: Object(b.jsxs)('p', {
                            className:
                              'text-center py-2 text-secondary '.concat(
                                V.a.checktext
                              ),
                            children: [
                              'New to us? ',
                              Object(b.jsx)('a', {
                                href: '/',
                                className: ''.concat(V.a.checklink),
                                children: 'Create an Account'
                              })
                            ]
                          })
                        })
                      ]
                    }),
                    Object(b.jsxs)('div', {
                      class: 'd-flex justify-content-around my-5  '.concat(
                        V.a.footer
                      ),
                      children: [
                        Object(b.jsx)('a', {
                          href: '/',
                          class: 'mx-md-4 text-secondary',
                          children: 'Contact Us'
                        }),
                        Object(b.jsx)('a', {
                          href: '/',
                          class: 'mx-md-4 text-secondary',
                          children: 'Legal Policy'
                        }),
                        Object(b.jsxs)('a', {
                          href: '/',
                          class: 'mx-md-4 text-secondary',
                          children: [
                            Object(b.jsx)('i', { class: 'fas fa-globe' }),
                            ' Change Region ',
                            Object(b.jsx)('i', { class: 'fas fa-caret-down' })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        },
        X = c(92),
        Y = c.n(X),
        Q = function () {
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsx)('div', { children: 'This is signup page' }),
              Object(b.jsx)('button', {
                type: 'submit',
                className: Y.a.signup_btn,
                onClick: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0
                  if (e.length < t)
                    return {
                      valid: !1,
                      msg: 'password is too short',
                      short: 'length'
                    }
                  var c = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
                  if (!c.test(e))
                    return {
                      valid: !1,
                      msg: 'password must contain a special character',
                      short: 'special'
                    }
                  var n = /[0-9]/
                  if (!n.test(e))
                    return {
                      valid: !1,
                      msg: 'password must contain a number',
                      short: 'number'
                    }
                  var s = /[a-z]/
                  if (!s.test(e))
                    return {
                      valid: !1,
                      msg: 'password must contain a lowercase letter',
                      short: 'lower'
                    }
                  var a = /[A-Z]/
                  return a.test(e)
                    ? { valid: !0, msg: 'password is okay', short: 'okay' }
                    : {
                        valid: !1,
                        msg: 'password must contain an uppercase letter',
                        short: 'upper'
                      }
                },
                children: 'Sign up'
              })
            ]
          })
        },
        $ = function () {
          return Object(b.jsx)('div', { children: 'This is the Blog page' })
        },
        ee = function () {
          return Object(b.jsx)('div', { children: 'This is news page' })
        },
        te =
          (c(173),
          c(174),
          function () {
            return Object(b.jsx)(o.a, {
              children: Object(b.jsxs)(i.c, {
                children: [
                  Object(b.jsx)(i.a, {
                    path: '/',
                    exact: !0,
                    children: Object(b.jsx)(J, {})
                  }),
                  Object(b.jsx)(i.a, {
                    path: '/login',
                    children: Object(b.jsx)(q, {})
                  }),
                  Object(b.jsx)(i.a, {
                    path: '/signup',
                    children: Object(b.jsx)(Q, {})
                  }),
                  Object(b.jsx)(i.a, {
                    path: '/blog',
                    children: Object(b.jsx)($, {})
                  }),
                  Object(b.jsx)(i.a, {
                    path: '/news',
                    children: Object(b.jsx)(ee, {})
                  })
                ]
              })
            })
          })
      r.a.render(
        Object(b.jsx)(s.a.StrictMode, { children: Object(b.jsx)(te, {}) }),
        document.getElementById('zc-root')
      )
    },
    2: function (e, t, c) {
      e.exports = {
        headimg: 'Login_headimg__b3WEw',
        header: 'Login_header__1qLiu',
        headertext: 'Login_headertext__1ijHF',
        text: 'Login_text__25XsM',
        person: 'Login_person__1N6K6',
        person1: 'Login_person1__2UAI5',
        person2: 'Login_person2__1QyoF',
        flower: 'Login_flower__VMP_W',
        icon: 'Login_icon__3RluZ',
        login: 'Login_login__HBoD0',
        side: 'Login_side__2ODWs',
        far: 'Login_far__1gLbn',
        checktext: 'Login_checktext__1y-K8',
        checklink: 'Login_checklink__HMd_E',
        or: 'Login_or__peG-f',
        footer: 'Login_footer__1Vm-9',
        button: 'Login_button__2BUtU',
        button_outline: 'Login_button_outline__2NjpZ',
        subtext: 'Login_subtext__3bRZ8',
        email_input: 'Login_email_input__-oHgL',
        email_subheading: 'Login_email_subheading__29djJ',
        link: 'Login_link__3jp-B',
        'footer-text': 'Login_footer-text__31P2H'
      }
    },
    25: function (e, t, c) {
      e.exports = {
        container: 'Sidebar_container__3eXUG',
        zuriLogo: 'Sidebar_zuriLogo__l_93V',
        orgInfo: 'Sidebar_orgInfo__1V9U1',
        orgName: 'Sidebar_orgName__Tr3ka',
        newMessage: 'Sidebar_newMessage__2ei3Q',
        channelsContainer: 'Sidebar_channelsContainer__3B-46',
        channelHeader: 'Sidebar_channelHeader__CtE1Y',
        channelDropdownIcon: 'Sidebar_channelDropdownIcon__2Oc6K',
        channelAddBtn: 'Sidebar_channelAddBtn__1a49Z',
        channelNames: 'Sidebar_channelNames__2Bi_a',
        messagesContainer: 'Sidebar_messagesContainer__1uOHE',
        messageHeader: 'Sidebar_messageHeader__ivmEn',
        messageDropdownIcon: 'Sidebar_messageDropdownIcon__CRpz0',
        messageAddBtn: 'Sidebar_messageAddBtn__3qI6a',
        messageNames: 'Sidebar_messageNames__21oqU',
        channelItem: 'Sidebar_channelItem__1lfMw'
      }
    },
    31: function (e, t, c) {
      e.exports = {
        searchBar: 'SearchBar_searchBar__34JFc',
        searchInput: 'SearchBar_searchInput__LyU95',
        searchSvg: 'SearchBar_searchSvg__32yCU'
      }
    },
    32: function (e, t, c) {
      e.exports = {
        container: 'Home_container__3JNw6',
        room: 'Home_room__3ONAJ',
        pluginContent: 'Home_pluginContent__21x6K'
      }
    },
    4: function (e, t, c) {
      e.exports = {
        container: 'Topbar_container__3ho6N',
        profile: 'Topbar_profile__1afcY',
        topbar: 'Topbar_topbar__18yvx',
        search: 'Topbar_search__JSTwR',
        topbarModal: 'Topbar_topbarModal__1sSeC',
        backgrounds: 'Topbar_backgrounds__1G8St',
        sectionOne: 'Topbar_sectionOne__1GWtS',
        oneLeft: 'Topbar_oneLeft__1rx00',
        oneRight: 'Topbar_oneRight__3Clgy',
        online: 'Topbar_online__1_zuI',
        circle: 'Topbar_circle__2w48-',
        sectionTwo: 'Topbar_sectionTwo__1T8sp',
        smileys: 'Topbar_smileys__agH1D',
        picker: 'Topbar_picker__2t29I',
        times: 'Topbar_times__86-IV',
        sectionThree: 'Topbar_sectionThree__240ys',
        pause: 'Topbar_pause__2kL5J',
        chevron: 'Topbar_chevron__3Jpe1',
        sectionFour: 'Topbar_sectionFour__3rA5K',
        sectionFive: 'Topbar_sectionFive__1H02-'
      }
    },
    90: function (e, t, c) {
      e.exports = { container: 'PluginContent_container__34fb9' }
    },
    91: function (e, t, c) {
      e.exports = { container: 'Welcome_container__18wVu' }
    },
    92: function (e, t, c) {
      e.exports = { signup_btn: 'Signup_signup_btn__2i30X' }
    }
  },
  [[179, 1, 2]]
])
//# sourceMappingURL=main.6f2ef95e.chunk.js.map
