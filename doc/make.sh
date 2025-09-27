cd doc
cd logos
for i in black white; do magick -background none gemini_$i.svg gemini_$i.png; done

cd ../..

for i in blog legal projects work; do ln -sf ../src/content/$i doc/; done

cp -f doc/logos/gemini_white.svg ./public/favicon.svg
cp -f doc/logos/gemini_black.svg ./public/brand.svg
 

