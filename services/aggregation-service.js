const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const mongoDB = new MongoClient(url);
const dbName = "admin";

module.exports.matchService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $match: { projectDone: true },
          },
        ])
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

module.exports.projectService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $project: { _id: 0, projectDone: 1, "tasks.taskName": 1 },
          },
        ])
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

module.exports.unWindService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $match: {
              _id: new ObjectId("65018cd4a6ffa2646af77cd6"),
            },
          },
          {
            $unwind: "$tasks",
            // preserveNullAndEmptyArrays: true
            // explanation: If true, if the path is null, missing, or an empty array,
            // $unwind outputs the document.

            // If false, if path is null, missing, or an empty array,
            // $unwind does not output a document.

            // The default value is false.
          },
        ])
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

module.exports.lookUpService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $lookup: {
              from: "teams",
              localField: "email",
              foreignField: "teamMembers",
              pipeline: [
                {
                  $project: { _id: 0, teamName: 1 },
                },
              ],
              as: "teamsEnrolled",
            },
          },
          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: [
                  { $arrayElemAt: ["$teamsEnrolled", 0] },
                  "$$ROOT",
                ],
              },
            },
          },
          { $project: { teamsEnrolled: 0, tasks: 0 } },
        ])
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

module.exports.groupFirstLastSumService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $group: {
              _id: "$department",
              firstPerson: {
                $first: "$name",
              },
              lastPerson: {
                $last: "$name",
              },
              totalMarksObtained: {
                $sum: "$totalMarks",
              },
              averageObtained: {
                $avg: "$totalMarks",
              },
            },
          },
          {
            $replaceRoot: {
              newRoot: {
                $mergeObjects: [
                  { $arrayElemAt: ["$teamsEnrolled", 0] },
                  "$$ROOT",
                ],
              },
            },
          },
          { $project: { teamsEnrolled: 0, tasks: 0 } },
        ])
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

module.exports.sortSkipLimitService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $sort: {
              name: 1,
              totalMarks: -1,
            },
          },
          {
            $skip: 1,
          },
          {
            $limit: 2,
          },
        ])
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

module.exports.gteLteCondIfThenElseAndService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $project: {
              name: 1,
              totalMarks: 1,
              remarks: {
                $cond: {
                  if: {
                    $and: [
                      { $lte: ["$totalMarks", 500] },
                      { $gte: ["$totalMarks", 450] },
                    ],
                  },
                  then: "Very Good",
                  else: "Good",
                },
              },
            },
          },
        ])
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

module.exports.gtLtCondIfThenElseOrService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $project: {
              name: 1,
              totalMarks: 1,
              remarks: {
                $cond: {
                  if: {
                    $or: [
                      { $lt: ["$totalMarks", 500] },
                      { $gt: ["$totalMarks", 400] },
                    ],
                  },
                  then: "Very Good",
                  else: "Good",
                },
              },
            },
          },
        ])
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

module.exports.dateToStringService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $project: {
              name: 1,
              email: 1,
              timeStamp: {
                $dateToString: {
                  format: "%Y:%m:%d:%L%z",
                  date: "$timeStamp",
                  timezone: "America/New_York",
                },
              },
            },
          },
        ])
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
module.exports.dateFromStringService = () => {
  return new Promise(function aggregationService(resolve, reject) {
    try {
      mongoDB
        .db(dbName)
        .collection("users")
        .aggregate([
          {
            $project: {
              name: 1,
              email: 1,
              admissionDate: {
                $dateFromString: {
                  dateString: "$admissionDate",
                  timezone: "America/New_York",
                },
              },
            },
          },
        ])
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
