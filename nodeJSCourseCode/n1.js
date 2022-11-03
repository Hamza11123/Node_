// First Backend-Site :)
const http = require('http');

const hostname = '127.0.0.1';
const port =  3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // REPL-> Read-Evaluate-Print-Loop 
    // in REPL -> '_' UnderScore -> Pichla Variable! in the CommandLine
    // if We Pall the [GLOBAL-VARIABLES] WILL Be Shown in the REPL(in-the-command-line )
    // We Can Write HTML Here, & it'll Parse As-It-Is... :)
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>project - 1</title>
            <link rel="stylesheet" href="p.css" />
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
            />
        
            <!-- <style>
                body{
                    display: flex;
                    flex-flow: column wrap;
                    background-color: rgb(15, 15, 71);
                }
                
                #txt{
                    max-width: 854px;
                    margin: auto;
                    /* border-inline-width: 24px; */
                    background-color: rgb(110, 110, 162);
                }
                #btn{
                    background-color: rgb(110, 110, 162);
                    width:140px;
                    /* height: 4px; */
                    margin: 10px auto;
                    height: 50px;
                }
                #con{
                    background-color: rgb(110, 110, 162);
                    border: 2px solid black;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    height: auto;
                    width: 1100px;
                    margin:auto;
                }
                .dynamic{
                    width: 225px;
                    height: 200px;
                    border: 2px solid red;
                    background-color: burlywood;
                } 
        
            </style> -->
        </head>
        <body>
            <!-- ------------------- Nav-Bar:: (Boot-Strap) Code ------------------- -->
        
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- //To use Light-Mode use , Simply Write "dark"  in the place of  dark -->
        
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Note Moments</a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
        
                    <!-- I don't want more nav-Bar Buttons  -->
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> -->
                </ul>
                <form class="d-flex">
                    <input
                    id="searchBar"
                    class="form-control me-2"
                    type="search"
                    placeholder="Search Notes"
                    aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </div>
            </nav>
        
            <!-- ------------------- Nav-Bar:: (Boot-Strap) Code ------------------- -->
        
            <!-- ------------------- Starting Main Cards :: (Boot-Strap) Code ------------------- -->
        
            <div class="my-4 container">
            <!-- my-4 is a class that Assign Margin Property By 3 Along Y-Axis -->
            <h1>Welcome To Note Moments</h1>
        
            <div class="card">
                <!-- Don't Wanna Add Any Kinda Image :| -->
                <!-- <img src="..." class="card-img-top" alt="..."> -->
        
                <div class="card-body">
                <div class="mb-3">
                    <h5>Title</h5>
                    <input
                    type="text"
                    class="form-control"
                    id="notesTitle"
                    placeholder="Write Title For Notes..."
                    />
                </div>
                <h5 class="card-title">Moments</h5>
                <div class="mb-3">
                    <textarea
                    placeholder="Write your thoughts"
                    id="txtArea"
                    class="form-control"
                    id="addTextArea"
                    rows="3"
                    ></textarea>
                </div>
                <button id="addBtn" class="btn btn-primary">Add The Moment</button>
                </div>
            </div>
            <hr />
            <h1>Your Moments</h1>
            <hr />
        
            <div id="notesContainer" class="row container-fluid">
                <!-- <div class="card mx-2 my-2" style="width: 18rem; ">
                        <div class="card-body">
                        <h5 class="card-title">Note-$</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button class="btn btn-primary">Delete Moment</button>
                        </div>
                    </div> -->
            </div>
            </div>
            <!-- ------------------- Starting Main Cards :: (Boot-Strap) Code ------------------- -->
        
            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umbootstrapd/popper.min.js"
            integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/.min.js"
            integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
            crossorigin="anonymous"
            ></script>
        
            <!-- <script src="notes.js"></script> --> 
        
            <!-- <textarea name="name" id="txt" cols="30" rows="10"></textarea>
            
            <button id="btn">Add</button>
            <input type="text" name=""  id="searchBar" style="width:200px">
            <div id="con" >
                
                <div class="dynamic">
        
                </div> 
            </div> -->
        </body>
    `);

});

server.listen(port, hostname, ()=>{
    console.log(`http://${hostname}:${port}/`);
});


