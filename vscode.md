# VScode Debug Configuration

Create a directory .vscode the root directory of the project and create a file launch.json with this content


```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Server.js",
      "program": "${workspaceFolder}/src/server.js",
      "request": "launch",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Jest Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "--runInBand"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest.js"
      }
    }
  ]
}
```

