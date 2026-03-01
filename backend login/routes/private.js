import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/list-users', async (req, res) => {
    try {
        // Listar todos os usuários, omitindo a senha (não mostrar a senha na resposta)
        const users = await prisma.user.findMany({omit: {password: true}});
        res.status(200).json(users);
    }catch (error) {
        res.status(500).json({message: "Erro ao listar usuários", error: error.message});
    }
});

export default router;