import { cleanEnv, num, str, bool, json } from "envalid";
import "dotenv/config";



const ENV = cleanEnv(process.env, {
    PORT: num({ default: 3000 }),
    AUTH: json({
        default: {
            "username": "admin",
        }
    })
});

export default ENV;