
export default function(req, res, next) {          
    console.log(`Entrou Request ${req}`);
    return next();
}

  