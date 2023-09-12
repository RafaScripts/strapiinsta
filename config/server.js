module.exports = ({ env }) => ({
  host: env('HOST', '45.56.65.31'),
  port: env.int('PORT', 80),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
