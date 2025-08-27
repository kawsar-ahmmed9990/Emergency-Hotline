What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**

JavaScript এ DOM থেকে element নেওয়ার জন্য কয়েকটা প্রধান মেথড আছে।

1. getElementById
2. getElementsByClassName
3. querySelector
4. querySelectorAll

getElementById:
একটি নির্দিষ্ট id এর element খুঁজে বের করে
getElementsByClassName:
একটি নির্দিষ্ট class এর সব element খুঁজে বের করে
querySelector:
querySelector দিয়ে প্রথম ম্যাচ করা element খুঁজে বের করে
querySelectorAll:
querySelectorAll দিয়ে সব ম্যাচ করা element খুঁজে বের করে

2. How do you **create and insert a new element into the DOM**?

const newdiv = document.createElement("div");
const contianer = document.getElementById(id);
newdiv.innerHTML = `<h1>Hello</h1>`;
container.append(newdiv);

3. What is **Event Bubbling** and how does it work?

যখন কোনো ইভেন্ট (যেমন click) একটি child element এ trigger হয়, তখন সেটা উপরের parent element পর্যন্ত ধাপে ধাপে ছড়ায় একে Event Bubbling বলা হয়

কাজ:
ইভেন্ট প্রথমে child এ trigger হয়
তারপর উপরের parent elements এ ধাপে ধাপে ছড়ায়

4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation মানে হলো parent element এ একটি event listener বসানো এবং তার child elements এর events handle করা।
সুবিধা:
অনেক child element থাকলে আলাদা listener না বসিয়ে parent এ বসানো যায় -> memory efficient

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault()-> ব্রাউজারের default behavior রোধ করে। যেমন, link click এ page reload বন্ধ করা।
stopPropagation() -> event bubble এ parent element পর্যন্ত না যাওয়ার জন্য।
