![](https://avatars.githubusercontent.com/u/16862701?v=4)

---

## ⚡ mrh-jishan

I've decided to open-source my latest portfolio website! it has dynamic content management to add projects and posts using Contentful CMS, and was built using Next.js and Chakra UI.

Refer to [Next.js](https://nextjs.org/docs/) and [Chakra UI](https://chakra-ui.com/docs) documentation to learn more.

Feel free to fork this repository to make your own portfolio, and if you liked the repo, kindly support it by giving it a star ⭐!

## 🛠 Get started
### Getting the API Keys
Create an `.env.local` and follow the variable name based on `.env.example` and get the API Keys based on the steps below  

<details>
<summary>GitHub Api Key</summary>
<p>
<br>
  1. Create a <a href="https://github.com/settings/tokens?type=beta">GitHub Developer Settings</a> account, in the <i>Fine-grained tokens</i> part<br>
  2. After that, you'll see a code starting with <code>github_pat_</code> <br>
  3. Copy those code and put it into environment variables according to <code>env.example</code> and done! <br>
  </p>
</details>  

### Starting the Project
Install the dependencies with `npm i` or `yarn`  
Start the project by `npm run dev` or `yarn dev`  
  
### Deployment
You can deploy easily by using [Vercel](https://vercel.com/) 🎉  
  
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fabdulrcs%2Fabdulrahman.id)

## 📌 Overview
`pages/index.js` = Homepage  
`pages/projects/index.js` = Projects archive page  
`pages/blog/index.js` = Blog listings page  
`pages/blog/[slug].js` = Blog post page  

## ⚙ Tech Stack
- Next.js
- Chakra UI
- Contentful CMS
- MDX (next-mdx-remote)
- Google Analytics (react-ga)
