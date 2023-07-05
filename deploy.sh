rm -rf dish &&
pnpm run build &&
cd dist &&
git init  &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:72803286/Melons-UI-page.git &&
git push -f -u origin main &&
cd ..
echo https://72803286.github.io/Melons-UI-page/index.html