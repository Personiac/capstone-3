# capstone-3

The intent behind our capstone project is to create a microblogging website through collaborative methods as opposed to working independently. We have had practice with the github workflow to allow everyone to obtain a better understanding of how to cooperate with each other's code.

Our landing page uses a minimalist design when welcoming the user to the login page.  

![image](https://github.com/Personiac/capstone-3/assets/100500645/66695c6e-978a-4736-8cf4-bb3834795795)



--------------------------------



The page uses a button to use an alert to provide a brief paragraph for the user to learn more about the website. One edge case that we have with the alert button would log the user in assuming they already have the correct username and password filled out in the input field.

![image](https://github.com/Personiac/capstone-3/assets/100500645/2c882240-18f4-4094-9f92-3bd705a2f053)




--------------------------------



Our registration page uses a form and emulates similar common layouts seen for other services. It uses a fetch and "POST" method to allow the user to create an account that would be saved to the list in the API database. Some issues we had during the process of creation for this page included understanding how the authorization works and if it was needed to POST a new profile object to the API. We've come to learnt hat authorization is not needed for this project. The form also implements error messages to explain which areas of the form are incomplete and are requierd to be filled out.

![image](https://github.com/Personiac/capstone-3/assets/100500645/3ad10147-b27d-4702-8ce1-bb6e87b7f3d0)

![image](https://github.com/Personiac/capstone-3/assets/100500645/fe74e5bf-793f-413e-9176-5263de96fda5)



--------------------------------




The post page allows the user to create their own message and submit it to the API database. From there, we fetch the API and convert the json response into a JavaScript object that we can use. The JavaScript object is then displaying the array from the object as a list of user posts in a layout similar to other social media platforms.

![image](https://github.com/Personiac/capstone-3/assets/100500645/b22ab5ee-9c6a-4f24-9279-c6a4ef78a2df)




--------------------------------



The profile page is a simple template to act as a proof of concept to showcase a future potential build and functionality that can be implemented. The submit a post button currently links back to the post page, but we can implement the feature to directly submit a post on the same page and include the ability to edit the user information such as username and bio.

![image](https://github.com/Personiac/capstone-3/assets/100500645/9080c328-2af3-4f27-b44b-968b388ac675)




--------------------------------




The logout button is located in the navbar across the registration page, post page, and profile page. The feature functions appropriately to allow the user to exit their account session.



