import axios from "axios";

const getSearchResults = searchParams => {
  const { organizationId, memberId, key, id, token } = searchParams;
  let url = id
    ? `https://dm.zuri.chat/api/v1/org/${organizationId}/members/${memberId}/messages/search?keyword=${key}&id=${id}`
    : `https://dm.zuri.chat/api/v1/org/${organizationId}/members/${memberId}/messages/search?keyword=${key}`;
  return axios({
    method: "get",
    // url will be changed to the correct one
    url,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err);
    });
};

export default getSearchResults;
