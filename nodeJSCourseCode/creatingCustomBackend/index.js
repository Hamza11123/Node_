const fs = require("fs"),  http = require("http");

const hostName = "127.0.0.1", port = 3000;


const home = fs.readFileSync('index.html');
const blog = fs.readFileSync('blog.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');

  
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
  let searchBarURL = req.url;

  // if-else ladder, we're serving the files according to the searchBar's "URL"
  if(searchBarURL == '/')
    res.end(home)
  else if(searchBarURL == '/blog')
    res.end(blog);
  else if(searchBarURL == '/services')
    res.end(services);
  else if(searchBarURL == '/about')
    res.end(about);
  else res.end(about);
});

// port '80' is deffault
server.listen(port, hostName, () => {
  console.log(`server running at http://${hostName}:${port}`);
});
 