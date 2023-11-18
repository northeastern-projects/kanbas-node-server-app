// const express = require("express");
import express from 'express';
import HelloRoutes from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import cors from 'cors';

const app = express();

app.use(
	cors({
		origin: '*'
	})
);
app.use(express.json());

Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
HelloRoutes(app);

app.listen(process.env.PORT || 4000).on('listening', () => console.log('Server is running'));
