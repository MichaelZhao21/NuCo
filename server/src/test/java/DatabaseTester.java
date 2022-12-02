import com.google.cloud.firestore.Firestore;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class DatabaseTester {
    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void testDeleteDate() {
        Firestore myDB1;
        assertEquals(true, Database.deleteData());

        Firestore myDB2;
        assertEquals(false, Database.deleteData());
    }

    @Test
    void testStuff() {
        Firestore myDB;
        assertEquals(true, Database.weightDelta());
        assertEquals(true, Database.calorieDelta());
    }
}
