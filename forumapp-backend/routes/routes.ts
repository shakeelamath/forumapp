import express, { Request, Response } from 'express';
import User from './models/user';
import Post from './models/post';
import Comment from './models/comment';
import Feedback from './models/feedback';

const router = express.Router();

// Get all approved posts
router.get('/posts', async (req: Request, res: Response) => {
  try {
    const approvedPosts = await Post.find({ status: 'approved' });
    res.json(approvedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new post
router.post('/posts', async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;

    const post = new Post({ title, content, userId, status: 'pending' });
    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a post
router.delete('/posts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the post by id
    const post = await Post.findById(id);

    // Check if the post exists and if the user is the owner of the post
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Delete the post
    await post.remove();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Approve a pending post
router.post('/posts/:id/approve', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the post by id
    const post = await Post.findById(id);

    // Check if the post exists and if it's in pending status
    if (!post || post.status !== 'pending') {
      return res.status(404).json({ error: 'Post not found or not pending' });
    }

    // Update the post status to approved
    post.status = 'approved';
    await post.save();

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a comment to a post
router.post('/posts/:id/comments', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content, userId } = req.body;

    // Find the post by id
    const post = await Post.findById(id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Create a new comment for the post
    const comment = new Comment({ content, userId, postId: id });
    await comment.save();

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Provide feedback for a rejected post
router.post('/posts/:id/feedback', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content, userId } = req.body;

    // Find the post by id
    const post = await Post.findById(id);

    // Check if the post exists and if it's in rejected status
    if (!post || post.status !== 'rejected') {
      return res.status(404).json({ error: 'Post not found or not rejected' });
    }

    // Create feedback for the rejected post
    const feedback = new Feedback({ content, userId, postId: id });
    await feedback.save();

    res.json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

