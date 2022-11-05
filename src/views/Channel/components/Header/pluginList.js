import React, { memo, useState, useEffect } from "react";
import s from "./plugin.module.less";
import Icon from "@/components/Icon";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import WebIM from "@/utils/WebIM";
import AvatarInfo from "@/components/AvatarInfo";
import CloseIcon from "@/components/CloseIcon";
import AppLogo from "@/assets/images/app_icon.png"
import ChannelPlus from "@/assets/images/channelPlus.png"

const SCROLL_WARP_ID = "threadListScrollId";
const LIMIT = 20;
const PLUGIN_STOP_ID = '__plugin__shop__id__'

const iframeMap = new Map()

const openPlugin = ({url: src, setting}) => {
    /**
     * @type {HTMLIFrameElement}
     */
    const originIframe = iframeMap.get(src)
    if (originIframe) {
        originIframe.focus()
        return
    }

    const iframe = document.createElement('iframe')
    const root = document.querySelector('body')
    iframe.classList.add('emoji-plugin__stop-body')
    iframe.setAttribute('src', src)
    iframe.style.width = setting?.width || '320px'
    iframe.style.height = setting?.height || '400px'
    root.appendChild(iframe)
    iframeMap.set(src, iframe)
}

const PluginList = (props) => {
    const { serverRole, appUserInfo, onHandleOperation, onClose, visiblePlugin } = props;
    const { serverId, channelId } = useParams();
    const role = serverRole[serverId];

    const [pluginList, setPluginList] = useState(
        [
            {
                logo: AppLogo,
                name: '声网',
                url: 'https://www.agora.io/cn',
                setting: {
                    width: '320px',
                    height: '400px'
                },
                id: 1
            },
            {
                logo: AppLogo,
                name: '测试111',
                url: '',
                id: 2
            },
            {
                logo: AppLogo,
                name: '测试111',
                url: '',
                id: 3
            }
        ]
    )

    const handleShowPluginShop = (item) => {
        if (item.id === PLUGIN_STOP_ID) {
            /** 打开插件商店 */
        } else {
            /** 打开插件 */
            openPlugin(item)
        }
    }

    /**
     * 页面初始化时少于多少个
     */
    useEffect(() => {
        const remainder = pluginList.length % 6 - 1
        const remainderArr = []
        if (remainder) {
            remainderArr.push({
                logo: ChannelPlus,
                name: '添加插件',
                url: '',
                id: PLUGIN_STOP_ID
            })
            for(let i = 0; i < remainder; i++) {
                remainderArr.push({
                    logo: '',
                    name: '',
                    url: '',
                    id: i + 4
                })
            }
        } else {
            remainderArr.push({
                logo: ChannelPlus,
                name: '添加插件',
                url: '',
                id: PLUGIN_STOP_ID
            })
        }
        setPluginList(pluginList.concat(remainderArr))

        console.log(serverRole, appUserInfo)
    }, [])

    return (
        <div className={s.layout}>
            <div className={s.headerThread}>
                <span className={s.headerTitle}>插件商店</span>
                <div className={s.HeaderIcon} onClick={() => onClose()}>
                    <CloseIcon />
                </div>
            </div>
            <div className={s.list}>
                {pluginList.map((item, index) => {
                    return <div className={s.pluginInfo} title={item.name} key={item.id} onClick={() => handleShowPluginShop(item)}>
                        {
                            item.logo && <img src={item.logo} className={s.pluginImg} />
                        }
                        <div className={s.pluginName}>{item.name}</div>
                    </div>
                })}
                {/* <div className={s.pluginInfo}>
                    <img src={ChannelPlus} className={s.pluginImg} />
                    <div className={s.pluginName}>添加插件</div>
                </div> */}
            </div>
        </div>
    );
};

const mapStateToProps = ({ app }) => {
    return {
        serverRole: app.serverRole,
        appUserInfo: app.appUserInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    };
};
export default memo(connect(mapStateToProps, mapDispatchToProps)(PluginList));
