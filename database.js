import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

class Database {
    constructor() {

    }
}

function initDatabase() {
    var db = new JsonDB(new Config("myDataBase", true, false, '/'));


}

exports.initDatabase = initDatabase;