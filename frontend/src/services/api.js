import axios from 'axios'

const API_URL = 'https://ai-agent-duo-bdy5.vercel.app/api'

export const api = async (pergunta) => {
    try {
        const response = await axios.post(`${API_URL}/receitas/perguntar`, {
            pergunta
        })

        return response.data.resposta

    } catch(err){
        console.error("Erro ao buscar resposta no servidor:", err)
        throw err

    }
}
