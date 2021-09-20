;(this.webpackJsonpzc_frontend = this.webpackJsonpzc_frontend || []).push([
  [0],
  {
    12: function (e, t, n) {
      e.exports = {
        container: 'Dropdown_container__3xjI6',
        isClosed: 'Dropdown_isClosed__3P8nF',
        dropDownButton: 'Dropdown_dropDownButton__1CTbB',
        header: 'Dropdown_header__3ycqj',
        addButton: 'Dropdown_addButton__PrZXU',
        content: 'Dropdown_content__20zGt',
        item: 'Dropdown_item__DIuoU'
      }
    },
    164: function (e, t, n) {},
    172: function (e, t, n) {
      'use strict'
      n.r(t)
      var c = n(1),
        a = n.n(c),
        s = n(82),
        i = n.n(s),
        o = n(87),
        r = n(2),
        l = n(83),
        d = n.n(l),
        j = n(23),
        b = n(0),
        u = Object(c.createContext)(null),
        h = function (e) {
          var t = e.children,
            n = Object(c.useState)(null),
            a = Object(j.a)(n, 2),
            s = a[0],
            i = a[1]
          return Object(b.jsx)(u.Provider, {
            value: { setUrl: i, url: s },
            children: t
          })
        },
        m = n(84),
        _ = n.n(m),
        p = n(85),
        g = n.n(p),
        x = n(86),
        O = n.n(x),
        v = function () {
          return Object(b.jsxs)('div', {
            className: O.a.container,
            children: [
              Object(b.jsx)('img', {
                src: '/zurichatlogo.svg',
                alt: 'Zuri Chat Logo'
              }),
              Object(b.jsx)('strong', { children: 'Welcome to the Workspace' })
            ]
          })
        },
        f = function () {
          var e = Object(c.useContext)(u).url
          return (
            Object(c.useEffect)(
              function () {
                if (e) {
                  var t = document.getElementById('zc-plugin-root'),
                    n = /^https?:\/\//,
                    c = new URL(n.test(e) ? e : 'http://' + e),
                    a = function (e, t) {
                      var c =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 'text/html',
                        a = n.test(e) ? e : ''.concat(t.origin).concat(e)
                      return '/proxy?url='.concat(a, '&mimeType=').concat(c)
                    }
                  return (
                    d.a
                      .get(a(c.toString()))
                      .then(function (e) {
                        var n = _.a.load(e.data)
                        n('link[rel="stylesheet"]').each(function () {
                          var e = this,
                            t = document.createElement('link')
                          Object.keys(this.attribs).forEach(function (n) {
                            return t.setAttribute(n, e.attribs[n])
                          }),
                            t.setAttribute(
                              'href',
                              a(this.attribs.href, c, 'text/css')
                            ),
                            t.setAttribute('data-plugin-res', !0),
                            n(this).remove(),
                            document.head.prepend(t)
                        }),
                          n('script').each(function () {
                            var e = this,
                              t = document.createElement('script')
                            Object.keys(this.attribs).forEach(function (n) {
                              return t.setAttribute(n, e.attribs[n])
                            }),
                              t.src
                                ? t.setAttribute(
                                    'src',
                                    a(
                                      this.attribs.src,
                                      c,
                                      'application/javascript'
                                    )
                                  )
                                : (t.innerText = n(this).html()),
                              n(this).remove(),
                              t.setAttribute('data-plugin-res', !0),
                              document.body.appendChild(t)
                          }),
                          (t.innerHTML = n('body').html())
                      })
                      .catch(function (n) {
                        t.innerHTML = 'Failed to Load '
                          .concat(e, ' Plugin: ')
                          .concat(n.message)
                      }),
                    function () {
                      ;(t.innerHTML = ''),
                        document
                          .querySelectorAll('[data-plugin-res]')
                          .forEach(function (e) {
                            return e.remove()
                          })
                    }
                  )
                }
              },
              [e]
            ),
            Object(b.jsxs)(b.Fragment, {
              children: [
                Object(b.jsx)('section', {
                  className: g.a.container,
                  children: Object(b.jsx)('div', {
                    id: 'zc-plugin-root',
                    children: 'Loading...'
                  })
                }),
                !e && Object(b.jsx)(v, {})
              ]
            })
          )
        },
        N = n(32),
        w = n(24),
        D = n.n(w),
        S = n(12),
        k = n.n(S),
        y = function (e) {
          var t = e.children,
            n = e.title,
            a = e.opened,
            s = e.showAddButton,
            i = e.onTitleClick,
            o = Object(c.useState)(a),
            r = Object(j.a)(o, 2),
            l = r[0],
            d = r[1]
          return Object(b.jsxs)('div', {
            className: ''
              .concat(k.a.container)
              .concat(l ? '' : ' '.concat(k.a.isClosed)),
            children: [
              Object(b.jsxs)('div', {
                className: k.a.header,
                children: [
                  Object(b.jsx)('button', {
                    className: ''
                      .concat(k.a.dropDownButton)
                      .concat(t ? '' : ' '.concat(k.a.hidden)),
                    onClick: function () {
                      return d(!l)
                    },
                    children: Object(b.jsx)('img', {
                      src: '/shapekeyboardarrowdown2.svg',
                      alt: 'Dropdown button'
                    })
                  }),
                  Object(b.jsx)('span', { onClick: i, children: n }),
                  Object(b.jsx)('img', {
                    className: ''
                      .concat(k.a.addButton)
                      .concat(s ? '' : ' '.concat(k.a.hidden)),
                    src: '/addicon.svg',
                    alt: 'Add button'
                  })
                ]
              }),
              Object(b.jsx)('ul', {
                className: k.a.content,
                children:
                  t &&
                  t.map(function (e, t) {
                    return Object(b.jsx)(
                      'li',
                      { className: k.a.item, children: e },
                      t
                    )
                  })
              })
            ]
          })
        }
      y.defaultProps = { opened: !0 }
      var C = y,
        A = function (e) {
          return fetch(e).then(function (e) {
            return e.json()
          })
        },
        L = function () {
          var e = Object(N.a)('/api/plugins/channels', A).data,
            t = Object(N.a)('/api/plugins/messages', A).data,
            n = Object(N.a)('/api/plugins/', A).data,
            a = Object(c.useContext)(u).setUrl
          return Object(b.jsxs)('div', {
            className: D.a.container,
            children: [
              Object(b.jsxs)('div', {
                className: D.a.zuriLogo,
                children: [
                  Object(b.jsx)('img', {
                    src: '/zurichatlogo.svg',
                    alt: 'Zuri Chat logo'
                  }),
                  Object(b.jsx)('p', { children: 'ZURI' })
                ]
              }),
              Object(b.jsxs)('div', {
                className: D.a.orgInfo,
                children: [
                  Object(b.jsxs)('div', {
                    className: D.a.orgName,
                    children: [
                      Object(b.jsx)('p', { children: 'HNGi8' }),
                      Object(b.jsx)('img', {
                        src: '/shapekeyboardarrowdown.svg',
                        alt: 'Organisation settings button'
                      })
                    ]
                  }),
                  Object(b.jsx)('div', {
                    className: D.a.newMessage,
                    children: Object(b.jsx)('img', {
                      src: '/newmessage.svg',
                      alt: 'New message icon'
                    })
                  })
                ]
              }),
              Object(b.jsx)(C, {
                title: 'Channels',
                children:
                  e &&
                  e.channels.map(function (e, t) {
                    return Object(b.jsxs)(
                      c.Fragment,
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
              n &&
                Object.keys(n).map(function (e) {
                  return Object(b.jsx)(
                    C,
                    {
                      title: n[e].name,
                      showAddButto: !1,
                      onTitleClick: function () {
                        return a(e)
                      }
                    },
                    e
                  )
                }),
              Object(b.jsx)(C, {
                title: 'messages',
                children:
                  t &&
                  t.messages.map(function (e, t) {
                    return Object(b.jsxs)(
                      c.Fragment,
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
        I = n(28),
        T = n.n(I),
        B = function () {
          return Object(b.jsx)('div', {
            className: T.a.container,
            children: Object(b.jsxs)('div', {
              className: T.a.topbar,
              children: [
                Object(b.jsx)('input', {
                  className: T.a.search,
                  type: 'text',
                  placeholder: 'Search here'
                }),
                Object(b.jsx)('img', { src: '/settings.svg', alt: 'settings' }),
                Object(b.jsx)('div', {
                  className: T.a.profile,
                  children: Object(b.jsx)('img', {
                    src: '/profilepic.png',
                    alt: 'Profile'
                  })
                })
              ]
            })
          })
        },
        E = n(31),
        H = n.n(E),
        Z = function () {
          return Object(b.jsx)(h, {
            children: Object(b.jsxs)('div', {
              className: H.a.container,
              children: [
                Object(b.jsx)(L, {}),
                Object(b.jsxs)('div', {
                  className: H.a.room,
                  children: [
                    Object(b.jsx)(B, {}),
                    Object(b.jsx)('div', {
                      className: H.a.pluginContent,
                      children: Object(b.jsx)(f, {})
                    })
                  ]
                })
              ]
            })
          })
        },
        z = n(18),
        F = n.n(z),
        M = function () {
          var e = Object(c.useState)(''),
            t = Object(j.a)(e, 2),
            n = t[0],
            a = t[1]
          return Object(b.jsx)('div', {
            className: 'container text-center m-auto',
            children: Object(b.jsxs)('div', {
              className: 'pt-5 px-3 mt-5',
              children: [
                Object(b.jsxs)('span', {
                  children: [
                    Object(b.jsx)('img', {
                      src: '/zurichatlogo.svg',
                      alt: 'logo'
                    }),
                    Object(b.jsx)('p', {
                      className: 'd-inline  p-2',
                      children: 'Zuri chat'
                    })
                  ]
                }),
                Object(b.jsx)('h2', {
                  className: ' pt-2',
                  children: 'Sign in to Zuri Chat'
                }),
                Object(b.jsx)('p', {
                  className: F.a.subtext,
                  children: 'Enter your email to sign In'
                }),
                Object(b.jsx)('div', {
                  className: 'my-3',
                  children: Object(b.jsxs)('button', {
                    className: ''.concat(
                      F.a.button_outline,
                      ' m-0 col-12 col-md-6 px-2 px-md-5 py-2 btn btn-outline-dark'
                    ),
                    children: [
                      Object(b.jsx)('img', {
                        className: 'text-align-center px-2',
                        src: '/googleicon.svg',
                        alt: 'google icon'
                      }),
                      'Sign in with Google'
                    ]
                  })
                }),
                Object(b.jsx)('div', {
                  className: 'my-3',
                  children: Object(b.jsxs)('button', {
                    className: ''.concat(
                      F.a.button_outline,
                      ' m-0 col-12 col-md-6 btn px-2 px-md-5 py-2 btn-outline-primary'
                    ),
                    children: [
                      Object(b.jsx)('img', {
                        className: 'text-align-center px-2',
                        src: '/facebookicon.svg',
                        alt: 'google icon'
                      }),
                      'Sign in with Facebook'
                    ]
                  })
                }),
                Object(b.jsx)('div', {
                  className: 'd-flex',
                  children: Object(b.jsx)('div', {
                    className: 'col-12 col-md-6 m-auto mt-5',
                    children: Object(b.jsx)('p', {
                      className: 'mb-0 text-start '.concat(
                        F.a.email_subheading
                      ),
                      children: 'Or sign up with Email'
                    })
                  })
                }),
                Object(b.jsx)('div', {
                  className: 'd-flex '.concat(F.a.email_input),
                  children: Object(b.jsx)('div', {
                    className: 'mb-3 col-12 col-md-6 m-auto',
                    children: Object(b.jsx)('input', {
                      type: 'email',
                      className: 'py-2 form-control',
                      value: n,
                      onChange: function (e) {
                        console.log(e.target.value), a(e.target.value)
                      },
                      placeholder: 'aristotle@gmail.com'
                    })
                  })
                }),
                Object(b.jsx)('div', {
                  children: Object(b.jsx)('button', {
                    className: ' '.concat(
                      F.a.button,
                      ' btn mb-3 col-12 col-md-6 px-5 px-md-5 py-2 btn-primary'
                    ),
                    children: 'Sign In'
                  })
                }),
                Object(b.jsxs)('span', {
                  className: '',
                  children: [
                    "Don't have an account? ",
                    Object(b.jsx)('a', {
                      className: F.a.link,
                      href: '/signup',
                      children: 'Create an account'
                    })
                  ]
                })
              ]
            })
          })
        },
        P = function () {
          return Object(b.jsx)('div', { children: 'This is signup page' })
        },
        U = function () {
          return Object(b.jsx)('div', { children: 'This is the Blog page' })
        },
        G = function () {
          return Object(b.jsx)('div', { children: 'This is news page' })
        },
        R = n(4),
        W = n.n(R),
        K = function () {
          return Object(b.jsxs)(b.Fragment, {
            children: [
              Object(b.jsxs)('section', {
                children: [
                  Object(b.jsxs)('div', {
                    className: ''.concat(W.a.container, ' container'),
                    children: [
                      Object(b.jsx)('h1', {
                        className: W.a.h1,
                        children: 'Zuri Chat Download'
                      }),
                      Object(b.jsx)('a', {
                        className: W.a.link,
                        href: '#',
                        children: "What's New"
                      })
                    ]
                  }),
                  Object(b.jsxs)('div', {
                    className: W.a.images,
                    children: [
                      Object(b.jsx)('img', {
                        className: W.a.circle,
                        src: '/Ellipse159.svg',
                        alt: 'circle'
                      }),
                      Object(b.jsx)('img', {
                        className: ''.concat(W.a.screenshot),
                        src: '/Rectangle.svg',
                        alt: 'app screenshot'
                      }),
                      Object(b.jsx)('img', {
                        className: W.a.circle2,
                        src: '/Ellipse160.svg',
                        alt: 'circle2'
                      })
                    ]
                  }),
                  Object(b.jsxs)('div', {
                    className: W.a.buttondiv,
                    children: [
                      Object(b.jsx)('button', {
                        className: W.a.button1,
                        type: 'submit',
                        children: 'Download for Windows (64bits)'
                      }),
                      Object(b.jsx)('button', {
                        className: W.a.button2,
                        type: 'submit',
                        children: 'Download for Mac OS X 10.10 and higher'
                      }),
                      Object(b.jsx)('p', {
                        className: W.a.windows,
                        children: 'Available on windows 8 and higher'
                      })
                    ]
                  })
                ]
              }),
              Object(b.jsx)('section', {
                className: 'container',
                children: Object(b.jsxs)('div', {
                  className: W.a.store,
                  children: [
                    Object(b.jsxs)('div', {
                      className: '{}',
                      children: [
                        Object(b.jsx)('h1', {
                          className: W.a.h1,
                          children: 'Zuri Chat for Mobile'
                        }),
                        Object(b.jsx)('p', {
                          className: W.a.storep,
                          children:
                            'Keep up with your team and hold meetings from your device'
                        })
                      ]
                    }),
                    Object(b.jsxs)('div', {
                      className: W.a.storelink,
                      children: [
                        Object(b.jsx)('a', {
                          className: W.a.imgLink,
                          href: '',
                          children: Object(b.jsx)('img', {
                            src: '/Play_Store_badge.svg',
                            alt: 'Google Play Store'
                          })
                        }),
                        Object(b.jsx)('a', {
                          className: W.a.imgLink,
                          href: '',
                          children: Object(b.jsx)('img', {
                            src: '/App_Store_badge.svg',
                            alt: 'Apple App Store'
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        },
        q =
          (n(164),
          function () {
            return Object(b.jsx)(o.a, {
              children: Object(b.jsxs)(r.c, {
                children: [
                  Object(b.jsx)(r.a, {
                    path: '/',
                    exact: !0,
                    children: Object(b.jsx)(Z, {})
                  }),
                  Object(b.jsx)(r.a, {
                    path: '/login',
                    children: Object(b.jsx)(M, {})
                  }),
                  Object(b.jsx)(r.a, {
                    path: '/signup',
                    children: Object(b.jsx)(P, {})
                  }),
                  Object(b.jsx)(r.a, {
                    path: '/blog',
                    children: Object(b.jsx)(U, {})
                  }),
                  Object(b.jsx)(r.a, {
                    path: '/news',
                    children: Object(b.jsx)(G, {})
                  }),
                  Object(b.jsx)(r.a, {
                    path: '/app-download',
                    children: Object(b.jsx)(K, {})
                  })
                ]
              })
            })
          })
      i.a.render(
        Object(b.jsx)(a.a.StrictMode, { children: Object(b.jsx)(q, {}) }),
        document.getElementById('zc-root')
      )
    },
    18: function (e, t, n) {
      e.exports = {
        button: 'Login_button__2bHGs',
        button_outline: 'Login_button_outline__20aA8',
        subtext: 'Login_subtext__2peAA',
        email_input: 'Login_email_input__27c_d',
        email_subheading: 'Login_email_subheading__HYY3Q',
        link: 'Login_link__3SopR'
      }
    },
    24: function (e, t, n) {
      e.exports = {
        container: 'Sidebar_container__1bwSo',
        zuriLogo: 'Sidebar_zuriLogo__3tFCG',
        orgInfo: 'Sidebar_orgInfo__IMvAW',
        orgName: 'Sidebar_orgName__2QU-N',
        newMessage: 'Sidebar_newMessage__3cPF-',
        channelsContainer: 'Sidebar_channelsContainer__2CwSF',
        channelHeader: 'Sidebar_channelHeader__1uiS-',
        channelDropdownIcon: 'Sidebar_channelDropdownIcon__51Mj0',
        channelAddBtn: 'Sidebar_channelAddBtn__3ODYL',
        channelNames: 'Sidebar_channelNames__3KpSL',
        messagesContainer: 'Sidebar_messagesContainer__3mpDG',
        messageHeader: 'Sidebar_messageHeader__ZjyDo',
        messageDropdownIcon: 'Sidebar_messageDropdownIcon__1A2xl',
        messageAddBtn: 'Sidebar_messageAddBtn__2V9et',
        messageNames: 'Sidebar_messageNames__ETMuj',
        channelItem: 'Sidebar_channelItem__1cFOt'
      }
    },
    28: function (e, t, n) {
      e.exports = {
        container: 'Topbar_container__1I0QU',
        profile: 'Topbar_profile__3mGxI',
        topbar: 'Topbar_topbar__3KZqZ',
        search: 'Topbar_search__CBkTt'
      }
    },
    31: function (e, t, n) {
      e.exports = {
        container: 'Home_container__1Nem7',
        room: 'Home_room__1RtK1',
        pluginContent: 'Home_pluginContent__3RuIn'
      }
    },
    4: function (e, t, n) {
      e.exports = {
        container: 'Download_container__1DvID',
        h1: 'Download_h1__6RgrD',
        link: 'Download_link__1ASot',
        images: 'Download_images__1dg9-',
        circle: 'Download_circle__1SFHz',
        circle2: 'Download_circle2__3LjP-',
        screenshot: 'Download_screenshot__kWe-n',
        buttondiv: 'Download_buttondiv__2V-su',
        button1: 'Download_button1__2_Zrg',
        button2: 'Download_button2__38ubw',
        windows: 'Download_windows__268gk',
        store: 'Download_store__2KKlo',
        storep: 'Download_storep__24TsL',
        storelink: 'Download_storelink__3UeZV',
        imgLink: 'Download_imgLink__2ymEC'
      }
    },
    85: function (e, t, n) {
      e.exports = { container: 'PluginContent_container__2isZr' }
    },
    86: function (e, t, n) {
      e.exports = { container: 'Welcome_container__1U1DP' }
    }
  },
  [[172, 1, 2]]
])
//# sourceMappingURL=main.4a1d856d.chunk.js.map
