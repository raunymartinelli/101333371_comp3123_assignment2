db = db.getSiblingDB("fs-a1");

db.createUser({
    user: "root",
    pwd: "example",
    roles: [{role: "readWrite", db: "fs-a1"}]
});

db.createCollection("user");

// db = db.getSiblingDB("comp3123_assignment1");
//
// db.createUser({
//     user: "root",
//     pwd: "password",
//     roles: [{role: "readWrite", db: "comp3123_assignment1"}]
// });
//
// db.createCollection("user");

