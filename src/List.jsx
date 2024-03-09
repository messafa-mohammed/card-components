function List(){
    const fruits = ["Apple","Orange","Banana","Coconut","Pineapple"]; // this is array
    const fruitsObj = [ {id: 1 ,name: "Apple" , calories: 95},
                        {id: 2 ,name: "Orange" , calories: 45},
                        {id: 3 ,name: "Banana" , calories: 105},
                        {id: 4 ,name: "Coconut" , calories: 159},
                        {id: 5 ,name: "Pineapple" , calories: 37}
                    ]; // this is objects
                    fruitsObj.sort((a,b)=>b.name.localeCompare(a.name))//tartib 3aksi else change b by a 
    fruits.sort()
    const listItems = fruits.map(fruit => <li>{fruit}</li>)
    const listItems2 = fruitsObj.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp; {fruit.calories}
                                                </li>)
    return(listItems2)
}

export default List