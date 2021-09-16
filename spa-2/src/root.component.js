import { GetUserInfo } from "@zuri/main";

export default function Root(props) {
  // return <section>{props.name} is mounted!</section>;
  return (<div>
    <p>This is app 2</p>
    <GetUserInfo userID={"Mark"} />
  </div>);
}
