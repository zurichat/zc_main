export const filterUrl = url => {
  if (url !== undefined) {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
  }
};

export const trimUrl = url => {
  if (url !== undefined) {
    if (url.substr(-1) === "/") {
      return url.substr(0, url.length - 1);
    }
    return url;
  }
};
