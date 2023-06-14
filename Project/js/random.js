image_array = [
    'a.png', 'b.png' ,'c.png' ,'d.png','e.png','f.png','g.png',
    'h.png','i.png','j.png','k.png','l.png','m.png','n.png',
    'o.png','p.png','q.png','r.png','s.png','t.png'
]

function get_random_image(){
    
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
    document.getElementById('imgshow').src =`./images/Random/${selected_image}`

}