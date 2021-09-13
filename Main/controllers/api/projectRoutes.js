const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    console.log("******************");
    console.log(postData);
    if(postData===1){
      res.status(200).json("success");
    } else {
      res.status(400).json("Post not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
