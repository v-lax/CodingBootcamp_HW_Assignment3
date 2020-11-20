# Password Generator
practicing some javascript to create a random password generator.

# Description 
This was a really fun project. We were given the following; an HTML and CSS file that had all the structure and styling in place, and a spare java script file. That was where our all my work went, into that javascript file. I had to write the logic for creating a random password generator.

# How it works
Every time the user clicks on the generate password button, they are asked to do the following.
    
    1. Choose a password length in between 8 and 128 characters. If they provide an incorrect value they are prompted again to input in a correct value. 
    2. Confirm the following.
        a. Do you want to include lowercase letters?
        b. Do you want to include Uppercase letters?
        c. Do you want to include Numbers?
        d. Do you want to include speacial Characters? 
        e. If they respond no to all four of these prompts they are alerted that they need to choose at least one and taken through the choices again. 
    3. After that has been done, a password is generated for them! They can click on the "generate password" button again and they will be taken through these steps again!

# Roadblocks and What I still need to work on

Now the only issue I was not able to resolve was the following. I was not able to check if the password that was generated contained at least one character assigned from each of the criteria chosen by the user. I think I got close though. I was messing around with using the array.some() method, which checks if at least one element of the array meets specific criteria specified in the some method by a callback function, but was not able to check it against the multiple arrays that I had. Still working on this, but I think I can find the solution pretty soon! 

# Link to deployed github page
1. https://v-lax.github.io/Password_Generator/
