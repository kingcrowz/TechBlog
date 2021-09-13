const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.status(400).json("User is not logged in");
            return
        }
        req.body.user_id = req.session.user_id;
        const newCom = await Comment.create(req.body);
        res.status(200).json(newCom);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


module.exports = router;