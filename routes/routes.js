var express = require("express");
const router = express.Router();
var crudController = require("../controllers/crud-controller");
var aggregationController = require("../controllers/aggregation-controller");
router.route("/find").get(crudController.findController);
router.route("/find-one").get(crudController.findOneController);
router.route("/update-one").put(crudController.updateOneController);
router.route("/update-many").put(crudController.updateManyController);
router.route("/delete-one").delete(crudController.deleteOneController);
router.route("/delete-many").delete(crudController.deleteManyController);
router.route("/insert-one").post(crudController.insertOneController);
router.route("/insert-many").post(crudController.insertManyController);
router
  .route("/find-one-and-update-old")
  .post(crudController.findOneAndUpdateOldController);
router
  .route("/find-one-and-update-new")
  .post(crudController.findOneAndUpdateNewController);
router
  .route("/find-one-and-delete")
  .delete(crudController.findOneAndDeleteController);
router
  .route("/array-filters-update")
  .put(crudController.arrayFiltersUpdateController);
router.route("/match").get(aggregationController.matchController);
router.route("/project").get(aggregationController.projectController);
router.route("/unwind").get(aggregationController.unWindController);
router.route("/lookup").get(aggregationController.lookUpController);
router
  .route("/group-first-last-sum")
  .get(aggregationController.groupFirstLastSumController);
router
  .route("/sort-skip-limit")
  .get(aggregationController.sortSkipLimitController);
router
  .route("/gte-lte-condIfThenElse-and")
  .get(aggregationController.gteLteCondIfThenElseAndController);
router
  .route("/gt-lt-condIfThenElse-or")
  .get(aggregationController.gtLtCondIfThenElseOrController);
router
  .route("/date-to-string")
  .get(aggregationController.dateToStringController);
router
  .route("/date-from-string")
  .get(aggregationController.dateFromStringController);
router.route("/push-pull").get(aggregationController.pushPullController);

module.exports = router;
