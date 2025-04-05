const getAllPosts = (req,res) => {
    res.status(200).json({message : "Get all posts"});
}

const createPost = (req,res) => {
    res.status(200).json({message : "Create a new post"});
}
const updatePost = (req,res) => {
    res.status(200).json({message : `Update post with id ${req.params.id}`});
}
const getPost = (req,res) => {
    res.status(200).json({message : `Get post with id ${req.params.id}`});
}
const deletePost = (req,res) => {
    res.status(200).json({message : `Delete post with id ${req.params.id}`});
}