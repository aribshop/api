import { cleanEnv, num, str, bool } from "envalid";
import "dotenv/config";



const ENV = cleanEnv(process.env, {
    PORT: num({ default: 3000 }),

});

export default ENV;