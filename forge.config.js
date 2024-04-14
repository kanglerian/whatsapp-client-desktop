// Import library yang diperlukan
const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

// Export konfigurasi
module.exports = {
  // Konfigurasi packager untuk memaketkan aplikasi
  packagerConfig: {
    asar: true,
    executableName: "whatsapp-client-desktop", // Nama file eksekutif aplikasi
  },
  // Konfigurasi untuk membangun ulang aplikasi
  rebuildConfig: {},
  // Daftar pembuat paket untuk berbagai platform
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // Pembuat paket untuk Windows
      executableName: "whatsapp-client-desktop", // Nama file eksekutif aplikasi
      config: {
        options: {
          name: "whatsapp-client-desktop", // Nama aplikasi
          productName: "Whatsapp Client Desktop" // Nama produk
        }
      },
    },
    {
      name: '@electron-forge/maker-zip', // Pembuat paket zip untuk macOS
      platforms: ['darwin'], // Hanya untuk platform macOS
    },
    {
      name: '@electron-forge/maker-deb', // Pembuat paket DEB untuk Linux
      executableName: "whatsapp-client-desktop", // Nama file eksekutif aplikasi
      config: {
        options: {
          name: "whatsapp-client-desktop", // Nama aplikasi
          productName: "Whatsapp Client Desktop" // Nama produk
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm', // Pembuat paket RPM untuk Linux
      executableName: "whatsapp-client-desktop", // Nama file eksekutif aplikasi
      config: {
        options: {
          name: "whatsapp-client-desktop", // Nama aplikasi
          productName: "Whatsapp Client Desktop" // Nama produk
        }
      },
    },
  ],
  // Identifier untuk direktori hasil build
  buildIdentifier: "out",
  // Daftar plugin yang digunakan
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Plugin Fuses untuk mengatur fungsionalitas Electron
    // sebelum aplikasi ditandatangani
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
