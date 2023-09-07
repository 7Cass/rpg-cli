import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';

class EventHandler extends EventEmitter {
    private static _instance: EventHandler;

    private constructor() {
        super();
    }

    public register(event: string, listener: (...args: any[]) => void) {
        this.on(event, listener);
    }

    public async trigger(event: string, ...args: any[]) {
        this.emit(event, ...args);
    }

    public unregister(event: string, listener: (...args: any[]) => void) {
        this.off(event, listener);
    }

    public async loadEvents() {
        const eventFiles = fs.readdirSync(path.join(__dirname, '../events'));

        for (const file of eventFiles) {
            const eventName = file.split('.')[0];
            const eventModule = await import(path.join(__dirname, '../events', file));
            const eventFunction = eventModule.default;
            
            this.register(eventName, eventFunction);
        }
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new EventHandler();
        }
        return this._instance;
    }
}

export default EventHandler.instance;