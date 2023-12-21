module.exports = exports = (app, pool) => {
  app.get("/api/menuproduct", (req, res) => {
    const queryMenu = `select * from Menu where active = true`;
    pool.query(queryMenu, (error, result) => {
      if (error) {
        return res.send(500, {
          success: false,
          data: error,
        });
      } else {
        return res.send(200, {
          success: true,
          data: result.rows,
        });
      }
    });
  });
};
