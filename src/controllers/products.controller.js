//Functiones que responden a las diferentes rutas relacionadas con productos

const getAllProducts = (req, res) => {
    res.send('recupera todusl los productos[Controlador')
};

const getByDepartment = (req, res) => {
    //console.log(req.params.deptName)
    const { deptName } = req.params
    res.send(`Recupero los prodfuctos por departamento: ${deptName}`)
}
const editProduct = (req, res) => {
    res.send(' editar [Controlador]')
};
module.exports = {
    getAllProducts,
    editProduct,
    getByDepartment
}