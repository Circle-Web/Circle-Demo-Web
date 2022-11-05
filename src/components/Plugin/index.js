import { createRoot } from "react-dom/client"
import s from './index.module.less'
import CloseIcon from "@/components/CloseIcon";
import useDraggable from 'use-draggable-hook'

const iframeMap = new Map()
const iframeDOMMap = new WeakMap()


/**
 * 
 * @param {object} param
 * @param {string} param.url
 * @param {object} param.setting
 * @param {string} param.setting.width
 * @param {string} param.setting.height
 * @returns 
 */
const Plugin = ({url, setting}) => {

    const width = setting?.width ?? '375px'
    const height = setting?.width ?? '540px'

    const {
        target
    } = useDraggable({
        maxDistance: {
            x: {
                min: -1025,
                max: 40
            },
            y: {
                min: -40,
                max: 300
            }
        }
    })

    /**
     * 
     * @param {string} url 
     */
    const handleClose = (url) => {
        /**
         * @type {HTMLDivElement}
         */
        const rootDOM = iframeMap.get(url)
        const iframeDOM = iframeDOMMap.get(rootDOM)
        const body = document.querySelector('body')
        iframeDOM?.unmount()
        rootDOM && body.removeChild(rootDOM)
        iframeMap.delete(url)
    }

    return (
        <div className={s.pluginBody} style={{width: width, height: height}} ref={target}>
            <div className={s.close} onClick={() => {
                handleClose(url)
            }}>
                <CloseIcon />
            </div>
            <div className={s.drag}>按住此处可进行拖动</div>
            <div className={s.layer}>
                <iframe src={url} className={s.iframe}></iframe>
            </div>
        </div>
    )
}

/**
 * 
 * @param {object} plugin 
 * @param {string} plugin.url
 * @param {string} plugin.setting
 */
export const openPlugin = (plugin) => {
    const originIframe = iframeMap.get(plugin.url)
    if (originIframe) {
        originIframe.focus()
        return
    }

    /**
     * @type {HTMLDivElement}
     */
    const rootDOM = document.createElement('div')
    const body = document.querySelector('body')
    body.appendChild(rootDOM)
    const root = createRoot(rootDOM)
    root.render(<Plugin url={plugin.url} setting={plugin.setting} />)
    iframeMap.set(plugin.url, rootDOM)
    iframeDOMMap.set(rootDOM, root)
}