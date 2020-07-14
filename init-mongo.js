db.createUser(
    {
        user: "mongo",
        pwd: "123",
        roles: [
            {
                role: "readWrite",
                db: "data"
            }
        ]

    }
)
db.createCollection("videos")