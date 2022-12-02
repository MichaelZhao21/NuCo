import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SearchByIdTestBlackBox {
    @Test
    void loginUsernameLengthTC0() {
        assertEquals("Username must be between 3-20 characters", Admin.searchById(""));
    }

    @Test
    void loginUsernameLengthTC1() {
        assertEquals("Username must be between 3-20 characters", Admin.searchById("a"));
    }

    @Test
    void loginUsernameLengthTC2() {
        assertEquals("Username must be between 3-20 characters", Admin.searchById("aa"));
    }

    @Test
    void loginUsernameLengthTC8() {
        assertEquals("User account found", Admin.searchById("aaronjones"));
    }

    @Test
    void loginUsernameLengthTC21() {
        assertEquals("Username must be between 3-20 characters", Admin.searchById(""));
    }

    @Test
    void loginUsernameValidTC1() {
        assertEquals("Username has invalid characters", Admin.searchById("hi bob"));
    }
}