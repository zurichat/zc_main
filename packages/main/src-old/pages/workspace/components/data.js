import HNG_icon from "../assets/HNG-icon.svg";
import zuri_icon from "../assets/Zuri-icon.svg";
import member1 from "../assets/member_image1.png";
import member2 from "../assets/member_image2.png";
import member3 from "../assets/member_image3.png";
import member4 from "../assets/member_image4.png";
import member5 from "../assets/member_image5.png";

const userOrganizations = [
  {
    id: 1,
    icon: `${HNG_icon}`,
    name: "HNGi9 x I4G",
    imgs: [
      `${member1}`,
      `${member2}`,
      `${member3}`,
      `${member4}`,
      `${member5}`
    ],
    number: "3,194",
    selected: true
  },
  {
    id: 2,
    icon: `${zuri_icon}`,
    name: "Zuri x I4G Training",
    imgs: [
      `${member1}`,
      `${member2}`,
      `${member3}`,
      `${member4}`,
      `${member5}`
    ],
    number: "20,047",
    selected: false
  }
];

export default userOrganizations;
