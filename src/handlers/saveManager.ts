import * as fs from 'fs';
import * as path from 'path';

class SaveManager {
    private static _instance: SaveManager;

    private constructor() {}

    saveToFile(filename: string, data: any): void {
        const filepath = path.join(__dirname, '../save/', filename);
        fs.writeFileSync(filepath, JSON.stringify(data, null, 4));  // Indentado para melhor legibilidade
    }

    loadFromFile(filename: string): any | null {
        const filepath = path.join(__dirname, '../save/', filename);
        if (!fs.existsSync(filepath)) {
            return null;
        }
        const rawData = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(rawData);
    }

    public static get instance() {
        if (!this._instance) {
            this._instance = new SaveManager();
        }
        return this._instance;
    }
}

export default SaveManager.instance;