'use client'

import React, { useState } from 'react';

//const sendEmail = async ({ name, email, message }:any) => {
const sendEmail = async (formData:any) => {
  try{
      const res = await fetch('/api/contactForm', {
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const text = await res.text();
} catch(err){
      throw err
}


}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    // check if form has been filled out
    if(!formData.name || !formData.email || !formData.message){
        alert('Please fill out all fields');
        return;
    }
    // Perform form submission logic here
    try{
      const req = await sendEmail(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      alert('Message sent successfully')
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }catch(err){
      throw err
    }
    
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="px-5 pb-32" id="connect">
      <div>
        <p className="text-lg mb-2 hidden lg:block">
          Send a message and let&apos;s connect!<br/> 
        </p>
        <p className="text-lg lg:hidden font-bold ">
          Let&apos;s connect!<br/> 
        </p>
        <p className="mb-2 lg:hidden">
          Send me a message and I&apos;ll reply as soon as possible.<br/> 
        </p>
        <div className="">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-.5 w-full lg:w-11/12 border rounded-lg bg-slate-300 text-slate-800 focus:ring focus:ring-slate-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-.5 w-full lg:w-11/12 border rounded-lg bg-slate-300 text-slate-800 focus:ring focus:ring-slate-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-.5 w-full lg:w-11/12 border rounded-lg bg-slate-300 text-slate-800 focus:ring focus:ring-slate-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-1 bg-slate-300 text-slate-800 font-bold rounded-lg hover:bg-slate-500 transition duration-300 disabled:bg-gray-400"
                // disabled={!formData.name || !formData.email || !formData.message}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}