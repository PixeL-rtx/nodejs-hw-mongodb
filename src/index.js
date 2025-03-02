import { setupServer } from "./server";
import { initMongoConnection } from "./db/initMongoConnection";

const bootstrap = async () => {
    try {
        await initMongoConnection()
    setupServer()
    } catch (error) {
        console.error(`Exception in bootstrap ${error}`);
    }
}
 bootstrap()
