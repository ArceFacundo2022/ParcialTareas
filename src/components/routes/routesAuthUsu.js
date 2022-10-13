const router = require('express').Router();

const {login} = require("../controllers/controladorUsuarioAuth")

router.post("/login",login)


module.exports = router;
