const storeObjectInLocalStorage = (storageKey, object) => {
  localStorage.setItem(storageKey, JSON.stringify(object));
};

const retrieveObjectFromLocalStorage = storageKey => {
  return JSON.parse(localStorage.getItem(storageKey));
};

export const storeSideBarInfo = (userEmail, sidebar) => {
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  storeObjectInLocalStorage(
    `${userEmail}-${currentWorkspace}-sidebarCache`,
    sidebar
  );
};

export const retrieveSideBarInfo = userEmail => {
  const currentWorkspace = localStorage.getItem("currentWorkspace");
  return retrieveObjectFromLocalStorage(
    `${userEmail}-${currentWorkspace}-sidebarCache`
  );
};
