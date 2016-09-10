# MessageStatsSite
A website frontend for [@MessageStatisticsBot](https://telegram.me/messagestatisticsbot) on Telegram.

# Development Environment
Setting up the development environment is fairly trivial; all you need to do is run ```npm install``` and 
```bower install```.

Now that you have all the necessary dependencies, you can use gulp to build the site. If you are running in a testing 
environment, I would recommend you use the command ```gulp dev```. This will automatically watch, build, and reload
the test site. If you want to compile the site for use in production, simply run the command ```gulp dist```. This will
minify all files and remove unused CSS.

Note: this assumes you already have node, npm, bower, and gulp installed :wink:

# Contributing
I don't intend to have any official rules for pull requests, but if you intend to contribute to this project, please 
follow the general style of the rest of the project. Before you submit a pull request, please make sure it looks good on
all reasonable screen sizes!