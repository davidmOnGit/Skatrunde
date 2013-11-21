Skatrunde
=========

intention of this project was to have a quick solution for calculation of our points when playing skat. because when we had a couple of beers nobody could count anymore. it is a simple application which has a xhtml page, a javascript file and an php file. my focus was to not mix up layout and logic. that for the xhtml is plain and I created an javascript object which has all the services. php is just called to deliver data from the backend. so we have clean separation of html for the layout, javascript (query) for the logic and php as data service from the server. no mix up of different languages in one source file. I think this keeps code clean and understandable.
