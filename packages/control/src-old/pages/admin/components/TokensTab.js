import React, { useEffect, useState } from "react";
import styles from "../styles/adminToken.module.css";
import DataTable from "react-data-table-component";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { authAxios } from "../Utils/Api";
import PurchaseModal from "./PurchaseModal";
import { getToken, getUser, getCurrentWorkspace } from "../Utils/Common";

const columns = [
  {
    name: "Date",
    selector: row => row.date,
    sortable: true
  },
  {
    name: "Type",
    selector: row => row.type,
    sortable: true
  },
  {
    name: "Amount",
    selector: row => row.amount,
    sortable: true
  },
  {
    name: "Currency",
    selector: row => row.currency,
    sortable: true
  },
  {
    name: "USD Amount",
    selector: row => row.usd,
    sortable: true
  },

  {
    name: "Token",
    selector: row => row.token,
    sortable: true
  },
  {
    name: "Description",
    selector: row => row.description
    // sortable: true,
  },
  {
    name: "Action",
    selector: row => row.action
    // sortable: true,
  }
];

const data = [
  {
    id: 1,
    date: "29/6/202112:01",
    type: "Purchase",
    amount: "100",
    currency: "USD",
    usd: "100",
    token: "100.00",
    description: "Tokens purchase",
    action: ""
  },
  {
    id: 1,
    date: "29/6/2021 12:01",
    type: "Bonus",
    amount: "-",
    currency: "-",
    usd: "-",
    token: "15.00",
    description: "Referal bonus",
    action: "-"
  },
  {
    id: 1,
    date: "29/6/2021 12:01",
    type: "Deposit",
    amount: "100",
    currency: "GBP",
    usd: "100",
    token: "100.00",
    description: "Deposit to your balance",
    action: ""
  }
];
const TokensTab = () => {
  const [helpModal, setHelpModal] = useState(false);
  const currentWorkspace = getCurrentWorkspace();
  const [workspaceData, setWorkspaceData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentWorkspace) {
      authAxios
        .get(`/organizations/${currentWorkspace}`)
        .then(res => {
          setWorkspaceData(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }

    // const article = { amount: 9899 };
    // axios.post(`https://api.zuri.chat/organizations/614679ee1a5607b13c00bcb7/checkout-session`, article)
    //     .then(response => console.log(response.data.data, 'dummy content'));
  }, [currentWorkspace]);

  return (
    <div className={styles.container}>
      <div className={styles.tokenAmount}>
        <span>{workspaceData.tokens} &nbsp;</span>
        tokens
        <AiOutlineInfoCircle className={styles.infoIcon} />
      </div>
      <div className="text-center mt-4">
        <h6 className={styles.heading}>Welcome to your token account</h6>
        <p className={styles.para}>
          Here you will be able to deposit funds and purchase Zuri token
        </p>
      </div>

      <div className={styles.overview}>
        <h6 className={styles.heading}>Overview</h6>
        <div className="d-flex justify-content-center">
          <p className={styles.para}>
            MY ZURI TOKENS <span>{workspaceData.tokens}</span>
          </p>
          <p className={styles.para}>
            MY ZURI REFERAL TOKENS <span>0</span>
          </p>
          <p className={styles.para}>
            MY ZURI TOKENS PRICE<span>1.0 USD</span>
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn" onClick={() => setHelpModal(true)}>
            Buy
          </button>
          <button className="btn">Deposit</button>
        </div>
      </div>
      {helpModal ? <PurchaseModal setHelpModal={setHelpModal} /> : ""}

      <div>
        <h6 className={styles.heading}>Your referal link</h6>
        <div className={`${styles.referal} input-group`}>
          <input
            type="text"
            className="form-control"
            placeholder="https://ico.zuri.chat/?ref=49eb37c78185"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              Copy link
            </span>
          </div>
        </div>
        <div className={styles.rInfo}>
          <p className={styles.para}>
            This is your Zurichat referral link. You can use it to share the
            project with your friends and other interested parties. If any of
            them sign up with this link they will be added to your referral
            program. Your reward amounts to 5% of all Zuri tokens bought by your
            referrals.
          </p>
        </div>
        <div>
          <h6 className={styles.heading}>Payments</h6>
          <p className={styles.paymentSelection}>Select type of pament</p>
          <div>
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokensTab;
