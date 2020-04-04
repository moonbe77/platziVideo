import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${process.cwd()}/src/server/public/manifest.json`));
  } catch (error) {
    console.log(`Manifest not found ${error}`);
  }
};

export default getManifest;
