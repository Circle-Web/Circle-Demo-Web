// import WebIM from "./Easemob-chat";
import WebIM from "easemob-websdk";

WebIM.conn = new WebIM.connection({
  appKey: process.env.REACT_APP_WEB_IM_APP_KEY,
  useOwnUploadFun: true
});

export default WebIM;
