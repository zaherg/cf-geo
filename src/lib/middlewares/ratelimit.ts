import type { Context, MiddlewareHandler } from 'hono';
import { createMiddleware } from 'hono/factory';
import type { Bindings } from '@/bindings';

export const ratelimit = (): MiddlewareHandler =>
	createMiddleware<{ Bindings: Bindings }>(
		async (ctx: Context, next: any) => {
			const ipAddress = ctx.req.header('cf-connecting-ip') || '127.0.0.1';
			const { success } = await ctx.env.RATE_LIMITER.limit({
				key: ipAddress,
			});

			if (success) await next();

			return ctx.json(
				{ message: '429 Failure – rate limit exceeded' },
				429,
			);
		},
	);
