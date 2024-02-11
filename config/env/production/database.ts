export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 32768),
			database: env('DATABASE_NAME', 'strapi-campaign-writer'),
			user: env('DATABASE_USERNAME', 'postgres'),
			password: env('DATABASE_PASSWORD', 'Hammerhead-12'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
