const express = require("express");

const apiRoutes = express.Router();

const adminUnlockController = require("../controller/admin/adminUnlock");
const adminController = require("../controller/admin/Admin");
const internshipController = require("../controller/internship/internship");
const passcodeController = require("../controller/admin/pascode");

apiRoutes.post("/recruiterlogin", adminController.recruiterLogin);

apiRoutes.post("/unlock", adminUnlockController.unlockProfile);

apiRoutes.post("/unlock-all", adminUnlockController.unlockMultipleApplicants);

apiRoutes.post(
	"/allapplicants/:internship_id",
	adminUnlockController.getAllApplicants
);
apiRoutes.post("/sendOtp", adminUnlockController.sendAdminOtp);
apiRoutes.get("/getInternship/:id", adminUnlockController.getInternshipOne);

// apiRoutes.get("/getUnlocked",adminUnlockController.getUnlockProfile);

apiRoutes.get(
	"/unlockedstudent",
	adminUnlockController.getUnlockedStudentProfile
);

apiRoutes.post(
	"/create",
	adminController.authenticateMiddleware,
	passcodeController.createPascode
);
apiRoutes.get("/get", passcodeController.getPascodes);
apiRoutes.get("/getCollegePasscode/:id", passcodeController.getCollegePascode);
apiRoutes.get(
	"/internships",
	adminController.authenticateMiddleware,
	adminController.getInternships
);
apiRoutes.get(
	"/closeInternship/:id",
	adminController.authenticateMiddleware,
	adminController.toggleClose
);
apiRoutes.post(
	"/approve",
	adminController.authenticateMiddleware,
	adminController.toggleApprove
);
apiRoutes.put("/close", internshipController.closeDeadlineInternships);
apiRoutes.post("/saveCommercial", adminController.saveCommercial);
apiRoutes.post(
	"/addInterest",
	adminController.authenticateMiddleware,
	adminController.addInterest
);

apiRoutes.post(
	"/inviteApplicants",
	adminController.authenticateMiddleware,
	adminController.inviteApplicants
);

apiRoutes.post(
	"/internship-comment",
	adminController.authenticateMiddleware,
	adminController.comment
);

apiRoutes.post(
	"/feature-internship",
	adminController.authenticateMiddleware,
	adminController.postFeatureInternship
);

apiRoutes.get(
	"/featured-internship",
	adminController.authenticateMiddleware,
	adminController.getFeaturedInternships
);

apiRoutes.post(
	"/remove-featured",
	adminController.authenticateMiddleware,
	adminController.postRemoveFeatured
);

// apiRoutes.get(
// 	"/getdata",
// 	adminController.authenticateMiddleware,
// 	adminController.getData
// );

// apiRoutes.get(
// 	"/getmycap",
// 	adminController.authenticateMiddleware,
// 	adminController.getMyCap
// );

// apiRoutes.get(
// 	"/getstagedataOne",
// 	adminController.authenticateMiddleware,
// 	adminController.getStageDataOne
// );

// apiRoutes.get(
// 	"/getstagedatatwo",
// 	adminController.authenticateMiddleware,
// 	adminController.getStageDataTwo
// );

apiRoutes.get(
	"/getmycapdata",
	adminController.authenticateMiddleware,
	adminController.getMyCapData
);

// apiRoutes.post("/credits", controller.Credit.AddAdminCredits);

module.exports = apiRoutes;
