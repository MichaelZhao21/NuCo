import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SearchByIdTestUseCase {
    @Test
    void searchByIdTC1() {
        assertEquals("User account found", Admin.searchByName("billybob21"));
    }

    @Test
    void searchByIdTC2() {
        assertEquals("Username does not exist", Admin.searchByName("aaaaa123"));
    }

    @Test
    void searchByIdTC3() {
        assertEquals("Username must be between 3-20 characters", Admin.searchByName("12"));
    }
}