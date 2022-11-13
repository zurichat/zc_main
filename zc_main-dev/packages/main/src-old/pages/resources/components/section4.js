import React from "react";
import Card from "../card_component/Card";
import image1 from "../assests/Rectangle 170.png";
import image2 from "../assests/Rectangle 171.png";
import image3 from "../assests/Rectangle 172.png";
import image4 from "../assests/Rectangle 173.png";
import image5 from "../assests/Rectangle 174.png";
import image6 from "../assests/Rectangle 175.png";
import image7 from "../assests/Rectangle 176.png";
import image8 from "../assests/Rectangle 177.png";
import styles from "../styles/section4.module.css";
const index = () => {
  return (
    <div className={styles.card_section}>
      <h5 className={styles.section_heading}>Browse all resources</h5>
      <div className={styles.card}>
        <Card
          image={image1}
          highlighted_text="How to transform your organization to an event-driven and composable enterprise"
          text="Watch this session as leaders discuss the “composable enterprise” and the value it can provide your organization."
        />
        <Card
          image={image2}
          highlighted_text="What is Zurichat?"
          text="This webinar will teach you how Zurichat’ can help you to stay productive and connected in the ever-evolving workplace."
        />
        <Card
          image={image3}
          highlighted_text="Zuri + Office 365: Co-existing together"
          text="Gain a better understanding of Zurichat’s unique platform and how it can increase the value of your O365 suite."
        />
        <Card
          image={image4}
          highlighted_text="Zurichat for service partners"
          text="Provide best-in-class experiences for your clients, customers and agents"
        />
        <Card
          image={image5}
          highlighted_text="How to create a successful hybrid enterprise using Slack"
          text="Learn about the three steps companies should take to create a successful hybrid enterprise, enabling better productivity while reducing burnout."
        />
        <Card
          image={image6}
          highlighted_text="Essential tips for automating everyday tasks in Slack"
          text="Join this interactive session to learn how anyone can turn routine processes into automated workflows without writing a single line of code."
        />
        <Card
          image={image7}
          highlighted_text="How to create a successful hybrid enterprise using Slack"
          text="Learn about the three steps companies should take to create a successful hybrid enterprise, enabling better productivity while reducing burnout"
        />
        <Card
          image={image8}
          highlighted_text="Essential tips for automating everyday tasks in Slack"
          text="Join this interactive session to learn how anyone can turn routine processes into automated workflows without writing a single line of code."
        />
      </div>
    </div>
  );
};

export default index;
