import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export default sql;

// import {Pool }from "pg"
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// // export default pool;

// export default pool;

// // mysql -mysql arbab arbab