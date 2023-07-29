import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-slate-300 mb-4"><h1 class="text-4xl"><a href="/">${escape(title)}</a></h1></header> <main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
