const { PostService } = require('../services');

module.exports = async (req, res) => {
  const posts = await PostService.getPosts(req);
  console.log(req.user.dataValues);
  res.status(200).json({ mockPosts: posts });
};
