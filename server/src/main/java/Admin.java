import java.util.Map;

public class Admin extends User {
    public Admin(String username, String password, String fullName) {
        super(username, password, fullName);
    }
    public static final int MIN_USERNAME_LENGTH = 3;
    public static final int MAX_USERNAME_LENGTH = 20;
    public static final int MIN_PASSWORD_LENGTH = 8;
    public static final int MAX_PASSWORD_LENGTH = 100;

    public static String[] existingAdminAccounts = new String[]{"jameswilker", "annesmith12", "marymary2", "johnhicks"};

    public static String[] existingUsernames = new String[]{"aaronjones", "billybob21", "marymary2", "johnhicks"};

    public static Map<String, String> existingAdminPasswords = Map.of(
            existingAdminAccounts[0], "abcdefgh",
            existingAdminAccounts[1], "!!#r93%AAAAAdog",
            existingAdminAccounts[2], "ilovemycats12345",
            existingAdminAccounts[3], "fscS35!SXAA$45"
    );

    private static boolean checkUsernameRightLength(String username) {
        return username.length() >= MIN_USERNAME_LENGTH && username.length() <= MAX_USERNAME_LENGTH;
    }

    private static boolean checkUsernameHasValidCharacters(String username) {
        for (Character c : username.toCharArray()) {
            if (!Character.isAlphabetic(c) && !Character.isDigit(c) && c != '_')
                return false;
        }
        return true;
    }

    private static boolean checkUsernameExists(String username) {
        for (String s : existingAdminAccounts) {
            if (username.equals(s)) return true;
        }
        return false;
    }

    private static boolean checkPasswordRightLength(String password) {
        return password.length() >= MIN_PASSWORD_LENGTH && password.length() <= MAX_PASSWORD_LENGTH;
    }

    private static boolean checkPasswordCorrect(String username, String password) {
        return existingAdminPasswords.get(username).equals(password);
    }

    /**
     * Logs the admin user in and validates their username and password
     * @return message to display to the user
     */
    public static String login(String username, String password) {
        if (!checkUsernameRightLength(username)) return "Username must be between 3-20 characters";
        if (!checkUsernameHasValidCharacters(username)) return "Username has invalid characters";
        if (!checkUsernameExists(username)) return "Username does not exist";
        if (!checkPasswordRightLength(password)) return "Password must be between 8-100 characters";
        if (!checkPasswordCorrect(username, password)) return "Password is incorrect";

        return "Successfully logged in! Redirecting to dashboard...";
    }

    private static boolean checkUsernameDoesNotExist(String username) {
        for (String s : existingAdminAccounts) {
            if (username.equals(s)) return false;
        }
        return true;
    }

    /**
     * Logs the admin user in and validates their username and password
     * @return message to display to the user
     */
    public static String create(String username, String password) {
        if (!checkUsernameRightLength(username)) return "Username must be between 3-20 characters";
        if (!checkUsernameHasValidCharacters(username)) return "Username has invalid characters";
        if (!checkUsernameDoesNotExist(username)) return "Username already exists";
        if (!checkPasswordRightLength(password)) return "Password must be between 8-100 characters";

        return "Account successfully created!";
    }

    private static boolean checkIdLength(String id) {
        return id.length() >= MIN_USERNAME_LENGTH && id.length() <= MAX_USERNAME_LENGTH;
    }

    public static String searchById(String id) {
        if (!checkIdLength(id)) return "Username must be between 3-20 characters";
        if (!checkUsernameHasValidCharacters(id)) return "Username has invalid characters";
        if (!checkUsernameExists(id)) return "Username does not exist";
        return "User account found";
    }
    public static String[] existingNames = new String[]{"Monok Asane", "Saqura Amaals", "Ben Dover", "Billy Bob", "Sar Mar"};

    private static boolean checkNameValid(String name) {
        return name.length() > 0;
    }

    public static String searchByName(String name) {
        if (!checkNameValid(name)) return "Invalid name";
        return "Searching for " + name;
    }
}
