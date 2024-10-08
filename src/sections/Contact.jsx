import  { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    alert('Message sent successfully!');
  };

  return (
    <section id="contacts" className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-4">
      <div className="container mx-auto px-6">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mt-3  ">Get in Touch</h2>
          <p className="text-lg  mt-2">
            Have a project or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold ">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold ">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full mt-2 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          
          <div className="w-full lg:w-1/2 text-black">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-sm mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@yourwebsite.com" className="text-blue-500 hover:underline">
                  amoghfadke@gmail.com
                </a>
              </p>
              <p className="text-sm  mb-4">
                <strong>Phone:</strong> (+91) 9637571166
              </p>
              <p className="text-sm  mb-4">
                <strong>Location:</strong> Ratnagiri, India 
              </p>

              <div className="mt-4 flex items-center justify-center">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:underline mb-2 mr-2 text-2xl"
                >
                   {<FaLinkedin/>}
                </a>
                <br />
                <a
                  href="https://github.com/amogh2531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:underline mb-2 text-2xl"
                >
                   {<FaGithub/>}
                </a>
                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


