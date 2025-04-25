'use client';

import { useEffect, useState } from "react"

export const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success') {
        setIsSuccessMessageVisible(true);
        setTimeout(() => {
            setIsSuccessMessageVisible(false);
        }, 3000);
    }
  }, [status]);

  useEffect(() => {
    if (status === 'error') {
        setIsErrorMessageVisible(true);
        setTimeout(() => {
            setIsErrorMessageVisible(false);
        }, 3000);
    }
  }, [status]);

  return (
    <>

      <form className="bg-[#589dd1] font-bold mx-auto w-[350px] md:w-[500px] text-center rounded-md py-6 px-4" onSubmit={handleSubmit}>
        
        <h1 className="text-4xl mb-2">Contact Us</h1>
        
        <hr />
        
        <div className="mt-4">
          <p className="text-start text-2xl"><span className="bg-[#0357a1] rounded-full py-1 px-2">1</span> User Info</p>

          <input 
            type="text" 
            name="name"
            id="name" 
            placeholder="Enter Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="block py-2 px-4 mt-6 rounded-md focus:outline-none text-black bg-[#bedff8e0] w-full" />
          
          <input 
            type="text" 
            id="phone" 
            name="phone"
            min={12}
            placeholder="Enter Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required 
            className="block py-2 px-4 mt-6 rounded-md focus:outline-none text-black bg-[#bedff8e0] w-full" />

          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter Your E-mail" 
            value={formData.email}
            onChange={handleChange}
            required
            className="block py-2 px-4 mt-6 rounded-md focus:outline-none text-black bg-[#bedff8e0] w-full" />
        </div>
        
        <div className="mt-6">
          <p className="text-start text-2xl"><span className="bg-[#0357a1] rounded-full py-1 px-2">2</span> Message</p>

          <textarea 
          placeholder="Type your message here..."
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          required
          className="block py-2 px-4 mt-6 rounded-md focus:outline-none text-black bg-[#bedff8e0] w-full" />
        </div>

        <button type="submit" id="message" className="py-3 px-6 mt-6 rounded-md text-white bg-[#0357a1] hover:bg-[#0357a1d2] w-fit">Send The Message</button>

      </form>

      {isSuccessMessageVisible && <div className="flex items-center justify-center pt-2"><p className="text-[#06a022] bg-green-300 rounded-md text-center p-2 w-fit">Message sent successfully!</p></div>}
      {isErrorMessageVisible && <div className="flex items-center justify-center pt-2 animate-none duration-300 ease-in-out"><p className="text-red-700 bg-red-300 rounded-md text-center p-2 w-fit">There was an error sending your message.</p></div>}

    </>
)
}

