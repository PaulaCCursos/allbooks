import { userDB } from '../config/database'

function usuarioExiste(email, senha, database = userDB) {
    return database.usuarios.findIndex(user => user.email === email && Number(user.senha) === Number(senha)) !== -1
}

function emailExiste(email, database = userDB) {
    return database.usuarios.findIndex(user => user.email === email) !== -1
}



export default { usuarioExiste, emailExiste }