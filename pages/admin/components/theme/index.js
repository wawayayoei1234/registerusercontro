import { Box } from '@mui/material';
import React from 'react';
import { SketchPicker } from 'react-color';
import { themedata } from '../../../../data/themedata';

class Component extends React.Component {
  state = {
    background: themedata[0].primary,
    displayPicker: false,
    selectedKey: '',
  };

  handleClick = (key) => {
    this.setState((prevState) => ({
      displayPicker: !prevState.displayPicker,
      selectedKey: key,
    }));
  };

  handleClose = () => {
    this.setState({ displayPicker: false, selectedKey: '' });
  };

  handleChangeComplete = (color) => {
    this.setState((prevState) => ({
      background: color.hex,
      // อัพเดตค่าสีใน themedata.js ที่อยู่ในโฟลเดอร์ data
      themedata: themedata.map((item) => ({
        ...item,
        [prevState.selectedKey]: color.hex,
      })),
    }));

    // อัพเดตค่าใน input ด้วยค่าสีใหม่ที่เลือก
    themedata[0][this.state.selectedKey] = color.hex;
  };

  handleSave = () => {
    // อัพเดตค่าสีใน themedata.js ที่อยู่ในโฟลเดอร์ data
    fetch('/api/updateData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: themedata[0],
        filename: 'themedata',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        alert("Data updated successfully");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Data updated failed",error);

      });
  };

  render() {
    return (
      <>
      <h1>Theme Color</h1>
        {Object.keys(themedata[0]).map((key) => (
          <Box sx={{ display: 'flex', position: 'relative' }} key={key}>
            <label>{key}:
            <input
              type="text"
              value={themedata[0][key]}
              onChange={(e) => {
                themedata[0][key] = e.target.value;
                this.setState({ background: themedata[0].primary });
              }}
            />
            </label>
            <Box
              sx={{mx:0.2,
                width: '20px',
                height: '20px',
                background: themedata[0][key],
              }}
              onClick={() => this.handleClick(key)}
            />
            {this.state.displayPicker && this.state.selectedKey === key && (
              <div style={{ position: 'absolute', zIndex: '1', top: '100%', left: '0' }}>
                <SketchPicker
                  color={this.state.background}
                  onChangeComplete={this.handleChangeComplete}
                  onClose={this.handleClose}
                />
              </div>
            )}
          </Box>
        ))}
        <button onClick={this.handleSave}>บันทึก</button>
      </>
    );
  }
}

export default Component;
