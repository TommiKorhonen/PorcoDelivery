import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-5">
            <div className="grid md:grid-cols-2 grid-cols-1  sm:gap-52 gap-10 p-5">
                {/* left */}
                <div className="flex md:justify-end justify-center gap-10  flex-wrap">
                    <div className="flex flex-col gap-1">
                        <h3 className="h3Footer">About us</h3>
                        <span className="spanFooter">How it works</span>
                        <span className="spanFooter">Testimonials</span>
                        <span className="spanFooter">Careers</span>
                        <span className="spanFooter">Investors</span>
                        <span className="spanFooter">Terms <br /> of Service</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="h3Footer">Contact Us</h3>
                        <span className="spanFooter">Contact</span>
                        <span className="spanFooter">Support</span>
                        <span className="spanFooter">Destinations</span>
                        <span className="spanFooter">Sponsorships</span>
                    </div>
                </div>
                {/* right */}
                <div className="flex md:justify-start gap-10 justify-center flex-wrap">
                    <div className="flex flex-col gap-1">
                        <h3 className="h3Footer">Videos</h3>
                        <span className="spanFooter">Submit Video</span>
                        <span className="spanFooter">Ambassadors</span>
                        <span className="spanFooter">Agency</span>
                        <span className="spanFooter">Influencer</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="h3Footer">Social Media</h3>
                        <span className="spanFooter">Instagram</span>
                        <span className="spanFooter">Facebook</span>
                        <span className="spanFooter">Youtube</span>
                        <span className="spanFooter">Twitter</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col border-t border-gray-500 mt-4">
                <span className=" text-gray-600 text-sm mt-4">?? 2022 Mockup Site</span>
                <span className="flex items-center  transform translate-x-[-40px] sm:translate-x-0 sm:self-start"><Logo /></span>

                <span className="text-center mt-2 text-gray-600 text-sm">Developed By Tommi Korhonen</span>
            </div>
        </footer>
    )
}

export default Footer