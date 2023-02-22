import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="12" fill="#F3F3F3"/>
<path d="M17.25 18H6.74998C6.55107 18 6.3603 18.079 6.21965 18.2197C6.079 18.3603 5.99998 18.5511 5.99998 18.75C5.99998 18.9489 6.079 19.1397 6.21965 19.2803C6.3603 19.421 6.55107 19.5 6.74998 19.5H17.25C17.4489 19.5 17.6397 19.421 17.7803 19.2803C17.921 19.1397 18 18.9489 18 18.75C18 18.5511 17.921 18.3603 17.7803 18.2197C17.6397 18.079 17.4489 18 17.25 18ZM6.74998 16.5H6.81748L9.94498 16.215C10.2876 16.1809 10.608 16.0299 10.8525 15.7875L17.6025 9.03749C17.8645 8.76071 18.0061 8.39137 17.9962 8.01039C17.9864 7.62941 17.8259 7.26787 17.55 7.00499L15.495 4.94999C15.2268 4.69806 14.8753 4.5535 14.5075 4.54382C14.1396 4.53414 13.7811 4.66001 13.5 4.89749L6.74998 11.6475C6.50755 11.892 6.35661 12.2124 6.32248 12.555L5.99998 15.6825C5.98988 15.7923 6.00413 15.9031 6.04172 16.0068C6.07932 16.1105 6.13933 16.2046 6.21748 16.2825C6.28756 16.352 6.37067 16.407 6.46205 16.4443C6.55343 16.4816 6.65127 16.5006 6.74998 16.5ZM14.4525 5.99999L16.5 8.04748L15 9.50998L12.99 7.49999L14.4525 5.99999Z" fill="#5E6272"/>
</svg>`;

export default ({ width = "100%", height = "100%", fill = "none", stroke = "none", style = {} }) => 
    <SvgXml xml={xml} width={width} height={height} fill={fill} style={style} stroke={stroke} />