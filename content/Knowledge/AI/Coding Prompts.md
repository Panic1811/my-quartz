---
{"publish":true,"cssclasses":""}
---

# AI PROMPTS

1. **Lazy Loading (increasing performance)**
   
```
   Do we have lazy loading for images? I was also thinking of caching avatar pic, digital twin pic, and known people pics, as those are small sizes so when user needs them they load much quicker, thoughts?  
  
For lazy loading, perhaps adding explicit width and height attributes to tag to give the browser layout hints? Use aspect ratio css as fallback to reserve space? User intersection observer for more control over whe n images load (more robust than native lazy loading?) Avoid unnecessary rendering of content and avoid memory leaks? make sure we have never more than 12 images
on the dom and we use VIRTUAL SCROLLING to remove / add as we scroll content to the DOM / list ? 

Do you think this will be helpful for our app? Check the above and for memory leaks and other performance/speed degredants that can we change without breaking anything in our app. Also do we have preloading? 
```
   