import React from 'react'
import { Icon } from '@iconify/react'

const workingHours = [
	{ day: 'Saturday', time: '7AM–11PM' },
	{ day: 'Sunday', time: '7AM–11PM' },
	{ day: 'Monday', time: '7AM–11PM' },
	{ day: 'Tuesday', time: '7AM–11PM' },
	{ day: 'Wednesday', time: '7AM–11PM' },
	{ day: 'Thursday', time: '7AM–11PM' },
	{ day: 'Friday', time: '7AM–11PM' }
]

const contactInfo = [
	{
		id: 1,
		title: 'Address',
		icon: 'mdi:map-marker',
		description: '123 Main Street, City, Country'
	},
	{
		id: 2,
		title: 'Email',
		icon: 'mdi:email',
		description: 'info@jowcafe.com'
	},
	{
		id: 3,
		title: 'Phone',
		icon: 'mdi:phone',
		description: '+966 50 123 4567'
	}
]

export default function Contact() {
	return (
		<section id="contact" className="contact__info py-12 md:py-16 lg:py-20 px-4 md:px-6 min-h-screen">
			<div className="max-w-6xl mx-auto">
				{/* Section Title */}
				<h1
                className="text-3xl md:text-4xl text-center font-bold text-amber-200 mb-20 logo-font"
                data-aos="fade-up"
                data-aos-duration="1000"
                >
                Contact <span className="text-amber-500"> Us</span>
                </h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
					{/* Left Column - Working Hours */}
					<div className="bg-yellow-100 rounded-xl shadow-md p-6 md:p-8">
						<h3 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 labster">
							Working Hours
						</h3>
						<div className="space-y-3 md:space-y-4">
							{workingHours.map((item, idx) => (
								<div
									key={idx}
									className="flex justify-between items-center pb-3 md:pb-4 border-b border-black last:border-b-0"
								>
									<span className="text-gray-700 font-medium text-sm md:text-base">
										{item.day}
									</span>
									<span className="text-amber-600 font-semibold text-sm md:text-base">
										{item.time}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Contact Info */}
					<div className="space-y-4 md:space-y-6">
						{contactInfo.map((info) => (
							<div
								key={info.id}
								className="bg-white border rounded-xl shadow-md p-5 md:p-6 flex gap-4 items-start hover:shadow-lg transition duration-300"
                                data-aos="fade-up"
                                data-aos-duration="1000"
							>
								{/* Icon */}
								<div className="flex-shrink-0">
									<div className="w-12 h-12 md:w-14 md:h-14 bg-amber-100 rounded-full flex items-center justify-center">
										<Icon
											icon={info.icon}
											className="text-amber-600 text-xl md:text-2xl"
										/>
									</div>
								</div>

								{/* Text */}
								<div className="flex-1">
									<h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
										{info.title}
									</h4>
									<p className="text-sm md:text-base text-gray-600 leading-relaxed">
										{info.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
