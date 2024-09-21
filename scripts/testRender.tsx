import { renderToString } from "solid-js/web";
import { App } from "../src/index";

const html = renderToString(() => App)
console.log(html)

