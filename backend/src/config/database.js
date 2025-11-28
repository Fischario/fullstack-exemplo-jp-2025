import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'exercicio_sexta_feira',
            host: 'dpg-d4l2l7npm1nc738ivicg-a',
            port: 5432,
            username: 'ronaldo',
            password: 'QLWTEYzTXtU8IqOSH4woFR9taQb5RN7d',
            dialect: 'postgres'
        })
    }
}

export default new Database()