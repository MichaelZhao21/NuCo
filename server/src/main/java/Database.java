public class Database {
    // https://firebase.google.com/docs/firestore/quickstart#java_1

    public static int db;

    private Database() {}

    public static void init() {
        // Init using Firebase
    }

    public static int getDb() {
        return db;
    }

    // Add more methods if you need to access stuff in the database
}
