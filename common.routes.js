const express = require("express");
const validation = require("../services/validation");
const validate = require("express-validation");
const multer = require("multer");
const upload = multer({
	dest: process.env.IMAGE_URL
});

const apiRoutes = express.Router();

const userController = require("../controller/user/user");
const studentController = require("../controller/student/student");
const collegeAdminController = require("../controller/college/collegeAdmin");
const feedbackController = require("../controller/common/Feedback");
const analysisController = require("../controller/common/analysis");
const notificationController = require("../controller/common/notification");
const chatController = require("../controller/common/chat");
const blogController = require("../controller/common/blog");
const trackController = require("../controller/common/track");
const tranningController = require("../controller/common/training");
const likeController = require("../controller/common/like");
const versionController = require("../controller/common/versionCheck");
const dropCvController = require("../controller/common/dropcv");

apiRoutes.get("/check", (req, res) => {
	return res.json({ message: "Api is fully functional" });
});

apiRoutes.post(
	"/userimage",
	userController.authenticateMiddleware,
	userController.getUserImage
);

apiRoutes.post(
	"/uploaduserimage",
	upload.single("file"),
	userController.authenticateMiddleware,
	userController.uploaduserimage
);

apiRoutes.post(
	"/userprofile",
	userController.authenticateMiddleware,
	userController.getProfile
);

apiRoutes.post(
	"/register",
	validate(validation.register),
	userController.register
);
apiRoutes.post("/login", validate(validation.login), userController.login);
apiRoutes.post(
	"/verifyotp",
	validate(validation.verifyotp),
	userController.verifyUser
);

apiRoutes.post("/email", userController.sendemail);
apiRoutes.post("/resendotp", userController.resendOTP);
apiRoutes.post("/sendnewOTP", userController.newOTP);
apiRoutes.post("/sendOtpToPhone", userController.sendOtpToPhone);
apiRoutes.post("/verifyPhoneOtp", userController.verifyPhoneOtp);
apiRoutes.post("/updatepassword", userController.updatePassword);
apiRoutes.post("/updatePascode", userController.updatePascode);
apiRoutes.post("/checkPass", userController.checkPassword);
apiRoutes.post("/changepassword", userController.changePassword);
apiRoutes.post("/changephone", userController.changePhone);
apiRoutes.post("/changeemail", userController.changeEmail);
apiRoutes.post("/newotpemail", userController.newOTPEmailChange);

apiRoutes.post("/getlike", likeController.getPreference);
apiRoutes.post("/updatelike", likeController.updatePreference);

apiRoutes.get(
	"/collegeadmin/applications",
	collegeAdminController.authenticateMiddleware,
	collegeAdminController.getApplications
);

apiRoutes.post(
	"/click/:id",
	studentController.authenticateMiddleware,
	feedbackController.Postfeedback
);
apiRoutes.get(
	"/click",
	studentController.authenticateMiddleware,
	feedbackController.Getfeedback
);

// apiRoutes.get("/student/:id", studentController.getOneStudentProfile);
// apiRoutes.get("/astudent/:id", studentController.getaProfile);

apiRoutes.get(
	"/tests",
	studentController.authenticateMiddleware,
	analysisController.tests
);

apiRoutes.get(
	"/test/expectation",
	studentController.authenticateMiddleware,
	analysisController.expectation
);
apiRoutes.get(
	"/test/workOrientation",
	studentController.authenticateMiddleware,
	analysisController.workOrientation
);
apiRoutes.get(
	"/test/personalityOne",
	studentController.authenticateMiddleware,
	analysisController.personalityOne
);

apiRoutes.post(
	"/response/skills",
	studentController.authenticateMiddleware,
	analysisController.skillsResponse
);
apiRoutes.post(
	"/response/expectation",
	studentController.authenticateMiddleware,
	analysisController.expectationResponse
);
apiRoutes.post(
	"/response/workOrientation",
	studentController.authenticateMiddleware,
	analysisController.workOrientationResponse
);
apiRoutes.post(
	"/response/personalityOne",
	studentController.authenticateMiddleware,
	analysisController.personalityOneResponse
);
apiRoutes.post(
	"/response/personalityTwo",
	studentController.authenticateMiddleware,
	analysisController.personalityTwoResponse
);
apiRoutes.get(
	"/user/getTestsStatus",
	studentController.authenticateMiddleware,
	analysisController.getTestStatus
);

apiRoutes.get(
	"/analysis/personality/score",
	studentController.authenticateMiddleware,
	analysisController.getScores
);

apiRoutes.get(
	"/analysis/personality/toptraits",
	studentController.authenticateMiddleware,
	analysisController.getTopTraits
);

apiRoutes.get(
	"/notifications",
	notificationController.authenticateMiddleware,
	notificationController.getNotifications
);

apiRoutes.get(
	"/new-notifications",
	notificationController.authenticateMiddleware,
	notificationController.getUnreadNotifications
);

apiRoutes.post(
	"/read-notification",
	notificationController.authenticateMiddleware,
	notificationController.readNotification
);

apiRoutes.post(
	"/delete-notification",
	notificationController.authenticateMiddleware,
	notificationController.deleteNotification
);

apiRoutes.post(
	"/delete-bulk-notification",
	notificationController.authenticateMiddleware,
	notificationController.deleteManyNotifications
);

apiRoutes.get(
	"/count-unread-notifications",
	notificationController.authenticateMiddleware,
	notificationController.getCountOfUnreadNotification
);
apiRoutes.post(
	"/updateLastLogin",
	userController.authenticateMiddleware,
	userController.updateLastLogin
);
//*********************** Tracker Routes *************************//
apiRoutes.get("/track", trackController.trackItem);

apiRoutes.post("/trackBlogPage", blogController.createBlogRow);

//*********************** Message Routes *************************//
apiRoutes.get(
	"/internMessages",
	chatController.authenticateMiddleware,
	chatController.checkValidation
);

apiRoutes.get(
	"/internMessages/count-unread-chats",
	chatController.authenticateMiddleware,
	chatController.countUnreadChats
);

//*********************** Training Routes *************************//
apiRoutes.get("/training/:skuNumber", tranningController.getTrainingBySku);

//Version Check
apiRoutes.get("/versioncheck", versionController.versioncheck);

//*********************** DropYourCV Routes *************************//

apiRoutes.post("/drop-your-cv", dropCvController.addCV);

module.exports = apiRoutes;
