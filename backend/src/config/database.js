import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'exercicio_sexta_feira',
            host: 'postgresql://ronaldo:QLWTEYzTXtU8IqOSH4woFR9taQb5RN7d@dpg-d4l2l7npm1nc738ivicg-a.virginia-postgres.render.com/exercicio_sexta_feira',
            port: '5432',
            username: 'ronaldo',
            password: 'QLWTEYzTXtU8IqOSH4woFR9taQb5RN7d',
            dialect: 'postgres'
        })
    }
}

export default new Database()