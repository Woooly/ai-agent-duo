import express from 'express'
import receitasRoutes from './src/route/receitas.route.js'
import cors from 'cors'

const app = express ()
const PORT = process.env.PORT || 3001;

const corsOptions = {
    
    origin: [
        'http://localhost:5173',         
        'https://ai-agent-duo.vercel.app' 
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/receitas', receitasRoutes)


app.listen(PORT, () => {
    console.log(`Servidor Rodando na Porta ${PORT}`)

})
  