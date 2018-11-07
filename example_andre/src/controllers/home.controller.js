const index = (req,res,next) => {
    res.send(`Bem vindo ${req.params.name} Home Page`);
    next();
}

const remove = (req,res,next) => {
    res.send(`Bem vindo ${req.params.id} Home Page`);
    next();
}

export default {
    index,
    remove
};
