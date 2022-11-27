import React from "react";
import style from "./Blog.module.css";
import PreviousArrow from "./assets/Vector.png";
import NextArrow from "./assets/Vector1.png";

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
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Everything you need to know about Zuri Chat.
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Everything you need to know about Zuri Chat.
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Everything you need to know about Zuri Chat.
                </p>
                <p className={`${style.news__description}`}>
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
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Everything you need to know about Zuri Chat.
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Everything you need to know about Zuri Chat.
                </p>
                <p className={`${style.news__description}`}>
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
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
                  To make learn and team collaboration efficient and effective,
                  zuri is set to launch a new tools on 23/12/2022.
                </p>
              </div>

              <div>
                <div className={`${style.rectangle}`}></div>
                <p className={`${style.news__headlines}`}>
                  Zuri releases a new feature to aid studying
                </p>
                <p className={`${style.news__description}`}>
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
              <a href="#previous">
                <img
                  src={PreviousArrow}
                  alt="arrow"
                  className={`${style.arrow}`}
                />
              </a>
            </button>
            <button className={`${style.first__arrow}`}>
              <a href="#1">1</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">2</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">3</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">...</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">20</a>
            </button>
            <button className={`${style.next__button}`}>
              <a href="#previous">
                <img src={NextArrow} alt="arrow" className={`${style.arrow}`} />
              </a>
            </button>
          </div>
        </section>

        <section className={`${style.news__letter__section}`}>
          <h2 className={`${style.news__letter__heading}`}>
            {" "}
            Stay updated with Slack by signing up for our newsletter
          </h2>
          <p className={`${style.news__letter__description}`}>
            Receive first hand information about our products by subscribing to
            our newsletter and mailing.
          </p>

          <form className={`${style.flex}`}>
            <div className={`${style.news__letter__input__box}`}>
              <input
                type="email"
                placeholder="@gmail.com"
                required
                className={`${style.news__letter__input}`}
              />
              <button className={`${style.btn__subscribe}`}>Subscribe</button>
            </div>
            <p className={`${style.news__letter__agreement}`}>
              By submitting this request, it means that you consent to receive
              our marketing communication via email and agree to zuri’s Privacy
              Policy. You can opt out at anytime.
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
