import WebIM from "./WebIM";

/**
 * send custom message
 * @param {object} optionn.channelId 频道ID
 * @param {object} optionn.customEvent customType
 * @param {object} optionn.customEvent 频道ID
 * @param {object} optionn.customExts 频道ID
 * @param {object} optionn.ext 频道ID
 */
export const sendCustomMessage = (config) => {
    const { channelId: to, customEvent, customExts, ext = {} } = config
    let option = {
        // 会话类型，设置为群聊。
        chatType: 'groupChat',
        /**
         * 消息类型
         */
        type: 'custom',
        /**
         * 消息接收方, 发送频道消息
         */
        to,
        customEvent,
        customExts,
        ext
    }
    let msg = WebIM.message.create(option); 

    WebIM.conn.send(msg).then(() => {
        console.log('send text message Success');  
    }).catch((e) => {
        console.log("Send text message error");  
    })
}