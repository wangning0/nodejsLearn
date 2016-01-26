//cwd current wording directory  当前工作目录
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);