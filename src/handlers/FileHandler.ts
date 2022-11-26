const fs = require(`fs`)

/**
 * Check if the given path is a directory.
 * @param path: Folder's path
 */
function isDirectory(path: string): boolean {
    return fs.lstatSync(path).isDirectory()
}

/**
 * Check if the given path is a TypeScript file
 * @param path: File's path
 */
function isTypeScriptFile(path: string) {
    return path.endsWith('.ts')
}

/**
 * Get list of file with sub folders (only TypeScript files).
 * @param path: Folder's path
 * @param subFiles: Should check sub folders?
 */
function loadFiles(path: string, subFiles: boolean): string[] {
    const files: string[] = []

    fs.readdirSync(path).forEach((file: string) => {
        if (subFiles && isDirectory(`${path}/${file}`))
            loadFiles(`${path}/${file}/`, subFiles)
                .forEach((f: string) => files.push(`${file}/${f}`))
        else if (isTypeScriptFile(file))
            files.push(file)
    })

    return files
}

module.exports = loadFiles
