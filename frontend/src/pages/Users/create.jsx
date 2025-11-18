import { useState } from "react"
import { createUser } from "../../api/users"
import { useNavigate } from "react-router-dom"

export default function CreateUser() {
    const navigate = useNavigate()
    const [ user, setUser ] = useState({
        nome: '',
        email: '',
        senha: '',
        ativo: true
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser({
            ...user,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria bom validar os baguio do user
        const response = await createUser(user)
        if (response.status == 201) {
            navigate('/users')
        }
    }

    return (
        <main>
            <form>
                <div>
                    <label>Nome: </label>
                    <input type="text" name="nome" id="nome" value={user.nome} onChange={handleChange}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" id="email" value={user.email} onChange={handleChange}/>
                </div>
                <div>
                    <label>Senha: </label>
                    <input type="text" name="senha" id="senha" value={user.senha} onChange={handleChange}/>
                </div>
                <div>
                    <label>Ativo: </label>
                    <input type="checkbox" name="ativo" id="ativo" value={user.ativo} onChange={handleChange}/>
                </div>
                <button type="submit" onClick={handleSave}>Enviar</button>
                <button type="reset">Limpar</button>
            </form>
        </main>
    )
}