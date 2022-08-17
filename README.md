# allAccess
### My Final Project for devCodeCamp
> Grade recieved: **87%**

#### The ultimate goal for this web-based application is to make communities **truly accessible** by providing accurate information to users, by users with lived experiences pertaining to the level of accessibility in local businesses, and opening lines of dialog between the disability community, their caregivers, and business owners.

# Description:
You might have noticed features on navigation platforms and search engines that provide accessibility information about various locations. These include things like wheelchair-accessible parking and wheelchair-accessible entrances. While they are a good start and I believe companies are acting with the best of intentions, these features only offer limited and even inaccurate opinions from everyday users who might not actually know what it's like to...

...maneuver a wheelchair to a local business that has wheelchair-accessible parking, only to find that the door has to be pulled open manually,
...be blind or have low vision, and the only accommodations at a concert venue are just Braille signs indicating the men's and women's restrooms,
...have a developmental disability and struggle to find businesses where the employees are patient while they work to communicate with you instead of rushing you the door,

and countless other conundrums that are more-or-less an inevitable part of living with a disability.

allAccess aims to solve this issue with the opportunity for users who *have* experienced situations like those listed above to share their experiences with each other. The application also allows business owners to open lines of communication with the disability community so they can learn what it means to navigate their business with a varying disabilities and receive suggestions as to how to make their business **truly accessible**.

# Technologies used/planned:
- [x] MERN stack
   - [x] MongoDB
   - [x] Express
   - [x] React.js
   - [x] Node.js
- [x] JavaScript
   - [x] JSON
   - [x] JWT
- [x] Google Cloud Platform
   - [x] Google Places API
   - [x] Google JavaScript Maps API
   - [ ] Google Geocoding API
   - [ ] Google Distance Matrix API
- [x] HTML5
- [x] CSS

# Application features:
- [x] User account registration, login, and logout with encryption via JWT.
- [x] User profile creation including the option to self-identify as a caregiver or business owner.
- [x] A search component that does not require an account to use. It takes in keywords and returns a list of businesses (Places API) near the user’s current location (Geocoding API) as well as basic info like the address and whether or not the business is currently open or closed.
- [x] Clicking on a location will open a page that is dedicated to info about that location as well as users’ feedback about accessibility measures and accommodations.
- [x] An interactive map (JavaScript Maps API) is featured on the landing page with pinned search results and corresponding details listed for each one.
- [x] The option for registered users to submit their own feedback about a place they visited in order to provide accessibility info for other users who intend on visiting as well.

#### *Application remains under continuous development and improvement as I refine my skills.*

##### allAccess was my final project and graduation requirement for devCodeCamp's full stack web development bootcamp. It demonstrates what I learned about creating MERN stack web applications. I received a passing grade and continue to implement improvements to the app's features as well as adding new features and pages.
