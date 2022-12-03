import Image from "next/image";
import React, { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import firebaseConfig from "../../config.json";
import { transform } from "typescript";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface quickDataProps {
  value: number;
  label: string;
}

interface foodDataProps {
  label: string;
  calories: number;
  category: string;
  date: string;
  index?: number;
  username: string;
}
const quickDataMock = [
  { value: 1500, label: "Calories Today" },
  { value: 2000, label: "Yesterday" },
  { value: 67, label: "Goal Completion" },
  { value: 3, label: "Diet Plans" },
];

const foodDataMock = [
  {
    label: "Breakfast",
    calories: 500,
    category: "Breakfast",
    date: "2021-10-10",
  },
  {
    label: "Lunch",
    calories: 500,
    category: "Lunch",
    date: "2021-10-10",
  },
  {
    label: "Dinner",
    calories: 500,
    category: "Dinner",
    date: "2021-10-10",
  },
];

const QuickData = ({ value, label }: quickData) => {
  return (
    <div
      id="user-subheader"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: "800" }}>{value}</div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const FoodHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "25px",
        backgroundColor: "transparent",
        fontSize: "25px",
      }}
    >
      {/* Name of food */}
      <div
        style={{
          width: "40%",
          textAlign: "left",
        }}
      >
        <div style={{ fontWeight: "700" }}>Food</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "60%",
          textAlign: "left",
        }}
      >
        {/* Calories */}
        <div>Calories</div>

        {/* Category */}
        <div>Category</div>

        {/* Date */}
        <div>Date</div>
      </div>
    </div>
  );
};
const FoodRow = ({
  label,
  calories,
  category,
  date,
  index,
  username,
}: foodDataProps) => {
  return (
    <div
      key={username + (Math.random() * 1000).toString()}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "25px",
        backgroundColor: index === 0 ? "#AFAFAF" : "#C9C9C9",
        fontSize: "25px",
      }}
    >
      {/* Name of food */}
      <div
        style={{
          width: "40%",
          textAlign: "left",
        }}
      >
        <div style={{ fontWeight: "700" }}>{label}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "60%",
          textAlign: "left",
        }}
      >
        {/* Calories */}
        <div>{calories}</div>

        {/* Category */}
        <div>{category}</div>

        {/* Date */}
        <div>{date}</div>
      </div>
    </div>
  );
};
// get username from url

export default function Home() {
  const [loading, setIsLoading] = useState(true);
  // state to hold user data
  const [userData, setUserData] = useState<any>({ username: "johndoe" });

  // state to hold food data
  const [foodData, setFoodData] = useState<foodDataProps[]>([]);

  // state to hold quick data
  const [quickData, setQuickData] = useState<any[]>([]);

  // state to hold input data
  const [inputData, setInputData] = useState({
    label: "",
    calories: 0,
    category: "",
    date: new Date().toISOString().slice(5, 10),
  });

  // get user data
  const getUserData = async () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");
    const userQuery = query(
      collection(db, "users"),
      where("username", "==", username)
    );
    const userQuerySnapshot = await getDocs(userQuery);
    userQuerySnapshot.forEach((doc) => {
      setUserData(doc.data());
    });
  };

  // get food data
  const getFoodData = async () => {
    const foodQuery = query(
      collection(db, "foodEntry"),
      where("username", "==", userData.username),
      orderBy("date", "desc")
    );
    const foodQuerySnapshot = await getDocs(foodQuery);
    let userFoodData: foodDataProps[] = [];
    foodQuerySnapshot.forEach((doc) => {
      const foodEntryDB: any = doc.data();
      const foodEntry: foodDataProps = foodEntryDB;
      userFoodData.push(foodEntry);
    });
    setFoodData(userFoodData);
  };

  // get quick data

  const getQuickData = async () => {
    const quickQuery = query(
      collection(db, "quickData"),
      where("username", "==", userData.username)
    );
    const quickQuerySnapshot = await getDocs(quickQuery);
    let index = 0;
    let quickDataArr: any = []
    quickQuerySnapshot.forEach((doc) => {
      const quickDataDB: any = doc.data().quickData;
    setQuickData(quickDataDB);
});
  };

  // add food data
  const addFoodData = async () => {
    const foodEntryObj = {
      label: inputData.label,
      calories: inputData.calories,
      category: inputData.category,
      date: inputData.date,
      username: userData.username,
    };
    const docRef = await addDoc(collection(db, "foodEntry"), foodEntryObj);
    if (docRef.id) {
      getFoodData();
    }
    console.log("Document written with ID: ", docRef.id);
  };

  useEffect(() => {
    getUserData().then(() => {
      getFoodData();
      getQuickData();
      setIsLoading(false);
    });
  }, [userData.username]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        marginBottom: "0%",
      }}
    >
      <Image
        src="/user-background.png"
        fill
        alt="background"
        style={{
          backgroundSize: "contain",
          zIndex: -100,
          backgroundRepeat: "repeat",
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
            paddingTop: "10%",
            paddingBottom: "0%",
          }}
        >
          <div
            style={{
              backgroundColor: "#D9D9D9",
              padding: "2%",
              width: "100%",
              height: "100%",
              borderRadius: "25px",
              color: "black",
            }}
          >
            <div
              id="header-row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "50%",
                  height: "200px",
                }}
              >
                <div
                  id="user-header"
                  style={{ fontSize: "30px", fontWeight: "800" }}
                >
                  {userData.username}'s Dashboard
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {quickData.map((data) => (
                    <QuickData value={data.value} label={data.label} />
                  ))}
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "30px",
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    height: "245px",
                    width: "400px",
                  }}
                >
                  <div
                    id="input-header"
                    style={{ textAlign: "center", marginBottom: "15px" }}
                  >
                    Food Entry
                  </div>

                  <input
                    placeholder="Name of food item"
                    onChange={(e) =>
                      setInputData({ ...inputData, label: e.target.value })
                    }
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "5px",
                    }}
                  />
                  <input
                    placeholder="Enter # of Calories"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        calories: parseInt(e.target.value),
                      })
                    }
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "5px",
                    }}
                  />
                  <input
                    placeholder="Enter a Category"
                    onChange={(e) =>
                      setInputData({ ...inputData, category: e.target.value })
                    }
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px",
                      marginBottom: "10px",
                    }}
                  />
                  <button
                    disabled={
                      inputData.label === "" ||
                      inputData.calories === 0 ||
                      inputData.category === ""
                    }
                    onClick={() => {
                      console.log("Clicked");
                      addFoodData();
                    }}
                    style={{
                      borderRadius: "15px",
                      textTransform: "uppercase",
                      maxHeight: "50px",
                      maxWidth: "200px",
                      alignSelf: "flex-end",
                      fontSize: "20px",
                      backgroundColor:
                        inputData.label === "" ||
                        inputData.calories === 0 ||
                        inputData.category === ""
                          ? "grey"
                          : "#FFA500",
                    }}
                  >
                    add
                  </button>
                </div>
              </div>
            </div>

            {/* Food Table Entry */}
            <div style={{ marginTop: "50px", maxHeight: "500px" }}>
              <FoodHeader />
              {foodData.map((data, index) => (
                <FoodRow
                  label={data.label}
                  calories={data.calories}
                  category={data.category}
                  date={data.date}
                  index={index % 2}
                  username={data.username}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
