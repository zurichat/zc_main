import { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { AiOutlineMenu } from "react-icons/ai";
import { navigateToUrl } from "single-spa";

// Components || Assets || Contexts
import { ProfileContext } from "../context/profile-modal.context";
import { TopbarContext } from "../context/topbar.context";

import { authAxios } from "../utils/api";
import { getUserInfo, subscribeToChannel } from "@zuri/utilities";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import { BigModal } from "./BigModal";
import TopBarSearchModal from "./TopBarSearchModal";

import zurichatlogo from "../assets/images/zurilogo.svg";
import defaultAvatar from "../assets/images/avatar_vct.svg";
import TopbarModal from "./TopbarModal";
import styles from "../styles/TopNavBar.module.css";
import LanguageIcon from "../../../top-navigation-bar/LanguageIcon";

import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell
} from "@novu/notification-center";

const TopNavbar = ({ toggleSidebar }) => {
  const theme = localStorage.getItem("theme");
  // if (theme !== null || theme !== "") {
  //   const topBar = document.getElementById(
  //     "single-spa-application:@zuri/topbar"
  //   );
  //   topBar.style.backgroundColor = themeColors[theme]?.primary;
  // }
  const currentWorkspace = localStorage.getItem("currentWorkspace");

  const { closeModal, openModal, presence, setPresence } =
    useContext(TopbarContext);
  const {
    setUser,
    user,
    userProfileImage,
    setOrgId,
    orgId,
    setUserProfileImage
  } = useContext(ProfileContext);

  const state = useContext(TopbarContext);
  const [showModal] = state.show;
  const location = useLocation();
  const urlsList = JSON.parse(localStorage.getItem("urlsTracker"));

  const getRealUrl = () => {
    const visibleUrl = location?.pathname?.split("/")[2];
    if (visibleUrl.length > 8) return visibleUrl;
    if (urlsList) {
      return urlsList.workspaceIds?.find(url => url.short_id === visibleUrl)
        ?.real_id;
    }
    return visibleUrl;
  };

  const [organizations, setOrganizations] = useState([]);

  const [search, setSearch] = useState("");
  const [helpModal, setHelpModal] = useState(false);
  const [messages, setMessages] = useState("");
  const [isSearchOpen, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const userdef = JSON.parse(sessionStorage.getItem("user"));

  const onSearchSubmit = e => {
    if (e.keyCode === 13 && searchValue.length >= 1) {
      setOpenSearch(true);
    }
  };

  const onSearchChange = value => {
    setSearchValue(value);
  };

  const getLoggedInUser = async () => {
    try {
      const userInfo = await getUserInfo();
      //Check if user id is valid and get user organization
      if (userInfo.user._id !== "") {
        //updating user's profile image immediately the page loads
        setUserProfileImage(userInfo.user.image_url);
        setUser(userInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLoggedInUser();
    subscribeToChannel(currentWorkspace, event => {
      const session_user = JSON.parse(sessionStorage.getItem("user"));
      if (
        event.event === "UpdateOrganizationMemberPic" ||
        event.event === "UpdateOrganizationMemberStatus" ||
        event.event === "UpdateOrganizationMemberProfile" ||
        event.event === "UpdateOrganizationMemberPresence"
      ) {
        if (event.id === session_user["id"]) {
          // UpdateInfo();
          getProfileImage();
        } else return;
      } else return;
    });
  }, []);

  //This will update user's image everytime user details changes
  useEffect(() => {
    setUserProfileImage(user.image_url);
  }, [user]);

  // useEffect(() => {
  //   const searchFunction = async () => {
  //     let organization_id = currentWorkspace
  //     let member_id = user[0]?._id
  //     axios
  //       .get(
  //         `https://dm.zuri.chat/api/v1/org/${organization_id}/members/${member_id}/messages/search?keyword=${search}`
  //       )
  //       .then(response => {
  //         setMessages(response.data.results)
  //       })
  //   }
  //   searchFunction()
  // }, [search])

  useEffect(() => {
    async function getOrganizations() {
      await authAxios
        .get(`/users/${userdef.email}/organizations`)
        .then(response => {
          setOrganizations(response.data.data);
          setOrgId(response.data.data[0].id);
          authAxios
            .get(`/organizations/${response.data.data[0].id}/members`)
            .then(response => {
              setUser(
                response.data.data.find(
                  member => member.email === userdef.email
                )
              );
              return response.data.data.find(
                member => member.email === userdef.email
              );
            });
        });
    }

    getOrganizations();
  }, [setOrgId, user.image_url, setUser]);

  const getProfileImage = useCallback(() => {
    return async () => {
      try {
        const res = await authAxios.get(
          `/organizations/${orgId}/members/${user._id}`
        );
        setUserProfileImage(res.data.data.image_url);
      } catch (err) {
        console.error("Error", err);
      }
    };
  }, []);

  useEffect(() => {
    getProfileImage();
  }, []);

  let toggleStatus = null;

  const StatusToolTip = ({ title }) => {
    return (
      <div className={styles["status__tool__tip"]}>
        <ReactTooltip
          id="toggleStatus"
          effect="solid"
          place="bottom"
          type="dark"
          offset={{ top: 3, left: 0.8 }}
        >
          {title}
        </ReactTooltip>
      </div>
    );
  };

  switch (presence) {
    case "true":
      toggleStatus = (
        <ToggleStatus>
          <div className="user-active" data-tip data-for="toggleStatus" />
          <StatusToolTip title="Active" />
        </ToggleStatus>
      );
      break;
    default:
      toggleStatus = (
        <ToggleStatus>
          <div className="user-away" data-tip data-for="toggleStatus" />
          <StatusToolTip title="Away" />
        </ToggleStatus>
      );
  }

  // useEffect(() => {
  //   //Handle sidebar on mobile
  //   // const sidebar = document.getElementById(
  //   //   "single-spa-application:@zuri/sidebar"
  //   // )
  //   const sidebar = <Sidebar/>

  // }, [toggleSidebar])

  // Search autocomplete

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  const suggestions = [
    "Zuri Workspace",
    "Squid Game",
    "American Gods",
    "A Game of Thrones",
    "Prince of Thorns",
    "Stephen Gbolagade",
    "The Hero of Ages",
    "Mark Essien"
  ];

  const handleSearchChange = event => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = index => {
    setSelectedSuggestion(index);
    setInputValue(filteredSuggestions[index]);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
  };
  // end search

  const [statusModal, setStatusModal] = useState(false);

  const handleEnter = e => {
    e.preventDefault();

    navigateToUrl("/search");
  };
  return (
    <TopbarWrapper id="topBarWrapper">
      {
        <div
          className={`${toggleSidebar && styles["mobile__sidebar__open"]} ${
            styles["mobile__sidebar"]
          }`}
        >
          {/* <Sidebar /> */}
        </div>
      }
      <BrandWrapper>
        {/* <a href="/home"> */}
        <div className={styles["topNavBar__logo"]}>
          <img
            style={{ height: "100%", maxWidth: 100, cursor: "pointer" }}
            src={zurichatlogo}
            alt="zuri chat logo"
            onClick={() => navigateToUrl("/")}
          />
        </div>
        {/* </a> */}
        <button
          onClick={toggleSidebar}
          type="button"
          aria-label="hamburger-menu"
          className={styles["hamburger__menu-button"]}
        >
          <AiOutlineMenu
            style={{ fill: "#00b87c", width: "1.5em", height: "1.5em" }}
          />
        </button>
      </BrandWrapper>

      <div style={{ flex: 1 }}>
        {/* <BaseInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          width={12}
          error
          placeholder="Search here"
          border={"#99999933"}
        /> */}
        {/* <TopSearchBar onClick={() => setShowTopSearchModal(true)} /> */}
        <TopBarSearchModal />
        {/* <div>
            <form onSubmit={handleEnter}>
              <BaseInput
                onChange={handleSearchChange}
                value={inputValue}
                type="text"
                width={12}
                error
                placeholder="Search here"
                border={"#99999933"}
              />
            </form>
        </div>
        <div>
          <SearchAutocomplete
            inputValue={inputValue}
            selectedSuggestion={selectedSuggestion}
            onSelectSuggestion={onSelectSuggestion}
            displaySuggestions={displaySuggestions}
            suggestions={filteredSuggestions}
          />
        </div> */}

        {isSearchOpen ? (
          <BigModal
            onClose={() => {
              setOpenSearch(false);
            }}
            inputValue={searchValue}
          />
        ) : null}
      </div>
      <div className={styles.notification_modal}>
        <NovuProvider
          backendUrl={"http://139.144.17.179:3000"}
          socketUrl={"http://139.144.17.179:3002"}
          subscriberId={user._id}
          applicationIdentifier={"JJef8vc6vtAj"}
        >
          <PopoverNotificationCenter>
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
      </div>
      <LanguageIcon style={{ marginRight: "2.2em" }} />

      <ProfileImageContainer className="d-flex justify-content-end">
        {toggleStatus}
        <ProfileImg
          src={userProfileImage ? userProfileImage : defaultAvatar}
          onClick={openModal}
          role="button"
          className="avatar-img"
          alt="user profile avatar"
        />
        {user?.status?.tag && (
          <>
            <div
              style={{
                position: "absolute",
                top: "0px",
                right: "50px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor: "#fafafa",
                padding: "0px 4px",
                cursor: "pointer",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px"
              }}
              data-tip
              data-for="StatusHover"
              onClick={() => setStatusModal(!statusModal)}
            >
              <span style={{ fontSize: "16px" }}>{user?.status?.tag}</span>
            </div>
            <ReactTooltip id="StatusHover" type="dark" effect="solid">
              <span>
                {user?.status?.tag}&nbsp;&nbsp;{user?.status?.text}
              </span>
            </ReactTooltip>
          </>
        )}
      </ProfileImageContainer>

      <Profile />
      <TopbarModal statusModal={statusModal} setStatusModal={setStatusModal} />
    </TopbarWrapper>
  );
};

export default TopNavbar;

// Styled Components
const BrandWrapper = styled.div.attrs({
  className: "ps-3"
})`
  flex-basis: 20%;
  max-width: 300px;
  min-width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16;

  @media (max-width: 768px) {
    flex-basis: unset;
    max-width: unset;
    min-width: unset;
    & > div {
      display: none;
    }
  }
`;

const LogoDiv = styled.div`
  margin: auto 0;
  display: flex;
  align-items: center;
`;
// const Logo = styled.img`
//   @media (min-width: 1023px) {
//     // width: 50%;
//   }
//   // @media (max-width: 768px) {
//   //   width: 60%;
//   // }
//   // @media (max-width: 425px) {
//   //   width: 80%;
//   // }
// `
const ProfileImg = styled.img`
  border-radius: 4px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-right: 1rem;
  /* img {
    object-fit: cover;
    border-radius: 4px;
    height: 30px;
    width: 30px;
  } */
`;

const HelpContainer = styled.div`
  display: none;
  > .MuiSvgIcon-root {
    opacity: 0.5;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
const ToggleStatus = styled.span`
  position: absolute;
  bottom: -1px;
  right: -1px;
  .user-active {
    background-color: green;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid white;
    margin-right: 15px;
  }
  .user-away {
    background-color: grey;
    height: 10px;
    width: 10px;
    margin-right: 15px;
    border-radius: 50%;
    border: 1px solid white;
  }
`;

const TopbarWrapper = styled.div`
  display: flex;
  gap: 8px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ToggleButton = styled.button`
  outline: none;
  border: 0.8px solid rgba(153, 153, 153, 0.2);
  background: transparent;
`;
