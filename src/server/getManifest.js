/* eslint-disable consistent-return */
import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (error) {
    console.log(`Manifest not found ${error}`);
  }
};

export default getManifest;
