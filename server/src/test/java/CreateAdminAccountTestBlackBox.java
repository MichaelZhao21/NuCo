import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CreateAdminAccountTestBlackBox {

    @Test
    void loginUsernameLengthTC0() {
        assertEquals("Username must be between 3-20 characters", Admin.create("", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC1() {
        assertEquals("Username must be between 3-20 characters", Admin.create("a", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC2() {
        assertEquals("Username must be between 3-20 characters", Admin.create("aa", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC8() {
        assertEquals("Account successfully created!", Admin.create("aaronjones", "abcdefgh"));
    }

    @Test
    void loginUsernameLengthTC21() {
        assertEquals("Username must be between 3-20 characters", Admin.create("", "abcdefgh"));
    }

    @Test
    void loginUsernameValidTC1() {
        assertEquals("Username has invalid characters", Admin.create("hi bob", "abcdefgh"));
    }

    @Test
    void loginPasswordLengthTC0() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", ""));
    }

    @Test
    void loginPasswordLengthTC1() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "a"));
    }

    @Test
    void loginPasswordLengthTC2() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "ab"));
    }

    @Test
    void loginPasswordLengthTC3() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "abc"));
    }

    @Test
    void loginPasswordLengthTC4() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "abcd"));
    }

    @Test
    void loginPasswordLengthTC5() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "abcde"));
    }

    @Test
    void loginPasswordLengthTC6() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "abcdef"));
    }

    @Test
    void loginPasswordLengthTC7() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "abcdefg"));
    }

    @Test
    void loginPasswordLengthTC8() {
        assertEquals("Account successfully created!", Admin.create("aaronjones", "abcdefgh"));
    }

    @Test
    void loginPasswordLengthTC101() {
        assertEquals("Password must be between 8-100 characters", Admin.create("aaronjones", "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567891"));
    }

}