# FE16-CR4-SanjaKostantinovic
Code Review 4

Welcome to your 4rd CodeReview!  Now that you have improved your knowledge in HTML, CSS, Bootstrap and have been introduced to Javascript, we are even more excited to see what you will develop next! 

You will need to achieve more than 60 points to pass this CodeReview successfully.  

You will be graded accordingly to the results achieved. Please see the number of points for each task below.  

The grading system has the following rules: 

Up to 60 points = red 

Between 61 and 79 = yellow 

Over 80 = green 

You can submit your solution (as GitHub project link) until Saturday 18:00:00. 

Please examine the image below and use it as a guide to creating your index.html page, as well as script.js. All images should be stored in an “images” folder, all stylesheets within a “CSS” folder and all JavaScript files within a “js” folder. 

In this Code Review, your job is to create a list of Tasks for a “My Weekly Planner” website. Information about the tasks should be stored in a JSON file. 

This is the proposed design - feel free to expand: 

 
 

For this CodeReview, the following criteria will be graded: 

(5 points) Create a GitHub Repository named: FE16-CR4-YourName. Push the files into it and send the link through the learning management system (lms). Please add codefactorygit as a collaborator! See an example of a GitHub link below: 

https://github.com/JohnDoe/repositoryname.git 

(5 points) Correct HTML, CSS and JavaScript code and files organized into separate folders, as well as structured code indentation. 

(20 points) Use bootstrap to help you create the provided design. You can complement your design with CSS/SASS/SCSS, but at least the container holding the Tasks’ cards should use bootstrap classes for responsiveness. The container should have 3 columns in a row for large screens (provided layout), 2 columns in a row for medium screens and 1 column in a row for small/extra small screens. 

(20 points) Correct creation of JSON file to hold the information of the Tasks. Please note that for this assignment you can provide the information/data of any Task you want. Be creative and avoid dummy data as Lorem Ipsum..., e.g:   

{ 

    "taskName": "shopping", 

    "image": "img/groceries.jpg", 

    "description": "Shop for weekly groceries at Billa and Hofer.", 

    "importance": 0    

  } 

  

(20 points) Correct creation of the HTML/Bootstrap structure dynamically using JavaScript. This should not be hard coded: elements should be created by JavaScript rather than written in the HTML file. The following should be shown on the screen: the Task’s name, a short description, a representative image and the Priority level field with the representative number.  Feel free to expand the information such as duration, location, cost etc... hint: review the functionality of loops. 

(20 points) Every time the “Importance” button is clicked, the number of “importance” (the number shown next to the “Importance” button in the template) should increase by one (1). 

(10 points) As it is in the example template, the background color of the priority level number will change depending on the displayed number.   

The colors should be as follow (bootstrap colors): 

Between 0 – 1 -> Green = (success) 

Between 2 – 3 -> Yellow = (warning) 

Between 4 – 5 -> Red = (danger) 

Hint: The colors must change when clicking on the "Importance" button. 

Make sure that every “Task” has an initial value 0 = Green. 

Bonus Points: 

(20 points) Add a Sort button that will sort the resulting list of tasks according to their current level of importance (e.g. on ascending order, it will organize the Tasks from less important to more important). 
