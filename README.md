# threejs_project
* **DefinitelyTyped** contains the modified typescript files.
* **candies/threejs/src/main/java** contains the candy-tool generated java source files.
* **candy-threejs** contains the original 75 version and the new 89 version. Note the java package names in v89 were changed from those generated to align with v75.
* **typing/lib.core** contains the core d.ts files.
* **candy-tool.jar** the candy generator used to generate the java source files built using the jsweet/candy-generator project https://github.com/cincheo/jsweet/tree/master/candy-generator
* **threejs-candy.sh** script used to call the *candy-tool*.
* **threejs_v89_candy_generator_output.txt** last run of the *threejs-candy.sh* script.
* **threejs_v89_mvn_install_output.txt** last run of the *mvn install* command.
* **threejs_v89_ts_refactoring.txt** list of threejs d.ts file refactorings needed to generate the java source without throwing null pointer exceptions or missing type definition errors.
