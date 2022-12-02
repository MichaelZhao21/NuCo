import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SearchByNameTestBlackBox {
    @Test
    void searchByNameUsernameValidTC0() {
        assertEquals("Invalid name", SearchById.search(""));
    }

    @Test
    void searchByNameUsernameValidTC1() {
        assertEquals("Searching for a", SearchById.search("a"));
    }

    @Test
    void searchByNameUsernameValidTC2() {
        assertEquals("Searching for aa", SearchById.search("aa"));
    }

    @Test
    void searchByNameUsernameValidTC3() {
        assertEquals("Searching for aaa", SearchById.search("aaa"));
    }

    @Test
    void searchByNameUsernameValidTC4() {
        assertEquals("Searching for aaaa", SearchById.search("aaaa"));
    }
}