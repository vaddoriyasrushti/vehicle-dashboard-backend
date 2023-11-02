const {
    Router
} = require("express");
const router = Router();

const Sequelize = require('sequelize');
const {
    vehicle
} = require("../sequelize");
const Op = Sequelize.Op;

// for get vehicle list
router.get("/", (req, res) => {
    vehicle.findAll()
        .then(result => {
            res.json(result).status(200);
        })
        .catch(err => {
            res.json({
                error: JSON.stringify(err)
            }).status(400);
        });
});
router.get("/:vehicleNo", (req, res) => {
    vehicle
        .findAll({
            where: {
                no: req.params.vehicleNo
            }
        })
        .then(result => {
            res.json(result).status(200);
        })
        .catch(err => {
            res.json({
                error: JSON.stringify(err)
            }).status(400);
        });
});

router.delete('/:vehicleNo', (req, res) => {
    return vehicle.destroy({
        where: {
            no: req.params.vehicleNo
        }
    }).then((res) => {
        res.json(res).status(200);
    }).catch((err) => {
        res.json({
            "error": JSON.stringify(err)
        }).status(400);
    });
});

router.post("/", (req, res) => {
  let obj = new vehicle();
  const {make, model, year, price, status} = req.body;
  obj.make=make;
  obj.model=model;
  obj.year=year;
  obj.price=price;
  obj.status=status;
  return obj
      .save()
      .then(vehicle => {
          res.json(vehicle).status(200);
      })
      .catch(err => {
          res.json({
              error: err
          }).status(400);
      });
});
  

router.put('/:no', (req, res) => {
    console.log('put method execute');
    const {no} = req.params;
    vehicle
      .findAll({
        where: {
          no: {
            [Op.eq]: no
          }
        }
      })
      .then(result => {
        if (result.length < 1) {
          res.json({
            error: "vehicle number doesn't exist"
          });
        } else {
          return vehicle.update(req.body, {
            where: {
              no
            }
          }).then((result) => {
            res.json(result).status(200);
          }).catch((err) => {
            res.json({
              "error": JSON.stringify(err)
            }).status(400);
          });
        }
      })
      .catch((err) => {
        res.json({
          "error": JSON.stringify(err)
        }).status(400);
      });
  });
  
module.exports = router;