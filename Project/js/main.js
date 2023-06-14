fetch("https://gamertocoder.garena.co.th/api/minigames")
        .then((response) => {
            if (response.status !== 200) {
                return response.status;
            }
            return response.json();
        })
        .then((data) => {
            if (typeof data == "number") {
                alert(data);
            } else {
                
                for (let i = 0; i < data.length; i++) {
                    const currentData = data[i];
                    const listItem = document.createElement("li");
                    listItem.classList.add("card");
                    const genre_array = currentData.genre;
                    let genre_string = genre_array[0];
                    if (genre_array.length > 1){
                        for (let j = 1; j < genre_array.length; j++){
                            genre_string = genre_string + genre_array[j];
                        }
                    }

    const html =
        
    '<div class="name" onclick="changeName (' + currentData.name + ') "> ชื่อ: ' + currentData.name + '</div>'
    + '<img src="'  + currentData.icon + '"/>'
        + '<div class="so">ประเภท:' + genre_string 
        + currentData.description  + '</div>'
        +'<a href=" '  + currentData.icon + '">link</a>'; 
html.trim();
listItem.innerHTML = html;
document.getElementById('ads').appendChild(listItem);
                }
            }

       


     })