const Sequelize = require('sequelize'); // sequelize 패키지를 불러옴
const todoModel = require('./Todo');
const config = require(__dirname + '/../config/config.json')["development"]; // db 연결 정보
const db = {}; // 빈 객체 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
); // sequelize 객체

// 모델 불러오기
const todoModel = require('./Todo')(sequelize, Sequelize); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize }

db.todo = todoModel;

// db = { sequelize: sequelize, Sequelize: Sequelize, 
//          Player: PlayerModel, Team: TeamMode, Profile: ProfileModel }

module.exports = db;
// db 객체를 모듈로 내보냄 (-> 다른 파일에서 db 모듈을 사용할 예정)