const fetchInstall = async type => {
  // try {
  //   const res = await axios.get("link to download url", {type})
  //   const {link, name} = res.data
  //   return {link, name}
  // } catch (err) {
  //   console.error(err)
  // }
  return { link: "/apk/appRelease.apk", name: "Zuri Chat Windows" };
};

export default fetchInstall;
