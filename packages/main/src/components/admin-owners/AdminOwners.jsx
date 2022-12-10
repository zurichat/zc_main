import React, { useState, useEffect } from "react";
import styles from "../admin-owners/AdminOwners.module.css";
import { FiSearch } from "react-icons/fi";
import AdminOwnersItem from "../admin-owners-item/AdminOwnersItem";
import { useTranslation } from "react-i18next";

const AdminOwners = ({ admins }) => {
  const [adminObj, setAdminObj] = useState(admins);
  const [filtered, setFiltered] = useState(null);
  const [selectValue, setSelectValue] = useState("role");
  const { t } = useTranslation();

  const filterAdmins = text => {
    const filteredAdmins = adminObj.filter(eachObj => {
      const regex = new RegExp(`${text}`, "gi");
      return (
        eachObj.email.match(regex) ||
        eachObj.first_name.match(regex) ||
        eachObj.last_name.match(regex)
      );
    });
    setFiltered(filteredAdmins);
  };

  const handleChange = e => {
    filterAdmins(e.target.value);
    // console.log(e);
  };

  const handleSort = role => {
    setSelectValue(role);

    if (selectValue === "role") {
      adminObj.sort(function (a, b) {
        let nameA = a.first_name.toLowerCase();
        let nameB = b.first_name.toLowerCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
      // console.log(adminObj);
    }

    if (selectValue === "name") {
      adminObj.sort(function (a, b) {
        let roleA = a.role.toLowerCase();
        let roleB = b.role.toLowerCase();
        return roleA < roleB ? 1 : roleA > roleB ? -1 : 0;
      });
      // console.log(adminObj);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div className={styles.topContent}>
          <label>
            <span className={styles.sortBy}>{t("admin_owners_sort")}</span>
            <select
              defaultValue={selectValue}
              onChange={event => handleSort(event.target.value)}
            >
              <option value="Role">{t("admin_owners_role")}</option>
              <option value="FullName">{t("admin_owners_fullname")}</option>
            </select>
          </label>

          <div className={styles.search}>
            <div className={styles.searchContainer}>
              <FiSearch className={styles.icon} />
              <input
                type="text"
                placeholder={t("admin_owners_placeholder")}
                className={styles.inputSearch}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      {filtered !== null
        ? filtered.map(person => (
            <AdminOwnersItem key={person._id} user={person} />
          ))
        : adminObj.map(person => (
            <AdminOwnersItem key={person._id} user={person} />
          ))}
    </div>
  );
};

export default AdminOwners;
