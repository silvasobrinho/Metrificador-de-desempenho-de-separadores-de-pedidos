// LOCAL DE ARMAZENAMENTO DAS CREDENCIAIS DA MINHA BASE DE DADOS
module.exports = {
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT+3',
      },
    host: 'localhost',
    port: '3308',
    username: 'root',
    password: 'alberto1995',
    database: 'famartapi',
    define: {
     
    }
}