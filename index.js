import express from 'express';
import HelloRoutes from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import UserRoutes from './users/routes.js';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import 'dotenv/config';

const app = express();

app.use(
	cors({
		credentials: true,
		origin: process.env.FRONTEND_URL
	})
);
const sessionOptions = {
	secret: 'any string',
	resave: false,
	saveUninitialized: false
};
if (process.env.NODE_ENV !== 'development') {
	sessionOptions.proxy = true;
	sessionOptions.cookie = {
		sameSite: 'none',
		secure: true
	};
}
app.use(session(sessionOptions));

app.use(express.json());

Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
HelloRoutes(app);
UserRoutes(app);

mongoose.connect(process.env.MONGO_URL).then(() => app.listen(process.env.PORT || 4000).on('listening', () => console.log('Server is running')));
