import express from "express";
import axios from "axios";
import isAuthed from "../../isAuthed.js";
const router = express.Router();

router.get("/", isAuthed, async (req, res) => {
    const { data } = await axios.get("http://localhost:3100/skills")

    const filteredData = data.filter(skill => skill.userId === req.token.id)

    res.json(filteredData)
});

router.post("/", isAuthed, async (req, res) => {
    const { title, description } = req.body;

    if (!req.body.title || !req.body.description) {
        return res.status(400).json({
            err: "Title and description are required"
        })
    }

    await axios.post("http://localhost:3100/skills", {
        title,
        description,
        userId: req.token.id
    })

    res.json({ msg: "Skill added" })
}
);



export default router;