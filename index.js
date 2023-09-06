const http = require("http");
const app = http.createServer((req, res) => {
    if (req.url == "/html") {
        res.write("<html>");
        res.write("<h1>What is node js?</h1>");
        res.write("<h2>Ans:-</h2><p>Node js is open-source cross-platform javaSceript runtime environment and library for running web application out side the client browser.</p>")
        res.write("<h2>Benifit of NodeJs?</h2>")
        res.write("<ul><li>High Performance.</li><li>Scalability.</li><li>Easy to Learn.</li><li>Reduce Loading time using caching.</li><li>Improves Response time and boosts performance.</li><li>Large Community Support.</li><li>Cost Effective.</li></ul>")
        res.write("</html>");
        res.end()
    }
    else if (req.url == "/json") {
        const objData={
            "name":"Niyaz Alam",
            "Branch":"Computer Science",
            "Batch":"EA23"
        }
        const strData=JSON.stringify(objData)
        res.end(strData);
    }
    else {
        res.write("Wrong url Page Not Found!!!!")
        res.end();
    }
})
app.listen(3001, () => {
    console.log("server running on port number 3001");
})