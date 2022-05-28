
const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
	userAgent: 'some-description',
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	username: process.env.REDDIT_USER,
	password: process.env.REDDIT_PASS
});

const stream = new CommentStream(r, { subreddit: "Liverpoolfc", results: 25 });

const steady = 'steady'

stream.on("item", comment => {
    if(comment.body === steady.toLowerCase()) comment.reply(`You say steady to me again when I say something to you and you'll be on the first plane back. ✈️`)
})
