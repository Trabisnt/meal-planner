const meals = [
    ['One-pan cheese & bacon smothered chicken', [['500g', 'potato'], ['60ml', 'olive oil'], ['2', 'chicken breast'], ['100g', 'bacon'], ['200g', 'mushroom'], ['1', 'leek'], ['80ml', 'chicken stock'], ['125ml', 'thickend cream'], ['75g', 'mozzarellla'], ['sugma','potato']]],
    ['Chow mein', [['100g', 'beef mince'], ['90g', 'cabbage'], ['1', 'brown onion'], ['1', 'capsicum'], ['1/2 cup', 'green beans'], ['1', 'egg'], ['1tb', 'curry powder'], ['1TB', 'soy sauce'], ['1/2 tsp', 'garlic']]],
    ['Cheese & spinach steak stack', [['2', 'fillet steaks'], ['100g', 'capsicum'], ['20g', 'baby spinach']]],
    ['Singapore noodles', [['100g', 'singopore noodle'], ['1', 'egg'], ['80g', 'chicken'], ['1tbsp', 'curry powder'], ['1tsp', 'sesame oil'], ['1tbsp', 'soy sauce'], ['1/2tsp', 'garlic'], ['1/2 cup', 'green beans'], ['1/2', 'brown onion'], ['1', 'shallot']]], 
    ['Mexican lasanga', [['4', 'tortillla'], ['500g', 'beef mince'], ['1', 'garlic'], ['400g', 'can corn'], ['400g', 'can black beans'], ['1', 'capsicum'], ['400g', 'can tomato'], ['2tbsp', 'Mexican seasoning'], ['1', 'brown onion'], ['100g', 'mozzarella']]], 
    ['Quesadilla', [['1', 'tortilla'], ['100g', 'beef mince'], ['1tsp', 'mexican seasoning'], ['2tbsp', 'Mexican beans'], ['1', 'tomato'], ['25g', 'mozzarella']]], 
    ['Meat pie', [['1', 'sheet of puff pastry'], ['1', 'onion'], ['400g', 'beef mince'], ['2tbsp', 'oyster sauce'], ['1 cup', 'beef stock'], ['2tbsp', 'cornflour']]], 
    ['Carbonara', [['55g', 'spaghetti'], ['50g', 'bacon'], ['1', 'egg'], ['1/2 tsp', 'garlic'], ['1/2 cup', 'mushroom'], ['1/2', 'brown onion'], ['1tb', 'parmesean']]], 
    ['Shepard pie', [['500g', 'beef mince'], ['600g', 'potato'], ['250g', 'sweet potato'], ['1', 'garlic'], ['1/2', 'brown onion'], ['1tbsp', 'gravy powder'], ['2tbsp', 'tomato paste'], ['1/4 cup', 'corn kernals'], ['1/2 cup', 'mushroom'], ['1 cup', 'baby spinach'], ['75g', 'cheese']]], 
    ['Chicken meatballs', [['600g', 'chicken mince'], ['3/4 cups', 'breadcrumbs'], ['1', 'brown onion'], ['50g', 'baby spinach'], ['2 handfulls', 'lettuce'], ['1', 'tomato'], ['1/2', 'avacoda'], ['1tbsp', 'pine nuts'], ['50g', 'feta'], ['1 tbsp', 'balsamic viniagr']]]]

const button = document.getElementById('generate')
const mealwrapper = document.querySelector('.meal-wrapper')
const ingredientlist = document.getElementById('ingredientList')
let ingredientarray = []
let used = []
let dayindex = -1;

button.addEventListener('click', generate)

function fillday(index, meal) {
    console.log(`the current index is ${index} the current max length is ${mealwrapper.children.length}`)
    mealwrapper.children[index].innerHTML = meal
}

function generate() {
        if (dayindex == 6) {
            used = []
            ingredientarray = []
            ingredientlist.innerText = ''
            dayindex  = -1
            mealwrapper.children[0].innerHTML = ''
            mealwrapper.children[1].innerHTML = ''
            mealwrapper.children[2].innerHTML = ''
            mealwrapper.children[3].innerHTML = ''
            mealwrapper.children[4].innerHTML = ''
            mealwrapper.children[5].innerHTML = ''
            mealwrapper.children[6].innerHTML = ''
            return generate()
        }
        let mealindex = meals[Math.floor(Math.random() * meals.length)]
        let meal = mealindex[0]
        if (used.includes(meal)) {
            return generate()
        } else {
            used.push(meal)
            dayindex += 1
            generateingredientlist(mealindex)
            fillday(dayindex, meal)
        }
    // }
    // generateingredientlist()
}

function generateingredientlist(index) {
    index[1].forEach(e => {
        if (ingredientarray.includes(e[1])) {
            console.log('already in')
        } else {
            let li = document.createElement('li')
            ingredientarray.push(e[1])
            li.innerText = e[1]
            ingredientlist.appendChild(li)
        }
    });
}