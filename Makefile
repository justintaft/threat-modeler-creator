all:
	docker run -p 9630:9630 -v /Users/justin/proj/threat-modeler:/app -it f6168cd96131 sh

dev:
	docker run -p 9630:9630 -v "${PWD}":/app -it f6168cd96131 bash

make-release-and-push:
	git checkout gh-pages
	git checkout -f master public
	git add public
	git commit -m "Release"
	git push origin release-and-push
	git checkout master -f
