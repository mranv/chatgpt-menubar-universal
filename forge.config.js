const { parsed } = require("dotenv").config();

module.exports = {
  packagerConfig: {
    name: "chatgpt-universal",
    executableName: "chatgpt-universal",
    icon: "images/icon",
    appBundleId: "com.mranv.chatgptmac",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
      identity: "Developer ID Application: Lyser.io Ltd (R4PF6TTR6Z)",
    },
    osxNotarize: {
      appBundleId: "com.mranv.chatgptmac",
      tool: "notarytool",
      appleId: parsed.APPLE_ID,
      appleIdPassword: parsed.APPLE_PASSWORD,
      teamId: parsed.APPLE_TEAM_ID,
    },
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "vincelwt",
          name: "chatgpt-mac",
        },
        prerelease: true,
      },
    },
  ],
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {}, // Configuration for Windows builds (x64)
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"], // Configuration for macOS builds (x64 and ARM64)
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      platforms: ["linux"], // Configuration for Linux builds (x64 and ARM64)
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      platforms: ["linux"], // Configuration for Linux builds (x64 and ARM64)
      config: {},
    },
  ],
};
