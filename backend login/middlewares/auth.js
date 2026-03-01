import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({message: "Acesso negado."});
    }

    try {

        // Verificar e decodificar o token JWT
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);

        req.userId = decoded.userId;

        next();

    }catch (error) {
        res.status(400).json({message: "Token inválido.", error: error.message});
    }

}

export default auth;