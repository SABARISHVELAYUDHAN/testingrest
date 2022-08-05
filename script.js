function myFunction(){
    async function getIP(){
        let response = await fetch("http://httpbin.org/get");
        let data = await response.json()
        document.getElementById("demo").innerHTML = data.origin;
        return data;
    }
        
    getIP().then(data => console.log(data));
}