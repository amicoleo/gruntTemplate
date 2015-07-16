Grunt configuration files for performing a set of useful tasks for developing front end. 

I often host static websites on Github, and I find handy to use this as a submodule for the website repositories. 


Setup
------

The Gruntfile is written with a specific folder structure in mind, which is available at https://github.com/amicoleo/gruntTemplate-skeleton 

That repository already contains this as a submodule, so the best way to start is by cloning that recursively 

	git clone --recursive https://github.com/amicoleo/gruntTemplate-skeleton NEW_WEBSITE_FOLDER_NAME

And then set a new remote for the repository 
	
	git remote set-url origin NEW_REPO_URL

Lastly, cd into ROOT/grunt and run
	
	npm install 

for installing the grunt packages. 





Developement
-------

While still in the grunt folder, run 
	
	grunt watch 

For building scss and minify javascript all the time they change. In another terminal window use 

	python -m SimpleHTTPServer 

For launching a localserver for testing. 

Alternatively is possible to make use of LiveReload, a tool for real-time reloading web pages while editing. My solution make use of [python live reload](https://github.com/lepture/python-livereload) and [LiveReload browser extension](http://livereload.com/). Once everything is setup run on a terminal
		
		livereload 

and on a browser tab, with the LiveReload plugin active, type http://localhost:35729/ on the address bar. 



Release
-----------

Run 

	grunt

For building scss, minify javascript, squash images sizes and clean temporary directories. 


Requirements
--------

It requires *NodeJS*, *Grunt* and *Grunt-CLI*. 
