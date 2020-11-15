import { Router } from 'express';
import { existsSync, readFileSync } from 'fs';

export const MediaRouter = Router();

const pipe = (req, res, next, path) => {
	if (existsSync(path)) {
		try {
			const data = readFileSync(path);
			res.writeHead(200, { 'Content-Type': 'image/jpeg' });
			res.end(data);
		} catch (e) {
			next(e);
		}
	} else {
		res.writeHead(404);
		res.end();
	}
};

const pipeImagePost= (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/posts/${filename}`;
	pipe(req, res, next, path);
};
const pipeImageTheme = (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/themes/${filename}`;
	pipe(req, res, next, path);
};
const pipeImageProduct = (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/products/${filename}`;
	pipe(req, res, next, path);
};
const pipeImageStore = (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/stores/${filename}`;
	pipe(req, res, next, path);
};
const pipeImageMention = (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/mentions/${filename}`;
	pipe(req, res, next, path);
};
const pipeImageChat = (req, res, next) => {
	const filename = req.params.name;
	const path = `./uploads/chat/${filename}`;
	pipe(req, res, next, path);
};
MediaRouter.all('/posts/:name', pipeImagePost);
