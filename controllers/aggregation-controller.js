const aggregationService = require("../services/aggregation-service");

module.exports.matchController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.matchService();
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

module.exports.projectController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.projectService();
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

module.exports.unWindController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.unWindService();
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

module.exports.lookUpController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.lookUpService();
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

module.exports.groupFirstLastSumController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.groupFirstLastSumService();
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

module.exports.sortSkipLimitController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.sortSkipLimitService();
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

module.exports.gteLteCondIfThenElseAndController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.gteLteCondIfThenElseAndService();
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

module.exports.gtLtCondIfThenElseOrController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.gtLtCondIfThenElseOrService();
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

module.exports.dateToStringController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.dateToStringService();
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

module.exports.dateFromStringController = async (req, res) => {
  var result = null;
  try {
    result = await aggregationService.dateFromStringService();
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
