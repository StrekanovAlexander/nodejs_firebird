module.exports.options = (host, database, user, password) => {
  return {
    host: host,
    port: 3050,
    database: database,
    user: user,
    password: password,
    lowercase_keys: false,
    role: null,
    pageSize: 4096,
    retryConnectionInterval: 1000
  }
}