import React, { useContext, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { IoMdClose, IoMdSearch } from "react-icons/io";
import { TopbarContext } from "../context/topbar.context";
import styles from "../styles/MembersModal.module.css";
import faker from "faker";

const placeHolder = n => {
  const placeHolderMembersArray = [];
  for (let i = 0; i < n; i++) {
    placeHolderMembersArray.push({
      userName: faker.internet.userName().toLowerCase(),
      fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      status: faker.lorem.sentence(),
      avatar: faker.internet.avatar()
    });
  }
  return placeHolderMembersArray;
};

const faked = placeHolder(250);

const MembersModal = ({ channelTitle, members }) => {
  // if(!members){

  // }
  const [searchFiltered, setSearchFiltered] = useState(null);

  return (
    <div className={styles.modalWrapper}>
      <Header
        channelTitle={channelTitle || "announcement"}
        memberNumber={faked.length}
      />
      <Search members={faked} setSearchFiltered={setSearchFiltered} />
      {searchFiltered !== null ? (
        <MemberList members={searchFiltered} />
      ) : (
        <MemberList members={faked} />
      )}
    </div>
  );
};

const Header = ({ channelTitle, memberNumber }) => {
  const { closeMembersModal } = useContext(TopbarContext);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTop}>
        <div className={styles.headerText}>{`#${channelTitle}`}</div>
        <div>
          <IoMdClose
            onClick={closeMembersModal}
            style={{ cursor: "pointer", color: "red" }}
          />
        </div>
      </div>
      <p>Members - {memberNumber}</p>
    </div>
  );
};

const Search = ({ members, setSearchFiltered }) => {
  return (
    <div id="search" className={styles.searchWrapper}>
      <div className={styles.searchBox}>
        <IoMdSearch fontSize={20} />
        <input
          placeholder="Find members"
          onChange={e => {
            if (e.target.value !== "") {
              const filtered = members.filter(val => {
                const regex = new RegExp(`${e.target.value}`, "ig");
                return val.userName.match(regex) || val.fullName.match(regex);
              });
              setSearchFiltered(filtered);
            } else {
              setSearchFiltered(null);
            }
          }}
        />
      </div>
    </div>
  );
};

const MemberList = ({ members }) => {
  const Row = ({ index, style }) => (
    <MemberCard data={members[index]} style={style} />
  );

  return (
    <div
      id="member-list"
      className={styles.memberlist}
      style={{ flex: "1 1 auto" }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={members.length}
            itemSize={67}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );

  // return (
  //   <div id="member-list" className={styles.memberlist}>
  //     {members.map((val, idx) => {
  //       return <MemberCard data={val} key={idx} />
  //     })}
  //   </div>
  // )
};

const MemberCard = ({
  style,
  data: { userName, fullName, status, avatar }
}) => {
  return (
    // To be updated to anchor tags with appropriate resources linked
    <div id="member-card" className={styles.membercardWrapper} style={style}>
      <div className={styles.membercardImage}>
        <img src={avatar} alt="user avatar" />
      </div>
      <div className={styles.membercardTextBlock}>
        <div className={styles.membercardUserDetails}>
          <b>{userName}</b>
          {"-"}
          <p>{fullName}</p>
        </div>
        <p className={styles.membercardStatus}>{status}</p>
      </div>
    </div>
  );
};

export default MembersModal;
