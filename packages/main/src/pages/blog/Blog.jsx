import React from "react";
import style from "./Blog.module.css";

export default function index() {
  return (
    <>
      <main className={`${style.container}`}>
        <section className={`${style.hero}`}>
          <h1 className={`${style.hero__heading}`}>
            Launch your own online learning platform with Zuri Chat
          </h1>
          <button className={`${style.search__button}`}>
            <span>+</span> <span>Search by Categories</span>
          </button>
          <hr className={`${style.hr__line}`} />
        </section>

        <section className={`${style.news}`}>
          <div>
            <p className={`${style.news__heading}`}>Recent Post</p>
            <div className={`${style.grid}`}>
              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Everything you need to know about Zuri Chat.</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Everything you need to know about Zuri Chat.</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Everything you need to know about Zuri Chat.</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>
            </div>
          </div>

          <hr className={`${style.hr__line}`} />

          <div>
            <p className={`${style.news__heading}`}>News</p>
            <div className={`${style.grid}`}>
              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Everything you need to know about Zuri Chat.</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Everything you need to know about Zuri Chat.</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>
            </div>
          </div>

          <hr className={`${style.hr__line}`} />
          <div>
            <p className={`${style.news__heading}`}>News</p>
            <div className={`${style.grid}`}>
              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p>Zuri releases a new feature to aid studying</p>
                <p>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${style.next__button__box}`}>
            <button className={`${style.next__button}`}>
              <a href="#previous"></a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">1</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">2</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">3</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">3</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">3</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">3</a>
            </button>
            <div className={`${style.next__button}`}></div>
          </div>
        </section>

        <section className={`${style.news__letter__section}`}>
          <h2> Stay updated with Slack by signing up for our newsletter</h2>
          <p>
            Receive first hand information about our products by subscribing to
            our newsletter and mailing.
          </p>

          <form>
            <div>
              <input
                type="email"
                className={`${style.news__letter__input}`}
                required
              />
              <button>Subscribe</button>
              <p>
                By submitting this request, it means that you consent to receive
                our marketing communication via email and agree to zuri’s
                Privacy Policy. You can opt out at anytime.
              </p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
