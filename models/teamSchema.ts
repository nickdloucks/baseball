export const teamSchema ={
    $jsonSchema: {
        "title": "team",
        bsonType: "object",
        required: ["name", "city", "roster"],
        additionalProperties: false,
        type: "object",
        properties: {
            _id: {},
            name: {
                bsonType: "string",
                description: "'name' is required and is a string",
            },
            city: {
                bsonType: "string",
                description: "'position' is required and is a string",
            },
            roster: {
                bsonType: "array",
                description: "'roster' is required and is an array",
            }
        }
    }
}