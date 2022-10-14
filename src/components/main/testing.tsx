import React, { useEffect } from "react";

function Testing() {
  async function finestFoodOutlet(city, votes) {
    let result;
    try {
      const response = await fetch(
        "https://jsonmock.hackerrank.com/api/food_outlets?page=1",
        { method: "GET" }
      );
      const data = await response.json();
      if (city !== undefined) {
        result = data.data.filter((resto) => {
          return resto.city === city;
        });
      }

      if (result !== undefined) {
        result = result.reduce((prev, current) => {
          if (
            prev.user_rating.average_rating ===
            current.user_rating.average_rating
          ) {
            return prev.user_rating.votes > current.user_rating.votes && (current.user_rating.votes  > votes)
              ? prev
              : current;
          } else {
            return prev.user_rating.average_rating >
              current.user_rating.average_rating
              ? prev
              : current;
          }
        });
      }
      console.log(data.data);
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    finestFoodOutlet("Seattle", 1000);
  });
  return <div></div>;
}

export default Testing;
