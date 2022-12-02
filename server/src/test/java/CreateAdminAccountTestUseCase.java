import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CreateAdminAccountTestUseCase {

    @Test
    void loginUseCaseTC1() {
        assertEquals("Account successfully created!", Admin.create("samsmith", "4gds@!AAb#"));
    }

    @Test
    void loginUseCaseTC2() {
        assertEquals("Password must be between 8-100 characters", Admin.create("samsmith", "pass"));
    }

    @Test
    void loginUseCaseTC3() {
        assertEquals("Username already exists", Admin.create("johnhicks", "4gds@!AAb#"));
    }

    @Test
    void loginUseCaseTC5() {
        assertEquals("Password must be between 8-100 characters", Admin.create("samsmith", ""));
    }

}