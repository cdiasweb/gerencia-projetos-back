

export async function autentica (params) {
    var db = await con();
    console.log(db);
    return db;
}


