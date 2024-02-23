import util from "node:util";
import { pipeline } from "node:stream";
import fs from "node:fs";

export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000); // Adjust range as needed
};

/**
 * Saves a file to the specified output path, creating the directory structure if it doesn't exist.
 * @param {object} file - The file object to be saved, containing properties like 'file' and 'filename'.
 * @param {string} [outputPath='public/uploads'] - The path to save the file. Defaults to 'public/uploads'.
 * @returns {Promise<object>} A Promise that resolves to an object indicating the success or failure of the operation.
 */
export const saveFile = async (file, outputPath = 'public/uploads') => {
    try {
        const pump = util.promisify(pipeline);
        const fileName = `${generateRandomNumber()}-${file.filename}`;
        const filePath = `${outputPath}/${fileName}`;
        
        // Create directory structure if it doesn't exist
        fs.mkdirSync(outputPath, { recursive: true });

        // await pump(file.buffer, fs.createWriteStream(filePath));
        await pump(file.file, fs.createWriteStream(filePath));
        return {
            success: true,
            message: 'File successfully created',
            file: filePath
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            file: ''
        };
    }
};
