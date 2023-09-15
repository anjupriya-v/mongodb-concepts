const { MongoClient, ObjectId } = require("mongodb");
const moment = require("moment");
const process = require("process");
require("dotenv").config();
const url = process.env.MONGODBURL;
const mongoDB = new MongoClient(url);
const _ = require("underscore");
const dbName = "admin";

module.exports.findService = () => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .find({ department: { $in: ["cse"] } })
        .toArray()
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to fetch the documents" });
          } else {
            if (result.length === 0) {
              resolve({
                status: false,
                msg: "No documents found",
                documents: {},
              });
            } else {
              var userNames = [];
              _.map(result, function (user) {
                userNames.push(user.name);
              });
              console.log(userNames);
              resolve({
                status: true,
                msg: "Documents fetched successfully!",
                documents: {
                  result,
                },
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.findOneService = () => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOne({ department: { $nin: ["cse"] } })
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to fetch the document" });
          } else {
            if (result.length === 0) {
              resolve({
                status: false,
                msg: "No document with this id found",
                documents: {},
              });
            } else {
              resolve({
                status: true,
                msg: "Document fetched successfully!",
                documents: {
                  result,
                },
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.updateOneService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .updateOne(
          { _id: new ObjectId(userDetails.objectId) },
          {
            $push: {
              tasks: {
                taskId: userDetails.taskId,
                taskName: userDetails.taskName,
                progressStatus: userDetails.progressStatus,
                createdDate: moment(new Date()).format("MM/DD/YYYY"),
              },
            },
          }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to update the document" });
          } else {
            resolve({
              status: true,
              msg: "Document updated successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.updateManyService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .updateMany(
          { department: userDetails.department },
          {
            $set: {
              projectDone: userDetails.projectDone,
            },
          }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to update the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents updated successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.deleteOneService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .deleteOne({ _id: new ObjectId(userDetails.objectId) })
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to delete the document" });
          } else {
            resolve({
              status: true,
              msg: "Document deleted successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.deleteManyService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .deleteMany({
          projectDone: userDetails.projectDone,
        })
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to delete the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents deleted successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.insertOneService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .insertOne({
          _id: new ObjectId(),
          name: userDetails.name,
          email: userDetails.email,
          department: userDetails.department,
          projectDone: userDetails.projectDone,
        })
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to insert the documents" });
          } else {
            resolve({
              status: true,
              msg: "Document inserted successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.insertManyService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .insertMany(userDetails)
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to insert the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents inserted successfully!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.findOneAndUpdateOldService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOneAndUpdate(
          {
            _id: new ObjectId(userDetails.objectId),
          },
          {
            $set: {
              projectDone: userDetails.projectDone,
            },
          },
          {
            returnDocument: "before",
          }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to update the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents Updated successfully!",
              document: result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.findOneAndUpdateOldService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOneAndUpdate(
          {
            _id: new ObjectId(userDetails.objectId),
          },
          {
            $set: {
              projectDone: userDetails.projectDone,
            },
          },
          {
            returnDocument: "before",
          }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to update the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents Updated successfully!",
              document: result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.findOneAndUpdateNewService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOneAndUpdate(
          {
            _id: new ObjectId(userDetails.objectId),
          },
          { $pull: { tasks: { taskId: { $eq: userDetails.taskId } } } },
          {
            returnDocument: "after",
          }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to update the documents" });
          } else {
            resolve({
              status: true,
              msg: "Documents Updated successfully!",
              document: result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.findOneAndDeleteService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOneAndDelete({
          _id: new ObjectId(userDetails.objectId),
        })
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to delete the document" });
          } else {
            resolve({
              status: true,
              msg: "Document deleted successfully!",
              document: result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports.arrayFiltersUpdateService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .findOneAndUpdate(
          {
            _id: new ObjectId(userDetails.objectId),
          },
          {
            $set: {
              "tasks.$[item].progressStatus": userDetails.progressStatus,
            },
          },
          {
            arrayFilters: [
              {
                "item.taskId": {
                  $ne: userDetails.taskId,
                },
              },
            ],
          },
          { new: true }
        )
        .then((result, error) => {
          if (error) {
            reject({ status: false, msg: "Unable to delete the document" });
          } else {
            resolve({
              status: true,
              msg: "Document deleted successfully!",
              document: result,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
};
