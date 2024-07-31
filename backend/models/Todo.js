// Player 모델 정의
const todoModel = (sequelize, DataTypes) => {
    // sequelize 매개변수: models/index.js에서의 sequelize (db연결 정보를 입력하여 생성한 객체)
    // DataTypes 매개변수: modesl/index.js에서의 Sequelize (sequelize 패키지 자체)

    const todo = sequelize.define(
        // param1: 모델 이름 설정
        'todo',
        // parma2: 모델 컬럼 정의 
        {
            id: {
                // player_id int not null primary key auto_increment 
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                // name varchar(63) not null
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            done: {
                // age int not null
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            }
        },
        // param3: 모델 옵션 정의
        {
            freezeTableName: true, // 테이블 명 고정 
            timestamps: true, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
        }
    );

    return todo;
}

module.exports = todoModel;