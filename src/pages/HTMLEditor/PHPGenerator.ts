import { PhpGenerator } from "blockly/php";

export const phpGenerator = new PhpGenerator();

phpGenerator.forBlock['text-block'] = function (block, phpGenerator) {
    return block.getFieldValue('text')
}

phpGenerator.forBlock['document-type'] = function (block, phpGenerator) {
    return `<!DOCTYPE html>
`
}

phpGenerator.forBlock['html'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <html lang="en">
        ${statement}
    </html>
`}
phpGenerator.forBlock['meta'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <meta>
        ${statement}
    </meta>
`
}
phpGenerator.forBlock['style'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <style>
        ${statement}
    </style>
`
}
phpGenerator.forBlock['script'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <script>
        ${statement}
    </script>
`
}
phpGenerator.forBlock['body'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <body>
        ${statement}
    </body>
`
}
phpGenerator.forBlock['title'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <title>
        ${statement}
    </title>
`
}
phpGenerator.forBlock['header'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <header>
        ${statement}
    </header>
`
}
phpGenerator.forBlock['footer'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <footer>
        ${statement}
    </footer>
`
}
phpGenerator.forBlock['section'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <section>
        ${statement}
    </section>
`
}
phpGenerator.forBlock['article'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <article>
        ${statement}
    </article>
`
}
phpGenerator.forBlock['aside'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <aside>
        ${statement}
    </aside>
`
}
phpGenerator.forBlock['nav'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <nav>
        ${statement}
    </nav>
`
}
phpGenerator.forBlock['main'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <main>
        ${statement}
    </main>
`
}
phpGenerator.forBlock['h1'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h1>
        ${statement}
    </h1>
`
}
phpGenerator.forBlock['h2'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h2>
        ${statement}
    </h2>
`
}
phpGenerator.forBlock['h3'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h3>
        ${statement}
    </h3>
`
}
phpGenerator.forBlock['h4'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h4>
        ${statement}
    </h4>
`
}
phpGenerator.forBlock['h5'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h5>
        ${statement}
    </h5>
`
}
phpGenerator.forBlock['h6'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h6>
        ${statement}
    </h6>
`
}
phpGenerator.forBlock['div'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <div>
        ${statement}
    </div>
`
}
phpGenerator.forBlock['p'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <p>
        ${statement}
    </p>
`
}
phpGenerator.forBlock['pre'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <pre>
        ${statement}
    </pre>
`
}
phpGenerator.forBlock['code'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <code>
        ${statement}
    </code>
`
}
phpGenerator.forBlock['form'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <form>
        ${statement}
    </form>
`
}
phpGenerator.forBlock['table'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <h1>
        ${statement}
    </h1>
`
}
phpGenerator.forBlock['input'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['button'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <button>
        ${statement}
    </button>
`
}
phpGenerator.forBlock['a'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <a>
        ${statement}
    </a>
`
}
phpGenerator.forBlock['img'] = function (block, phpGenerator) {
    let src=block.getFieldValue('src')
    let alt=block.getFieldValue('alt')

    return `<img src="${src}" alt="${alt}">`
}
phpGenerator.forBlock['audio'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['video'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['iframe'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['embed'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['br'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['hr'] = function (block, phpGenerator) {
    return ``
}
phpGenerator.forBlock['mark'] = function (block, phpGenerator) {
    const statement = phpGenerator.statementToCode(block, 'DO');
    return `
    <mark>
        ${statement}
    </mark>
`}

