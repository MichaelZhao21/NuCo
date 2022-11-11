public class WorkoutPlan {
    private String cardio;
    private String weightLifting;

    public WorkoutPlan(String cardio, String weightLifting) {
        this.cardio = cardio;
        this.weightLifting = weightLifting;
    }

    public String getCardio() {
        return cardio;
    }

    public void setCardio(String cardio) {
        this.cardio = cardio;
    }

    public String getWeightLifting() {
        return weightLifting;
    }

    public void setWeightLifting(String weightLifting) {
        this.weightLifting = weightLifting;
    }

    /**
     * Check to make sure new plan is valid and update
     * @return "success" or error message
     */
    private String updatePlan(String cardio, String weightLifting) {
        return "";
    }
}