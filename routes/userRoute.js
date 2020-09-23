const router = require("express").Router();
const admin = require("../config/admin");

// Router For Displaying Index.ejs File On Homepage
router.get("/", (req, res) => {
  res.render("index");
});

// Router Handling Login Request For Admin

router.post("/login-admin", (req, res) => {
  if (!admin.checkIfLoggedIn()) {
    const { username, password } = req.body;

    if (admin.checkIfAdmin(username, password)) {
      admin.setLoggedIn();
      res.status(200).json({ message: "Successful" });
    } else {
      res.status(500).json({ message: "Wrong Credentials" });
    }
  } else {
    res.status(500).json({ message: "Already Logged In" });
  }
});

// Router Handling Change Password Request For Admin

router.post("/change-password-admin", (req, res) => {
  if (admin.checkIfLoggedIn()) {
    const { password } = req.body;

    if (admin.changePassword(password)) {
      res.status(200).json({ success: "Sucessful" });
    }
  } else {
    res.status(500).json({ message: "Unauthorized" });
  }
});

// Router Handling LogOut Request For Admin

router.get("/logout-admin", (req, res) => {
  if (admin.checkIfLoggedIn()) {
    admin.setLoggedOut();
    res.status(200).json({ success: "Sucessful" });
  } else {
    res.status(500).json({ message: "Unauthorized" });
  }
});

// Router Handling Upload Request

// router.post("/upload", upload.single("file"), (req, res) => {
//   res.json({ file: req.file });
//   // res.redirect('/');
// });

module.exports = router;
