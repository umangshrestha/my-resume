# About
This is a side project by me to share with my friends so they can host their resume in github. 

# Steps:
1. Add the repo to your github. 
2. Edit the files in src/details as per your credentials/
3. To run the code locally:
    * `npm start`
    * the brower will open the resume at `localhost:3000`
4. Create a branch:
    *  `git checkout -b gh-pages`
4. Configure github to allow you to host the page:
    * Go to gihub.
    * click settings.
    * Go to pages
    * add branch as: gh-pages
5. To deploy it to your github:
    * `npm install -g gh-pages  --save-dev`
    * `npm run deploy`
    * your resume will be available at `https://{your-name}.github.io/my-resume/`

