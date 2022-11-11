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
}
