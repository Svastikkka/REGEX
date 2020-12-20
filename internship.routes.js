const express = require('express');

const apiRoutes = express.Router();

const recruiterController = require('../controller/recruiter/recruiter');
const internshipController = require('../controller/internship/internship');

apiRoutes.post(
    "/closeInternshipGetAllApplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.closeInternshipGetAllApplicants
);

apiRoutes.post(
    "/allapplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.getRecruiterInternshipApplicants
);
apiRoutes.post(
    "/getapplicantscores",
    recruiterController.authenticateMiddleware,
    internshipController.getApplicantScores
);
apiRoutes.get(
    "/acceptedapplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.getInternshipAcceptedApplicants
);
apiRoutes.get(
    "/shortlistedapplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.getInternshipShortlistedApplicants
);
apiRoutes.get(
    "/rejectedapplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.getInternshipRejectedApplicants
);
apiRoutes.get(
    "/pendingapplicants/:id",
    recruiterController.authenticateMiddleware,
    internshipController.getInternshipPendingApplicants
);

module.exports = apiRoutes;