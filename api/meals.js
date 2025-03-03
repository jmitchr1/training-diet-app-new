export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Chicken Salad", calories: 350 },
    { id: 2, name: "Steak and Veggies", calories: 500 }
  ]);
}
