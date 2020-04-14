# MSG Speed Test App
### This is the official MSG Sped Test App



## Quick Start

1. __No, I will not explain how to do this on MacOS or Windows. Get Linux.__

2. You cannot start quickly if you don’t know what [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")is.

   > Skip to “[Get Started](#get-started "Get Started")“ instead.

3. Fire up a terminal using ```Ctrl + Alt + T``` and then punch the following in:

   ```bash
   git clone https://github.com/siddhantvinchurkar/msg-st.git
   cd msg-st/
   npm install --save
   npm run build
   sudo npm start
   ```

4. Watch it blow your mind at [http://localhost:1000/](http://localhost:1000/ "localhost on port 1000").

   

## Table of contents

1. [Get Started](#get-started "Get Started")
2. [Life Hacks](#life-hacks "Life Hacks")
3. [API Access](#api-access "API Access")
4. [License and Privacy](#license-and-privacy "License and Privacy")
5. [Credits](#credits "Credits")



## Get Started

1. Clone this repository. Either download a [zip](https://github.com/siddhantvinchurkar/msg-st/zipball/master "Download .zip") or [tarball](https://github.com/siddhantvinchurkar/msg-st/tarball/master "Download .tar.gz") and extract it or run the following command:

   ```bash
   git clone https://github.com/siddhantvinchurkar/msg-st.git
   ```

2. Then open a terminal inside the extracted folder or change the directory:

   ```bash
   cd msg-st/
   ```

   

3. [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App")is built using [![Some things in life are worth waiting for…](docs/react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](docs/next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js").

4. [![Some things in life are worth waiting for…](docs/react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](docs/next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js")need [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")to run.

5. So obviously, your first step will be to install [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js"):

   ```bash
   # First, install Node.js like so:
   sudo apt-get install nodejs
   # Node Package Manager (This helps install Node.js packages):
   sudo apt-get install npm
   ```

6. Okay, good. Now you are running [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")on your machine. The next step is to install [![Some things in life are worth waiting for…](docs/react_js_logo.png "React.js")](https://reactjs.org/ "React.js")and[![Some things in life are worth waiting for…](docs/next_js_logo.png "Next.js")](https://nextjs.org/ "Next.js"):

   ```bash
   npm install --save react react-dom next
   ```

7. You will also need [react-helmet](https://www.npmjs.com/package/react-helmet "React Helmet") :

   ```bash
   npm install --save react-helmet
   ```

8. The [package.json](package.json "package.json") file lists all dependencies of this app so a quick way to execute steps 4 and 5 is:

   ```bash
   npm install --save
   ```

9. Okay, you are now ready to run this app and there are two ways to do that:

   1. Run the development server:

      ```bash
      npm run dev
      ```

      > The development server auto-refreshes the app every time a file is changed and runs on port 3000 ([http://localhost:3000](http://localhost:3000 "localhost on port 3000")).

   2. Run the production server:

      > To do this, you must first build the app using the following command:

      ```bash
      npm run build
      ```

      > This will create an optimised version of the app which is suitable for production environments. Once that is done, you can start the production server like so:

      ```bash
      sudo npm start
      ```

      > This will host the production build of the app on port 1000 ([http://localhost:1000](http://localhost:1000 "localhost on port 1000")).



## Life Hacks

1. If you use [![Some things in life are worth waiting for…](docs/vs_code_logo.png "Visual Studio Code")](https://code.visualstudio.com/ "Visual Studio Code") you can run the following one word command to get started:

   ```bash
   ./codethis
   ```

   > But of course, you will need to set the right permissions first:

   ```bash
   sudo chmod +x codethis
   ```

2. To run the server in the background so the terminal can be closed or used for other tasks, simply append a trailing ampersand (```&```) to the command like so:

   ```bash
   # For development server
   npm run dev &
   # For production server
   sudo npm start &
   ```

3. If you don’t have access to a server that runs [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")or cannot afford a domain, just use the following one word command and follow the on-screen instructions:

   ```bash
   now
   ```

   > But of course, if you haven’t installed “```now```” yet, run this command first:

   ```bash
   sudo npm i -g now
   ```

   > At the end of it, a URL that looks a bit like this - [https://msg-speed-test.now.sh/](https://msg-speed-test.now.sh/ "MSG Speed Test App") will be copied to your clipboard automatically. This is the URL that points to your [![Some things in life are worth waiting for…](docs/node_js_logo.png "Node.js")](https://nodejs.org/en/ "Node.js")server running on [![Some things in life are worth waiting for…](docs/zeit_logo.png "Zeit")](https://zeit.co/ "Zeit").



## API Access

1. The [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App")API is free and open to anyone who wishes to use it and there’s just one encrypted endpoint: [https://api.msg-st.wildscript.tech](https://api.msg-st.wildscript.tech).
2. To access the [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App")API you will need [public/scripts/network.min.js](public/scripts/network.min.js "network.min.js").
3. Follow the implementation of the [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App")API in [public/scripts/main.js](public/scripts/main.js "main.js") to consume the [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App")API.



## License and Privacy

1. I believe in freedom. Which is why this repository is licensed using [![Some things in life are worth waiting for…](docs/wtfpl-badge.png "WTFPL")](http://www.wtfpl.net/ "WTFPL") ([view license](LICENSE.md "License - WTFPL")).
2. In a world where data is king, guarding privacy is a must. Which is why my version of [![Some things in life are worth waiting for…](public/images/icons/favicon_48.png "MSG Speed Test App")](https://msg-st.wildscript.tech/ "MSG Speed Test App") will never collect any personal information. That being said, I still maintain a __GDPR compliant privacy policy__ available at [https://msg-st.wildscript.tech/privacy](https://msg-st.wildscript.tech/privacy "Privacy Policy").



## Credits

1. Credit goes to [Dhanush Lingaswamy](https://github.com/dhanushkuchki "Dhanush Lingaswamy") for suggesting that I build a speed test app.
2. Credit also goes to all members of MSG, who actively supported the development of this app.
3. But most importantly, credit goes to [Johann Pardanaud (nesk)](https://github.com/nesk "Johann Pardanaud (nesk)") for creating [network.js](https://github.com/nesk/network.js "network.js") which is the reason this app even works.
