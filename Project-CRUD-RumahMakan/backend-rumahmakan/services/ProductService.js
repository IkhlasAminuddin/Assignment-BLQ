module.exports = exports = (app, pool) => {
  app.get("/api/product", (req, res) => {
    const queryAll = `select * from Menu order by active desc`;

    pool.query(queryAll, (error, result) => {
      if (error) {
        return res.send(400, {
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

  app.post("/api/addproduct", (req, res) => {
    const { nama, harga, stock, deskripsi, foto, jenis } = req.body;

    const duplicateCheck = `select count(*) as count from Menu where nama ilike '${nama}'`;
    pool.query(duplicateCheck, (error, result) => {
      if (error) {
        return res.send(500, {
          success: false,
          data: error,
        });
      }
      const duplicateCount = result.rows[0].count;
      if (duplicateCount > 0) {
        return res.send(200, {
          success: false,
          data: "Product sudah ada.",
        });
      }
      const queryAdd = `insert into Menu(nama, harga, stock, deskripsi,  foto, jenis, create_by, create_date)
        values('${nama}', ${harga}, ${stock}, '${deskripsi}','${foto}', '${jenis}', 'Admin', 'now()');`;
      console.log(queryAdd);
      pool.query(queryAdd, (error, result) => {
        if (error) {
          return res.send(500, {
            success: false,
            data: error,
          });
        } else {
          return res.send(200, {
            success: true,
            data: `data ${nama} berhasil ditambahkan!`,
          });
        }
      });
    });
  });

  app.get("/api/product/:id", (req, res) => {
    const id = req.params.id;
    const query = `select * from Menu where id=${id}`;
    console.log(query);

    pool.query(query, (error, result) => {
      if (error) {
        return res.send(400, {
          success: false,
          data: error,
        });
      } else {
        return res.send(200, {
          success: true,
          data: result.rows[0],
        });
      }
    });
  });

  app.put("/api/editproduct/:id", (req, res) => {
    const id = req.params.id;
    const { nama, harga, stock, deskripsi, foto, jenis } = req.body;

    const idCheck = `select count(*) as count from Menu where id = ${id}`;
    pool.query(idCheck, (error, result) => {
      if (result) {
        var idNotFound = Number(result.rows[0].count);
        if (idNotFound == 0) {
          return res.send(500, {
            success: false,
            data: "Id not found",
          });
        }
      }
      const duplicateCheck = `select count(*) as count from Menu where nama ilike '${nama}' and id != ${id}`;
      pool.query(duplicateCheck, (error, result) => {
        if (error) {
          return res.send(500, {
            success: false,
            data: "Error!",
          });
        }
        const duplicateCount = result.rows[0].count;
        if (duplicateCount > 0) {
          return res.send(200, {
            success: false,
            data: "Data already exist!",
          });
        }
        const queryEdit = `update Menu 
        set nama='${nama}',
            jenis='${jenis}',
            harga=${harga},
            stock=${stock},
            deskripsi= '${deskripsi}',
            foto='${foto}',
            modify_by='Admin',
            modify_date ='now()'
            where id = ${id};`;

        pool.query(queryEdit, (error, result) => {
          if (error) {
            return res.send(400, {
              success: false,
              data: error,
            });
          } else {
            return res.send(200, {
              success: true,
              data: `${nama} was updated!`,
            });
          }
        });
      });
    });
  });


  app.put("/api/deleteproduct/:id", (req, res) => {
    const id = req.params.id;
    const queryDelete = `update menu set modify_by = 'Admin', 
    modify_date='now()', active = false where id = ${id}`;

    pool.query(queryDelete, (error, result) => {
      if (error) {
        return res.send(400, {
          success: false,
          data: error,
        })
      } else {
        return res.send(200, {
          success: true,
          data: "Data berhasil dihapus",
        })
      }
    })
  });

  app.put("/api/activeproduct/:id", (req,res) => {
    const id = req.params.id;
    const queryActive = `update menu set modify_by = 'Admin',
    modify_date='now()', active = true where id = ${id}`

    pool.query(queryActive, (error, result) => {
      if (error) {
        return res.send(400, {
          success: false,
          data: error,
        })
      } else {
        return res.send(200, {
          success: true,
          data: "Data berhasil diaktifkan"
        })
      }
    })
  })
};
