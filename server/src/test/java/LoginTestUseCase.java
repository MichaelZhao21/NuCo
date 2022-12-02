import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LoginTestUseCase {

    @Test
    void loginUseCaseTC1() {
        assertEquals("Successfully logged in! Redirecting to dashboard...", Admin.login("johnhicks", "fscS35!SXAA$45"));
    }

    @Test
    void loginUseCaseTC2() {
        assertEquals("Password is incorrect", Admin.login("johnhicks", "ewfjwefjeif"));
    }

    @Test
    void loginUseCaseTC3() {
        assertEquals("Username does not exist", Admin.login("idontexist", "fscS35!SXAA$45"));
    }

    @Test
    void loginUseCaseTC5() {
        assertEquals("Password must be between 8-100 characters", Admin.login("johnhicks", ""));
    }
}