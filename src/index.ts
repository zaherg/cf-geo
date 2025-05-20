import { type Context, Hono } from 'hono';
import { cache } from 'hono/cache';
import { etag } from 'hono/etag';
import { poweredBy } from 'hono/powered-by';
import { secureHeaders } from 'hono/secure-headers';
import type { Bindings } from '@/bindings';
import { ratelimit } from '@/lib/middlewares/ratelimit';
import { getCountryName } from '@/lib/utils';

const app = new Hono<{ Bindings: Bindings }>();

app.use(ratelimit())
	.use(
		cache({
			cacheName: 'geo-app',
			cacheControl: 'max-age=600',
		}),
	)
	.use(etag())
	.use(poweredBy())
	.use(secureHeaders());

app.get('/', (ctx: Context) => {
	if (!ctx.req.header('cf-connecting-ip') || !ctx.req.raw.cf)
		return ctx.json({ message: 'something went wrong' }, 500);

	const {
		country: code = "",
		city,
		continent,
		region,
		regionCode,
		timezone,
	} = ctx.req.raw.cf as IncomingRequestCfProperties;

	return ctx.json({
		ip: ctx.req.header('cf-connecting-ip'),
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
