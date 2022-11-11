import java.util.List;

public class Coach {
    private String residentGym;
    private String mainContact;
    private List<Customer> managedCustomers;

    public Coach(String residentGym, String mainContact) {
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
