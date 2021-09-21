#!/bin/bash

# brew install jq

echo "Generating RSS feed!"

feed_filename=../public/feed.xml

cat pre.txt > $feed_filename

news=$(< ../src/home/news.json)
numberOfEntries=$(echo $news | jq 'length')

for ((i = 0 ; i < $numberOfEntries ; i++)); do
    echo $i

    entrytitle=$(echo $news | jq -r ".[$i].heading")
    entrydate=$(echo $news | jq -r ".[$i].date")

    entrypre=$(< entry-pre.txt)
    entrypre="${entrypre//---TITLE---/$entrytitle}"
    entrypre="${entrypre//---DATE---/$entrydate}"

    echo $entrypre >> $feed_filename

    entry=$(echo $news | jq -r ".[$i].body")

    entry="${entry//\"/&quot;}"
    entry="${entry//</&lt;}"
    entry="${entry//>/&gt;}"

    echo $entry >> $feed_filename

    cat entry-post.txt >> $feed_filename
done

cat post.txt >> $feed_filename
