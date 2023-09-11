import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { formData, filename } = req.body;

    // กำหนดชื่อโฟลเดอร์และตำแหน่งของไฟล์ที่จะบันทึก
    const directoryPath = `./data/${filename}`;
    const filePath = `${directoryPath}/index.js`;

    // อัพเดตและบันทึกข้อมูล
    const updatedData = [formData];
    const updatedDataString = `export const ${filename} = ${JSON.stringify(
      updatedData,
      null,
      4
    )};`;

    try {
      // สร้างโฟลเดอร์หากยังไม่มี
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      fs.writeFileSync(filePath, updatedDataString, 'utf8');
      res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
