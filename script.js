function myFunction(){
    async function getIP(){
        let response = await fetch("http://httpbin.org/get");
        let data = await response.json()
        document.getElementById("demo").innerHTML = data.origin;
        return data;


    }
        
    getIP().then(data => console.log(data));

    document.getElementById("demo").innerHTML = window.alert("error");

}

function myFunction1(){
        
        async function postName(){
            let response = await fetch ("http://httpbin.org/post")
            let data = await response.json()
            document.getElementById("demo1").innerHTML = "hello";
            request.send("http://httpbin.org/post", "hello");

    }

}

