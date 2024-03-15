const express = require("express");
const passport = require("passport");
const router = express.Router();

const IssueObject = require("../models/issue");

const SERVER_ERROR = "SERVER_ERROR";


router.get("/my-issues", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        const assigneeId = req.user._id
        const data = await IssueObject.find({ assigneeId: assigneeId }).sort("-last_updated_at");
        return res.status(200).send({ ok: true, data });
    } catch (error) {

        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});


router.put("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        const obj = req.body;
        console.log('sentence2', req.body, req.params);
        const data = await IssueObject.findByIdAndUpdate(req.params.id, obj, { new: true });

        res.status(200).send({ ok: true, data });
    } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});
router.get("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        const data = await IssueObject.find({ _id: req.params.id });
        const normalizedData = data[0]
        return res.status(200).send({ ok: true, data: normalizedData });
    } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});

router.get("/project/:projectId", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        const data = await IssueObject.find({ projectId: req.params.projectId }).sort("-last_updated_at");
        return res.status(200).send({ ok: true, data });
    } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});


router.post("/", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        const issue = await IssueObject.create({ ...req.body, reporter: req.user.name });

        res.status(200).send({ ok: true, data: issue });
    } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});



router.delete("/:id", passport.authenticate("user", { session: false }), async (req, res) => {
    try {
        await IssueObject.findByIdAndDelete(req.params.id);
        res.status(200).send({ ok: true, data: null });
    } catch (error) {
        console.log(error);
        res.status(500).send({ ok: false, code: SERVER_ERROR, error });
    }
});

module.exports = router;
