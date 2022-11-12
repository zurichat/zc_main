import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import styles from "../styles/about.module.css";
import channel from "../asset/Group 35468-1.svg";
import holiday from "../asset/Group 35468.svg";
import deadline from "../asset/Group 35470.svg";
import quick from "../asset/Group 35471.svg";
import todo from "../asset/Group 35472.svg";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className={`${styles.carousel} z-depth-1`}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView className={styles.carouselImage}>
              <img className="d-block " src={channel} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className={`h3-responsive`}>Channels</h3>
              <p>
                Increase level of organization in your team focused with <br />
                centralized spaces
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView className={styles.carouselImage}>
              <img className={`d-block`} src={holiday} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className={`h3-responsive`}>Holiday Calender</h3>
              <p>
                Add holidays, set reminders <br />
                and see all in one view
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView className={styles.carouselImage}>
              <img className="d-block" src={deadline} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className="h3-responsive">Company Deadline</h3>
              <p>
                Meet up with deadlines with <br />
                the company deadline <br />
                feature.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView className={styles.carouselImage}>
              <img className="d-block" src={quick} alt="Forth slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className="h3-responsive">Quick Reply App</h3>
              <p>
                Get swift replies to Direct <br />
                Messages and across all <br />
                your channels.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView className={styles.carouselImage}>
              <img className="d-block" src={todo} alt="Fifth slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className="h3-responsive">To do List</h3>
              <p>
                Organize tasks with the to-do <br />
                list feature ensuring urgent <br />
                tasks are duly attended to.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
