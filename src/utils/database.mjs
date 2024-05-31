const dbType = {
    userType: "admin",
    type: "local",
};

async function connectToDB(dbName) {
    console.log(`Connected to the database ${dbName}.`);
}

async function disconnectDB() {
    console.log(`Disconnecting to the database...`)
}

export {
    connectToDB,
    disconnectDB,
    dbType,
};
