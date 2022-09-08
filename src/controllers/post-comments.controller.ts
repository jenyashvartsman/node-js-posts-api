import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { appConfig } from "../config/app.config";
import { IPostCommentModel } from "../models/post-comment.model";

const apiUrl = `${appConfig.baseApiUrl}/comments`;

// get comments
const getComments = async (req: Request, res: Response, next: NextFunction) => {
  const result = await axios.get(apiUrl);
  const comments: IPostCommentModel[] = result.data;
  return res.json(comments);
};

// get comment
const getComment = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const result = await axios.get(`${apiUrl}/${id}`);
    const comment: IPostCommentModel = result.data;
    return res.json(comment);
  } catch (e) {
    res.status(500).send(e);
  }
};

// get post comments
const getPostComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postId = req.params.postId;
  const result = await axios.get(apiUrl, { params: { postId } });
  const comments: IPostCommentModel[] = result.data;
  return res.json(comments);
};

export default {
  getComments,
  getComment,
  getPostComments,
};
