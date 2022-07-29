# dripsy-react-navigation-issue-218

Issue https://github.com/nandorojo/dripsy/issues/218

## Steps to reproduce the bug
1. clone this repo
2. run `npm install`
3. run `npm run web`
4. it opens website, and you will the react navigation header at the bottom not top.

## Expected bahavior
React Navigation Header is displayed at the top of the page (Actually it works as expected on expo snack even thought it uses exactly same dependencies)

[Snack link](https://snack.expo.dev/D8Tv2cKCS)
![Screen Shot 2022-07-29 at 10 20 20 am](https://user-images.githubusercontent.com/41939914/181658037-b1bbae6f-2e92-4a67-93de-14a4af660832.png)


## Actual behavior
React Navigation Header is diplayed at the bottom of the page (It is reproduced in this repo)
<img width="909" alt="Screen Shot 2022-07-29 at 10 22 38 am" src="https://user-images.githubusercontent.com/41939914/181658202-4cda6fb4-837e-4f22-9625-d0870646172f.png">
