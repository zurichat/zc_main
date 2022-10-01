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
import styles from "../About.module.css";

import { user, group, vector, user2 } from "../assets";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className={`${styles.carousel} z-depth-1`}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView className={styles.carouselCompany}>
              <img className="d-block " src={user} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className={`h3-responsive`}>Animated Avatar Loungue</h3>
              <p>Create and animate your own avatar in the avatar lounge</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView className={styles.carouselCompany}>
              <img className={`d-block`} src={group} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className={`${styles.carousel_header}h3-responsive`}>
                Company Files
              </h3>
              <p>
                Access your files on google drive while <br /> on Zuri Chat.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView className={styles.carouselCompany}>
              <img className="d-block" src={vector} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className="h3-responsive">Accessibility</h3>
              <p>
                Be in control, Use zuri Chat as you will <br /> and have a
                pleasant experience.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView className={styles.carouselCompany}>
              <img className="d-block" src={user2} alt="Forth slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className={styles.carouselCaption}>
              <h3 className="h3-responsive">Company Goals</h3>
              <p>
                Keep up with company goals to stay on <br /> track with your
                team.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
