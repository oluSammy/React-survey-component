# Casting Survey

## Instructions
Read the following instructions carefully;
* All questions need to be displayed one at a time.
* Show a progress bar for percentage of questions answered.
* Implement reasonable validations for each field.
* The questions should be stored in an array passed in as a prop into a component which should display each question and answer type depending on the questions asked; see example [Sample Question Configuration](#sample-question-configuration)
* All questions should be answered unless stated otherwise.

<br />
<br />

## Casting Questions
#

1. Are you nominating yourself or someone else? 
#### Drop down options:
    - Someone Else
    - Myself

**If the user selects 'Someone Else'; display questions 2-12 else display questions 13-23.**

### <ins>**Someone Else Section:**</ins>

2. What is your relationship with the nominee?
3. What's you nominee's name.
4. What's you nominee's age.
5. What's you nominee's location.
6. What's you nominee's email address
7. What's you nominee's phone number.
8. What is your reason for nominating them for Spotlight You? (Please provide as much detail as possible).
9. Which of the following best represents the area in which your nominee has impacted Lagos?

    #### Drop down options: 
    #
        Sports, 
        Arts, 
        Music, 
        Film, 
        Charity, 
        Culture, 
        Theatre, 
        Community,
        Other (please specify).

    ***If a user selects Other; display a field that allows the user to enter a custom value***

10. How has the nominee made the lives of people in Lagos better?
11. How has the nominee made Lagos proud?
12. Please list the nominee’s social handles here if you have them? (to aid in casting research).

<br />

### <ins>**Myself Section:**</ins>

13. Tell us your name.
14. Tell us your age.
15. Tell us your location.
16. Tell us your email address.
17. Tell us your phone number.
18. Do you work in the Lagos (Please provide details)?
19. What is your reason for nominating yourself for Spotlight You?
20. Which of the following best represents the area in which you have impacted Lagos?
    #### Drop down options:
    #
        Sports, 
        Arts, 
        Music, 
        Film, 
        Charity, 
        Culture, 
        Theatre, 
        Community, 
        Other (please specify).
    ***If a user selects Other; display a field that allows the user to enter a custom value***

21. What do you do to make the lives of the people of Lagos better?
22. What do you do to make Lagos proud?
23. Please list your social media handles below (to aid in casting research).

#

24. Are you comfortable for someone from Wazobia Technologies (who will be filming/editing the content) to reach out to you to discuss this nomination further?

25. Please Tick Here to Confirm Your Agreement.

<br />

<a id="sample-question-configuration"></a>
## Sample Queston Configuration
#

```js
const questions = [
    {
        "label": "Are you nominating yourself or someone else?",
        "type": "select",
        "options": [
            {
                "label": "Myself",
                "value": "self"
            },
            {
                "label": "Someone else",
                "value": "someoneelse"
            }
        ],
        "questionsOnValue": (value) => {
            if (value == "self") {
                return selfQuestions;
            }
            return nominatingQuestions;
        }
    }
];
```
#

```js
const someoneElseQuestions = [
  {
    "label": "Tell us your nominee's name", // Field label
    "name": "name", // Field name
    "type": "text", // determines the option component type
    "placeholder": "Your nominee's full name", // Placeholder
    "validation": (value) => (value.length > 3 && value != "")
  },
  ...
];
```

#

```js
const selfQuestions = [
  {
    "label": "Tell us your name",
    "name": "name",
    "type": "text",
    "placeholder": "Your full name",
    "validation": (value) => (value.length > 3 && value != "")
  },
  ...
];
```