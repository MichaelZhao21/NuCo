import java.util.List;

public class FoodEntry {
    private String foodType;
    private int quantity;
    private double calories;
    private List<String> ingredients;

    public FoodEntry(String foodType, int quantity, double calories) {
        this.foodType = foodType;
        this.quantity = quantity;
        this.calories = calories;
    }

    public String getFoodType() {
        return foodType;
    }

    public void setFoodType(String foodType) {
        this.foodType = foodType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getCalories() {
        return calories;
    }

    public void setCalories(double calories) {
        this.calories = calories;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    /**
     * Checks for valid ingredient and adds it to the list
     * @return "success" or error message
     */
    public String addIngredient(String newIngredient) {
        return "";
    }
    
    public Object newFoodEntry(String foodLabel, double calories, String cateogry, String date, String uid) {
        /*
            Not sure how the collections are setup, can't seem to access the Firebase console so here is the proposed solution
            
            => Payload / what GET call should return for each data entry
                {
                    foodLabel: foodlabel,
                    calories: calories,
                    category: category,
                    dateTime: date,
                    uid: uid
                }
        */
        
        // Left this funciton as an return type of Object/Map so we can return the response from Firebase to the UI when this endpoint is called
        
        
    }
}
