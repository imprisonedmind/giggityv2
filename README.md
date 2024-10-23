# Giggity - Next.js Front-end (v2)
Using Next 14, app directory, server actions. Provide a clean and accessible 
user experience for event browsing near users.

## Testing with Docker
This project is set up to be run with containers on a VPS
via a main parent docker [repo](https://github.com/imprisonedmind/giggity-docker).
```bash
docker build -t giggityv2 .
docker run -p 3000:3000 giggityv2
```
Go to [localhost:3000](http://localhost:3000)


## Testing Normally
If you wish to just run the front-end, run it normally with bun.
```bash
bun i 
bun run dev
```
Go to [localhost:3000](http://localhost:3000)