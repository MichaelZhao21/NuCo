import java.util.List;

public class Coach extends User {
    private String residentGym;
    private String mainContact;
    private List<Customer> managedCustomers;

    public Coach(String username, String password, String fullName) {
        super(username, password, fullName);
    }

    public Coach(String username, String password, String fullName, String residentGym, String mainContact) {
        super(username, password, fullName);
        this.residentGym = residentGym;
        this.mainContact = mainContact;
    }

    public String getResidentGym() {
        return residentGym;
    }

    public void setResidentGym(String residentGym) {
        this.residentGym = residentGym;
    }

    public String getMainContact() {
        return mainContact;
    }

    public void setMainContact(String mainContact) {
        this.mainContact = mainContact;
    }
}
