const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// Caminhos de entrada e saída
const inputDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'build');

// Função recursiva para processar subpastas
const processTemplates = (currentDir, outputPath) => {
    // Lê os arquivos e subpastas da pasta atual
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    items.forEach(item => {
        const inputPath = path.join(currentDir, item.name);
        const outputFilePath = path.join(outputPath, item.name.replace('.mustache', '.html'));

        if (item.isDirectory()) {
            // Cria a estrutura de pasta na saída
            const newOutputPath = path.join(outputPath, item.name);
            if (!fs.existsSync(newOutputPath)) {
                fs.mkdirSync(newOutputPath, { recursive: true });
            }
            // Recursão para subpastas
            processTemplates(inputPath, newOutputPath);
        } else if (item.isFile() && item.name.endsWith('.mustache')) {
            // Compila o template Mustache para HTML
            const template = fs.readFileSync(inputPath, 'utf8');
            const data = {
                nome: "Kariel",
                projeto: "Meu Projeto",
                linguagens: ["Node.js", "JavaScript", "Python"]
            };
            const output = Mustache.render(template, data);
            // Salva o HTML na pasta de saída
            fs.writeFileSync(outputFilePath, output);
            console.log(`Template compilado: ${outputFilePath}`);
        }
    });
};

// Garante que a pasta de saída exista
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Processa os templates
processTemplates(inputDir, outputDir);
console.log('Compilação concluída!');