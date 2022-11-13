import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Modal, Spinner } from "react-bootstrap";

import { PluginCard } from "../plugins-card/PluginCard";
import styles from "../../styles/marketplace.module.css";
import zuriChatLogo from "../../../../component-assets/zurichatlogo.svg";
import SuccessMarkIcon from "../../../../component-assets/success-mark.svg";
import ErrorMarkIcon from "../../../../component-assets/error-mark.svg";
import { useMarketPlaceContext } from "../../../../context/MarketPlace.context";
import {
  setPluginId,
  loadPlugins,
  fetchPlugins
} from "../../../../context/marketplace/marketplace.action";

const MarketPlaceContainer = ({
  type,
  plugins,
  isMarketPlaceLoading,
  user
}) => {
  const [plugin, setPlugin] = useState(null);
  // const [pluginsLoading, setPluginsLoading] = useState(false)
  // const [isLoading, setisLoading] = useState(false)
  // const [installLoading, setInstallLoading] = useState(false)
  // const [installErr, setInstallErr] = useState(null)
  // const [showSuccess, setShowSuccess] = useState(false)

  const history = useHistory();

  const marketplaceContext = useMarketPlaceContext();

  // Loaders states
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [isInstallButtonLoading, setIsInstallButtonLoading] = useState(false);

  // Modal Data States
  const [isUninstall, setIsUninstall] = useState(false);
  const [installModalStatus, setInstallModalStatus] = useState({
    isSuccess: null,
    message: ""
  });

  const { state } = marketplaceContext;

  let currentWorkspace = localStorage.getItem("currentWorkspace");
  let token = sessionStorage.getItem("token");

  // (!plugins) ? console.log("No Plugins") : console.log("Fetched Plugins: ", plugins)

  // Pagination states
  const [pageNumber, setPageNumber] = useState(0);
  const pluginsPerPage = 6;
  const pagesVisited = pageNumber * pluginsPerPage;
  const pageCount = Math.ceil(
    // marketplaceContext.state.plugins[`${type}`].length / pluginsPerPage
    plugins[`${type}`].length / pluginsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (marketplaceContext.state.pluginId) {
      getSinglePluginData();
    }
  }, [marketplaceContext.state.pluginId]);

  const getSinglePluginData = async () => {
    setIsModalLoading(true);
    try {
      const response = await axios.get(
        `https://api.zuri.chat/marketplace/plugins/${marketplaceContext.state.pluginId}`
      );
      const { data } = response.data;
      setPlugin(data);
      setIsModalLoading(false);
      setInstallModalStatus({
        isSuccess: null,
        message: ""
      });
    } catch (error) {
      setIsModalLoading(false);
      setInstallModalStatus({
        isSuccess: false,
        message: "Error Retrieving Plugin Data"
      });
    }
  };

  const installPluginToOrganization = async () => {
    if (!currentWorkspace) {
      alert("You are not logged into an Organization/workspace");
    }

    setIsInstallButtonLoading(true);
    setInstallModalStatus({
      isSuccess: null,
      message: ""
    });

    try {
      const response = await axios.post(
        plugin.install_url,
        {
          user_id: user[0]?._id,
          organisation_id: currentWorkspace
        },
        {
          timeout: 2000 * 5,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (String(response.data.success).toLowerCase() === "true") {
        setIsInstallButtonLoading(false);
        setInstallModalStatus({
          isSuccess: true,
          message: "Plugin Installed Successfully. Redirecting..."
        });
        setTimeout(() => {
          // Redirect to redirect_url from plugins response
          history.push(response.data.data.redirect_url);
        }, 5000);
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setInstallModalStatus({
        isSuccess: false,
        message: err.message ? err.message : "Plugin could not be installed"
      });
      setIsModalLoading(false);
      setIsInstallButtonLoading(false);
    }
  };

  const unInstallPluginFromOrganization = async () => {
    if (!currentWorkspace) {
      alert("You are not logged into an Organization/workspace");
    }

    setIsInstallButtonLoading(true);
    setInstallModalStatus({
      isSuccess: null,
      message: ""
    });

    try {
      const response = await axios.delete(
        `https://api.zuri.chat/organizations/${currentWorkspace}/plugins/${marketplaceContext.state.pluginId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            user_id: user[0]?._id
          }
        }
      );

      if (response.data.status === 200) {
        setIsInstallButtonLoading(false);
        setInstallModalStatus({
          isSuccess: true,
          message: "Plugin Uninstalled Successfully."
        });
        setTimeout(() => {
          // Reload the modal
          marketplaceContext.dispatch(setPluginId(null));
        }, 3000);
      } else {
        throw new Error(response.data.message);
      }
    } catch (err) {
      setInstallModalStatus({
        isSuccess: false,
        message: err.message ? err.message : "Plugin could not be uninstalled"
      });
      setIsModalLoading(false);
      setIsInstallButtonLoading(false);
    }
  };

  return (
    <>
      {isMarketPlaceLoading && (
        <div className="d-flex justify-content-center align-items-center w-100 flex-column py-3 mb-5">
          <Spinner animation="border" variant="success" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {/* {!isMarketPlaceLoading && marketplaceContext.state.plugins[`${type}`].length > 0 && ( */}
      {!isMarketPlaceLoading && plugins[`${type}`].length > 0 && (
        <div className={styles.zuriMarketPlace__container}>
          {/* {marketplaceContext.state.plugins[`${type}`] */}
          {plugins[`${type}`]
            .slice(pagesVisited, pagesVisited + pluginsPerPage)
            .map(plugin => {
              // Logic to check if plugin is already installed
              let isInstalled = false;
              let plugin_id = plugin.id ? plugin.id : plugin._id;

              // Render installed btn if the plugin ID is in the installedPlugins array
              if (plugins.installed.find(item => item._id === plugin_id)) {
                isInstalled = true;
              }

              return (
                <PluginCard
                  key={plugin_id}
                  pluginData={plugin}
                  installed={isInstalled}
                  setIsUninstall={setIsUninstall}
                />
              );
            })}
        </div>
      )}

      {/* {!isMarketPlaceLoading && marketplaceContext.state.plugins[`${type}`].length > 0 && ( */}
      {!isMarketPlaceLoading && plugins[`${type}`].length == 0 && (
        <h2 className="text-center">No {type} plugins yet.</h2>
      )}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousClassName={styles.previousBttn}
        nextClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />

      {/* {marketplaceContext.state.isModal && marketplaceContext.state.pluginId && ( */}
      <Modal
        show={isModalOpen || marketplaceContext.state.isModal}
        onHide={() => marketplaceContext.dispatch(setPluginId(null))}
        dialogClassName={styles.marketplaceModal}
        contentClassName={styles.modalContent}
        centered
      >
        {isModalLoading && (
          <div className="d-flex h-100 justify-content-center align-items-center flex-column py-3">
            <Spinner
              animation="border"
              variant="success"
              role="status"
            ></Spinner>
          </div>
        )}

        {!isModalLoading && plugin && installModalStatus.isSuccess === null && (
          <div
            className={`h-100 d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
          >
            <figure className={styles.modalPluginIcon}>
              <img
                src={plugin.icon_url}
                onError={e => (e.target.src = zuriChatLogo)}
                alt={plugin.name}
              />
            </figure>
            <div className="ml-3">
              <h2 className="text-center">{plugin.name}</h2>

              <button
                onClick={() => {
                  isUninstall
                    ? unInstallPluginFromOrganization()
                    : installPluginToOrganization();
                }}
                className={`${styles.modalInstallBtn} ${
                  isUninstall && styles.modalUninstallBtn
                }`}
                disabled={isInstallButtonLoading}
              >
                {isInstallButtonLoading ? (
                  <div className="d-flex flex-row align-items-center">
                    <Spinner animation="border" variant="light" role="status">
                      <span className="visually-hidden text-capitalize">
                        Loading...
                      </span>
                    </Spinner>
                  </div>
                ) : isUninstall ? (
                  "Uninstall"
                ) : (
                  "Install"
                )}
              </button>
            </div>
            <div className={styles.marketplaceModalMain}>
              <h3>About:</h3>
              <div className={styles.marketplaceModalPluginImages}>
                {plugin.images && (
                  <>
                    {plugin.images
                      // Only show the first 3 images
                      .filter((image, index) => index < 3)
                      .map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          onError={e => (e.target.src = zuriChatLogo)}
                          alt={plugin.name}
                        />
                      ))}
                    <br />
                  </>
                )}
              </div>
              <p className="px-0">{plugin.description}</p>
              <hr />
              <div className="styles.marketplacePluginInfo">
                <h3>Plugin info:</h3>
                <p>
                  Downloads: {plugin.install_count}
                  <br />
                  Version: {plugin.version}
                  <br />
                  Created on: {plugin.created_at.slice(0, 10)}
                  <br />
                  Offered by: {plugin.developer_name}
                  <br />
                  Updated on: {plugin.updated_at.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        )}

        {!isModalLoading && installModalStatus.isSuccess !== null && (
          <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <figure
              className={
                installModalStatus.isSuccess
                  ? styles.successMarkContainer
                  : styles.errorMarkContainer
              }
            >
              <img
                src={
                  installModalStatus.isSuccess ? SuccessMarkIcon : ErrorMarkIcon
                }
                className={`${
                  installModalStatus.isSuccess
                    ? styles.successMark
                    : styles.errorMark
                } ${styles.MarkIcon}`}
                alt={`status icon`}
              />
            </figure>
            <p className={styles.MarkText}>{installModalStatus.message}</p>
          </div>
        )}
      </Modal>
      {/* )} */}
    </>
  );
  // return (
  //   <>
  //     {pluginsLoading && (
  //       <div className="d-flex justify-content-center align-items-center w-100 flex-column py-3 mb-5">
  //         <Spinner animation="border" variant="success" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </Spinner>
  //       </div>
  //     )}
  //     {!pluginsLoading && state.plugins.length > 0 && (
  //       <div className={styles.zuriMarketPlace__container}>
  //         {state.plugins.map((plugin, i) => {
  //           return <PluginCard key={i} {...plugin} />
  //         })}
  //         {marketplace.state.isModal && marketplace.state.pluginId && (
  //           <Modal
  //             show={marketplace.state.isModal}
  //             onHide={() => marketplace.dispatch(setPluginId(null))}
  //             dialogClassName={styles.marketplaceModal}
  //             contentClassName={styles.modalContent}
  //             centered
  //           >
  //             {isLoading && (
  //               <div className="d-flex h-100 justify-content-center align-items-center flex-column py-3">
  //                 <Spinner
  //                   animation="border"
  //                   variant="success"
  //                   role="status"
  //                 ></Spinner>
  //               </div>
  //             )}
  //             {!isLoading && plugin && !showSuccess && (
  //               <div className="h-100">
  //                 <div
  //                   className={`d-flex flex-column justify-content-center ${styles.marketplaceModalTop}`}
  //                 >
  //                   <div className={`${styles.pluginGrid}`}>
  //                     <figure className={styles.modalPluginIcon}>
  //                       <img
  //                         src={plugin.icon_url}
  //                         onError={addDefaultImage}
  //                         alt={plugin.name}
  //                       />
  //                     </figure>
  //                     <div className={`ml-3 ${styles.pluginMainContent}`}>
  //                       <h2>{plugin.name}</h2>
  //                       <div>
  //                         <h3>{plugin.developer_email}</h3>
  //                       </div>
  //                       <button
  //                         onClick={() => installPluginToOrganization()}
  //                         className={styles.modalInstallBtn}
  //                         disabled={installLoading}
  //                       >
  //                         {installLoading ? (
  //                           <div className="d-flex flex-row align-items-center">
  //                             <Spinner
  //                               animation="border"
  //                               variant="light"
  //                               role="status"
  //                             >
  //                               <span className="visually-hidden text-capitalize">
  //                                 Loading...
  //                               </span>
  //                             </Spinner>
  //                           </div>
  //                         ) : (
  //                           "Install"
  //                         )}
  //                       </button>
  //                     </div>
  //                   </div>
  //                   {/**
  //                    * <Row className="justify-content-between w-75 align-self-center align-items-center">
  //                     <Col md={5}>
  //                       <p className="px-0 mb-0">12mb</p>
  //                     </Col>
  //                     <Col md={7} className="px-0">
  //                       <p className={`${styles.modalDownloadAmount} px-0 mb-0`}>
  //                         15k downloads
  //                       </p>
  //                     </Col>
  //                   </Row>
  //                   */}
  //                 </div>
  //                 <div className={styles.marketplaceModalMain}>
  //                   <h3>About</h3>
  //                   <p className="px-0">{plugin.description}</p>
  //                 </div>
  //               </div>
  //             )}
  //             {!isLoading && showSuccess && (
  //               <div className="h-100 d-flex flex-column align-items-center justify-content-center">
  //                 <figure className={styles.successMarkContainer}>
  //                   <img
  //                     src={SuccessMark}
  //                     className={styles.successMark}
  //                     alt="success icon"
  //                   />
  //                 </figure>
  //                 <p className={styles.successMarkText}>
  //                   Plugin installed successfully to organisation
  //                 </p>
  //               </div>
  //             )}
  //           </Modal>
  //         )}
  //       </div>
  //     )}
  //   </>
  // )
};

export default MarketPlaceContainer;
