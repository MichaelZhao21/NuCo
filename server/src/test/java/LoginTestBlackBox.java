import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LoginTestBlackBox {

    @Test
    void loginUsernameLengthTC0() {
        assertEquals("Username must be between 3-20 characters", Login.login("", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC1() {
        assertEquals("Username must be between 3-20 characters", Login.login("j", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC2() {
        assertEquals("Username must be between 3-20 characters", Login.login("ja", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC3() {
        assertEquals("Username does not exist", Login.login("jam", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC8() {
        assertEquals("Successfully logged in! Redirecting to dashboard...", Login.login("jameswilker", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC21() {
        assertEquals("Username must be between 3-20 characters", Login.login("", "abcdefgh"));
    }

    @Test
    void loginUsernameValidTC1() {
        assertEquals("Username has invalid characters", Login.login("hi bob", "abcdefgh"));
    }

    @Test
    void loginPasswordLengthTC0() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", ""));
    }

    @Test
    void loginPasswordLengthTC1() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "a"));
    }

    @Test
    void loginPasswordLengthTC2() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "ab"));
    }

    @Test
    void loginPasswordLengthTC3() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "abc"));
    }

    @Test
    void loginPasswordLengthTC4() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "abcd"));
    }

    @Test
    void loginPasswordLengthTC5() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "abcde"));
    }

    @Test
    void loginPasswordLengthTC6() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "abcdef"));
    }

    @Test
    void loginPasswordLengthTC7() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "abcdefg"));
    }

    @Test
    void loginPasswordLengthTC8() {
        assertEquals("Successfully logged in! Redirecting to dashboard...", Login.login("jameswilker", "abcdefgh"));
    }

    @Test
    void loginPasswordLengthTC101() {
        assertEquals("Password must be between 8-100 characters", Login.login("jameswilker", "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567891"));
    }

}