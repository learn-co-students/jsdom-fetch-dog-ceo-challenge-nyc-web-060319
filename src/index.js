console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogContainer = document.getElementById("dog-image-container");
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedContainer = document.getElementById("dog-breeds");
let counter = 0;
const filterDropdown = document.getElementById("breed-dropdown");


    document.addEventListener('DOMContentLoaded', () => {
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(res){
            return res.json();
        }).then(function(images){
            images["message"].forEach(function(pic){
                let inode = document.createElement("IMG")
                inode.src=images["message"][counter];      
                counter ++;
                dogContainer.appendChild(inode)
            })
        }) // end Image 


        fetch(breedUrl)
        .then(function(res){
            return res.json();
        }).then(function(breeds){
            // console.log("Breeds is: ", breeds)
            // console.log("Breeds[message][bulldog] is: ", breeds["message"]["bulldog"])
            // console.log(Object.keys(breeds["message"]))
     
            Object.keys(breeds["message"]).forEach(function(breedzz){
                counter = 0;
                // console.log("breedzz[0] is : ", breedzz[0]);
                // console.log("typeof breedzz is : ",typeof breedzz ); // all are strings b/c just the key
                // console.log("typeof breeds message breedzz is : ", typeof breeds["message"][breedzz] ); // all are strings.
                if (breeds["message"][breedzz]){                        
                    breeds["message"][breedzz].forEach(function(subBreed) {
                        if (subBreed.length >2){
                            let bnode = document.createElement("LI")
                            bnode.innerText= breedzz + " - " + breeds["message"][breedzz][counter];      // correct? 
                            counter ++;
                            breedContainer.appendChild(bnode)
                        } 
                    })
                }
                if (breeds["message"][breedzz] == false) {
                    let bnode = document.createElement("LI")
                    bnode.innerText= breedzz;      
                    breedContainer.appendChild(bnode)
                }
            })
        })  // ends .then for Breeds


        filterDropdown.onchange = function(e){
            let searchTerm = filterDropdown.value;
            console.log("searchTerm is : ", searchTerm)
            const breeds = document.querySelectorAll("li");
            deleteChild();  // delete after save breed array to variable. 
            const mappedBreeds = (Array.from(breeds)).map(b => b.innerText);
            console.log("mappedBreeds is : ", mappedBreeds)
            
            mappedBreeds.forEach(function(b) {
                if (b[0] === searchTerm){
                    let snode = document.createElement("LI")
                    snode.innerText= b;      
                    breedContainer.appendChild(snode)
                }
            })
        } // End Breed filters


        breedContainer.addEventListener('click', function(e){
        // breedContainer.onclick = function(e){    // was buggy. 

            let targ = e.target;
            console.log("targ.style[color] is: ", targ.style["color"]); 
            // was getting undefined bc I was't setting a color, no value to display!
            targ.style["color"] = "#65abb8";
            
            ///targ.style.color = darkcyan;         // doesn't work
            // target.color = "purple";             // didn't work
            
            // let fNode = document.createElement("font")
            // fNode.color = "#65abb8"
            // targ.appendChild(fNode);             //- Click! but no color change. 
            // fNode.appendChild(targ);             //- LI item disappears
        })



    }) // ends doc.addEventListener

    function deleteChild() { 
        var e = document.querySelector("ul"); 
        var first = e.firstElementChild; 
        while (first) { 
            first.remove(); 
            first = e.firstElementChild; 
        } 
    } 