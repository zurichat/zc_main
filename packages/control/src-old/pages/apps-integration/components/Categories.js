import React, { useEffect, useState } from "react";
import classes from "../styles/Categories.module.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const myArray = [
  { name: "Mailing" },
  { name: "notifications" },
  { name: "Socials and fun" },
  { name: "Travel" },
  { name: "Health and wellness" },
  { name: "Developer tools" },
  { name: "Productivity" },
  { name: "Meetings and calls" },
  { name: "Management and Structure" }
];

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function Categories() {
  const [list, setList] = useState(myArray);
  useEffect(() => {
    const mountArray = shuffle(myArray);
    setList(mountArray);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  function handleShuffle() {
    const changes = shuffle([...list]);
    setList(changes);
    // console.log('Shuffle', myArray, changes)
  }

  return (
    <>
      <div className={classes.categories}>
        <div className={classes.header}>
          <h3>Categories</h3>
          <div className={classes.btn}>
            <button className={classes.viewAllBtn} onClick={openModal}>
              View all
            </button>
            <button className={classes.icons} onClick={handleShuffle}>
              <BiChevronLeft />
            </button>
            <button className={classes.icons} onClick={handleShuffle}>
              <BiChevronRight />
            </button>
            <button onClick={handleShuffle}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className={classes.linkContainer}>
          {list.map((x, index) => (
            <div key={x.name + x.index}>
              <a style={{ color: "#fff" }} className={classes.link} href="#">
                {x.name}{" "}
              </a>
            </div>
          ))}
        </div>
      </div>

      {showModal ? (
        <div className={classes.background} onClick={closeModal}>
          <div
            className={classes.categoriesModal}
            showmodal={showModal}
            setshowmodal={setShowModal}
          >
            <div className={classes.headerx}>
              <div className={classes.btn_close}>
                <button className={classes.icons} onClick={closeModal}>
                  {" "}
                  <MdClose />{" "}
                </button>
              </div>
            </div>
            <div className={classes.linkContainer}>
              {list.map((x, index) => (
                <div key={x.name + x.index}>
                  <a href="/#">{x.name} </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default Categories;
