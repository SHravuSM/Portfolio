import React from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    ExternalLink,
    Code,
    Database,
    Server,
    User,
    Briefcase,
    GraduationCap,
    Award,
    Send,
    Menu,
    X,
    ChevronDown,
    Star
} from 'lucide-react';
import { STORE } from '../context/AppContext';

export default function Contact() {
    const { handleSubmit, setFormData, formData, isSubmitting, submitStatus } = STORE();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Let's discuss your next project or explore opportunities to work together
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-black mb-6">Let's Connect</h3>
                        <p className="mb-8 text-black leading-relaxed">
                            I'm always interested in new opportunities, whether it's a full-time position,
                            freelance project, or just a chat about web development. <a href="tel:+919019206067" className='text-blue-500'>Feel-free</a> to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center text-md">
                                <Mail className="text-slate-600 mr-4" size={24} />
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <a href="mailto:shravankumarmuchchandi@gmail.com" className=" text-gray-600 hover:text-blue-600">
                                        shravankumarmuchchandi@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Phone className="text-slate-600 mr-4" size={24} />
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <a href="tel:+919019206067" className="text-gray-600 hover:text-blue-600">
                                        +91 9019206067
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <MapPin className="text-slate-600 mr-4" size={24} />
                                <div>
                                    <p className="font-semibold text-gray-900">Location</p>
                                    <p className="text-gray-600">BTM Layout, Bengaluru, Karnataka</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex space-x-4 mt-8">
                            <a href="https://www.linkedin.com/in/shravusm" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Linkedin className="text-blue-600" size={24} />
                            </a>
                            <a href="https://github.com/SHravuSM" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <Github className="text-gray-900" size={24} />
                            </a>
                        </div> */}
                    </div>

                    {/* <div className="bg-white p-8 rounded-xl shadow-sm">
                        <form onSubmit={() => handleSubmit()}>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="Project Inquiry / Job Opportunity / etc."
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} className="ml-2" />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="mt-4 text-green-600 text-center">Message sent successfully! I'll get back to you soon.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again or contact me directly.</p>
                            )}
                        </form>
                    </div> */}
                    <div className=" p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-800 mb-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600"
                                    placeholder="Project Inquiry / Job Opportunity / etc."
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-800 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 bg-gray-800 text-white text-sm hover:bg-black transition-all focus:outline-none disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={14} className="ml-2" />
                                    </>
                                )}
                            </button>
                            {submitStatus && <p className="mt-4 text-sm text-green-600 text-center">Message sent successfully.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}