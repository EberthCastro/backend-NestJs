import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
    return {
        MONGODB_SECRET: process.env.MONGODB_SECRET,
        TITLE: process.env.TITLE
    }
})