import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { IPostModel } from "../models/post.model";
import { appConfig } from "../config/app.config";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  const result: AxiosResponse = await axios.get(appConfig.postsApiUrl);
  const posts: IPostModel[] = result.data;
  return res.json(posts);
};

export default { getPosts };
