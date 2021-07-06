See https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html

In short:

1) Edit packages/ckeditor5-build-ezicheq/src/ckeditor.js

2) Run (from our directory)
   $ yarn run build

3) Test it by browsing to sample/index.html

3) Pick up your output in build/ckeditor.js


To git commit without complaints, set HUSKY_SKIP_HOOKS=1

---------
There is also a ckeditor5-vue2 repository which creates 'ckeditor.js' which we rename
to 'ckeditor-vue.js'

For that I have to
1) install webpack-cli globally on system
2) run 'npm link webpack-cli' in that repo
3) run 'npm audit fix' to fix at least the critical issues
4) run 'npm run build' to build
5) rename and edit files in dist/  to be 'ckeditor-vue.js'
6) copy into Checkit application
