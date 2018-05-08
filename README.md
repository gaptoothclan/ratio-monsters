# Mark Griffiths Ratio 'Monsters' Tech test

## Written for Node 9+

Here's my submission for the monsters tech test.
## Setup
`npm install` MUST be run first. 

## Running

`node monsters.js -m 10 -p world_map_small.txt -o the_new_world.txt` 

`-m` is the number of monsters, 

`-p` is the path to the world you wish load 

`-o` is the output path you wish you use for the new world after the monsters have run rampant. All of the parameters are option and there are defaults provided.

If you wish to run it in docker there's a docker-compose available. Run `docker-compose up -d && docker exec -it monsters sh` to bring up and enter the container.

I've also written a few units tests which can be run with 
`npm test`

