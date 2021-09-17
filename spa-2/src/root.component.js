import { GetUserInfo } from "@zuri/main";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;

  return (<div>
    <p>This is app 2</p>
    <GetUserInfo userID="6143a2b8d0284bc6a9223633" token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFl6TVRneU16SXlOM3hIZDNkQlIwUlplRTVFVFROTlJGVXdXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZVVEpaWnowOWZFRGRYNWtFX2N3WkFCY3QyazRvd1dXUklvZ0Q1SUh5cHQtaXpfY2RZQUl4IiwiZW1haWwiOiJ5ZW1pQHllbWkuY29tIiwiaWQiOiI2MTQzNzA1NGQwMjg0YmM2YTkyMjM0NmIiLCJvcHRpb25zIjp7IlBhdGgiOiIvIiwiRG9tYWluIjoiIiwiTWF4QWdlIjo0MjMzNjAwLCJTZWN1cmUiOmZhbHNlLCJIdHRwT25seSI6ZmFsc2UsIlNhbWVTaXRlIjowfSwic2Vzc2lvbl9uYW1lIjoiZjY4MjJhZjk0ZTI5YmExMTJiZTMxMGQzYWY0NWQ1YzcifQ.cn2ETT8qp9v8b28S525cMdeIFoFLs7IMRWu4KSXZYM0" />
  </div>);
}
