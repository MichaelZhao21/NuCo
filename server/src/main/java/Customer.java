import java.util.List;

public class Customer extends User {
    private int age;
    private double height; // Height in inches
    private double weight; // Weight in US pounds
    private List<FoodEntry> foodEntries;
    private List<DietPlan> dietPlans;
    private List<WorkoutPlan> workoutPlans;

    public Customer(String username, String password, String fullName) {
        super(username, password, fullName);
    }

    public Customer(String username, String password, String fullName, int age, double height, double weight) {
        super(username, password, fullName);
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public List<FoodEntry> getFoodEntries() {
        return foodEntries;
    }

    public List<DietPlan> getDietPlans() {
        return dietPlans;
    }

    public List<WorkoutPlan> getWorkoutPlans() {
        return workoutPlans;
    }

    /**
     * Updates the customer's data after checking for valid inputs
     * @return "success" or error message
     */
    public String updateInfo(int age, double height, double weight) {
        return "";
    }
}
