# webring

[Webring](https://webring.phthallo.com) is a website for a currently unnamed webring created with Next.js, React and TailwindCSS.

## Joining
To join the webring, add yourself to `/lib/members.json` and open a pull request - anyone is welcome! I'll review your pull request as soon as I can. 
See more information about what's required and adding the webring navigation widget at [`/join`](https://webring.phthallo.com/join)

## API
There is an API accessible should you wish to style or otherwise represent the members of the webring in a different way. Documentation can be found at [`/docs`](https://webring.phthallo.com/docs) 

## Development
1. Clone the repository

```
git clone https://github.com/phthallo/webring && cd webring
```

2. Install the project dependencies.

```
bun install
```

3. Set environment variables. 

```
.env 
---
NEXT_PUBLIC_INTERNAL_URL=
NEXT_PUBLIC_BASE_URL=
```
  In development, both of these variables should be the same e.g localhost:3000. In production, change `NEXT_PUBLIC_BASE_URL` to the public-facing web URL and leave `NEXT_PUBLIC_INTERNAL_URL` as  localhost:<port>. 


4. Start the development server.
```
bun run dev
```

4. Build and start the production server.
```
bun run build
bun start
```

