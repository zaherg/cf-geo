import type { Context, Env, MiddlewareHandler } from 'hono';
import { createMiddleware } from 'hono/factory';

export const ratelimit = (): MiddlewareHandler =>
	createMiddleware<{ Bindings: Env }>(async (ctx: Context, next: any) => {
		const ipAddress = ctx.req.header('cf-connecting-ip') || '127.0.0.1';
		const { success } = await ctx.env.RATE_LIMITER.limit({
			key: ipAddress,
		});

		if (success) await next();

		return ctx.json({ message: '429 Failure – rate limit exceeded' }, 429);
	});
