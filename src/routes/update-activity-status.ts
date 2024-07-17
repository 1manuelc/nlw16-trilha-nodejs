import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { ClientError } from '../errors/client-error';

export async function updateActivityStatus(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().put(
		'/activities/:activityId',
		{
			schema: {
				params: z.object({ activityId: z.string().uuid() }),
				body: z.object({ is_done: z.coerce.boolean() }),
			},
		},
		async (request) => {
			const { activityId } = request.params;
			const { is_done } = request.body;

			const activity = await prisma.activity.findUnique({
				where: { id: activityId },
			});

			if (!activity) {
				throw new ClientError('Activity not found.');
			}

			await prisma.activity.update({
				where: { id: activityId },
				data: { is_done },
			});

			return { activityId: activity.id };
		}
	);
}
