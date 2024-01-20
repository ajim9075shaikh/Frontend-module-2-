
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ]; 
  
  function PrintDeveloper() {
    arr.map((developer) =>{
      if(developer.profession ==="developer"){
         console.log(developer);
      }
    });
    }
    function addData() {
        //Write your code here, just console.log
        const adddeta =   { id: 4, name: "roy", age: "18", profession: "fighter" }
        arr.push(adddeta);
         console.log(arr);
      }

      function removeAdmin() {
        //Write your code here, just console.log
      const filtermethod = arr.filter((employe) =>  employe.profession != "admin")
      console.log(filtermethod);
      
      }

      function concatenateArray() {
        //Write your code here, just console.log
       let  newarr =[
        { id: 5, name: "ali", age: "18", profession: "singer" },
        { id: 6, name: "mohit", age: "19", profession: "writer" },
        { id: 7, name: "alice", age: "28", profession: "developer" },
        ]
        const concantedarr = arr.concat(newarr)
    
         console.log(concantedarr);
      }

      function consoleArr() {
        console.log('Consoling Array Variable',arr);
      }