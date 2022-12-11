import { cleanEnv, num, str, bool, json } from "envalid";
import "dotenv/config";

const ENV = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  FIREBASE: json({
    default: null,
  }),
  TEMP_USER: json({
    default: {
      uid:"1234567890",
    },
  }),
  FRONTEND_URL: str({ default: "http://localhost:3000" }),
});

export default ENV;
