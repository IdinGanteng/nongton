import React from 'react';
import {useState} from 'react';

const SendMessage = () => {
    const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
   
      let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
      window.open(url);
    }
  };
  return (
    <form>
      <div className='form-group'>
        <input 
            type="text" 
            className='form-control' 
            placeholder='Nomor Whatsapp'
            error={numberEmptyError}
            label='Mobile Number'
            name='mobileNumber'
            value={mobileNumber}
            onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <textarea 
            className='form-control' 
            rows={3}
            name='message'
            value={message}
            onChange={onChange}
            required
            error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
            helperText={
              !(message.length > CHARACTER_LIMIT - 1)
                ? `${message.length}/${CHARACTER_LIMIT}`
                : "Max length exceeded"
            }
        ></textarea>
      </div>
      <button type='button' className='btn btn-success' onClick={onSubmit}>Send</button>
    </form>
  )
}

export default SendMessage