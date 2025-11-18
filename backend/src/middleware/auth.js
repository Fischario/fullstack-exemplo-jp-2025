import jwt from 'jsonwebtoken'
import ServiceUser from '../service/users.js'

const JWT_SEGREDO = 'AS3nh4d0L0uvr3Er4loUvr3'

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']
            console.log(token.split(' ').pop(0))
        
            if (!token) {
                throw new Error('Tu n pode faze isso n mané, tá chapano maluko')
            }
            
            const decoded = jwt.verify(token.split(' ').pop(0), JWT_SEGREDO)

            const user = await ServiceUser.FindOne(decoded.id)

            if (roles.length && !roles.includes(user.permissao)) {
                throw new Error('Tu não tem permissão pra fazer isso n mané')
            }

            req.headers.user = user

            next()
        } catch (error) {
            res.status(403).send({
                data: null,
                msg: error.message,
                error: true
            })
        }
    }
}