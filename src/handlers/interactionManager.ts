import eventHandler from "./eventHandler";

class InteractionManager {
    public async mainMenu(): Promise<void> {
        await eventHandler.trigger('mainMenu');
    }
}

export default new InteractionManager();