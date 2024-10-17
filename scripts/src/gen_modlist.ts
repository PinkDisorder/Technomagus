import toml from "toml";
import fs from "node:fs/promises";
import path from "path";

const modsDir = path.resolve(import.meta.dirname, "..", "..", "mods");
const modlist = path.resolve(import.meta.dirname, "..", "..", "modlist.md");

try {

  await fs.rm(modlist, { force: true });

  const files = (await fs.readdir(modsDir)).filter(e => e !== ".connector").map(e => path.resolve(modsDir, e));
  for await (let file of files) {
    const contents = await fs.readFile(file, "utf-8");
    const data: any = toml.parse(contents);
    fs.appendFile(modlist, `${data.name}\n`);
  }

} catch(ex) {
  throw ex;
}