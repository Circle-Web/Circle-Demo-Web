import React, { memo, useEffect, useState } from "react";
import s from "./index.module.less";
import Prismjs from 'prismjs'

// 自定义消息——卡片消息
const CardMsg = (props) => {
  const { message } = props;
  const {title, codeLang, codeContent} = message.customExts ?? {};
  
  console.log('title: ', title)
  const [highlightCode, setHighLightCode] = useState('')

  useEffect(() => {
    const result = Prismjs.highlight(codeContent, Prismjs.languages[`${codeLang}`], codeLang)
    setHighLightCode(result)
  }, [codeContent, codeLang])

  return (
    <div className={s.code} dangerouslySetInnerHTML={highlightCode}></div>
  );
};

export default memo(CardMsg);
