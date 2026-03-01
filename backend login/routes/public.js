import express from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();


const JWT_SECRET = process.env.JWT_SECRET;

// Cadastro de usuário

router.post('/register', async (req, res) => {

    try {
    const user =req.body;
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
            password: hashedPassword,
        },
    });
    res.status(201).json({message: "Usuário cadastrado com sucesso", user});
} catch (error) {
    res.status(500).json({message: "Erro ao cadastrar usuário", error: error.message});
}
});

// Login de usuário

router.post('/login', async (req, res) => {
    console.log("Chegou no login", req.body);

    const userInfo = req.body;

    try {

        // Buscar o usuário no banco de dados pelo email
        const user = await prisma.user.findUnique({
            where: {
                email: userInfo.email,
            },
        })
        // Verificar se o usuário existe
        if (!user) {
            return res.status(404).json({message: "Usuário não encontrado"});
        }

        // Comparar a senha fornecida com a senha armazenada no banco de dados
        const isMatch = await bcrypt.compare(userInfo.password, user.password);

// Gerar um token JWT para autenticação futura
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1m' });


        if (!isMatch) {
            return res.status(400).json({message: "Senha incorreta"});
        }
        
        // Se a senha estiver correta, retornar uma resposta de sucesso
        console.log("Login bem-sucedido");
        res.status(200).json({message: "Login bem-sucedido", token});

    // Tratar erros durante o processo de login
    } catch (error) {
        res.status(500).json({message: "Erro ao realizar login", error: error.message});
    }

});

export default router;