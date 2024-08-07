# What is Javascript?

JavaScript aik programming language hai jo web development mein use hoti hai. Yeh language web browsers jese
( Chrome, Firefox, etc.) ke andar run hoti hai or web pages ko interactive banati hai. 
JavaScript se ham buttons par karne se kuch actions perform kar sakte hain forms submit kar sakte hain
animations bana sakty hain or bhi bahot kuch.

### JavaScript Ke Faide:
Web Pages Ko Interactive Banati Hai:
JavaScript se ham apne web pages mein interactive elements add kar sakte hain jaise ke buttons, forms, sliders, etc.

### Client-Side Execution:
JavaScript directly web browser mein run hoti hai isliye server ke resources ka load kam ho jata hai.

### Asynchronous Programming:
JavaScript async operations ko handle kar sakti hai, jis se ham background mein data fetch kar sakte hain 
bina page reload kiye.

### Cross-Browser Compatibility:
JavaScript har web browser mein kaam karti hai, is liye hamen alag alag browsers ke liye alag alag code 
likhne ki zarorat nahi hoti.

### Community Support:
JavaScript ki bohot bari community hai, jis se hamen help or resources milna aasaan hota hai.


# JavaScript Ke Use Cases
### Web Development:
JavaScript primarily web development mein use hoti hai or ham web pages mein dynamic content or 
interactive elements add kar sakte hain.

### Web Applications:
JavaScript frameworks (React, Angular, Vue.js) use kar ke ham complex web applications bana sakte hain.

### Mobile App Development:
Frameworks jaise React Native use kar ke ham mobile applications develop kar sakte hain

### Server-Side Development:
Node.js use kar ke ham server-side applications bhi develop kar sakte hain.

### Game Development:
JavaScript or HTML5 use kar ke ham browser-based games bhi develop kar sakte hain.

### Automation:
JavaScript se ham browser automation or web scraping.

### summry
JavaScript aik powerful language hai jo web development ko interactive or dynamic bnati hai or Ye har web browser mein run hoti hai or is ke bohot sare use cases hain jaise web development, mobile app development, server-side development, or game development. JavaScript ki bari community or support ki wajah se hamen resources orr help milna Aasaan hota hai.



# JavaScript Run-time Environment 4 main Components
JavaScript run-time environment ke 4 main components hote hain: Call Stack, Asynchronous Callbacks, Task Queue, or Event Loop. In components ka kaam aik sath mil kar JavaScript code ko execute karna hota hai.

### 1. Call Stack
Call Stack aik data structure hai jo JavaScript code ke function calls ko track karta hai. Jab bhi aik function call hota hai, wo stack mein push ho jata hai, or jab function complete ho jata hai, to wo stack se pop ho jata hai. matlab ke Jab hum kisi cheez ko stack se nikaalte hain to us operation ko "pop" kehte hain.

### 2. Asynchronous Callbacks
JavaScript mein asynchronous callbacks un functions ko refer karte hain jo kisi asynchronous operation (jaise setTimeout, network request) ke complete hone par execute hoty hain.

### 3. Task Queue
Task Queue aik queue hai jahan asynchronous callbacks ko place kiya jata hai jab wo ready hote hain. Jab call stack empty hoti hai, event loop task queue se callbacks uthata hai or unko call stack mein push karta hai taake wo execute ho sakein.

### 4. Event Loop
Event Loop aik mechanism hai jo continuously check karta hai ke call stack empty hai ya nahi or task queue mein koi pending callback hai ya nahi. Agar call stack empty hota hai or task queue mein koi callback hota hai, to event loop us callback ko call stack mein push kar deta hai taake wo execute ho sake.




## V8 Engine
V8 Engine JavaScript ka aik powerful engine hai jo Google ne develop kiya hai. Yeh engine JavaScript code ko run karta hai or isy fast or efficient banata hai. 

### V8 Engine Kya Hai?
Definition: V8 Engine aik open-source JavaScript engine hai jo Google ne develop kiya hai. Yeh engine Google Chrome or Node.js mein use hota hai.
Purpose: Iska main purpose JavaScript code ko fast or efficient tarike se execute karna hai.

### V8 Engine Kahan Use Hota Hai?
Google Chrome: Yeh browser V8 Engine ka use karta hai taky web pages pe JavaScript code ko quickly execute kar sake.
Node.js: Server-side JavaScript runtime environment hai jo V8 Engine ka use karta hai taake server-side applications ko fast or efficient banaya ja sake.

### V8 Engine Kya Karta Hai?
JavaScript Code Execution: Ye JavaScript code ko directly machine code (computer language) mein convert karta hai, jo directly processor pe run hota hai. Is tarah se JavaScript code bohot fast execute hota hai.

### Memory Management: 
V8 Engine automatic memory management or garbage collection ka bhi khayal rakhta hai. Yeh ensure karta hai ke unnecessary memory free ho jaye taake application smoothly chal sake.

### V8 Engine Kab Aur Kyun Karta Hai?
Web Browsing: Jab ham Google Chrome mein koi web page open karte hain jo JavaScript use karta hai, to V8 Engine JavaScript code ko execute karta hai taake web page interactive or functional ho.
Server-Side Scripting: Jab ham Node.js application chalate hain, to V8 Engine server-side JavaScript code ko execute karta hai taake web server efficiently kaam kar sake.

