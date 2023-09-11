import React, { useState } from 'react';
import { logindata } from '../../../../data/logindata';
import { homedata } from '../../../../data/homedata';

function Index() {
  const [formData, setFormData] = useState({...logindata[0],...homedata[0]});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // กำหนดชื่อไฟล์ที่ต้องการอัพเดตและบันทึก
      const loginDataFilename = 'logindata';
      const homeDataFilename = 'homedata';

      // อัพเดตและบันทึกข้อมูล logindata
      await updateData(loginDataFilename, formData);

      // อัพเดตและบันทึกข้อมูล homedata
      await updateData(homeDataFilename, formData);

      console.log('Data updated successfully');
      alert("Data updated successfully");
    } catch (error) {
      console.log('Failed to update data:', error);
      alert('Failed to update data:', error);
    }
  };

  const updateData = async (filename, formData) => {
    try {
      const response = await fetch('/api/updateData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData, filename }),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
      <label>heading1TH (TH):
          <input type="text" name="heading1TH" value={formData.heading1TH} onChange={handleChange}/>
        </label>
        <br />
      <label>heading1EN (EN):
          <input type="text" name="heading1EN" value={formData.heading1EN} onChange={handleChange}/>
        </label>
        <br />
        <label>heading2TH (TH):
          <input type="text" name="heading2TH" value={formData.heading2TH} onChange={handleChange}/>
        </label>
        <br />
      <label>heading2EN (EN):
          <input type="text" name="heading2EN" value={formData.heading2EN} onChange={handleChange}/>
        </label>
        <br />
        <label> Detail 1.1 (TH):
          <input type="text" name="detail1_1TH" value={formData.detail1_1TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 1.1 (EN):
          <input type="text" name="detail1_1EN" value={formData.detail1_1EN} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 1.2 (TH):
          <input type="text" name="detail1_2TH" value={formData.detail1_2TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 1.2 (EN):
          <input type="text" name="detail1_2EN" value={formData.detail1_2EN} onChange={handleChange}/>
        </label>
        <br />
        <label> Detail 2.1 (TH):
          <input type="text" name="detail2_1TH" value={formData.detail2_1TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 2.1 (EN):
          <input type="text" name="detail2_1EN" value={formData.detail2_1EN} onChange={handleChange}/>
        </label>
        <br />
        <label> Detail 2.2 (TH):
          <input type="text" name="detail2_2TH" value={formData.detail2_2TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 2.2 (EN):
          <input type="text" name="detail2_2EN" value={formData.detail2_2EN} onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">บันทึก</button>
      </form>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <label>Title (TH):
          <input type="text" name="TitleTH" value={formData.titleTH} onChange={handleChange}/>
        </label>
        <br />
        <label>Title (EN):
          <input type="text" name="TitleEN" value={formData.titleEN} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 1 (TH):
          <input type="text" name="detail1TH" value={formData.detail1TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 1 (EN):
          <input type="text" name="detail1EN" value={formData.detail1EN} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 2 (TH):
          <input type="text" name="detail2TH" value={formData.detail2TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 2 (EN):
          <input type="text" name="detail2EN" value={formData.detail2EN} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 3 (TH):
          <input type="text" name="detail3TH" value={formData.detail3TH} onChange={handleChange}/>
        </label>
        <br />
        <label>Detail 3 (EN):
          <input type="text" name="detail3EN" value={formData.detail3EN} onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">บันทึก</button>
      </form>
    </div>
  );
}

export default Index;
