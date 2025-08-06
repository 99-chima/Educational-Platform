import React, { createContext, useEffect, useState } from "react";
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const savedCard = localStorage.getItem("card");
    if (savedCard) {
      setCard(JSON.parse(savedCard));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const addtoCard = (course) => {
    setCard((prevCard) => {
      const existingItem = prevCard.find((item) => item.id === course.id);
      if (existingItem) {
        return prevCard.map((item) =>
          item.id === course.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCard, { ...course, quantity: 1 }];
    });
  };

  const removeFromCard = (courseId) => {
    setCard((prevCard) => prevCard.filter((item) => item.id !== courseId));
  };

  const updateQuantity = (courseId, newQuantity) => {
    if (newQuantity < 1) return;
    setCard((prevCard) =>
      prevCard.map((item) =>
        item.id === courseId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItems = card.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = card.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CardContext.Provider
      value={{
        card,
        addtoCard,
        removeFromCard,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};