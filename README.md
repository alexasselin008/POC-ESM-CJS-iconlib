# POC-ESM-CJS-iconlib
Proof of concept to see if an icon lib compiled into ESM and consumed by a CJS app is being properly treeshaken

## Steps to use this repo

1. go to icon-library and run npm run build + npm run pack
2. go to cra-app and make sure to update the path to the tgz file in package.json
3. run npm install + npm build + npm run analyze. You should see that the icon library is not being treeshaken