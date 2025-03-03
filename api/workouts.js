export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Running", duration: 30 },
    { id: 2, name: "Weight Lifting", duration: 45 }
  ]);
}
