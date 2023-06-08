import fs from "fs";
import clientPromise from "./mddb.mjs";
import computeFields from "./computeFields";

export async function getMdFiles(folder?:string) {
  const mddb = await clientPromise
  const files = await mddb.getFiles({ folder, extensions: ["md","mdx"] })
  // const files = await mddb.getFiles({ folder });
  const filesMetadataPromises = files.map(async (file) => {
    const source = fs.readFileSync(file.file_path, { encoding: "utf-8" });

    // TODO temporary replacement for contentlayer's computedFields
    const frontMatterWithComputedFields = await computeFields({
      frontMatter: file.metadata,
      urlPath: file.url_path,
      filePath: file.file_path,
      source,
    });

    return frontMatterWithComputedFields;
  });

  const filesList = await Promise.all(filesMetadataPromises);

  return filesList
}
