
import post from "../model/post.js";

export const AllUploads = async (req, res, next) => {
    try {
        post.find({}).then(data => {
            res.json(data)
        }).catch(error => {
            res.status(408).json({ error })
        })
    } catch (error) {
        res.json({ error })
    }
};

/** POST: http://localhost:8080/uploads  */
export const AddImage = async (req, res, next) => {
    const body = req.body;
    try {
        const newImage = await post.create(body)
        newImage.save();
        res.status(201).json({ msg: "New image uploaded...!" })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

