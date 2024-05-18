export type Bindings = {
	[key in keyof Env]: Env[key];
};
