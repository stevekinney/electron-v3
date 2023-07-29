import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b9a167a9.js","_app/immutable/chunks/scheduler.ed8b2b12.js","_app/immutable/chunks/index.de04e099.js","_app/immutable/chunks/config.410aef7e.js"];
export const stylesheets = ["_app/immutable/assets/0.90bddf8e.css"];
export const fonts = ["_app/immutable/assets/alegreya-cyrillic-ext-wght-normal.fb1d1afe.woff2","_app/immutable/assets/alegreya-cyrillic-wght-normal.1f8c4d4a.woff2","_app/immutable/assets/alegreya-greek-ext-wght-normal.91262899.woff2","_app/immutable/assets/alegreya-greek-wght-normal.2b4b7580.woff2","_app/immutable/assets/alegreya-vietnamese-wght-normal.7262b8dd.woff2","_app/immutable/assets/alegreya-latin-ext-wght-normal.910993e9.woff2","_app/immutable/assets/alegreya-latin-wght-normal.06617847.woff2","_app/immutable/assets/montserrat-cyrillic-ext-wght-normal.3fef5946.woff2","_app/immutable/assets/montserrat-cyrillic-wght-normal.a8447cde.woff2","_app/immutable/assets/montserrat-vietnamese-wght-normal.56544b89.woff2","_app/immutable/assets/montserrat-latin-ext-wght-normal.cffe1393.woff2","_app/immutable/assets/montserrat-latin-wght-normal.ae919a7c.woff2","_app/immutable/assets/fira-code-cyrillic-ext-wght-normal.ef7bea3d.woff2","_app/immutable/assets/fira-code-cyrillic-wght-normal.58c07f42.woff2","_app/immutable/assets/fira-code-greek-ext-wght-normal.02d875a5.woff2","_app/immutable/assets/fira-code-greek-wght-normal.ad96eed1.woff2","_app/immutable/assets/fira-code-latin-ext-wght-normal.4b16ae45.woff2","_app/immutable/assets/fira-code-latin-wght-normal.1bee40b0.woff2"];
