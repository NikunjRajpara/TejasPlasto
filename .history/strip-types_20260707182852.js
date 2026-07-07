import fs from 'fs';
import path from 'path';

const srcDir = './src';
const outDir = './output_js_folder';

function cleanTypeScript(code) {
    return code
        // 1. Remove explicit interface blocks
        .replace(/interface\s+\w+\s*\{[\s\S]*?\}/g, '')
        // 2. Remove explicit type blocks
        .replace(/type\s+\w+\s*=\s*[\s\S]*?;/g, '')
        // 3. Remove inline object/parameter type mappings (: string, : number, etc.)
        .replace(/:\s*[A-Z][a-zA-Z0-9<>[\]|\s&:]+/g, '')
        // 4. Remove component generic indicators like <any> or <Props>
        .replace(/<[A-Z][a-zA-Z0-9, \s]+>/g, '')
        // 5. Convert explicitly written extensions in imports (.tsx -> .jsx)
        .replace(/\.tsx(['"])/g, '.jsx$1')
        .replace(/\.ts(['"])/g, '.js$1');
}

function processDirectory(currentDir, targetDir) {
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const files = fs.readdirSync(currentDir);

    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        const destPath = path.join(targetDir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath, destPath);
        } else {
            let finalDest = destPath;
            if (file.endsWith('.tsx')) finalDest = destPath.replace(/\.tsx$/, '.jsx');
            else if (file.endsWith('.ts')) finalDest = destPath.replace(/\.ts$/, '.js');

            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                fs.writeFileSync(finalDest, cleanTypeScript(content), 'utf8');
            } else {
                fs.copyFileSync(fullPath, finalDest);
            }
        }
    }
}

console.log('🚀 Converting files...');
processDirectory(srcDir, outDir);
console.log('✅ Conversion finished! Check the "output_js_folder" directory.');
