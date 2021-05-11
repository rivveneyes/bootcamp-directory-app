//@ desc get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "show all bootcamps" });
};

//@ desc get single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `SHow bootcamp ${req.params.id}` });
};

//@ desc   Update new bootcamp
//@route  POST/api/v1/bootcamps/:id
//@access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Create new boot camp" });
};

//@ desc   Update bootcamp
//@route  PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
};

//@ desc   Delete bootcamp
//@route  Delete /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
};
