exports.todo = (req, res) => {
    res.render('todo');
}

const { todo } = require('../models/index');

exports.gettodos = async (req, res) => {
    try {
        const todos = await todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.posttodos = async (req, res) => {
    try {
        console.log(req.body)
        const {id, title, done} = req.body;
        const newtodos = await todo.create({
            id, title, done
        });

        res.json(newtodos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.gettodos= async (req, res) => {
    try { 
        console.log(req.params.id)
        const { id } = req.params;

        // select * from player where player_id = 1
        const todos = await todo.findOne({
            where: { id }, // { player_id: player_id }
            
        });

        res.json(gettodos); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}