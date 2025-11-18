import './style.css'
import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import { Link } from 'react-router-dom'

function Users() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>)

    async function TransformaEmLista() {
        const todosPersonagens = await getUsers()

        return todosPersonagens.map(user =>
            <div className='card char' key={user.id}>
                <h2>{user.nome}</h2>
                <h2>{user.email}</h2>
                <div className='actions'>
                    <button>Alterar</button>
                    <button>Deletar</button>
                </div>
            </div>
        )
    }

    async function carregar() {
        setConteudo(await TransformaEmLista())
    }

    useEffect(() => {
        carregar()
    }, [])

    return (
        <main>
            <Link to={'/create/user'}>
                <button>Criar</button>
            </Link>
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}

export default Users