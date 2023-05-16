class UserController {
    async GetUser(reg, res, next)
    {
        try {
            res.json("WORKED")
        } catch(e) {}
    }
}

module.exports = new UserController()