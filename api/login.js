const fs = require('fs');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    let data;
    try {
      data = JSON.parse(fs.readFileSync('./grades.json', 'utf-8'));
    } catch (error) {
      console.error('Error reading grades.json:', error);
      return res.status(500).json({ message: 'Server error' });
    }

    if (data[username] && data[username].password === password) {
      return res.status(200).json({
        message: 'Login successful',
        grade: data[username].grade,
      });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
};
