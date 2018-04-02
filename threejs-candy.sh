#!/bin/bash
clear
echo "Three.js Candy Generator"

java -jar candy-tool.jar init-project --artifactId="threejs" --version="89-20180401" -o ./candies 

java -jar  candy-tool.jar generate-sources\
 --name=threejs\
  --coreVersion=es5\
  --out candies/candy-threejs/src/main/java\
 --tsFiles=\
./DefinitelyTyped/types/three/index.d.ts,\
./DefinitelyTyped/types/three/three-core.d.ts,\
./DefinitelyTyped/types/three/three-colladaLoader.d.ts,\
./DefinitelyTyped/types/three/three-copyshader.d.ts,\
./DefinitelyTyped/types/three/three-css3drenderer.d.ts,\
./DefinitelyTyped/types/three/three-ctmloader.d.ts,\
./DefinitelyTyped/types/three/three-ddsloader.d.ts,\
./DefinitelyTyped/types/three/three-editorcontrols.d.ts,\
./DefinitelyTyped/types/three/three-effectcomposer.d.ts,\
./DefinitelyTyped/types/three/three-examples.d.ts,\
./DefinitelyTyped/types/three/three-fbxloader.d.ts,\
./DefinitelyTyped/types/three/three-FirstPersonControls.d.ts,\
./DefinitelyTyped/types/three/three-maskpass.d.ts,\
./DefinitelyTyped/types/three/three-mtlloader.d.ts,\
./DefinitelyTyped/types/three/three-objloader.d.ts,\
./DefinitelyTyped/types/three/three-octree.d.ts,\
./DefinitelyTyped/types/three/three-orbitcontrols.d.ts,\
./DefinitelyTyped/types/three/three-orthographictrackballcontrols.d.ts,\
./DefinitelyTyped/types/three/three-outlinepass.d.ts,\
./DefinitelyTyped/types/three/three-projector.d.ts,\
./DefinitelyTyped/types/three/three-renderpass.d.ts,\
./DefinitelyTyped/types/three/three-shaderpass.d.ts,\
./DefinitelyTyped/types/three/three-smaapass.d.ts,\
./DefinitelyTyped/types/three/three-filmpass.d.ts,\
./DefinitelyTyped/types/three/three-trackballcontrols.d.ts,\
./DefinitelyTyped/types/three/three-transformcontrols.d.ts,\
./DefinitelyTyped/types/three/three-vrcontrols.d.ts,\
./DefinitelyTyped/types/three/three-vreffect.d.ts,\
./DefinitelyTyped/types/three/detector.d.ts
 

  
#java -jar  candy-tool.jar generate-sources\
# --name=threejs\
# --coreVersion=es5\
# --out candies/threejs/src/main/java\
# --tsFiles=\
#./DefinitelyTyped/types/three/index.d.ts,\
#./DefinitelyTyped/types/three/three-core.d.ts,\
#./DefinitelyTyped/types/three/three-colladaLoader.d.ts,\
#./DefinitelyTyped/types/three/three-copyshader.d.ts,\
#./DefinitelyTyped/types/three/three-css3drenderer.d.ts,\
#./DefinitelyTyped/types/three/three-ctmloader.d.ts,\
#./DefinitelyTyped/types/three/three-ddsloader.d.ts,\
#./DefinitelyTyped/types/three/three-editorcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-effectcomposer.d.ts,\
#./DefinitelyTyped/types/three/three-examples.d.ts,\
#./DefinitelyTyped/types/three/three-fbxloader.d.ts,\
#./DefinitelyTyped/types/three/three-FirstPersonControls.d.ts,\
#./DefinitelyTyped/types/three/three-maskpass.d.ts,\
#./DefinitelyTyped/types/three/three-mtlloader.d.ts,\
#./DefinitelyTyped/types/three/three-objloader.d.ts,\
#./DefinitelyTyped/types/three/three-octree.d.ts,\
#./DefinitelyTyped/types/three/three-orbitcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-orthographictrackballcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-outlinepass.d.ts,\
#./DefinitelyTyped/types/three/three-projector.d.ts,\
#./DefinitelyTyped/types/three/three-renderpass.d.ts,\
#./DefinitelyTyped/types/three/three-shaderpass.d.ts,\
#./DefinitelyTyped/types/three/three-smaapass.d.ts,\
#./DefinitelyTyped/types/three/three-filmpass.d.ts,\
#./DefinitelyTyped/types/three/three-trackballcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-transformcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-vrcontrols.d.ts,\
#./DefinitelyTyped/types/three/three-vreffect.d.ts,\
#./DefinitelyTyped/types/three/detector.d.ts
 

  
 
 
 
 
 
 
