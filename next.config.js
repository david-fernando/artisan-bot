const { spawn } = require('child_process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async serverRuntimeConfig() {
    const setupProcess = spawn('npm', ['run', 'setup'], {
      stdio: 'inherit',
      shell: true,
    });
    await new Promise((resolve) => setupProcess.on('exit', resolve));
    return {};
  } ,
  nextConfig
}
