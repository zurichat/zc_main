const utilitiesCaches = [
  "zuri-utilities-getuserinfo",
  "zuri-utilities-getworkspaceuser",
  "zuri-utilities-getworkspaceusers"
];

/**
 *
 * @param {string} cacheName name of the cache to be cleared
 * @returns {Promise<boolean>} returns true if the cache was cleared
 * @description - clears the cache from the browser with the given name
 */

export const deleteUtilitiesCache = async cacheName => {
  return await caches.delete(cacheName);
};

/**
 * @returns {Promise<boolean>} returns true if the cache was cleared
 * @description clears all the caches from the browser
 */

export const deleteAllUtilitiesCache = async () => {
  utilitiesCaches.forEach(async cacheName => {
    await deleteUtilitiesCache(cacheName);
  });
  return true;
};

/**
 *
 * @param {string} pageTitle page name
 * @returns {boolean} returns true after the page title is set
 * @description - include a title for the page in the browser
 * @example - setPageTitle("music") ==> "zuri | music | {organization name}"
 */

export const setPageTitle = pageTitle => {
  document.title = `Zuri | ${pageTitle} | ${
    localStorage.getItem("orgName") || ""
  }`;
  return true;
};
