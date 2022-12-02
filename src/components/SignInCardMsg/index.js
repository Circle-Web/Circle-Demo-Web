import { Image } from "antd";
import React, { memo } from "react";
import s from "./index.module.less";
// 自定义消息——打卡卡片
const SignInCardMsg = (props) => {
  const { message } = props;
  const imgUrl = message.customExts?.imgUrl
  const url = `http://n.sinaimg.cn/news/518/w311h207/20200103/87fa-imrkkfx1541172.jpg`
  return (
    <div className={s.main}>
      <div className={s.imgCon}>
        <Image src={`${url}?thumbnail=true`} placeholder={true}
          preview={{
            src: url,
          }} />
        <div className={s.title}>
          <div className={s.titleName}>{`${message.customExts?.title_name}`}</div>
          <div className={s.signIn}>打卡</div>
        </div>
      </div>
    </div>
  );
};

export default memo(SignInCardMsg);
