import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { appConfig } from "../config/app.config";
import { IUserModel } from "../models/user.model";

const apiUrl = `${appConfig.baseApiUrl}/users`;

// get users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const result = await axios.get(apiUrl);
  const users: IUserModel[] = result.data;
  return res.json(users);
};

// get user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const result = await axios.get(`${apiUrl}/${id}`);
    const user: IUserModel = result.data;
    return res.json(user);
  } catch (e) {
    res.status(500).send(e);
  }
};

export default {
  getUsers,
  getUser,
};
