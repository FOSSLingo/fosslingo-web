# FOSSLingo web client

## HACKCLUB! This repo depends on other repos!!

https://github.com/FOSSLingo/backend, and<br>
https://github.com/FOSSLingo/resources

Thanks!

---

### What is FOSSLingo?
FOSSLingo is an alternative to traditional language learning apps, designed to be free and open-source. I (iddu01) believe that education should be free for all, espically language learning. I originally made this as a project for Hackclub's Horizons.

### Screenshots;

See [SCREENSHOTS.md](https://github.com/FOSSLingo/web/blob/main/docs/SCREENSHOTS.md)

### How to use;

Currently, you can visit [this link](https://web-eight-ivory-84.vercel.app/) to demo FOSSLingo. 

<!-- Update this next section when courses are added -->

I haven't gotten around to actually adding any language courses, because yeah. So this is currently a tech demo.

### Development;

This guide assumes you have `npm` (or alternative), and `git` installed on a **Linux** system.

First, get the code:

```bash
git clone https://github.com/FOSSLingo/web
```

Next, (enter the code directory, and) install stuff:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# you can substitute "install" for "i" if you want to i guess
```

Create a `.env` file from the example `.env` file

```bash
cp .env.example .env
```

Change `NEXT_PUBLIC_BACKEND_URL` to your backend url:

> [!NOTE]
> If you don't have a backend server running, feel<br>
> free to set the backend URL to this one<br>
> provided by iddu01!<br>
> `backend.learn.iddu01.me`

```bash
nano .env
```

```properties
# Change this variable!!
NEXT_PUBLIC_BACKEND_URL=https://example.com:PORT 
```


Then, start the dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your web browser to see the result.

### AI usage;

I will be honest, I tried to not use AI in this project. Some AI was used to connect to the backend though, while some of the "connecting to backend logic" was from sites like [StackOverflow](https://stackoverflow.com) or [Reddit](https://www.reddit.com/) questions lol. All the frontend was done by me though.

### Hosting on Vercel;
> [!IMPORTANT]  
> If you haven't deployed the backend,<br>
> it is a good time to do that now.<br>
> Follow the instructions [here](https://github.com/FOSSLingo/backend/blob/main/README.md#hosting-on-vercel)<br>
> The frontend will not load if there is no backend to connect to.

Since this is a Next app, the best way to host would probably be on Vercel. Click this button to deploy instantly!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFOSSLingo%2Fweb&env=NEXT_PUBLIC_BACKEND_URL&envDescription=Backend%20URL&envLink=https%3A%2F%2Fgithub.com%2FFOSSLingo%2Fbackend%2Fblob%2Fmain%2FREADME.md%23hosting-on-vercel&project-name=fosslingo-web&repository-name=fosslingo-web)

Or, follow these instructions manually.

1. Create a Vercel account at `vercel.com`, and link your GitHub account
2. On Github, create a fork of `FOSSLingo/web`
3. Back on Vercel, Click on "Import Project"
4. Select Import next to "web"
5. Under Application Preset, select Next.js
6. Click "Environment Variables", and add one named `NEXT_PUBLIC_BACKEND_URL` with the value of your [backend](https://github.com/FOSSLingo/backend) URL.
5. Click Deploy, and Deployment should start with the latest Git Commit

### Self hosting deploy

If you would like to self host the frontend on your own machine, follow these instructions. 

> [!TIP]
> We don't cover port forwarding / exposing to the web,<br>
> but for that, we recommend `cloudflared`!

This guide assumes you have `npm` and `git` installed on a **Linux** system.

1. Clone this repo somewhere easy to access:

```bash
git clone https://github.com/FOSSLingo/web
```

2. cd into the cloned directory:

```bash
cd web
```

3. Start the production server:

```bash
npm run build && npm start
```
---
This is a NextJS app made with `create-next-app`. It is made as the main client for FOSSLingo.
