const crudService = require("../services/crud-service");

module.exports.findController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.findService();
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        documents: result.documents,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.findOneController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.findOneService();
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        documents: result.documents,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.updateOneController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.updateOneService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.updateManyController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.updateManyService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.deleteOneController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.deleteOneService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.deleteManyController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.deleteManyService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.insertOneController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.insertOneService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.insertManyController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.insertManyService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.findOneAndUpdateOldController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.findOneAndUpdateOldService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        document: result.document,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.findOneAndUpdateNewController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.findOneAndUpdateNewService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        document: result.document,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.findOneAndDeleteController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.findOneAndDeleteService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        document: result.document,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};

module.exports.arrayFiltersUpdateController = async (req, res) => {
  var result = null;
  try {
    result = await crudService.arrayFiltersUpdateService(req.body);
    if (result.status) {
      res.send({
        status: true,
        message: result.msg,
        document: result.document,
      });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Something Went Wrong!" });
  }
};
