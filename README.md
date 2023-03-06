# POC-ESM-CJS-iconlib
Proof of concept to see if an icon lib compiled into ESM and consumed by a CJS app is being properly tree-shaken

## Steps to use this repo

1. go to icon-library and run npm run build + npm run pack

To test in CRA: 

2. go to cra-app and make sure to update the path to the tgz file in package.json ("@alexasselin008/icons": "file:/../icon-library/alexasselin008-icons-1.15.0.tgz")
3. run npm install + npm build + npm run analyze. You should see that the icon library is treeshaken

Tested with the following structure and it works

icon-library
├── src
│   ├── generated-components
│   │   ├── helpful-hands
│   │   │   ├── HelpfulHands.tsx
│   │   │   ├── index.ts
│   │   ├── icons
│   │   │   ├── AddMajorIcon.tsx wrapped in createIcon  from orbit
│   │   │   ├── index.ts
│   │   ├── illustrations
│   │   │   ├── NoResultsIllustration.tsx
│   │   │   ├── index.ts
│   │   ├── spot-icons
│   │   │   ├── MigrateTeamsSpotIcon.tsx wrapped in createIcon from SpotIcon.js
│   │   │   ├── index.ts
│   │   ├── index.ts (export all 4 other folders)
│   │   ├── SpotIcons.ts 
│   ├── index.ts (export src/generated-components and SpotIcon)
