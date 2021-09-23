// run `node index.js` in the terminal
const axios = require('axios').default;
// [x] basic js (es6)
/*
  iife,
  destructuring,
  spread,
  optional chaining,
  async/await
  sort
  let/const
*/
// [x] add api
// [ ] add s3
// [ ] add db (mongo test)

const url1 =
  'https://stormersmagazine.com/api/publications?isPreview=false&issuePermalink=issue-91&permalink=stormersmagazine.com';
const url2 =
  'https://springbokmagazine.com/api/publications?isPreview=false&permalink=springbokmagazine.com';

(async function () {
  try {
    let stormersPages = await getPublicationPages(url1);
    let springbokPages = await getPublicationPages(url2);

    stormersPages = stormersPages.map(({ title }, index) => {
      return {
        title,
        index,
        source: 'Stormers Magazine',
      };
    });
    springbokPages = springbokPages.map(({ title }, index) => {
      return {
        title,
        index,
        source: 'Springboks Magazine',
      };
    });
    let allPages = [...stormersPages, ...springbokPages];
    allPages = allPages.sort((a, b) => {
      return a.title.length > b.title.length ? 1 : -1;
    });
    allPages.forEach((p, i) => {
      console.log(`Page ${p.index + 1} of ${p.source}: ${p.title}`);
    });
  } catch (e) {
    console.error(e.message);
  }
})();

async function getPublicationPages(url) {
  try {
    const res = await axios.get(url);
    return res?.data?.issues[0]?.pages;
  } catch (e) {
    console.error(e.message);
  }
}
