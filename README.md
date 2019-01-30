[![Build Status](https://travis-ci.org/erandu/puissance4.svg?branch=master)](https://travis-ci.org/erandu/puissance4)

# puissance4

Multiplayer Puissance4 WebApp

Go to http://35.203.139.178 if you want to play !


# Build using Docker and play locally

You can build the puissance4 within a Docker container. To do it :   
`docker build -t puissance4:1.0 .`  
`docker run -tid -p 80:80 --name puissance4 puissance4:1.0`  

Then go to http://127.0.0.1 !

# Play without building

You can use the image uploaded on the Dockerhub.  
`docker run -tid -p 80:80 --name puissance4 erandu/puissance4:1.0`  
This will pull from the repo `erandu/puissance4`  

Then go to http://127.0.0.1 !
