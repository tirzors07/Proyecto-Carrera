import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './src/config/config.js';
import { authMiddleware } from './src/middleware/auth-middleware.js';
import authRoutes from './src/routes/auth-routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cookieParser());
app.use(authMiddleware);

app.use(express.static(path.join(__dirname, '/../client/')));
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '/../client/index.html'));
})
app.use('/', authRoutes);
app.get('/protected', (req, res) => { 
    if (!req.session.user)
        return res.status(401).send('Unauthorized');
    res.sendFile(path.join(__dirname, '/../client/protected.html'));
})
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
})