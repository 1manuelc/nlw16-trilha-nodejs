import fastify from 'fastify';
import cors from '@fastify/cors';
import { createTrip } from './routes/create-trip';
import { confirmTrip } from './routes/confirm-trip';
import {
	serializerCompiler,
	validatorCompiler,
} from 'fastify-type-provider-zod';

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, {
	origin: '*',
});

app.register(createTrip);
app.register(confirmTrip);

app.get('/teste', () => {
	return 'Hello NLW';
});

app.listen({ port: 3333 }).then(() => {
	console.log('Server running on localhost:3333');
});
