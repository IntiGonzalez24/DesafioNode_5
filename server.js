import express from 'express';
import cors from 'cors'
import joyasRoutes from './routes/joyas.routes.js'
import { joyasLog } from './middleware/joyas.middleware.js';
const app = express();
const PORT = process.env.PORT || 3000

// Ruta principal

app.use(express.json())
app.use(cors())
app.use(joyasLog)
app.use(joyasRoutes)


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});