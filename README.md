# webring

[Webring](https://webring.phthallo.com) is a responsive, mobile friendly website and central hub for a currently unnamed [webring](https://webring.phthallo.com/about) created with Next.js, React and TailwindCSS.

![image](https://github.com/user-attachments/assets/7cc408a9-3e33-4679-908d-b78f0991835a)

### What's a webring?
Webrings link websites that are similar in some way together in a circular structure, allowing you to easily find other interesting blogs and portfolios.
[Read more](https://fanlore.org/wiki/Webring)


## Joining
To join the webring, add yourself to `/lib/members.json` and open a pull request - anyone is welcome! I'll review your pull request as soon as I can. 
See more information about what's required and adding the webring navigation widget to your website at [`/join`](https://webring.phthallo.com/join)

## API
There is an API accessible should you wish to style or otherwise represent the members of the webring in a different way. 

| route | description |
| ----- | ----------- |
| `/api/members` | Retrieve a list of all members and their respective information. |
| `/api/members/[id]/` | Retrieve the information of the webring member corresponding to the specified ID | 
| `/api/members/[id]/next` | Retrieve the information of the next webring member from the specified ID | 
| `/api/members/[id]/previous` | Retrieve the information of the previous webring member from the specified ID | 
| `/api/widgets/[member]?format=[format]&style=[style]` | Generate a webring widget for the member of specified ID with mandatory parameter [format] and optional parameter [style] | 

Further documentation can be found at [`/docs`](https://webring.phthallo.com/docs) 

## Development
1. Clone the repository

```
git clone https://github.com/phthallo/webring && cd webring
```

2. Install the project dependencies.

```
bun install
```

3. In the root of the directory, set your environment variables in a `.env` file. 

```
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
bun run start
```

