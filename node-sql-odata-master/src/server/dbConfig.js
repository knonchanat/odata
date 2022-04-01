/* For connection based on tedious
var config = {  
        server: 'freedom-development.database.windows.net',  
        authentication: {
            type: 'default',
            options: {
                userName: 'freedom', 
                password: 'Logic@123'  
            }
        },
        options: {
            encrypt: true,
            database: 'FreedomDev'  
        }
    };  
    */

    const dbConfig = {
      user: "supleman@hack2build",
      password: "Stcc1234",
      server: "hack2build.database.windows.net",
      database: "vrock_db",
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  };
  
  export default dbConfig;
  