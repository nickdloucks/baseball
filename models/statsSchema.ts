export const statsSchema = {
    $jsonSchema: {
        "title": "stats",
        bsonType: "object",
        required: ["batting", "homeruns", "rbis", "steals"],
        additionalProperties: false,
        type: "object",
        properties: {
            _id: {},
            batting: {
                bsonType: "number",
                description: "'batting' is required and is a number",
            },
            homeruns: {
                bsonType: "number",
                description: "'homeruns' is required and is a number",
            },
            rbis: {
                bsonType: "number",
                description: "'rbis' is required and is a number",
            },
            steals: {
                bsonType: "number",
                description: "'steals' is required and is a number",
            }
        }
    }
}