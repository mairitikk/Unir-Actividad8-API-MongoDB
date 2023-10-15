const getAllUsers = (req, res) => {
    res.json({
        message: 'recupero todos los usarios'
    })
}


const getActiveUsers = (req, res) => {
    res.send('Recuperarusarios  [Controlador')
}
const getCommentFromUserById = (req, res) => {
    const { userId, commentId } = req.params;
    res.send(`Recupero el comentario ${commentId} xxx del usario `)
}
const createUser = (req, res) => {
    console.log(req.body)
    res.json({ message: ' usario creado[Controlador' })
}
const deleteUser = (req, res) => {
    res.json({ message: 'Delete user [Controlador' })
}
const updateUser = (req, res) => {
    res.json({ message: 'Se actualiza e usario' })
}

module.exports = { getActiveUsers, createUser, deleteUser, getCommentFromUserById, getAllUsers, updateUser };

//CRUDE USERS
//GET /api/users-recupera todos los usarios
//POST /api/users -Crea un nuevo usario
//PUT /api/users -acutualiza un usario
//DELETE /api/users Borra un usrio

