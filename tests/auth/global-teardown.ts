import fs from 'fs/promises';
import path from 'path';

async function globalTeardown() {
  console.log('Running global teardown...');

  const authDir = 'tests/auth';

  try {
    const files = await fs.readdir(authDir);

    // Delete only storage state JSON files
    for (const file of files) {
      if (file.endsWith('_LoginState.json')) {
        await fs.unlink(path.join(authDir, file));
        console.log(`Deleted: ${file}`);
      }
    }

    console.log('Auth storage state cleanup completed.');
  } catch (error) {
    console.error('Error cleaning up auth storage files:', error);
  }
}

export default globalTeardown;
