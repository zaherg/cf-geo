import { type Context, Hono } from 'hono';
import { getCountryName } from '@/lib/utils';

const app = new Hono();

app.get('/', (ctx: Context) => {
	if (!ctx.req.header('cf-connecting-ip') || !ctx.req.raw.cf)
		return ctx.json({ message: 'something went wrong' }, 500);

	const {
		country: code,
		city,
		continent,
		region,
		regionCode,
		timezone,
	} = ctx.req.raw.cf as IncomingRequestCfProperties;

	return ctx.json({
		country: getCountryName(code),
		code,
		city,
		continent,
		region,
		regionCode,
		timezone,
		all: ctx.req.raw.cf,
	});
});

export default app;
