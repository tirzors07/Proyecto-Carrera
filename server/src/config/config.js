import dotenv from 'dotenv';
dotenv.config({ path: '../../../.env' });


export const PORT = process.env.PORT ?? 3000;
export const DB_HOST = "148.231.130.207";//192.168.100.34";
export const DB_USER = "a1282016";//"root";
export const DB_PASSWORD = "admin123"//"natali123";
export const DB_NAME = "a1282016_bd3";//"proyecto";
export const SALT_ROUNDS = 10;
export const SECRET_JWT_KEY = "shhhhh,NO,MENTIRA,ES,SECRETO";;

console.log("ENV cargado:", {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
});