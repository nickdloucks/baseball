export const playerSchema ={
    $jsonSchema: {
        "title": "player",
        bsonType: "object",
        required: ["name", "position"],
        additionalProperties: false,
        type: "object",
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            position: {
                bsonType: "string",
                description: "'position' is required and is a string",
            },

        }
    }
}