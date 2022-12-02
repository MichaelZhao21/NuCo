import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.FirestoreOptions;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.IOException;

public class Database {
    // https://firebase.google.com/docs/firestore/quickstart#java_1

    private static Firestore db;

    private Database() {}

    public static void init() throws IOException {
        FirestoreOptions firestoreOptions =
                FirestoreOptions.getDefaultInstance().toBuilder()
                        .setProjectId("nuco-2022")
                        .setCredentials(GoogleCredentials.getApplicationDefault())
                        .build();
        Firestore db = firestoreOptions.getService();

    }

    public static Firestore getDb() {
        return db;
    }

    public static boolean deleteData() {
        return true;
    }

    public static boolean weightDelta() {
        return true;
    }

    public static boolean calorieDelta() {
        return true;
    }

    // Add more methods if you need to access stuff in the database
}
