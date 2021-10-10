**Title : Git Hub Repository List Rendering Web App**

**Description:**
A web app built to get repositories of a GitHub user by passing the username as the route parameter as follows:
`http://localhost:4200/repo/{username}`

**Technologies Used:**
Angular, Typescript, HTML, SCSS

**Plugins Used:**
ng-bootstrap, font-awesome, ngx-skeleton-loader

**Commands to run on local:**
1) Clone or download zip file of the project and extract it.

2) Go to the folder and Install angular cli ( if Angular is not installed globally ) :

    npm i -g @angular/cli
    
    *Refer to : https://angular.io/guide/setup-local for further guidance on how to install/setup angular*

3) Install all dependencies using angular cli:

    npm i

    *If facing compatibility issue with dependencies, run*

    npm i --legacy-peer-deps

This will ignore the the dependency conflicts if there are any.

4) Run the project in your local :

    ng serve


The App should be ready to run on local


**Functionalities**

By default It will run furquan95 as the github user, but it can be changed to a user of your choice by passing github username as a route parameter like these examples:

http://localhost:4200/repo/furquan95
http://localhost:4200/repo/sindresorhus
http://localhost:4200/repo/kamranahmedse
http://localhost:4200/repo/donnemartin
http://localhost:4200/repo/jwasham
http://localhost:4200/repo/getify
http://localhost:4200/repo/trekhleb


**Time Taken to finish the project**
It took 5-6 hrs to finish the task including the installations and versioning.

**Happy Surfing Repositories**

