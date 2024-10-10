
const Footer = () => {
    return (
        <footer className="py-16 bg-gray-900">
            <div className="container mx-auto">
                <div className="grid gap-20 text-white text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:text-left">
                    {/* Brand Section */}
                    <div>
                        <a href="#" className="block text-2xl mb-4">Get Apoint, Inc.</a>
                        <p className="text-sm">&copy; 2024 Get Appoint. All rights reserved. Designed and Developed by CodeVector Technologies. codevectortechnologies@gmail.com
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <a href="mailto:someone@gmail.com" className="block text-2xl mb-4">someone@gmail.com</a>
                        <span>+92 348 8728285</span>
                    </div>

                    {/* Projects Links */}
                    <div>
                        <h3 className="text-xl mb-4">Projects</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Services</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Career</a>
                            </li>
                        </ul>
                    </div>

                    {/* News Links */}
                    <div>
                        <h3 className="text-xl mb-4">News</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Events</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Contact</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Legals</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl mb-4">Social Links</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:text-[#80CED7] transition">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
