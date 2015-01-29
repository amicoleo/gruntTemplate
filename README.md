How to use
========


The template should be used as a git submodule inside a static website repo. When inside the root folder of the project you wish to add the grunt template

	git submodule add https://amicoleo@bitbucket.org/amicoleo/grunt_basic-template.git grunt

After adding the submodule, cd into ROOT/grunt and run
	
	npm install 

for installing the grunt packages. 

Developement
-------

Run 
	
	grunt watch 

For building scss and minify javascript all the time they change. In another terminal window use 

	python -m SimpleHTTPServer 

For launching a localserver for testing


Release
-----------

Run 

	grunt

For building scss, minify javascript, squash images sizes and clean temporary directories. 


Requirements
--------

It requires *NodeJS*, *Grunt* and *Grunt-CLI*. 