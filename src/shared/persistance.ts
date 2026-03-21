import fs from 'fs/promises';
import { jsonArray } from './types/commandData';

export async function writeData(jsonString: string) {
  await fs.mkdir('./logs', { recursive: true });

  const currentDate = new Date().toJSON().slice(0, 10);
  const filePath = `./logs/commands_${currentDate}.log`;

  let jsonFiles: object[] = [];

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    jsonFiles = Array.isArray(parsed) ? parsed : [];
  } catch {
  }

  jsonFiles.push(JSON.parse(jsonString)); 
  jsonArray.push(jsonString);

  await fs.writeFile(filePath, JSON.stringify(jsonFiles, null, 2), 'utf-8');
}