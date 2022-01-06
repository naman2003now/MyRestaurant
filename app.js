menu = {
    "Chinese":[
    {
        "Dish": "Chinese Khana 1",
        "Description": "Khana ka descrption",
        "Image": "resources/ChineseKhana.jpg"
    }, 
    {
        "Dish": "Chinese Khana 2",
        "Description": "Khana ka descrption",
        "Image": "resources/ChineseKhana.jpg"
    }, 
    {
        "Dish": "Chinese Khana 3",
        "Description": "Khana ka descrption",
        "Image": "resources/ChineseKhana.jpg"
    }
    ],
    "Italian":[
        {
            "Dish": "Italian Khana 1",
            "Description": "Khana ka descrption",
            "Image": "resources/ItalianKhana.jpg"
        }, 
        {
            "Dish": "Italian Khana 2",
            "Description": "Khana ka descrption",
            "Image": "resources/ItalianKhana.jpg"
        }, 
        {
            "Dish": "Italian Khana 3",
            "Description": "Khana ka descrption",
            "Image": "resources/ItalianKhana.jpg"
        },
        {
            "Dish": "Italian Khana 4",
            "Description": "Khana ka descrption",
            "Image": "resources/ItalianKhana.jpg"
        }, 
        {
            "Dish": "Italian Khana 5",
            "Description": "Khana ka descrption",
            "Image": "resources/ItalianKhana.jpg"
        }, 
        {
            "Dish": "Italian Khana 6",
            "Description": "Less Html more js",
            "Image": "resources/ItalianKhana.jpg"
        }
        ]
}

for (var [submenu, dishes] of Object.entries(menu)) {
    const subMenuHeading = document.createElement("h1");
    subMenuHeading.textContent = submenu
    subMenuHeading.className = "submenu"
    document.body.appendChild(subMenuHeading)

    const dishDeck = document.createElement("div")
    dishDeck.className = "dishDeck"

    for(var dish of dishes){
        const dishCard = document.createElement("span")
        dishCard.className = "dishCard"

        const foodImage = document.createElement("img")
        foodImage.className = "foodImage"
        foodImage.src = dish["Image"]
        dishCard.appendChild(foodImage)

        const dishName = document.createElement("h2")
        dishName.className = "dishName"
        dishName.textContent = dish["Dish"]
        dishCard.appendChild(dishName)

        const dishDescription = document.createElement("p")
        dishDescription.className = "dishDescription"
        dishDescription.textContent = dish["Description"]
        dishCard.appendChild(dishDescription)

        dishDeck.appendChild(dishCard)
    }
    document.body.appendChild(dishDeck)
    
}
