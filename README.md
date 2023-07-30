# ea322bb0-6fb5-4973-b466-852ea36e5c91
https://sonarcloud.io/summary/overall?id=examly-test_ea322bb0-6fb5-4973-b466-852ea36e5c91

# Some basic instruction to run the project

## To change directory to reactapp: 
### `cd reactapp`

## To change directory to springapp: 
### `cd springapp`

## To change directory to previous directory: 
### `cd ..`

## To install node modules: 
### `npm i`

## To run reactapp: 
### `npm start`

## To run springapp: 
### `mvn spring-boot:run`

## To connect mysql database: 
### `mysql -u root --protocol=tcp -p` press Enter and give password. 
#### Here "root" is the username and "examly" is the password

# *Note: The Cross-origin URLs should be updated with the frontend and backend port URLs*
## To update Springboot PORT URL in Reactapp:
### Go to `reactapp\src\services\axiosInstance.js` and in *line no. 4*, update the URL
Example: **`baseURL: "https://8080-fdaffbeddcdfefecdaaadaccdadddfabcfbf.project.examly.io"`** . Here Update the baseURL with Springapp port URL.

## To update Reactapp PORT URL in Springapp:
### Go to `springapp\src\main\java\com\example\springapp\controller` and open all the controller classes (DashboardController, EmployersController, JobsController, JobSeekersController, UserController) and there Update all the @CrossOrigin URLs with Reactapp URL.
Example: **`@CrossOrigin("https://8081-fdaffbeddcdfefecdaaadaccdadddfabcfbf.project.examly.io")`** . Here Update the URL with Reactapp port URL.