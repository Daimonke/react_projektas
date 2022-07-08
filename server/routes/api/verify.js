import express from "express";
import isAuthed from "../../isAuthed.js";
const router = express.Router();

router.get("/", isAuthed, async (req, res) => {
    res.json({ msg: "OK" })
});



export default router;