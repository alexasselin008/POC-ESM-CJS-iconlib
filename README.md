# POC-ESM-CJS-iconlib
Proof of concept to see if an icon lib compiled into ESM and consumed by a CJS app is being properly treeshaken

## Steps to use this repo

1. go to icon-library and run npm run build + npm run pack

To test in CRA: 

2. go to cra-app and make sure to update the path to the tgz file in package.json ("@alexasselin008/icons": "file:/../icon-library/alexasselin008-icons-1.3.0.tgz")
3. run npm install + npm build + npm run analyze. You should see that the icon library is not being treeshaken

To test in vite: 

2. go to vite and make sure to update the path to the tgz file in package.json ("@alexasselin008/icons": "file:/../icon-library/alexasselin008-icons-1.3.0.tgz")
3. run npm install + npm build + npx vite-bundle-visualizer. You should see that the icon library is not being treeshaken




