const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const mongoDB = new MongoClient(url);
const dbName = "admin";

module.exports.findService = () => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .find()
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
        .findOne({ _id: new ObjectId("650179d6e3c4ff05fc214948") })
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
          { _id: userDetails.objectId },
          {
            $set: {
              name: userDetails.name,
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

module.exports.updateOneService = (userDetails) => {
  return new Promise(function crudService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .updateOne(
          { _id: new ObjectId(userDetails.objectId) },
          {
            $set: {
              name: userDetails.name,
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
          {
            $set: {
              projectDone: userDetails.projectDone,
            },
          },
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
                  $eq: userDetails.taskId,
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
