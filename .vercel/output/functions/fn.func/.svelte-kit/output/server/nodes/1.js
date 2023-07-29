

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c09a6551.js","_app/immutable/chunks/scheduler.ed8b2b12.js","_app/immutable/chunks/index.de04e099.js","_app/immutable/chunks/singletons.465cb4ad.js"];
export const stylesheets = ["_app/immutable/assets/1.f870a4f1.css"];
export const fonts = [];
