import './hide-code.css'
import hideCode from "./hide-code";

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [hideCode].concat(window.$docsify.plugins || []);