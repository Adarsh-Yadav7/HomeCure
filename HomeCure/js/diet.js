function generateMealPlan() {
    // Get user inputs
    let healthCondition = document.getElementById("health-condition").value;
    let dietType = document.querySelector('input[name="diet-type"]:checked').value;

    // Meal plan with multiple options and time
    let mealPlans = {
        diabetes: {
            vegetarian: {
                breakfast: ["8:00 AM - Oatmeal with nuts & warm milk", "8:00 AM - Poha with peanuts & green tea", "8:00 AM - Multigrain toast with avocado & herbal tea"],
                midMorningSnack: ["11:00 AM - Handful of almonds & green tea", "11:00 AM - Apple slices with peanut butter", "11:00 AM - Greek yogurt with chia seeds"],
                lunch: ["1:00 PM - Brown rice, lentils (dal), mixed vegetable sabzi", "1:00 PM - Quinoa with steamed veggies & tofu", "1:00 PM - Roti with palak dal & salad"],
                eveningSnack: ["5:00 PM - Sprout salad with lemon", "5:00 PM - Roasted makhana (lotus seeds)", "5:00 PM - Hummus with cucumber & carrot sticks"],
                dinner: ["8:00 PM - Roti with paneer & stir-fried veggies", "8:00 PM - Steamed vegetables with tofu & quinoa", "8:00 PM - Vegetable soup with whole grain crackers"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Scrambled eggs with whole wheat toast", "8:00 AM - Omelet with spinach & cheese", "8:00 AM - Boiled eggs with avocado toast"],
                midMorningSnack: ["11:00 AM - A boiled egg & green tea", "11:00 AM - Handful of walnuts & black coffee", "11:00 AM - Cottage cheese with flaxseeds"],
                lunch: ["1:00 PM - Grilled chicken with brown rice & veggies", "1:00 PM - Baked salmon with quinoa & green beans", "1:00 PM - Chicken soup with mixed vegetables"],
                eveningSnack: ["5:00 PM - Roasted chickpeas & herbal tea", "5:00 PM - Boiled eggs with lemon juice", "5:00 PM - Yogurt with mixed nuts"],
                dinner: ["8:00 PM - Grilled fish with sautéed spinach", "8:00 PM - Chicken stew with whole wheat bread", "8:00 PM - Baked turkey breast with mashed sweet potatoes"]
            }
        },
        obesity: {
            vegetarian: {
                breakfast: ["7:30 AM - Smoothie with banana, oats & almond milk", "7:30 AM - Multigrain toast with peanut butter", "7:30 AM - Moong dal chilla with mint chutney"],
                midMorningSnack: ["10:30 AM - Carrot & cucumber sticks with hummus", "10:30 AM - Greek yogurt with flaxseeds", "10:30 AM - A handful of walnuts & almonds"],
                lunch: ["1:30 PM - Quinoa with steamed veggies", "1:30 PM - Brown rice with mixed dal & salad", "1:30 PM - Roti with paneer bhurji & sautéed vegetables"],
                eveningSnack: ["4:30 PM - Roasted makhana (lotus seeds)", "4:30 PM - Chia pudding with berries", "4:30 PM - Hummus with whole wheat crackers"],
                dinner: ["8:30 PM - Mixed green salad with paneer", "8:30 PM - Stir-fried tofu with vegetables", "8:30 PM - Vegetable soup with quinoa"]
            },
            nonVegetarian: {
                breakfast: ["7:30 AM - Boiled eggs with avocado toast", "7:30 AM - Scrambled eggs with mushrooms & cheese", "7:30 AM - Omelet with spinach & feta cheese"],
                midMorningSnack: ["10:30 AM - A handful of walnuts & black coffee", "10:30 AM - Greek yogurt with flaxseeds & berries", "10:30 AM - Hard-boiled egg with lemon juice"],
                lunch: ["1:30 PM - Grilled chicken with quinoa", "1:30 PM - Baked salmon with steamed vegetables", "1:30 PM - Chicken salad with olive oil dressing"],
                eveningSnack: ["4:30 PM - Greek yogurt with nuts", "4:30 PM - Roasted chickpeas with sea salt", "4:30 PM - Cottage cheese with sunflower seeds"],
                dinner: ["8:30 PM - Baked salmon with green beans", "8:30 PM - Chicken breast with roasted sweet potatoes", "8:30 PM - Turkey stir-fry with brown rice"]
            }
        },
        thyroid: {
            vegetarian: {
                breakfast: ["8:00 AM - Sprouts salad with green tea", "8:00 AM - Chia pudding with berries", "8:00 AM - Ragi dosa with chutney"],
                midMorningSnack: ["11:00 AM - Pumpkin seeds & walnuts", "11:00 AM - Greek yogurt with honey", "11:00 AM - Roasted almonds"],
                lunch: ["1:00 PM - Roti with palak dal", "1:00 PM - Brown rice & steamed veggies", "1:00 PM - Quinoa with lentils"],
                eveningSnack: ["5:00 PM - Flaxseeds & lemon tea", "5:00 PM - Roasted makhana", "5:00 PM - Chia smoothie with nuts"],
                dinner: ["8:00 PM - Vegetable soup with tofu", "8:00 PM - Roti with mixed sabzi", "8:00 PM - Baked sweet potatoes"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Scrambled eggs with spinach", "8:00 AM - Boiled eggs & toast", "8:00 AM - Omelet with green onions"],
                midMorningSnack: ["11:00 AM - Almonds & smoothie", "11:00 AM - Greek yogurt with walnuts", "11:00 AM - Boiled egg with black salt"],
                lunch: ["1:00 PM - Grilled fish with sweet potatoes", "1:00 PM - Chicken stew with quinoa", "1:00 PM - Egg curry with brown rice"],
                eveningSnack: ["5:00 PM - Roasted pumpkin seeds & tea", "5:00 PM - Handful of walnuts", "5:00 PM - Cottage cheese with cucumbers"],
                dinner: ["8:00 PM - Chicken soup with roti", "8:00 PM - Baked salmon with quinoa", "8:00 PM - Grilled shrimp & spinach"]
            }
        },
        heart: {
            vegetarian: {
                breakfast: ["8:00 AM - Oats with banana", "8:00 AM - Apple smoothie", "8:00 AM - Avocado toast"],
                midMorningSnack: ["11:00 AM - Mixed nuts", "11:00 AM - Chia pudding", "11:00 AM - Green tea & almonds"],
                lunch: ["1:00 PM - Brown rice with dal", "1:00 PM - Whole wheat roti with veggies", "1:00 PM - Quinoa with paneer"],
                eveningSnack: ["5:00 PM - Roasted chickpeas", "5:00 PM - Fruit salad", "5:00 PM - Herbal tea"],
                dinner: ["8:00 PM - Lentil soup", "8:00 PM - Stir-fried tofu", "8:00 PM - Grilled vegetables"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Scrambled egg whites", "8:00 AM - Salmon toast", "8:00 AM - Boiled eggs & smoothie"],
                midMorningSnack: ["11:00 AM - Roasted almonds", "11:00 AM - Green tea with walnuts", "11:00 AM - Greek yogurt"],
                lunch: ["1:00 PM - Grilled fish with brown rice", "1:00 PM - Baked chicken with veggies", "1:00 PM - Egg curry with roti"],
                eveningSnack: ["5:00 PM - Cottage cheese & cucumbers", "5:00 PM - Roasted sunflower seeds", "5:00 PM - Herbal tea"],
                dinner: ["8:00 PM - Baked salmon & quinoa", "8:00 PM - Chicken soup", "8:00 PM - Shrimp stir-fry"]
            }
        },
        pcos: {
            vegetarian: {
                breakfast: ["8:00 AM - Overnight oats with chia & berries", "8:00 AM - Besan chilla with mint chutney", "8:00 AM - Flaxseed smoothie"],
                midMorningSnack: ["11:00 AM - Greek yogurt with nuts", "11:00 AM - Roasted chickpeas", "11:00 AM - Chia pudding with honey"],
                lunch: ["1:00 PM - Brown rice with lentils", "1:00 PM - Quinoa with stir-fried veggies", "1:00 PM - Whole wheat roti with mixed sabzi"],
                eveningSnack: ["5:00 PM - Roasted makhana", "5:00 PM - Pumpkin seeds & tea", "5:00 PM - Sprouts salad with lemon"],
                dinner: ["8:00 PM - Quinoa with stir-fried tofu", "8:00 PM - Grilled paneer with salad", "8:00 PM - Vegetable clear soup"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Boiled eggs & avocado toast", "8:00 AM - Chicken sausage with whole wheat toast", "8:00 AM - Omelet with spinach"],
                midMorningSnack: ["11:00 AM - Handful of walnuts", "11:00 AM - Greek yogurt & chia seeds", "11:00 AM - Boiled eggs & tea"],
                lunch: ["1:00 PM - Grilled chicken with spinach salad", "1:00 PM - Baked fish with quinoa", "1:00 PM - Chicken stir-fry with vegetables"],
                eveningSnack: ["5:00 PM - Cottage cheese & green tea", "5:00 PM - Roasted almonds & herbal tea", "5:00 PM - Greek yogurt with nuts"],
                dinner: ["8:00 PM - Salmon with roasted veggies", "8:00 PM - Chicken stew with quinoa", "8:00 PM - Grilled shrimp with spinach"]
            }
        },
        pregnancy: {
            vegetarian: {
                breakfast: ["8:00 AM - Oats porridge with fruits", "8:00 AM - Ragi dosa with chutney", "8:00 AM - Banana smoothie"],
                midMorningSnack: ["11:00 AM - Almonds & banana", "11:00 AM - Mixed seeds & yogurt", "11:00 AM - Chia pudding with dates"],
                lunch: ["1:00 PM - Roti with dal & curd", "1:00 PM - Rice with vegetable stew", "1:00 PM - Quinoa with paneer"],
                eveningSnack: ["5:00 PM - Smoothie with nuts", "5:00 PM - Fruit bowl with flaxseeds", "5:00 PM - Sprout salad"],
                dinner: ["8:00 PM - Rice with dal & sabzi", "8:00 PM - Vegetable soup with tofu", "8:00 PM - Paneer paratha with curd"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Boiled eggs & toast", "8:00 AM - Omelet with spinach", "8:00 AM - Chicken sandwich"],
                midMorningSnack: ["11:00 AM - Cashews & buttermilk", "11:00 AM - Greek yogurt with flaxseeds", "11:00 AM - Banana with peanut butter"],
                lunch: ["1:00 PM - Grilled chicken with brown rice", "1:00 PM - Egg curry with whole wheat roti", "1:00 PM - Fish curry with quinoa"],
                eveningSnack: ["5:00 PM - Yogurt with honey", "5:00 PM - Fruit bowl with seeds", "5:00 PM - Smoothie with dates"],
                dinner: ["8:00 PM - Chicken stew with veggies", "8:00 PM - Baked fish with sweet potatoes", "8:00 PM - Grilled chicken with quinoa"]
            }
        },
        hypertension: {
            vegetarian: {
                breakfast: ["8:00 AM - Spinach smoothie", "8:00 AM - Oats with flaxseeds", "8:00 AM - Poha with peanuts"],
                midMorningSnack: ["11:00 AM - Handful of unsalted nuts", "11:00 AM - Herbal tea with walnuts", "11:00 AM - Chia pudding"],
                lunch: ["1:00 PM - Roti with low-sodium dal", "1:00 PM - Brown rice with steamed veggies", "1:00 PM - Whole wheat pasta with tofu"],
                eveningSnack: ["5:00 PM - Cucumber sticks with hummus", "5:00 PM - Roasted flaxseeds", "5:00 PM - Carrot juice"],
                dinner: ["8:00 PM - Grilled tofu & vegetables", "8:00 PM - Vegetable soup", "8:00 PM - Lentil stew with brown rice"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Scrambled egg whites with avocado", "8:00 AM - Salmon with whole wheat toast", "8:00 AM - Boiled eggs & spinach"],
                midMorningSnack: ["11:00 AM - Walnuts & green tea", "11:00 AM - Greek yogurt with flaxseeds", "11:00 AM - Almonds & herbal tea"],
                lunch: ["1:00 PM - Grilled salmon with broccoli", "1:00 PM - Baked chicken with quinoa", "1:00 PM - Fish curry with brown rice"],
                eveningSnack: ["5:00 PM - Roasted chickpeas", "5:00 PM - Lemon water with flaxseeds", "5:00 PM - Greek yogurt with seeds"],
                dinner: ["8:00 PM - Baked chicken with salad", "8:00 PM - Grilled fish with steamed vegetables", "8:00 PM - Quinoa with shrimp stir-fry"]
            }
        },
        general: {
            vegetarian: {
                breakfast: ["8:00 AM - Mixed fruit bowl with yogurt", "8:00 AM - Moong dal chilla", "8:00 AM - Vegetable upma"],
                midMorningSnack: ["11:00 AM - Roasted chickpeas", "11:00 AM - Herbal tea with almonds", "11:00 AM - Chia seeds pudding"],
                lunch: ["1:00 PM - Dal, rice & vegetable curry", "1:00 PM - Whole wheat roti with sabzi", "1:00 PM - Quinoa with steamed vegetables"],
                eveningSnack: ["5:00 PM - Nuts & green tea", "5:00 PM - Fruit salad", "5:00 PM - Sprout chaat"],
                dinner: ["8:00 PM - Roti with dal & sabzi", "8:00 PM - Vegetable soup", "8:00 PM - Stir-fried tofu with rice"]
            },
            nonVegetarian: {
                breakfast: ["8:00 AM - Scrambled eggs with whole wheat bread", "8:00 AM - Chicken sandwich", "8:00 AM - Boiled eggs with toast"],
                midMorningSnack: ["11:00 AM - Banana & peanut butter", "11:00 AM - Walnuts with herbal tea", "11:00 AM - Greek yogurt with flaxseeds"],
                lunch: ["1:00 PM - Grilled chicken with brown rice", "1:00 PM - Egg curry with whole wheat roti", "1:00 PM - Fish curry with quinoa"],
                eveningSnack: ["5:00 PM - Boiled eggs & green tea", "5:00 PM - Roasted chickpeas", "5:00 PM - Cottage cheese & cucumber"],
                dinner: ["8:00 PM - Grilled fish with sautéed spinach", "8:00 PM - Baked chicken with sweet potatoes", "8:00 PM - Shrimp stir-fry with quinoa"]
            }
        }
    };

    // Get the selected meal plan
    let selectedPlan = mealPlans[healthCondition][dietType];

    // Generate random options for each meal
    function getRandomMeal(meals) {
        let randomIndex = Math.floor(Math.random() * meals.length);
        return meals[randomIndex];
    }

    // Generate the meal plan HTML
    let mealPlanHTML = `
        <h3>📅 Your Personalized Diet Plan</h3>
        <p><strong>🥣 Breakfast:</strong> ${getRandomMeal(selectedPlan.breakfast)}</p>
        <p><strong>🍏 Mid-Morning Snack:</strong> ${getRandomMeal(selectedPlan.midMorningSnack)}</p>
        <p><strong>🍽 Lunch:</strong> ${getRandomMeal(selectedPlan.lunch)}</p>
        <p><strong>☕ Evening Snack:</strong> ${getRandomMeal(selectedPlan.eveningSnack)}</p>
        <p><strong>🌙 Dinner:</strong> ${getRandomMeal(selectedPlan.dinner)}</p>
    `;

    // Display meal plan in the output box
    document.getElementById("meal-plan").innerHTML = mealPlanHTML;
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
    }
}

// Close sidebar if clicked outside (on main content)
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});