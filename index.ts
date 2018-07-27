import { Request, Response } from "express";

export let helloWorld = (req: Request, res: Response) => {
  let message = `Hello World`;
  res.status(200).send(message);
};
