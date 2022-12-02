import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SearchByNameTestUseCase {
    @Test
    void searchByNameTC1() {
        assertEquals("Searching for Billy Bob", Admin.searchByName("Billy Bob"));
    }

    @Test
    void searchByNameTC2() {
        assertEquals("Invalid name", Admin.searchByName(""));
    }
}