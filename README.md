Recommendations App
===================


This is a simple web app that makes use of the tastedive api to make tv, film and music recommendations based on your current taste. You can enter the name of your favourite artist and it will give you ten suggestions for similar artists that you might like to try. 

## How to use ##
Clone this repo   
Inside the directory, run command `rackup `  
Run command `open index.html` to view the page in your browser.  
Enter the name of your favourite show or arist.

## Note ##
This app does require an api key to access the tastedive api.  
This can be obtained from https://tasetedive.com.
Once you have an api key, enter the following commands to get started.  
`touch .env`  
Save your api key in the env file as follows:  
`TOKEN=YOURKEYHERE`  
You're then ready to use the app.
