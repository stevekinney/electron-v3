export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/kitteh.jpeg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a0f0da2a.js","app":"_app/immutable/entry/app.caf80534.js","imports":["_app/immutable/entry/start.a0f0da2a.js","_app/immutable/chunks/scheduler.ed8b2b12.js","_app/immutable/chunks/singletons.465cb4ad.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.caf80534.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.ed8b2b12.js","_app/immutable/chunks/index.de04e099.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
