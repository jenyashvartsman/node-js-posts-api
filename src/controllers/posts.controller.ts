import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { IPostModel } from "../models/post.model";
import { appConfig } from "../config/app.config";

const apiUrl = appConfig.postsApiUrl;

// get posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  const result = await axios.get(apiUrl);
  const posts: IPostModel[] = result.data;
  return res.json(posts);
};

// get post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const result = await axios.get(`${apiUrl}/${id}`);
    const post: IPostModel = result.data;
    return res.json(post);
  } catch (e) {
    res.status(500).send(e);
  }
};

// create post
const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post: IPostModel = req.body;
    const result = await axios.post(apiUrl, post);
    const createdPost: IPostModel = result.data;
    return res.send(createdPost);
  } catch (e) {
    res.status(500).send(e);
  }
};

// update post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const post: IPostModel = req.body;
    const result = await axios.put(`${apiUrl}/${id}`, post);
    const updatedPost: IPostModel = result.data;
    return res.send(updatedPost);
  } catch (e) {
    res.status(500).send(e);
  }
};

// delete post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await axios.delete(`${apiUrl}/${id}`);
    const deletedPost: IPostModel = result.data;
    return res.send(deletedPost);
  } catch (e) {
    res.status(500).send(e);
  }
};

export default { getPosts, getPost, createPost, updatePost, deletePost };