### V8 Engine Kaise Kaam Karta Hai?
Parsing: Sabse pehle, V8 Engine JavaScript code ko parse karta hai or usy Abstract Syntax Tree (AST) mein convert karta hai.
1. Compilation: Iske baad, ye AST ko machine code mein compile karta hai.
2. Execution: Phir yeh compiled machine code ko directly processor pe execute karta hai.
3. Optimization: V8 Engine code ko execute karte waqt continuously optimize bhi karta rehta hai, taake performance or bhi improve ho sake.

### JavaScript Run-time Environment Kya Hai in details part 2?
JavaScript Run-time Environment (JRE) wo environment hota hai jahan JavaScript code execute hota hai. Yeh environment zaroori tools or libraries provide karta hai jo JavaScript code ko run karne or uske operations ko perform karne ke liye chahiye hote hain.

### V8 Engine Ka Purpose Kya Hai?
High Performance: V8 Engine ka main purpose JavaScript code ko high performance ke sath execute karna hai. Iske liye ye code ko directly machine code mein compile karta hai.
Efficiency: Ye engine memory management or garbage collection ka bhi khayal rakhta hai taake application efficiently chal sake.


### Summary
V8 Engine: Google ne develop kiya hai or JavaScript engine Chrome or Node.js mein use hota hai.
Purpose: JavaScript code ko fast or efficient tarike se execute karna.
Working: JavaScript code ko machine code mein convert karke execute karta hai or memory management ka khayal rakhta hai.
Usage: Web browsing (Google Chrome) or server-side scripting (Node.js).


### Key Components of JavaScript Run-time Environment
### JavaScript Engine:
JavaScript Engine wo software hota hai jo JavaScript code ko execute karta hai. Yeh engine JavaScript code ko machine code (binary code) mein convert karta hai jo computer samajh sakta hai.
Popular JavaScript engines:
1. V8 (Google Chrome or Node.js mein use hota hai)
2. SpiderMonkey (Mozilla Firefox mein use hota hai)
3. JavaScriptCore (Safari browser mein use hota hai)

### Web APIs:
Web APIs wo functions or objects hote hain jo browser provide karta hai. Inka use kar ke ham browser ke features or functionalities ko access kar sakte hain jaise Document Object Model (DOM), geolocation, local storage, etc.
Examples:
1. DOM API: Web page ke elements ko manipulate karne ke liye.
2. Fetch API: Network requests send karne ke liye.
3. Local Storage: Browser mein data store karne ke liye.

### .Event Loop:
Event loop wo mechanism hai jo asynchronous operations ko handle karta hai. Ye ensures karta hai ke code non-blocking tarike se execute ho. Jab asynchronous operations (jaise network request ya timer) complete hoty hain to event loop callback functions ko queue se uthata hai or unko execute karta hai.

### Callback Queue:
Callback queue mein wo functions store hote hain jo asynchronous operations complete hone ke baad execute hone chahiye. Event loop yahan se callbacks uthata hai or unko execute karta hai.

### Popular JavaScript Run-time Environments
### Browser Environment:
JavaScript mostly browsers mein run hoti hai, jahan hamen web APIs or DOM access milta hai.
Browsers:
1. Google Chrome
2. Mozilla Firefox
3. Microsoft Edge
4. Safari


### Node.js:
Node.js aik server-side JavaScript run-time environment hai. Iska use karke ham server-side applications develop kar sakte hain.
Features:
1. File system access
2. Network programming
3. Command line tools
4. Node.js mein JavaScript code V8 engine par run hota hai.

### Benefits of JavaScript Run-time Environment
### Cross-Platform Compatibility:
JavaScript run-time environments multiple platforms jese (Windows, macOS, Linux, browsers) par run ho sakty hain, jo isko highly versatile banata hai.

### Asynchronous Programming:
Event loop or callback mechanism ki wajah se ham asynchronous operations easily handle kar sakte hain, jo non-blocking code execution ko ensure karta hai.

### Rich Set of APIs:
JavaScript run-time environments web APIs or Node.js APIs ka rich set provide karte hain, jo development process ko easy or efficient banata hai.

### Large Community Support:
JavaScript or Node.js ki bohot bari community hai jis se hamen help or resources milna aasaan hota hai.


### Use Cases
### Web Development:
Browsers mein JavaScript run-time environment ka use karke ham interactive web pages develop kar sakte hain.

### Server-Side Development:
Node.js ka use kar ke ham server-side applications develop kar sakte hain jese REST APIs, web servers, etc.

### Mobile App Development:
Frameworks jaise React Native ka use karke ham mobile applications develop kar sakte hain.

### IoT (Internet of Things):
Node.js ka use kar ke ham IoT devices ke liye applications develop kar sakte hain.

### Summry
JavaScript Run-time Environment wo infrastructure provide karta hai jahan JavaScript code execute hota hai. Isme JavaScript engine, web APIs, event loop, or callback queue jaise components shamil hote hain. Yeh environment JavaScript ko browsers or server-side applications dono mein run karne ki capability deta hai. Iski cross-platform compatibility or rich set of APIs ki wajah se ye highly versatile or popular hai.

