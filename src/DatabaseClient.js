module.exports = {
  url: `${process.env.DB_MODE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
};
