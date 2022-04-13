/**
 * @jest-environment node
 */

import ClientPromise, {client} from "../mongodb";

describe("MongoDB", () => {
  it("connects to Atlas succesfully \n !!! This only loads the .env file once! !!!", async () => {
    try {
      const myClient = await ClientPromise;
      const db = myClient.db(process.env.DB_NAME)
      const [{success}] = await db.collection("tests").find({}).toArray()
      expect(success).toBe(true)
    } catch(e) {
      throw e
    } finally {
      await client.close()
    }
  });
});