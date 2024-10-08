import React, { useState } from "react";
import contactbg from "../assests/footer/Rectangle25.png";
import emailjs from "emailjs-com";

const Footer = () => {
  const  [name,setName] = useState('');
  const  [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [date, setdate] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [guests, setGuests] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_9wyobbz";
    const templateId = "template_y4kycio";
    const publicKey = "2sKCFTeUuGfgZ5HPJ";

    const templateParams = {
      from_name: name,
      from_email:email,
      from_phone:phone,
      input_date:date,
      special_request:specialRequest,
      no_of_guests:guests,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for contacting us. We will get back to you shortly.")
        console.log("Form submitted");
        console.log({ name, email, phone, date, specialRequest, guests });
      },
      (error) => {
        console.log("FAILED...", error);
      }
    )
  }

  return (
    <section id="footer">
    <footer className="relative bg-cover bg-center" style={{ backgroundImage: `url(${contactbg})` }}>
         <div className=" relative bg-black bg-opacity-0 p-10">

         <div className="container mx-auto text-white flex flex-col lg:flex-row justify-between">
        
          
          <div className="lg:w-1/2 mb-8 lg:mb-0 ">
            <h2 className="text-4xl mb-4 font-bold">Contact</h2>
            <p className="mb-4">
              We'd love to hear from you! Whether you have questions, need assistance, or want to make a reservation, feel free to get in touch.
            </p>
            <div className="mb-4 relative pb-[65%] h-0 overflow-hidden max-w-full">
            <iframe
                width="455"
                height="300"
                style={{ border: 0 }}
                src="https://maps.google.com/maps?width=455&height=300&hl=en&q=No%20:%2007%20Galle%20Rd,%20Ambalangoda+(Monello%20Pizza)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <p className="mb-2 p-2">
              <i className="fas fa-map-marker-alt"></i> Monello Pizza, No : 07 Galle Rd, Ambalangoda
            </p>
            <p className="mb-2 p-2">
              <i className="fas fa-phone-alt"></i> +94 762949339
            </p>
            <p className="mb-2 p-2">
              <i className="fas fa-envelope"></i> email@gmail.com
            </p>
            <p className="mb-2 p-2">
              <i className="fas fa-clock"></i> Opening Hours: <br />
              Monday to Friday: 11:00 AM - 10:00 PM <br />
              Saturday and Sunday: 9:00 AM - 11:00 PM
            </p>
          </div>
          
          
          <div className="lg:w-1/2 bg-gray-900 bg-opacity-75 p-6 rounded-lg">
            <h3 className="text-2xl mb-4 font-semibold">Please fill out the form below to make a reservation, and our team will get back to you shortly</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 text-black" id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 text-black" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone No</label>
                <input className="w-full px-3 py-2 text-black" id="phone" type="text" placeholder="Phone No" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="datetime">Date & Time</label>
                <input className="w-full px-3 py-2 text-black" id="datetime" type="datetime-local" value={date} onChange={(e) => setdate(e.target.value)} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="guests">Number Of Guests</label>
                <input className="w-full px-3 py-2 text-black" id="guests" type="number" placeholder="Number Of Guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="requests">Special Requests</label>
                <textarea className="w-full px-3 py-2 text-black" id="requests" placeholder="Special Requests" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)}></textarea>
              </div>
              <div className="text-right">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;